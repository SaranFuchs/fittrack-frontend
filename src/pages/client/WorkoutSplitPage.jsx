import { Check, ChevronRight, Circle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ErrorState, LoadingState, StatusBadge } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import styles from './Client.module.css'

const badgeTone = { COMPLETED: 'success', NEXT_SUGGESTED: 'warning', NOT_COMPLETED: 'neutral' }
const label = (value) => value.replaceAll('_', ' ')

export function WorkoutSplitPage() {
  const { data, loading, error, reload } = useApiData('/me/workout-plan')
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">YOUR PROGRAM</p><h1>WORKOUT SPLIT</h1><p>Cycle {data.cycle.cycleNumber} · {data.cycle.completedCount} of {data.cycle.totalDays} days complete. You may record any incomplete day.</p></div></header>
    <div className={styles.workoutGrid}>{data.plan.days.map((day) => {
      const status = data.cycle.days.find((item) => item.dayNumber === day.dayNumber).status
      return <article className={`${styles.workoutDay} ${status === 'NEXT_SUGGESTED' ? styles.next : ''}`} key={day.dayNumber}>
        <header><div><p className="eyebrow">DAY {day.dayNumber}</p><h2>{day.name || `Workout Day ${day.dayNumber}`}</h2></div><StatusBadge tone={badgeTone[status]}>{label(status)}</StatusBadge></header>
        <div className={styles.exercisePreview}>{day.exercises.map((exercise) => <div key={exercise._id}><div><strong>{exercise.name}</strong><span>{exercise.targetSets && exercise.targetReps ? `${exercise.targetSets} × ${exercise.targetReps}` : 'Unmeasured'}{exercise.suggestedWeightKg != null ? ` · ${exercise.suggestedWeightKg} kg` : ''}</span></div><StatusBadge tone={data.latestProgression[exercise._id] === 'READY_TO_PROGRESS' ? 'success' : 'neutral'}>{label(data.latestProgression[exercise._id] || 'NOT_APPLICABLE')}</StatusBadge></div>)}</div>
        {status === 'COMPLETED'
          ? <Link to="/client/history" className={styles.completeAction}><Check size={19} /> Completed · View in history</Link>
          : <Link className="button button-primary button-wide" to={`/client/workout/${day.dayNumber}/record`}>{status === 'NEXT_SUGGESTED' ? 'Start suggested workout' : 'Record this workout'} <ChevronRight size={18} /></Link>}
      </article>
    })}</div>
    <div className={styles.cycleNote}><Circle size={18} /><p><strong>How cycles work:</strong> when every configured day is complete, a fresh cycle opens and Day 1 becomes the next suggestion. Day numbers are not weekdays.</p></div>
  </div>
}
