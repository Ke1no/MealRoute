# Deployment roadmap — not deployed

1. Complete and validate local persistence/session/cart behavior.
2. Build the Vite frontend (`frontend/dist`). Configure same-origin backend serving or an explicit reverse proxy including SPA fallback.
3. Build and test a container locally. Supply credentials at runtime.
4. Provision PostgreSQL on RDS, push the image to ECR, then choose one hosting path.
5. The course includes an earlier App Runner walkthrough and a later ECS Express Mode update. Follow the current class direction; this scaffold does not create either service.
6. Verify health, session cookies, CSRF, TLS and database connectivity; document cleanup/cost controls.
