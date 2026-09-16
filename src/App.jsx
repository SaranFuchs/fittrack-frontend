import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import { ProtectedRoute } from './auth/ProtectedRoute'
import { RoleRoute } from './auth/RoleRoute'
import { AppLayout } from './layouts/AppLayout'
import { AccountPage } from './pages/AccountPage'
import { LoginPage } from './pages/LoginPage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { AddClientPage } from './pages/trainer/AddClientPage'
import { ClientDetailPage } from './pages/trainer/ClientDetailPage'
import { ClientsPage } from './pages/trainer/ClientsPage'
import { TrainerDashboard } from './pages/trainer/TrainerDashboard'
import { TrainerWorkoutPlanPage } from './pages/trainer/TrainerWorkoutPlanPage'
import './styles/global.css'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<RoleRoute role="trainer" />}>
              <Route path="/trainer" element={<AppLayout role="trainer" />}>
                <Route index element={<TrainerDashboard />} />
                <Route path="clients" element={<ClientsPage />} />
                <Route path="clients/new" element={<AddClientPage />} />
                <Route path="clients/:clientId" element={<ClientDetailPage />} />
                <Route path="clients/:clientId/workout-plan" element={<TrainerWorkoutPlanPage />} />
                <Route path="clients/:clientId/workout/:dayNumber/record" element={<PlaceholderPage title="Record workout" />} />
                <Route path="clients/:clientId/history" element={<PlaceholderPage title="Workout history" />} />
                <Route path="clients/:clientId/nutrition" element={<PlaceholderPage title="Nutrition log" />} />
                <Route path="account" element={<AccountPage />} />
              </Route>
            </Route>
            <Route element={<RoleRoute role="client" />}>
              <Route path="/client" element={<AppLayout role="client" />}>
                <Route index element={<PlaceholderPage title="Client dashboard" />} />
                <Route path="workout" element={<PlaceholderPage title="Workout split" />} />
                <Route path="workout/:dayNumber/record" element={<PlaceholderPage title="Record workout" />} />
                <Route path="history" element={<PlaceholderPage title="Workout history" />} />
                <Route path="nutrition" element={<PlaceholderPage title="Nutrition" />} />
                <Route path="account" element={<AccountPage />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
