# Next steps: follow the course implementation sequence

1. **Merge your existing QuickBite backend first.** This repository is a new scaffold; your course project source has not been imported. Preserve existing login, signup, logout and cart code, and compare files individually instead of replacing entire directories.
2. **Database and repositories (Lessons 7–9).** Start PostgreSQL, replace the JDBC dependency with the Boot starter, configure environment variables, and integrate entities and repositories with Spring. Do not run database recreation scripts against an existing database.
3. **Services and controllers (Lessons 11–13).** Implement RestaurantService and MenuItemService using the database, then implement CartService. Verify the two menu endpoints first.
4. **Authentication (Lesson 14).** Implement CustomerService, password hashing, UserDetailsService, /signup and form-based /login. Add a CSRF token bootstrap flow and verify that /cart returns 401 after logout. No default login account exists.
5. **Pages (Lesson 21).** Route placeholders are included. Add filtering, UI components, login and signup forms, and the cart page.
6. **Integration (Lesson 22).** Connect SessionProvider, route guards, Query mutations and cache invalidation. Handle 401 responses and clear private caches when switching accounts. Do not use a localStorage flag as a substitute for a server-side session.
7. **Deployment.** Run `npm run build` to generate the frontend dist directory. Validate the backend image locally before choosing the AWS deployment approach described in the course.

## Completion checklist
- [ ] Signup, login, refresh and logout remain consistent with the server session
- [ ] Users cannot access each other's carts
- [ ] Calculate checkout totals from server-side prices and decide whether persistent orders are required
- [ ] Test request validation, error handling, CSRF protection and monetary precision
- [ ] Update the README to reflect actual progress and add screenshots of the working demo
