import { Activity } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ResumeVisitCounter() {
  const [hitCount, setHitCount] = useState<number | null>(null)
  const [counterStatus, setCounterStatus] = useState<'loading' | 'live' | 'offline'>('loading')

  useEffect(() => {
    const counterBaseUrl = 'https://countapi.mileshilliard.com/api/v1'
    const counterKey = 'ebthecybergod-digital-resume-home-visits'
    const sessionKey = 'eb-cyber-global-home-hit-counted-this-session'

    async function updateGlobalCounter() {
      try {
        const alreadyCounted = window.sessionStorage.getItem(sessionKey) === 'true'
        const endpoint = alreadyCounted ? 'get' : 'hit'
        const response = await fetch(`${counterBaseUrl}/${endpoint}/${counterKey}`, {
          cache: 'no-store',
        })

        if (!response.ok) {
          throw new Error('Counter request failed')
        }

        const data = await response.json() as { value?: string | number }
        const nextCount = Number.parseInt(String(data.value ?? '0'), 10)

        if (Number.isNaN(nextCount)) {
          throw new Error('Counter response was invalid')
        }

        if (!alreadyCounted) {
          window.sessionStorage.setItem(sessionKey, 'true')
        }

        setHitCount(nextCount)
        setCounterStatus('live')
      } catch {
        setCounterStatus('offline')
      }
    }

    void updateGlobalCounter()
  }, [])

  const displayCount = counterStatus === 'offline' ? 'Offline' : hitCount === null ? '...' : hitCount.toLocaleString('en-US')
  const statusLabel = counterStatus === 'live' ? 'Global' : counterStatus === 'offline' ? 'Offline' : 'Syncing'

  return (
    <div className="hidden items-center gap-2 rounded-md border border-green-400/20 bg-green-400/5 px-2.5 py-2 text-white min-[1380px]:inline-flex" aria-live="polite" title="Visits to this digital resume">
      <Activity className="text-green-300" size={14} />
      <div className="flex items-baseline gap-1.5 font-mono">
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">{statusLabel}</span>
        <span className="text-xs font-black tracking-[0.08em] text-green-300">{displayCount}</span>
      </div>
    </div>
  )
}
