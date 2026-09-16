import { ChevronDown, ChevronUp } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { EmptyState, ErrorState, LoadingState, StatusBadge } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { enumLabel, formatDate } from '../../utils/format'
import styles from './Workout.module.css'

export function WorkoutHistoryPage({ role }) {
  const { clientId } = useParams()
  const location = useLocation()
  const path = role === 'trainer' ? `/clients/${clientId}/workouts` : '/me/workouts'
  const { data, loading, error, reload } = useApiData(path)
  const [exerciseId, setExerciseId] = useState('')
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  const workouts = data.items
  return <HistoryContent workouts={workouts} exerciseId={exerciseId} setExerciseId={setExerciseId} success={location.state?.success} />
}

function HistoryContent({ workouts, exerciseId, setExerciseId, success }) {
  const [open, setOpen] = useState('')
  const exercises = useMemo(() => {
    const map = new Map()
    workouts.forEach((workout) => workout.exercises.forEach((exercise) => map.set(exercise.planExerciseId, exercise.exerciseName)))
    return [...map.entries()]
  }, [workouts])
  const filtered = exerciseId ? workouts.filter((workout) => workout.exercises.some((exercise) => exercise.planExerciseId === exerciseId)) : workouts
  return <div className="page-stack"><header className="page-header"><div><p className="eyebrow">PERMANENT RECORD</p><h1>WORKOUT HISTORY</h1><p>Actual dates, sets, repetitions, weights, and stored target snapshots.</p></div><label className={styles.filter}>Exercise history<select value={exerciseId} onChange={(event) => setExerciseId(event.target.value)}><option value="">All exercises</option>{exercises.map(([id, name]) => <option value={id} key={id}>{name}</option>)}</select></label></header>{success && <div className="alert alert-success">{success}</div>}
    {!filtered.length ? <EmptyState title="No completed workouts yet" message="Completed workouts will appear here permanently." /> : <div className={styles.historyList}>{filtered.map((workout) => <article className={styles.historyCard} key={workout._id}><button className={styles.historySummary} onClick={() => setOpen(open === workout._id ? '' : workout._id)}><div><strong>{formatDate(workout.completedDate)}</strong><span>Day {workout.workoutDayNumber} · {workout.workoutDayName || 'Workout'} · Cycle {workout.cycleNumber}</span></div><div><span>Revision {workout.planRevision}</span><span>Recorded by {workout.recordedByUserId?.role === 'trainer' ? 'Trainer' : 'Client'}</span></div>{open === workout._id ? <ChevronUp /> : <ChevronDown />}</button>{open === workout._id && <div className={styles.historyDetail}>{workout.exercises.filter((exercise) => !exerciseId || exercise.planExerciseId === exerciseId).map((exercise) => <section key={exercise.planExerciseId}><header><div><h3>{exercise.exerciseName}</h3><span>Target: {exercise.targetSnapshot.sets && exercise.targetSnapshot.reps ? `${exercise.targetSnapshot.sets} × ${exercise.targetSnapshot.reps}` : 'Unmeasured'}{exercise.targetSnapshot.suggestedWeightKg != null ? ` at ${exercise.targetSnapshot.suggestedWeightKg} kg` : ''}</span></div><StatusBadge tone={exercise.progressionStatus === 'READY_TO_PROGRESS' ? 'success' : exercise.progressionStatus === 'MAINTAIN' ? 'warning' : 'neutral'}>{enumLabel(exercise.progressionStatus)}</StatusBadge></header>{exercise.sets.length ? <div className={styles.setHistory}>{exercise.sets.map((set) => <span key={set.setNumber}><strong>Set {set.setNumber}</strong>{set.reps} reps · {set.weightKg} kg</span>)}</div> : <p className="muted">No measured sets.</p>}{exercise.notes && <p><strong>Result note:</strong> {exercise.notes}</p>}</section>)}</div>}</article>)}</div>}
  </div>
}
