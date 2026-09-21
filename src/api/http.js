const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/backend/api'
export const TOKEN_KEY = 'fittrack_token'

export class ApiError extends Error {
  constructor(message, { status, code, fields } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
    this.fields = fields || {}
  }
}

export async function api(path, options = {}) {
  const token = localStorage.getItem(TOKEN_KEY)
  const headers = new Headers(options.headers)
  if (token) headers.set('Authorization', `Bearer ${token}`)
  if (options.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json')

  let response
  try {
    response = await fetch(`${API_BASE_URL}${path}`, { ...options, headers })
  } catch {
    throw new ApiError('The server is unavailable. Check that the backend is running.')
  }

  if (response.status === 204) return null
  const payload = await response.json().catch(() => ({}))
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem(TOKEN_KEY)
      window.dispatchEvent(new CustomEvent('fittrack:unauthorized', { detail: payload.error?.message }))
    }
    throw new ApiError(payload.error?.message || 'Request failed.', {
      status: response.status,
      code: payload.error?.code,
      fields: payload.error?.fields,
    })
  }
  return payload.data
}
