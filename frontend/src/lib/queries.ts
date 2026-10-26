import { useQuery } from '@tanstack/react-query'
import { api, ApiError } from './api'
const retry = (count: number, error: Error) => !(error instanceof ApiError && error.status < 500) && count < 1
export function useRestaurants() { return useQuery({ queryKey: ['restaurants'], queryFn: api.getRestaurants, staleTime: 300000, retry }) }
export function useMenu(id: number) { return useQuery({ queryKey: ['menu', id], queryFn: () => api.getMenus(id), enabled: Number.isSafeInteger(id) && id > 0, retry }) }
