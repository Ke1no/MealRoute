# QuickBite

Course-aligned full-stack food-ordering project — **scaffold / work in progress**.

Java 21 · Spring Boot 4 · Gradle · PostgreSQL · React · TypeScript · Vite · React Router · TanStack Query · Tailwind CSS

## Current status

| Area | Included | Still to implement |
| --- | --- | --- |
| Backend | Boot entry point, course packages, public restaurant/menu API with synthetic fixtures, protected-route 401 behavior | JDBC wiring, signup/session login, cart mutations and checkout |
| Data | Five course entities, five repository interfaces, non-destructive schema | Database-backed services, initialization policy and seed data |
| Frontend | Discovery/menu screens, course route shells, API client and Query provider | Session provider, form submission, live cart and order flow |
| Delivery | Local setup and validation workflow | Docker application image and AWS deployment |

The fixture menu is demo data. Authentication, payment, persistence and deployment are **not** represented as finished. This is a fresh scaffold derived from the course structure, not an import of your existing working QuickBite project.

## Run locally

Prerequisites: JDK 21, Node 22.12+ (or a newer supported LTS), npm. The Gradle wrapper pins Gradle 9.3.0.

```sh
cd backend
./gradlew bootRun
```

In another terminal:

```sh
cd frontend
npm ci
npm run dev
```

Open http://localhost:5173. Vite forwards `/api/*` to `http://localhost:8080/*` and strips `/api`, matching the course backend paths. The starter uses synthetic menu data and does not require a database to boot.

On Windows PowerShell, use `.\gradlew.bat` instead of `./gradlew`.

## Database preparation (optional, not wired into the starter)

Copy the root `.env.example` to `.env`, choose a local database password, then run `docker compose up -d`. PostgreSQL is bound to loopback. The schema initializes a new volume only and never drops tables. The starter backend intentionally uses the `spring-data-jdbc` library without the Boot JDBC starter; swap to `spring-boot-starter-data-jdbc`, configure the datasource, and replace fixture services when implementing Lesson 9–11 persistence.

## Validate

```sh
cd frontend
npm run typecheck
npm run build
cd ../backend
./gradlew test bootJar
cd ..
python3 scripts/smoke_test.py
```

The smoke test checks server startup, snake_case menus, an anonymous cart returning 401, and an unknown restaurant returning 404. No cloud resources are provisioned by this repository.

## Continue development

Start with [中文开发顺序](docs/NEXT_STEPS.zh-CN.md), [course mapping](docs/COURSE_MAP.md), [API contract](docs/API.md) and [architecture](docs/ARCHITECTURE.md).
Preserve your existing authentication code when merging it later. No license is granted for the original course material, and the source document itself is not included.
