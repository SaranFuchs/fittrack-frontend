import { Edit3, Plus, Trash2, X } from 'lucide-react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api/http'
import { EmptyState, ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { formatDate, todayString } from '../../utils/format'
import styles from './Nutrition.module.css'

const blankEntry = (date) => ({ logDate: date, foodName: '', calories: 0, proteinGrams: 0, notes: '' })

export function NutritionPage({ role }) {
  const { clientId } = useParams()
  const [date, setDate] = useState(todayString())
  const basePath = role === 'trainer' ? `/clients/${clientId}/nutrition` : '/me/nutrition'
  const { data, loading, error, reload } = useApiData(`${basePath}?date=${date}`)
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  return <NutritionContent role={role} data={data} date={date} setDate={setDate} reload={reload} />
}

function NutritionContent({ role, data, date, setDate, reload }) {
  const [form, setForm] = useState(null)
  const [editingId, setEditingId] = useState('')
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const openAdd = () => { setEditingId(''); setForm(blankEntry(date)); setError('') }
  const openEdit = (entry) => { setEditingId(entry._id); setForm({ logDate: entry.logDate, foodName: entry.foodName, calories: entry.calories, proteinGrams: entry.proteinGrams, notes: entry.notes || '' }); setError('') }
  const close = () => { setForm(null); setEditingId('') }
  const save = async (event) => {
    event.preventDefault(); setSaving(true); setError('')
    try {
      await api(editingId ? `/me/nutrition/${editingId}` : '/me/nutrition', { method: editingId ? 'PATCH' : 'POST', body: JSON.stringify(form) })
      close(); if (form.logDate !== date) setDate(form.logDate); else reload()
    } catch (requestError) { setError(requestError.message) } finally { setSaving(false) }
  }
  const remove = async (entry) => {
    if (!window.confirm(`Delete ${entry.foodName}?`)) return
    try { await api(`/me/nutrition/${entry._id}`, { method: 'DELETE' }); reload() }
    catch (requestError) { setError(requestError.message) }
  }
  const caloriePercent = Math.min(100, (data.totals.calories / data.target.calories) * 100)
  const proteinPercent = Math.min(100, (data.totals.proteinGrams / data.target.proteinGrams) * 100)
  return <div className="page-stack"><header className="page-header"><div><p className="eyebrow">DAILY NUTRITION</p><h1>{role === 'trainer' ? 'CLIENT NUTRITION LOG' : 'FUEL THE WORK'}</h1><p>{role === 'trainer' ? 'Read-only daily intake and current targets.' : 'Log any food or meal. No required meal categories.'}</p></div><label className={styles.date}>Selected date<input type="date" max={todayString()} value={date} onChange={(event) => { setDate(event.target.value); close() }} /></label></header>
    {error && <div className="alert alert-error">{error}</div>}
    <div className={styles.summary}><NutritionProgress label="Calories" consumed={data.totals.calories} target={data.target.calories} remaining={data.remaining.calories} unit="kcal" percent={caloriePercent} /><NutritionProgress label="Protein" consumed={data.totals.proteinGrams} target={data.target.proteinGrams} remaining={data.remaining.proteinGrams} unit="g" percent={proteinPercent} /></div>
    <div className={styles.logHeader}><div><p className="eyebrow">{formatDate(date).toUpperCase()}</p><h2>Food entries</h2></div>{role === 'client' && <button className="button button-primary" onClick={openAdd}><Plus size={17} /> Add food entry</button>}</div>
    {form && role === 'client' && <form className={`card ${styles.foodForm}`} onSubmit={save}><header><div><p className="eyebrow">{editingId ? 'EDIT ENTRY' : 'NEW ENTRY'}</p><h2>{editingId ? 'Update food entry' : 'What did you eat?'}</h2></div><button type="button" aria-label="Close form" onClick={close}><X /></button></header><label className={styles.foodName}>Food or meal name<input value={form.foodName} maxLength="150" required onChange={(event) => setForm({ ...form, foodName: event.target.value })} /></label><label>Date<input type="date" max={todayString()} value={form.logDate} onChange={(event) => setForm({ ...form, logDate: event.target.value })} /></label><label>Calories<input type="number" min="0" max="10000" value={form.calories} onChange={(event) => setForm({ ...form, calories: Number(event.target.value) })} /></label><label>Protein (g)<input type="number" min="0" max="1000" step="0.1" value={form.proteinGrams} onChange={(event) => setForm({ ...form, proteinGrams: Number(event.target.value) })} /></label><label className={styles.foodName}>Notes<textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} /></label><div><button className="button button-primary" disabled={saving}>{saving ? 'Saving…' : editingId ? 'Update entry' : 'Add entry'}</button></div></form>}
    {!data.entries.length ? <EmptyState title="No food entries for this date" message={role === 'client' ? 'Add your first food or meal above.' : 'This client has not logged anything for this date.'} /> : <div className={styles.entries}>{data.entries.map((entry) => <article className={styles.foodCard} key={entry._id}><div><strong>{entry.foodName}</strong><span>{entry.notes || 'No notes'}</span></div><div className={styles.macros}><strong>{entry.calories} <small>kcal</small></strong><strong>{entry.proteinGrams} <small>g protein</small></strong></div>{role === 'client' && <div className={styles.foodActions}><button aria-label={`Edit ${entry.foodName}`} onClick={() => openEdit(entry)}><Edit3 size={17} /></button><button aria-label={`Delete ${entry.foodName}`} onClick={() => remove(entry)}><Trash2 size={17} /></button></div>}</article>)}</div>}
  </div>
}

function NutritionProgress({ label, consumed, target, remaining, unit, percent }) {
  return <section className={styles.progress}><div><p className="eyebrow">{label}</p><strong>{consumed} <small>/ {target} {unit}</small></strong></div><div className={styles.track}><span style={{ width: `${percent}%` }} /></div><p className={remaining < 0 ? styles.over : ''}>{remaining >= 0 ? `${remaining} ${unit} remaining` : `${Math.abs(remaining)} ${unit} over target`}</p></section>
}
