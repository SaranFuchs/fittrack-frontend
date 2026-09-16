/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { api, TOKEN_KEY } from '../api/http'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [sessionMessage, setSessionMessage] = useState('')

  const refreshCurrentUser = useCallback(async () => {
    if (!localStorage.getItem(TOKEN_KEY)) {
      setUser(null)
      setLoading(false)
      return null
    }
    try {
      const current = await api('/auth/me')
      setUser(current)
      return current
    } catch {
      setUser(null)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const startup = window.setTimeout(refreshCurrentUser, 0)
    const handleUnauthorized = (event) => {
      setUser(null)
      setSessionMessage(event.detail || 'Your session expired. Please log in again.')
    }
    window.addEventListener('fittrack:unauthorized', handleUnauthorized)
    return () => {
      window.clearTimeout(startup)
      window.removeEventListener('fittrack:unauthorized', handleUnauthorized)
    }
  }, [refreshCurrentUser])

  const login = useCallback(async (credentials) => {
    const result = await api('/auth/login', { method: 'POST', body: JSON.stringify(credentials) })
    localStorage.setItem(TOKEN_KEY, result.token)
    setSessionMessage('')
    setUser(result.user)
    return result.user
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY)
    setUser(null)
  }, [])

  const value = useMemo(() => ({ user, loading, login, logout, refreshCurrentUser, sessionMessage, setSessionMessage }), [user, loading, login, logout, refreshCurrentUser, sessionMessage])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
