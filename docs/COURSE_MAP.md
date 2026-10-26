# Course alignment

Source: user-provided [September 2026 Project Course Archive 1 (QuickBite)](https://docs.google.com/document/d/13vFzACVU0mnM_p6aP1TtQk0NgTvO6PKp-1T1usabVd0/edit), read 2026-10-26.

| Lesson | Course structure retained | Scaffold status |
| --- | --- | --- |
| 2 | OnlineOrder, `com.laioffer.onlineorder`, Java 21, Gradle Groovy, Spring Boot 4+ | Boot project |
| 7–9 | PostgreSQL; customers, restaurants, menu_items, carts, order_items; entity/repository packages | Schema and repository types |
| 11–13 | model/service/controller layers and menu/cart paths | Menu fixture service; cart integration pending |
| 14 | Session-based Spring Security; form login | Protected routes reject anonymous users; actual authentication pending |
| 21 | Vite, React/TypeScript, Router, Tailwind, UI component ownership | Simplified UI and course page paths |
| 22 | API layer, TanStack Query, session state, snake_case responses | API client/queries ready; session and mutations pending |
| 24/26 | RDS + ECR; earlier App Runner section and later ECS Express update | Deployment notes only |

Compatibility decisions:
- Use Spring Boot 4.0.5, the version in the document's Initializr example.
- Retain the required Java package rather than renaming it.
- PostgreSQL is authoritative for this scaffold; the early dependency example's MySQL driver does not match later database lessons.
- Do not copy the destructive DROP TABLE initialization script or demonstration credentials.
- Keep CSRF enabled; add a CSRF bootstrap endpoint when implementing frontend session authentication.
- The extracted API example contains a malformed fetch URL; this implementation explicitly joins the API base and endpoint.
- Vite emits `dist/`; deployment notes use this directory, not the document's older `build/` wording.
- The course checkout clears a cart; it is not a payment gateway or durable order-history implementation.
- UI shells are authored for this scaffold; the full course UI, shadcn/Radix components and multi-tab session logic remain future work.
