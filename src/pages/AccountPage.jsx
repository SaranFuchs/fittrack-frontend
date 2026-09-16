import { useState } from 'react'
import { api } from '../api/http'
import { useAuth } from '../auth/AuthContext'

export function AccountPage() {
  const { user, refreshCurrentUser } = useAuth()
  const [emailForm, setEmailForm] = useState({ email: user.email, currentPassword: '' })
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [busy, setBusy] = useState('')

  const changeEmail = async (event) => {
    event.preventDefault(); setBusy('email'); setStatus({ type: '', message: '' })
    try {
      await api('/me/account', { method: 'PATCH', body: JSON.stringify(emailForm) })
      await refreshCurrentUser(); setEmailForm((current) => ({ ...current, currentPassword: '' }))
      setStatus({ type: 'success', message: 'Email updated successfully.' })
    } catch (error) { setStatus({ type: 'error', message: error.message }) }
    finally { setBusy('') }
  }

  const changePassword = async (event) => {
    event.preventDefault(); setStatus({ type: '', message: '' })
    if (passwordForm.newPassword !== passwordForm.confirmPassword) return setStatus({ type: 'error', message: 'New passwords do not match.' })
    setBusy('password')
    try {
      await api('/me/password', { method: 'PUT', body: JSON.stringify({ currentPassword: passwordForm.currentPassword, newPassword: passwordForm.newPassword }) })
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
      setStatus({ type: 'success', message: 'Password updated successfully.' })
    } catch (error) { setStatus({ type: 'error', message: error.message }) }
    finally { setBusy('') }
  }

  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">ACCOUNT</p><h1>YOUR SETTINGS</h1><p>Keep your sign-in details current and secure.</p></div></header>
    {status.message && <div className={`alert alert-${status.type}`}>{status.message}</div>}
    <div className="two-column">
      <form className="card form-stack" onSubmit={changeEmail}><div><p className="eyebrow">EMAIL</p><h2>Change email</h2></div><label>New email<input type="email" value={emailForm.email} onChange={(event) => setEmailForm({ ...emailForm, email: event.target.value })} required /></label><label>Current password<input type="password" value={emailForm.currentPassword} onChange={(event) => setEmailForm({ ...emailForm, currentPassword: event.target.value })} required /></label><button className="button button-primary" disabled={busy === 'email'}>{busy === 'email' ? 'Saving…' : 'Update email'}</button></form>
      <form className="card form-stack" onSubmit={changePassword}><div><p className="eyebrow">PASSWORD</p><h2>Change password</h2></div><label>Current password<input type="password" value={passwordForm.currentPassword} onChange={(event) => setPasswordForm({ ...passwordForm, currentPassword: event.target.value })} required /></label><label>New password<input type="password" minLength="8" value={passwordForm.newPassword} onChange={(event) => setPasswordForm({ ...passwordForm, newPassword: event.target.value })} required /></label><label>Confirm new password<input type="password" value={passwordForm.confirmPassword} onChange={(event) => setPasswordForm({ ...passwordForm, confirmPassword: event.target.value })} required /></label><button className="button button-primary" disabled={busy === 'password'}>{busy === 'password' ? 'Saving…' : 'Update password'}</button></form>
    </div>
  </div>
}
