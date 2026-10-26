# Course API contract

Backend paths below do not contain `/api`. The Vite development proxy removes that prefix.

| Method | Path | Current behavior / target |
| --- | --- | --- |
| GET | /health | Scaffold health response |
| GET | /restaurants/menu | 200 synthetic restaurants with menu_items |
| GET | /restaurant/{restaurantId}/menu | 200 synthetic menu; 404 unknown restaurant |
| POST | /signup | Pending; email, password, first_name, last_name |
| POST | /login | Pending; form-urlencoded username/password; future session cookie |
| POST | /logout | Pending |
| GET | /cart | Anonymous requests return 401; service pending |
| POST | /cart | Pending; JSON {"menu_id": 101} |
| POST | /cart/checkout | Pending; course semantics clear the cart |

JSON naming is snake_case, including menu_items, image_url and total_price. The current backend has no login users and no completed auth or cart endpoints. Mutating anonymous requests may return 403 from CSRF before authentication.
