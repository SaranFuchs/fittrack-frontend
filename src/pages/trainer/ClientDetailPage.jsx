import { Dumbbell, History, Salad, Save, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { api } from '../../api/http'
import { ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import styles from './Trainer.module.css'

export function ClientDetailPage() {
  const { clientId } = useParams()
  const { data, loading, error, reload } = useApiData(`/clients/${clientId}`, [clientId])
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  return <ClientDetailContent initial={data} reload={reload} />
}

function ClientDetailContent({ initial, reload }) {
  const { clientId } = useParams(); const navigate = useNavigate(); const location = useLocation()
  const [profile, setProfile] = useState({ name: initial.client.name, fitnessProfile: initial.fitnessProfile })
  const [target, setTarget] = useState(initial.nutritionTarget)
  const [status, setStatus] = useState(location.state?.success || '')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState('')
  const updateFitness = (patch) => setProfile((current) => ({ ...current, fitnessProfile: { ...current.fitnessProfile, ...patch } }))

  const saveProfile = async (event) => {
    event.preventDefault(); setBusy('profile'); setError('')
    try { await api(`/clients/${clientId}`, { method: 'PATCH', body: JSON.stringify(profile) }); setStatus('Profile updated.'); reload() }
    catch (requestError) { setError(requestError.message) } finally { setBusy('') }
  }
  const saveTarget = async (event) => {
    event.preventDefault(); setBusy('target'); setError('')
    try { await api(`/clients/${clientId}/nutrition-target`, { method: 'PUT', body: JSON.stringify(target) }); setStatus('Nutrition target updated.') }
    catch (requestError) { setError(requestError.message) } finally { setBusy('') }
  }
  const remove = async () => {
    if (!window.confirm('Delete this client? This removes the account, workout history, and nutrition history. This action cannot be undone.')) return
    setBusy('delete')
    try { await api(`/clients/${clientId}`, { method: 'DELETE' }); navigate('/trainer/clients', { replace: true }) }
    catch (requestError) { setError(requestError.message); setBusy('') }
  }

  return <div className="page-stack">
    <div className={styles.detailHero}><div className={styles.avatar}>{initial.client.name.slice(0, 1)}</div><div><p className="eyebrow">CLIENT PROFILE</p><h1>{initial.client.name}</h1><span>{initial.client.email}</span></div></div>
    <nav className={styles.profileNav}><Link className="button button-primary" to={`/trainer/clients/${clientId}/workout-plan`}><Dumbbell size={18} /> Workout plan</Link><Link className="button button-secondary" to={`/trainer/clients/${clientId}/history`}><History size={18} /> History</Link><Link className="button button-secondary" to={`/trainer/clients/${clientId}/nutrition`}><Salad size={18} /> Nutrition</Link></nav>
    {status && <div className="alert alert-success">{status}</div>}{error && <div className="alert alert-error">{error}</div>}
    <div className="metric-grid"><div className="metric"><strong>{initial.estimates.bmr}</strong><span>Estimated BMR (kcal)</span></div><div className="metric"><strong>{initial.estimates.tdee}</strong><span>Estimated TDEE (kcal)</span></div><div className="metric"><strong>{initial.nutritionTarget.calories}</strong><span>Daily calorie target</span></div><div className="metric"><strong>{initial.nutritionTarget.proteinGrams} g</strong><span>Daily protein target</span></div></div>
    <div className="two-column"><form className="card form-stack" onSubmit={saveProfile}><div><p className="eyebrow">PROFILE</p><h2>Fitness details</h2></div><label>Name<input value={profile.name} onChange={(event) => setProfile({ ...profile, name: event.target.value })} /></label><div className={styles.fieldGrid}><ProfileNumber label="Age" field="age" profile={profile.fitnessProfile} update={updateFitness} /><ProfileNumber label="Height (cm)" field="heightCm" profile={profile.fitnessProfile} update={updateFitness} /><ProfileNumber label="Weight (kg)" field="weightKg" profile={profile.fitnessProfile} update={updateFitness} /><label>Biological sex<select value={profile.fitnessProfile.biologicalSex} onChange={(event) => updateFitness({ biologicalSex: event.target.value })}><option value="male">Male</option><option value="female">Female</option></select></label><label>Activity level<select value={profile.fitnessProfile.activityLevel} onChange={(event) => updateFitness({ activityLevel: event.target.value })}><option value="sedentary">Sedentary</option><option value="light">Light</option><option value="moderate">Moderate</option><option value="very_active">Very active</option><option value="extra_active">Extra active</option></select></label><label>Goal<select value={profile.fitnessProfile.goal} onChange={(event) => updateFitness({ goal: event.target.value })}><option value="maintain">Maintain</option><option value="lose">Lose</option><option value="gain">Gain</option></select></label></div><button className="button button-primary" disabled={busy === 'profile'}><Save size={17} /> {busy === 'profile' ? 'Saving…' : 'Save profile'}</button></form>
      <div className="page-stack"><form className="card form-stack" onSubmit={saveTarget}><div><p className="eyebrow">TARGETS</p><h2>Nutrition prescription</h2></div><label>Daily calories<input type="number" min="1" value={target.calories} onChange={(event) => setTarget({ ...target, calories: Number(event.target.value) })} /></label><label>Daily protein (g)<input type="number" min="1" value={target.proteinGrams} onChange={(event) => setTarget({ ...target, proteinGrams: Number(event.target.value) })} /></label><button className="button button-primary" disabled={busy === 'target'}><Save size={17} /> Save targets</button></form><section className="card"><p className="eyebrow">DANGER ZONE</p><h2>Delete client</h2><p className="muted">Permanently removes the account and all associated logs.</p><button className="button button-danger" onClick={remove} disabled={busy === 'delete'}><Trash2 size={17} /> {busy === 'delete' ? 'Deleting…' : 'Delete client'}</button></section></div>
    </div>
  </div>
}

function ProfileNumber({ label, field, profile, update }) { return <label>{label}<input type="number" min="1" value={profile[field]} onChange={(event) => update({ [field]: Number(event.target.value) })} /></label> }
