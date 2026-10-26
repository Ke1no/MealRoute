import type { Restaurant, MenuItem, Cart, Credentials, SignupInput } from './types'
export class ApiError extends Error {
  constructor(message: string, public status: number) { super(message); this.name = 'ApiError' }
}
const base = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/$/, '')
async function request<T>(path: string, options: RequestInit = {}, json = true): Promise<T> {
  const headers = new Headers(options.headers)
  headers.set('Accept', 'application/json')
  // Session integration will obtain this cookie from a server CSRF bootstrap endpoint.
  const csrf = document.cookie.split('; ').find(c => c.startsWith('XSRF-TOKEN='))?.slice(11)
  if (csrf && options.method && options.method !== 'GET') headers.set('X-XSRF-TOKEN', decodeURIComponent(csrf))
  const response = await fetch(`${base}${path}`, { ...options, headers, credentials: 'include', signal: options.signal ?? AbortSignal.timeout(15000) })
  if (!response.ok) throw new ApiError(response.status === 401 ? 'Sign in required; authentication integration is pending.' : `Request failed (${response.status})`, response.status)
  if (response.redirected && new URL(response.url).pathname.endsWith('/login')) throw new ApiError('Sign in required.', 401)
  if (!json) return undefined as T
  if (!response.headers.get('content-type')?.includes('application/json')) throw new ApiError('Expected a JSON API response.', 502)
  return response.json() as Promise<T>
}
export const api = {
  getRestaurants: () => request<Restaurant[]>('/restaurants/menu'),
  getMenus: (id: number) => request<MenuItem[]>(`/restaurant/${id}/menu`),
  getCart: () => request<Cart>('/cart'),
  // Prepared contracts only: these backend operations are not implemented yet.
  login: (input: Credentials) => request<void>('/login', { method: 'POST', body: new URLSearchParams({ username: input.username, password: input.password }) }, false),
  signup: (input: SignupInput) => request<void>('/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input) }, false),
  logout: () => request<void>('/logout', { method: 'POST' }, false),
  addItemToCart: (id: number) => request<void>('/cart', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ menu_id: id }) }, false),
  checkout: () => request<void>('/cart/checkout', { method: 'POST' }, false),
}
