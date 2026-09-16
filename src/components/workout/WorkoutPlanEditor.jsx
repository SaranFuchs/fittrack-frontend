/* eslint-disable react-refresh/only-export-components */
import { ArrowDown, ArrowUp, Plus, Trash2 } from 'lucide-react'
import styles from './WorkoutPlanEditor.module.css'

export const blankExercise = () => ({ name: '', targetSets: 3, targetReps: 10, suggestedWeightKg: 0, notes: '' })
export const blankDay = (dayNumber) => ({ dayNumber, name: '', exercises: [blankExercise()] })

export function WorkoutPlanEditor({ plan, onChange }) {
  const setDayCount = (count) => {
    const days = Array.from({ length: count }, (_, index) => plan.days[index] || blankDay(index + 1))
      .map((day, index) => ({ ...day, dayNumber: index + 1 }))
    onChange({ ...plan, days })
  }

  const updateDay = (dayIndex, patch) => onChange({ ...plan, days: plan.days.map((day, index) => index === dayIndex ? { ...day, ...patch } : day) })
  const updateExercise = (dayIndex, exerciseIndex, patch) => {
    const exercises = plan.days[dayIndex].exercises.map((exercise, index) => index === exerciseIndex ? { ...exercise, ...patch } : exercise)
    updateDay(dayIndex, { exercises })
  }
  const removeExercise = (dayIndex, exerciseIndex) => updateDay(dayIndex, { exercises: plan.days[dayIndex].exercises.filter((_, index) => index !== exerciseIndex) })
  const moveExercise = (dayIndex, exerciseIndex, direction) => {
    const exercises = [...plan.days[dayIndex].exercises]
    const target = exerciseIndex + direction
    if (target < 0 || target >= exercises.length) return
    ;[exercises[exerciseIndex], exercises[target]] = [exercises[target], exercises[exerciseIndex]]
    updateDay(dayIndex, { exercises })
  }

  return <div className={styles.editor}>
    <label className={styles.dayCount}>Number of workout days<select value={plan.days.length} onChange={(event) => setDayCount(Number(event.target.value))}>{[1, 2, 3, 4, 5, 6, 7].map((number) => <option key={number}>{number}</option>)}</select></label>
    {plan.days.map((day, dayIndex) => <section className={styles.day} key={day.dayNumber}>
      <header><div><p className="eyebrow">DAY {day.dayNumber}</p><h3>{day.name || `Workout day ${day.dayNumber}`}</h3></div><label>Day name<input value={day.name} maxLength="100" placeholder="e.g. Lower Body" onChange={(event) => updateDay(dayIndex, { name: event.target.value })} /></label></header>
      <div className={styles.exercises}>
        {day.exercises.map((exercise, exerciseIndex) => <article className={styles.exercise} key={exercise._id || exerciseIndex}>
          <div className={styles.exerciseHead}><strong>Exercise {exerciseIndex + 1}</strong><div><button type="button" aria-label="Move exercise up" onClick={() => moveExercise(dayIndex, exerciseIndex, -1)} disabled={exerciseIndex === 0}><ArrowUp size={17} /></button><button type="button" aria-label="Move exercise down" onClick={() => moveExercise(dayIndex, exerciseIndex, 1)} disabled={exerciseIndex === day.exercises.length - 1}><ArrowDown size={17} /></button><button type="button" aria-label="Remove exercise" onClick={() => removeExercise(dayIndex, exerciseIndex)} disabled={day.exercises.length === 1}><Trash2 size={17} /></button></div></div>
          <label className={styles.name}>Exercise name<input required value={exercise.name} maxLength="120" onChange={(event) => updateExercise(dayIndex, exerciseIndex, { name: event.target.value })} /></label>
          <div className={styles.targets}><label>Target sets<input type="number" min="1" max="20" value={exercise.targetSets ?? ''} onChange={(event) => updateExercise(dayIndex, exerciseIndex, { targetSets: event.target.value === '' ? null : Number(event.target.value) })} /></label><label>Target reps<input type="number" min="1" max="100" value={exercise.targetReps ?? ''} onChange={(event) => updateExercise(dayIndex, exerciseIndex, { targetReps: event.target.value === '' ? null : Number(event.target.value) })} /></label><label>Suggested kg<input type="number" min="0" max="1000" step="0.5" value={exercise.suggestedWeightKg ?? ''} onChange={(event) => updateExercise(dayIndex, exerciseIndex, { suggestedWeightKg: event.target.value === '' ? null : Number(event.target.value) })} /></label></div>
          <label>Notes<textarea value={exercise.notes} maxLength="500" placeholder="Technique cues or alternatives" onChange={(event) => updateExercise(dayIndex, exerciseIndex, { notes: event.target.value })} /></label>
        </article>)}
      </div>
      <button type="button" className="button button-secondary" onClick={() => updateDay(dayIndex, { exercises: [...day.exercises, blankExercise()] })}><Plus size={17} /> Add exercise</button>
    </section>)}
  </div>
}
