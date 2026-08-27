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
    <div className="hidden min-w-36 rounded-xl border border-green-500/20 bg-slate-950 px-3 py-2 text-white shadow-lg shadow-green-500/5 xl:block" aria-live="polite">
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-green-300">{statusLabel}</span>
        <Activity className="text-green-300" size={14} />
      </div>
      <p className="text-[11px] font-semibold leading-tight text-slate-400">Visits to this digital resume</p>
      <p className="font-mono text-lg font-black leading-tight tracking-[0.1em] text-green-300">{displayCount}</p>
    </div>
  )
}
