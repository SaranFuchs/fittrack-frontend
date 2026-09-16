import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthContext'

export function RoleRoute({ role }) {
  const { user } = useAuth()
  if (user?.role !== role) return <Navigate to={user?.role === 'trainer' ? '/trainer' : '/client'} replace />
  return <Outlet />
}
