import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { LoadingState } from '../components/common/States'

export function ProtectedRoute() {
  const { user, loading } = useAuth()
  const location = useLocation()
  if (loading) return <LoadingState label="Checking your session…" fullPage />
  if (!user) return <Navigate to="/login" replace state={{ from: location }} />
  return <Outlet />
}
