import { Plus, Search } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EmptyState, ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { ClientCard } from './TrainerDashboard'
import styles from './Trainer.module.css'

export function ClientsPage() {
  const { data: clients, loading, error, reload } = useApiData('/clients')
  const [query, setQuery] = useState('')
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  const filtered = clients.filter((client) => `${client.name} ${client.email}`.toLowerCase().includes(query.toLowerCase()))
  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">CLIENT MANAGEMENT</p><h1>YOUR CLIENTS</h1><p>Open a profile to manage training, nutrition targets, and history.</p></div><Link className="button button-primary" to="/trainer/clients/new"><Plus size={18} /> Add client</Link></header>
    <label className={styles.search}><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search clients" aria-label="Search clients" /></label>
    {!clients.length ? <EmptyState title="No clients yet" message="Add a client to create their first plan." /> : !filtered.length ? <EmptyState title="No match" message="Try a different name or email." /> : <div className={styles.clientGrid}>{filtered.map((client) => <ClientCard client={client} key={client.id} />)}</div>}
  </div>
}
