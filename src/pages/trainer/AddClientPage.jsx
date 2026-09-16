import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../api/http'
import { WorkoutPlanEditor, blankDay } from '../../components/workout/WorkoutPlanEditor'
import styles from './Trainer.module.css'

const steps = ['Account', 'Fitness profile', 'Nutrition targets', 'Workout plan', 'Review']
const initial = {
  account: { name: '', email: '', password: '', confirmPassword: '' },
  fitnessProfile: { age: 30, heightCm: 175, weightKg: 75, biologicalSex: 'male', activityLevel: 'moderate', goal: 'maintain' },
  nutritionTarget: { calories: 2400, proteinGrams: 150 },
  workoutPlan: { days: [blankDay(1), blankDay(2), blankDay(3)] },
}

export function AddClientPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initial)
  const [estimates, setEstimates] = useState(null)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const setSection = (section, patch) => setForm((current) => ({ ...current, [section]: { ...current[section], ...patch } }))

  const validateStep = () => {
    if (step === 0 && (!form.account.name || !form.account.email || form.account.password.length < 8)) return 'Complete the account fields. Password must be at least 8 characters.'
    if (step === 0 && form.account.password !== form.account.confirmPassword) return 'Passwords do not match.'
    if (step === 3 && form.workoutPlan.days.some((day) => !day.exercises.length || day.exercises.some((exercise) => !exercise.name))) return 'Every workout day needs at least one named exercise.'
    return ''
  }

  const next = async () => {
    const issue = validateStep(); setError(issue)
    if (issue) return
    if (step === 1) {
      try {
        const { age, heightCm, weightKg, biologicalSex, activityLevel } = form.fitnessProfile
        const inputs = { age, heightCm, weightKg, biologicalSex, activityLevel }
        setEstimates(await api('/calculations/tdee', { method: 'POST', body: JSON.stringify(inputs) }))
      } catch (requestError) { setError(requestError.message); return }
    }
    setStep((current) => Math.min(4, current + 1))
  }

  const create = async () => {
    setSubmitting(true); setError('')
    try {
      const payload = { ...form, account: { name: form.account.name, email: form.account.email, password: form.account.password } }
      const result = await api('/clients', { method: 'POST', body: JSON.stringify(payload) })
      navigate(`/trainer/clients/${result.client.id}`, { replace: true, state: { success: 'Client created successfully.' } })
    } catch (requestError) { setError(requestError.message) }
    finally { setSubmitting(false) }
  }

  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">NEW CLIENT</p><h1>BUILD THEIR PLAN</h1><p>Create the account, set targets, and prescribe the initial split in one flow.</p></div></header>
    <div className={styles.steps}>{steps.map((label, index) => <div key={label} className={`${styles.step} ${index === step ? styles.stepActive : ''}`}><span>{index < step ? <Check size={15} /> : index + 1}</span><strong>{label}</strong></div>)}</div>
    {error && <div className="alert alert-error" role="alert">{error}</div>}
    <section className={`card ${styles.wizard}`}>
      {step === 0 && <><div><p className="eyebrow">STEP 1</p><h2>Account details</h2></div><div className={styles.fieldGrid}><label>Client name<input value={form.account.name} onChange={(event) => setSection('account', { name: event.target.value })} /></label><label>Client email<input type="email" value={form.account.email} onChange={(event) => setSection('account', { email: event.target.value })} /></label><label>Initial password<input type="password" minLength="8" value={form.account.password} onChange={(event) => setSection('account', { password: event.target.value })} /></label><label>Confirm password<input type="password" value={form.account.confirmPassword} onChange={(event) => setSection('account', { confirmPassword: event.target.value })} /></label></div></>}
      {step === 1 && <><div><p className="eyebrow">STEP 2</p><h2>Fitness profile</h2><p className="muted">Biological sex is used only for the Mifflin-St Jeor calorie estimate.</p></div><div className={styles.fieldGrid}><NumberField label="Age" value={form.fitnessProfile.age} onChange={(age) => setSection('fitnessProfile', { age })} /><NumberField label="Height (cm)" value={form.fitnessProfile.heightCm} onChange={(heightCm) => setSection('fitnessProfile', { heightCm })} /><NumberField label="Weight (kg)" value={form.fitnessProfile.weightKg} onChange={(weightKg) => setSection('fitnessProfile', { weightKg })} /><label>Biological sex<select value={form.fitnessProfile.biologicalSex} onChange={(event) => setSection('fitnessProfile', { biologicalSex: event.target.value })}><option value="male">Male</option><option value="female">Female</option></select></label><label>Activity level<select value={form.fitnessProfile.activityLevel} onChange={(event) => setSection('fitnessProfile', { activityLevel: event.target.value })}><option value="sedentary">Sedentary</option><option value="light">Light</option><option value="moderate">Moderate</option><option value="very_active">Very active</option><option value="extra_active">Extra active</option></select></label><label>Fitness goal<select value={form.fitnessProfile.goal} onChange={(event) => setSection('fitnessProfile', { goal: event.target.value })}><option value="maintain">Maintain weight</option><option value="lose">Lose weight</option><option value="gain">Gain weight</option></select></label></div></>}
      {step === 2 && <><div><p className="eyebrow">STEP 3</p><h2>Nutrition targets</h2><p className="muted">Estimates are references only. Choose the actual targets for this client.</p></div>{estimates && <div className={styles.estimate}><div><strong>{estimates.bmr} kcal</strong><span>Estimated BMR</span></div><div><strong>{estimates.tdee} kcal</strong><span>Estimated maintenance (TDEE)</span></div></div>}<div className={styles.fieldGrid}><NumberField label="Daily calorie target" value={form.nutritionTarget.calories} onChange={(calories) => setSection('nutritionTarget', { calories })} /><NumberField label="Daily protein target (g)" value={form.nutritionTarget.proteinGrams} onChange={(proteinGrams) => setSection('nutritionTarget', { proteinGrams })} /></div></>}
      {step === 3 && <><div><p className="eyebrow">STEP 4</p><h2>Workout plan</h2><p className="muted">Choose 1–7 days. Day numbers describe the split, not weekdays.</p></div><WorkoutPlanEditor plan={form.workoutPlan} onChange={(workoutPlan) => setForm({ ...form, workoutPlan })} /></>}
      {step === 4 && <><div><p className="eyebrow">STEP 5</p><h2>Review and create</h2><p className="muted">The client can sign in immediately after creation.</p></div><div className={styles.reviewGrid}><section><strong>{form.account.name}</strong><span>{form.account.email}</span><span>Initial account password set</span></section><section><strong>{form.fitnessProfile.goal.replace('_', ' ')}</strong><span>{form.fitnessProfile.weightKg} kg · {form.fitnessProfile.heightCm} cm</span><span>{form.fitnessProfile.activityLevel.replace('_', ' ')}</span></section><section><strong>{form.nutritionTarget.calories} kcal / {form.nutritionTarget.proteinGrams} g</strong><span>{form.workoutPlan.days.length}-day split</span><span>{form.workoutPlan.days.reduce((total, day) => total + day.exercises.length, 0)} exercises</span></section></div>{form.workoutPlan.days.map((day) => <div key={day.dayNumber}><strong>Day {day.dayNumber}: {day.name || 'Untitled'}</strong><p className="muted">{day.exercises.map((exercise) => exercise.name).join(' · ')}</p></div>)}</>}
      <div className={styles.wizardActions}>{step > 0 ? <button type="button" className="button button-secondary" onClick={() => { setError(''); setStep(step - 1) }}><ChevronLeft size={18} /> Back</button> : <span />}{step < 4 ? <button type="button" className="button button-primary" onClick={next}>Continue <ChevronRight size={18} /></button> : <button className="button button-primary" onClick={create} disabled={submitting}>{submitting ? 'Creating…' : 'Create client'}</button>}</div>
    </section>
  </div>
}

function NumberField({ label, value, onChange }) {
  return <label>{label}<input type="number" min="1" value={value} onChange={(event) => onChange(Number(event.target.value))} /></label>
}
