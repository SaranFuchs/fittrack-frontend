import { Dumbbell, History, Salad, UserRound } from 'lucide-react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { ErrorState, LoadingState } from '../components/common/States'
import { useApiData } from '../hooks/useApiData'
import styles from './TrainerClientLayout.module.css'

export function TrainerClientLayout() {
  const { clientId } = useParams()
  const location = useLocation()
  const { data, loading, error, reload } = useApiData(`/clients/${clientId}`)
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />

  const tabs = [
    { label: 'Profile', to: `/trainer/clients/${clientId}`, icon: UserRound, active: location.pathname === `/trainer/clients/${clientId}` },
    { label: 'Workout Plan', to: `/trainer/clients/${clientId}/workout-plan`, icon: Dumbbell, active: location.pathname.includes('/workout-plan') || location.pathname.includes('/workout/') },
    { label: 'History', to: `/trainer/clients/${clientId}/history`, icon: History, active: location.pathname.includes('/history') },
    { label: 'Nutrition', to: `/trainer/clients/${clientId}/nutrition`, icon: Salad, active: location.pathname.includes('/nutrition') },
  ]

  return <div className="page-stack">
    <header className={styles.clientHeader}>
      <div className={styles.avatar}>{data.client.name.slice(0, 1)}</div>
      <div><p className="eyebrow">SELECTED CLIENT</p><h1>{data.client.name}</h1><span>{data.client.email}</span></div>
    </header>
    <nav className={styles.tabs} aria-label={`${data.client.name} sections`}>
      {tabs.map(({ label, to, icon: Icon, active }) => <NavLink key={to} to={to} end={label === 'Profile'} className={active ? styles.active : ''} aria-current={active ? 'page' : undefined}><Icon size={18} /> {label}</NavLink>)}
    </nav>
    <Outlet context={{ clientData: data, reloadClient: reload }} />
  </div>
}
