import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import { ProtectedRoute } from './auth/ProtectedRoute'
import { RoleRoute } from './auth/RoleRoute'
import { NumberInputWheelGuard } from './components/common/NumberInputWheelGuard'
import { AppLayout } from './layouts/AppLayout'
import { TrainerClientLayout } from './layouts/TrainerClientLayout'
import { AccountPage } from './pages/AccountPage'
import { LoginPage } from './pages/LoginPage'
import { ClientDashboard } from './pages/client/ClientDashboard'
import { WorkoutSplitPage } from './pages/client/WorkoutSplitPage'
import { NutritionPage } from './pages/shared/NutritionPage'
import { WorkoutHistoryPage } from './pages/shared/WorkoutHistoryPage'
import { WorkoutRecordPage } from './pages/shared/WorkoutRecordPage'
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
        <NumberInputWheelGuard />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<RoleRoute role="trainer" />}>
              <Route path="/trainer" element={<AppLayout role="trainer" />}>
                <Route index element={<TrainerDashboard />} />
                <Route path="clients" element={<ClientsPage />} />
                <Route path="clients/new" element={<AddClientPage />} />
                <Route path="clients/:clientId" element={<TrainerClientLayout />}>
                  <Route index element={<ClientDetailPage />} />
                  <Route path="workout-plan" element={<TrainerWorkoutPlanPage />} />
                  <Route path="workout/:dayNumber/record" element={<WorkoutRecordPage role="trainer" />} />
                  <Route path="history" element={<WorkoutHistoryPage role="trainer" />} />
                  <Route path="nutrition" element={<NutritionPage role="trainer" />} />
                </Route>
                <Route path="account" element={<AccountPage />} />
              </Route>
            </Route>
            <Route element={<RoleRoute role="client" />}>
              <Route path="/client" element={<AppLayout role="client" />}>
                <Route index element={<ClientDashboard />} />
                <Route path="workout" element={<WorkoutSplitPage />} />
                <Route path="workout/:dayNumber/record" element={<WorkoutRecordPage role="client" />} />
                <Route path="history" element={<WorkoutHistoryPage role="client" />} />
                <Route path="nutrition" element={<NutritionPage role="client" />} />
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
