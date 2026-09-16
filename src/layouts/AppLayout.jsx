import { Dumbbell, History, Home, LogOut, Salad, Settings, Users } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import styles from './AppLayout.module.css'

const trainerNav = [
  { to: '/trainer', label: 'Dashboard', icon: Home, end: true },
  { to: '/trainer/clients', label: 'Clients', icon: Users },
  { to: '/trainer/account', label: 'Account', icon: Settings },
]

const clientNav = [
  { to: '/client', label: 'Home', icon: Home, end: true },
  { to: '/client/workout', label: 'Workout', icon: Dumbbell },
  { to: '/client/nutrition', label: 'Nutrition', icon: Salad },
  { to: '/client/history', label: 'History', icon: History },
  { to: '/client/account', label: 'Account', icon: Settings },
]

export function AppLayout({ role }) {
  const { user, logout } = useAuth()
  const items = role === 'trainer' ? trainerNav : clientNav
  return (
    <div className={`${styles.shell} ${role === 'client' ? styles.clientShell : ''}`}>
      <aside className={styles.sidebar}>
        <NavLink to={role === 'trainer' ? '/trainer' : '/client'} className={styles.brand}>
          <span className={styles.brandMark}>FT</span>
          <span>FITTRACK<small>COACH</small></span>
        </NavLink>
        <div className={styles.profile}><span>{user?.name?.slice(0, 1)}</span><div><strong>{user?.name}</strong><small>{role}</small></div></div>
        <nav aria-label="Main navigation">
          {items.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => isActive ? styles.active : ''}>
              <Icon size={20} aria-hidden="true" /><span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <button className={styles.logout} onClick={logout}><LogOut size={20} /> <span>Log out</span></button>
      </aside>
      <header className={styles.mobileHeader}><strong>FITTRACK <span>COACH</span></strong><small>{user?.name}</small></header>
      <main className={styles.content}><Outlet /></main>
      {role === 'client' && <nav className={styles.bottomNav} aria-label="Mobile navigation">
        {items.map(({ to, label, icon: Icon, end }) => <NavLink key={to} to={to} end={end}><Icon size={20} /><span>{label}</span></NavLink>)}
      </nav>}
    </div>
  )
}
