import { Save } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../api/http'
import { ErrorState, LoadingState } from '../../components/common/States'
import { WorkoutPlanEditor } from '../../components/workout/WorkoutPlanEditor'
import { useApiData } from '../../hooks/useApiData'

export function TrainerWorkoutPlanPage() {
  const { clientId } = useParams()
  const { data, loading, error, reload } = useApiData(`/clients/${clientId}/workout-plan`, [clientId])
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  return <PlanContent initial={data} clientId={clientId} reload={reload} />
}

function PlanContent({ initial, clientId, reload }) {
  const [plan, setPlan] = useState(initial.plan)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const save = async () => {
    if (!window.confirm('Save this workout plan? A new revision will start a fresh workout cycle.')) return
    setSaving(true); setError('')
    try {
      const result = await api(`/clients/${clientId}/workout-plan`, { method: 'PUT', body: JSON.stringify({ days: plan.days }) })
      setPlan(result.plan); setStatus(`Plan revision ${result.plan.revision} saved. A fresh cycle has started.`); reload()
    } catch (requestError) { setError(requestError.message) }
    finally { setSaving(false) }
  }
  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">PROGRAM DESIGN</p><h1>WORKOUT PLAN</h1><p>Revision {plan.revision} · Cycle {initial.cycle.cycleNumber} · {plan.days.length} workout days</p></div><button className="button button-primary" onClick={save} disabled={saving}><Save size={18} /> {saving ? 'Saving…' : 'Save new revision'}</button></header>
    {status && <div className="alert alert-success">{status}</div>}{error && <div className="alert alert-error">{error}</div>}
    <section className="card"><p className="eyebrow">RECORD FOR CLIENT</p><h2>Current cycle</h2><div className="profile-actions">{initial.cycle.days.map((day) => day.status === 'COMPLETED' ? <span className="button button-ghost" key={day.dayNumber}>Day {day.dayNumber} · Complete</span> : <Link className="button button-secondary" key={day.dayNumber} to={`/trainer/clients/${clientId}/workout/${day.dayNumber}/record`}>Record Day {day.dayNumber}</Link>)}</div></section>
    <WorkoutPlanEditor plan={plan} onChange={setPlan} />
  </div>
}
