# Architecture

Frontend: pages → `lib/queries.ts` → `lib/api.ts` → `/api` development proxy.
Backend: controller → service → repository → PostgreSQL (the last two steps are pending integration).

`entity` models database rows. `model` contains response DTOs. `repository` contains Spring Data JDBC interfaces. `service` owns business rules. `controller` owns HTTP mapping. `AppConfig` defines the initial security boundary.

The current `RestaurantService` and `MenuItemService` read a small immutable fixture catalog. No mutation endpoint is exposed. Cart/session API methods are prepared in the frontend but intentionally not bound to active forms.

Use the authenticated principal to identify customers, never a browser-supplied customer ID. Money fields retain the course Double/number shape for compatibility; revisit decimal arithmetic and rounding before implementing financial calculations.
