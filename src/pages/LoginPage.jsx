import { Dumbbell } from 'lucide-react'
import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import styles from './LoginPage.module.css'

export function LoginPage() {
  const { user, loading, login, sessionMessage } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  if (!loading && user) return <Navigate to={user.role === 'trainer' ? '/trainer' : '/client'} replace />

  const submit = async (event) => {
    event.preventDefault()
    setError('')
    if (!form.email || !form.password) return setError('Enter your email and password.')
    setSubmitting(true)
    try {
      const loggedIn = await login(form)
      const requested = location.state?.from?.pathname
      navigate(requested || (loggedIn.role === 'trainer' ? '/trainer' : '/client'), { replace: true })
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.pitch}>
        <div className={styles.brand}><span>FT</span><strong>FITTRACK <em>COACH</em></strong></div>
        <div><p className={styles.kicker}>TRAIN. TRACK. PROGRESS.</p><h1>EVERY REP.<br />EVERY MEAL.<br /><span>ONE PLAN.</span></h1><p>Clear coaching, measurable progress, and no noise between you and the work.</p></div>
        <div className={styles.stat}><Dumbbell size={28} /><div><strong>Built for the gym floor</strong><span>Fast workout logging on any screen</span></div></div>
      </section>
      <section className={styles.formPanel}>
        <form className={styles.form} onSubmit={submit}>
          <p className="eyebrow">WELCOME BACK</p>
          <h2>LOG IN</h2>
          <p className="muted">Use the account created by your trainer.</p>
          {(error || sessionMessage) && <div className="alert alert-error" role="alert">{error || sessionMessage}</div>}
          <label>Email<input type="email" autoComplete="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" /></label>
          <label>Password<input type="password" autoComplete="current-password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} placeholder="Your password" /></label>
          <button className="button button-primary button-wide" disabled={submitting}>{submitting ? 'Logging in…' : 'Log in'}</button>
          <div className={styles.demo}><strong>Demo access</strong><span>Trainer: demo.trainer@fittrack.local · FitTrackDemo!2026</span><span>Client: alex.client@fittrack.local · ClientDemo!2026</span></div>
        </form>
      </section>
    </main>
  )
}
