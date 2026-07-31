import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export function useActiveSubscription(userId: string | null) {
  const [hasActiveSubscription, setHasActiveSubscription] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!userId) {
      setHasActiveSubscription(false)
      setLoading(false)
      return
    }

    let cancelled = false
    setLoading(true)

    ;(async () => {
      try {
        const { data } = await supabase
          .from('subscriptions')
          .select('id')
          .eq('user_id', userId)
          .eq('status', 'active')
          .maybeSingle()
        if (cancelled) return
        setHasActiveSubscription(!!data)
        setLoading(false)
      } catch {
        if (cancelled) return
        setHasActiveSubscription(false)
        setLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [userId])

  return { hasActiveSubscription, loading }
}
