import { ArrowRight, Plus, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'
import { EmptyState, ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import styles from './Trainer.module.css'

export function TrainerDashboard() {
  const { user } = useAuth()
  const { data: clients, loading, error, reload } = useApiData('/clients')
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">TRAINER DASHBOARD</p><h1>WELCOME, {user.name.split(' ')[0]}</h1><p>Keep every client moving forward.</p></div><Link className="button button-primary" to="/trainer/clients/new"><Plus size={18} /> Add client</Link></header>
    <div className="metric-grid"><div className="metric"><Users color="var(--color-primary)" /><strong>{clients.length}</strong><span>Assigned clients</span></div><div className="metric"><strong>{clients.filter((client) => client.latestWorkoutDate).length}</strong><span>Clients with workout history</span></div></div>
    <section><div className={styles.sectionHead}><div><p className="eyebrow">CLIENT ROSTER</p><h2>Quick access</h2></div><Link to="/trainer/clients">View all <ArrowRight size={17} /></Link></div>
      {!clients.length ? <EmptyState title="No clients yet" message="Add a client to create a workout and nutrition plan." action={<Link className="button button-primary" to="/trainer/clients/new">Add client</Link>} /> : <div className={styles.clientGrid}>{clients.slice(0, 6).map((client) => <ClientCard client={client} key={client.id} />)}</div>}
    </section>
  </div>
}

export function ClientCard({ client }) {
  return <Link className={styles.clientCard} to={`/trainer/clients/${client.id}`}><div className={styles.avatar}>{client.name.slice(0, 1)}</div><div className={styles.clientInfo}><strong>{client.name}</strong><span>{client.email}</span><small>{client.fitnessGoal?.replace('_', ' ') || 'Goal not set'} · {client.latestWorkoutDate ? `Last workout ${client.latestWorkoutDate}` : 'No workouts yet'}</small></div><ArrowRight size={20} /></Link>
}
