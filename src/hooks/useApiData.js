import { useCallback, useEffect, useState } from 'react'
import { api } from '../api/http'

export function useApiData(path) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    setLoading(true); setError('')
    try { setData(await api(path)) }
    catch (requestError) { setError(requestError.message) }
    finally { setLoading(false) }
  }, [path])

  useEffect(() => {
    const timer = window.setTimeout(load, 0)
    return () => window.clearTimeout(timer)
  }, [load])

  return { data, setData, loading, error, reload: load }
}
