import styles from './States.module.css'

export function LoadingState({ label = 'Loading…', fullPage = false }) {
  return <div className={`${styles.state} ${fullPage ? styles.fullPage : ''}`} role="status"><span className={styles.spinner} />{label}</div>
}

export function ErrorState({ message, onRetry }) {
  return <div className={`${styles.state} ${styles.error}`} role="alert"><strong>Something went wrong</strong><span>{message}</span>{onRetry && <button className="button button-secondary" onClick={onRetry}>Try again</button>}</div>
}

export function EmptyState({ title, message, action }) {
  return <div className={styles.state}><strong>{title}</strong><span>{message}</span>{action}</div>
}

export function StatusBadge({ children, tone = 'neutral' }) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>
}
