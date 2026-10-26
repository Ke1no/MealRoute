"""Run after ./gradlew test bootJar; requires Python 3 and Java 21 on PATH."""
import json
import os
from pathlib import Path
import shutil
import socket
import subprocess
import tempfile
import time
import urllib.error
import urllib.request

root = Path(__file__).resolve().parents[1]
jars = list((root / 'backend/build/libs').glob('*.jar'))
jars = [jar for jar in jars if not jar.name.endswith('-plain.jar')]
if len(jars) != 1:
    raise SystemExit('Build exactly one executable JAR with ./gradlew clean test bootJar first.')
java = str(Path(os.environ['JAVA_HOME']) / 'bin/java') if os.environ.get('JAVA_HOME') else shutil.which('java')
if not java:
    raise SystemExit('Java 21 is required.')
with socket.socket() as listener:
    listener.bind(('127.0.0.1', 0))
    port = listener.getsockname()[1]
base = f'http://127.0.0.1:{port}'
opener = urllib.request.build_opener(urllib.request.ProxyHandler({}))
with tempfile.TemporaryFile(mode='w+') as log:
    server = subprocess.Popen([java, '-jar', str(jars[0]), f'--server.port={port}'], stdout=log, stderr=log)
    try:
        for attempt in range(100):
            try:
                with opener.open(base + '/health', timeout=1) as response:
                    assert json.load(response)['mode'] == 'scaffold-fixtures'
                break
            except (urllib.error.URLError, ConnectionError):
                if server.poll() is not None:
                    raise RuntimeError('Server exited before becoming ready')
                time.sleep(.25)
        else:
            raise RuntimeError('Server startup timed out')
        with opener.open(base + '/restaurants/menu', timeout=5) as response:
            restaurants = json.load(response)
            assert len(restaurants) == 2 and 'menu_items' in restaurants[0] and 'image_url' in restaurants[0]
        with opener.open(base + '/restaurant/1/menu', timeout=5) as response:
            assert len(json.load(response)) == 2
        for path, expected in [('/cart', 401), ('/restaurant/999/menu', 404)]:
            try:
                opener.open(base + path, timeout=5)
            except urllib.error.HTTPError as error:
                assert error.code == expected, (path, error.code, expected)
            else:
                raise AssertionError(f'{path} must return {expected}')
        print('PASS: startup, public menus, snake_case JSON, cart 401, missing restaurant 404')
    except Exception:
        log.seek(0)
        print(log.read())
        raise
    finally:
        server.terminate()
        try:
            server.wait(timeout=10)
        except subprocess.TimeoutExpired:
            server.kill()
            server.wait()
