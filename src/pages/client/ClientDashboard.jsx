import { ArrowRight, Dumbbell, Salad } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'
import { ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { todayString } from '../../utils/format'
import styles from './Client.module.css'

export function ClientDashboard() {
  const { user } = useAuth()
  const plan = useApiData('/me/workout-plan')
  const nutrition = useApiData(`/me/nutrition?date=${todayString()}`)
  if (plan.loading || nutrition.loading) return <LoadingState />
  if (plan.error || nutrition.error) return <ErrorState message={plan.error || nutrition.error} onRetry={() => { plan.reload(); nutrition.reload() }} />
  const nextDay = plan.data.plan.days.find((day) => day.dayNumber === plan.data.cycle.nextSuggestedDayNumber)
  return <div className="page-stack">
    <header className={`page-header ${styles.welcome}`}><div><p className="eyebrow">TODAY'S OVERVIEW</p><h1>READY, {user.name.split(' ')[0]}?</h1><p>Stay consistent. The numbers will follow.</p></div></header>
    <div className={styles.actionGrid}>
      <Link to="/client/workout" className={styles.actionCard}><div className={styles.actionIcon}><Dumbbell /></div><div><p className="eyebrow">NEXT SUGGESTED</p><h2>{nextDay ? `DAY ${nextDay.dayNumber} · ${nextDay.name || 'WORKOUT'}` : 'NEW CYCLE READY'}</h2><p>{plan.data.cycle.completedCount} of {plan.data.cycle.totalDays} workout days complete</p></div><ArrowRight /></Link>
      <Link to="/client/nutrition" className={styles.actionCard}><div className={styles.actionIcon}><Salad /></div><div><p className="eyebrow">TODAY'S NUTRITION</p><h2>{nutrition.data.totals.calories} / {nutrition.data.target.calories} KCAL</h2><p>{nutrition.data.totals.proteinGrams} / {nutrition.data.target.proteinGrams} g protein</p></div><ArrowRight /></Link>
    </div>
    <div className="metric-grid"><div className="metric"><strong>{plan.data.cycle.cycleNumber}</strong><span>Current training cycle</span></div><div className="metric"><strong>{nutrition.data.remaining.calories}</strong><span>Calories remaining today</span></div><div className="metric"><strong>{nutrition.data.remaining.proteinGrams} g</strong><span>Protein remaining today</span></div></div>
  </div>
}
