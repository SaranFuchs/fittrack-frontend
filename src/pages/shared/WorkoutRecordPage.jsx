import { Minus, Plus, Save } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../api/http'
import { ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { todayString } from '../../utils/format'
import styles from './Workout.module.css'

export function WorkoutRecordPage({ role }) {
  const { clientId, dayNumber } = useParams()
  const planPath = role === 'trainer' ? `/clients/${clientId}/workout-plan` : '/me/workout-plan'
  const { data, loading, error, reload } = useApiData(planPath)
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  const day = data.plan.days.find((item) => item.dayNumber === Number(dayNumber))
  if (!day) return <ErrorState message="Workout day not found." />
  const status = data.cycle.days.find((item) => item.dayNumber === day.dayNumber)?.status
  if (status === 'COMPLETED') return <ErrorState message="This workout day is already complete in the current cycle." />
  return <WorkoutRecordForm role={role} clientId={clientId} day={day} />
}

function WorkoutRecordForm({ role, clientId, day }) {
  const navigate = useNavigate()
  const [completedDate, setCompletedDate] = useState(todayString())
  const [results, setResults] = useState(() => day.exercises.map((exercise) => ({
    planExerciseId: exercise._id,
    sets: Array.from({ length: exercise.targetSets || 0 }, () => ({ reps: exercise.targetReps || 0, weightKg: exercise.suggestedWeightKg || 0 })),
    notes: '',
  })))
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const updateResult = (exerciseIndex, patch) => setResults((current) => current.map((result, index) => index === exerciseIndex ? { ...result, ...patch } : result))
  const updateSet = (exerciseIndex, setIndex, patch) => updateResult(exerciseIndex, { sets: results[exerciseIndex].sets.map((set, index) => index === setIndex ? { ...set, ...patch } : set) })

  const submit = async () => {
    if (!window.confirm('Save this completed workout? You cannot edit or delete it after it is saved.')) return
    setSaving(true); setError('')
    const path = role === 'trainer' ? `/clients/${clientId}/workouts` : '/me/workouts'
    try {
      await api(path, { method: 'POST', body: JSON.stringify({ workoutDayNumber: day.dayNumber, completedDate, exercises: results }) })
      navigate(role === 'trainer' ? `/trainer/clients/${clientId}/history` : '/client/history', { replace: true, state: { success: 'Workout saved permanently.' } })
    } catch (requestError) { setError(requestError.message) }
    finally { setSaving(false) }
  }

  return <div className="page-stack"><header className="page-header"><div><p className="eyebrow">CYCLE WORKOUT</p><h1>DAY {day.dayNumber} · {day.name || 'WORKOUT'}</h1><p>Record what actually happened. Missing targets or fewer sets are accepted.</p></div><label className={styles.date}>Completion date<input type="date" max={todayString()} value={completedDate} onChange={(event) => setCompletedDate(event.target.value)} /></label></header>{error && <div className="alert alert-error">{error}</div>}
    <div className={styles.entries}>{day.exercises.map((exercise, exerciseIndex) => <article className={styles.exerciseEntry} key={exercise._id}><header><div><p className="eyebrow">EXERCISE {exerciseIndex + 1}</p><h2>{exercise.name}</h2></div><div className={styles.target}><strong>{exercise.targetSets && exercise.targetReps ? `${exercise.targetSets} × ${exercise.targetReps}` : 'Unmeasured'}</strong><span>{exercise.suggestedWeightKg != null ? `${exercise.suggestedWeightKg} kg suggested` : 'No weight target'}</span></div></header>{exercise.notes && <p className={styles.planNote}><strong>Plan note:</strong> {exercise.notes}</p>}
      <div className={styles.sets}>{results[exerciseIndex].sets.map((set, setIndex) => <div className={styles.setRow} key={setIndex}><strong>SET {setIndex + 1}</strong><label>Reps<input inputMode="numeric" type="number" min="0" value={set.reps} onChange={(event) => updateSet(exerciseIndex, setIndex, { reps: Number(event.target.value) })} /></label><label>Weight (kg)<input inputMode="decimal" type="number" min="0" step="0.5" value={set.weightKg} onChange={(event) => updateSet(exerciseIndex, setIndex, { weightKg: Number(event.target.value) })} /></label><button aria-label="Remove set" type="button" onClick={() => updateResult(exerciseIndex, { sets: results[exerciseIndex].sets.filter((_, index) => index !== setIndex) })}><Minus size={18} /></button></div>)}</div>
      <button type="button" className="button button-secondary" onClick={() => updateResult(exerciseIndex, { sets: [...results[exerciseIndex].sets, { reps: exercise.targetReps || 0, weightKg: exercise.suggestedWeightKg || 0 }] })}><Plus size={17} /> Add set</button><label className={styles.notes}>Result notes<textarea value={results[exerciseIndex].notes} onChange={(event) => updateResult(exerciseIndex, { notes: event.target.value })} placeholder="How did this exercise feel?" /></label>
    </article>)}</div>
    <div className={styles.finalSave}><div><strong>Final save</strong><span>This completed workout cannot be edited or deleted.</span></div><button className="button button-primary" onClick={submit} disabled={saving}><Save size={18} /> {saving ? 'Saving…' : 'Save completed workout'}</button></div>
  </div>
}
