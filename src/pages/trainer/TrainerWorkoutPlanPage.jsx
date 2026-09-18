import { Save } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../api/http'
import { ErrorState, LoadingState, StatusBadge } from '../../components/common/States'
import { WorkoutPlanEditor } from '../../components/workout/WorkoutPlanEditor'
import { useApiData } from '../../hooks/useApiData'
import { enumLabel } from '../../utils/format'
import styles from './Trainer.module.css'

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
    <header className="page-header"><div><p className="eyebrow">PROGRAM DESIGN</p><h1>COMPLETE WORKOUT SPLIT</h1><p>Revision {plan.revision} · Cycle {initial.cycle.cycleNumber} · {plan.days.length} workout days. Every day remains recordable.</p></div><button className="button button-primary" onClick={save} disabled={saving}><Save size={18} /> {saving ? 'Saving…' : 'Save new revision'}</button></header>
    {status && <div className="alert alert-success">{status}</div>}{error && <div className="alert alert-error">{error}</div>}
    <section className="card"><p className="eyebrow">RECORD FOR CLIENT</p><h2>Current cycle</h2><p className="muted">Status is informational. Select any configured day, including one already completed this cycle.</p><div className={styles.recordDayGrid}>{plan.days.map((day) => { const cycleDay = initial.cycle.days.find((item) => item.dayNumber === day.dayNumber); return <div className={styles.recordDay} key={day.dayNumber}><div><strong>Day {day.dayNumber} · {day.name || 'Workout'}</strong><StatusBadge tone={cycleDay?.status === 'COMPLETED' ? 'success' : cycleDay?.status === 'NEXT_SUGGESTED' ? 'warning' : 'neutral'}>{enumLabel(cycleDay?.status)}</StatusBadge></div><Link className="button button-secondary" to={`/trainer/clients/${clientId}/workout/${day.dayNumber}/record`}>{cycleDay?.status === 'COMPLETED' ? `Record Day ${day.dayNumber} again` : `Record Day ${day.dayNumber}`}</Link></div> })}</div></section>
    <WorkoutPlanEditor plan={plan} onChange={setPlan} />
  </div>
}
