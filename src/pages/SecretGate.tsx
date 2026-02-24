import { useEffect, useMemo, useState } from 'react'
import { PageLayout } from '../components/PageLayout'
import { secretPassword, secretQuestions } from '../data/secret'
import { useNavigate } from 'react-router-dom'

const MAX_ATTEMPTS = 3
const LOCKOUT_MS = 5 * 60 * 1000
const LOCKOUT_KEY = 'secret_gate_lockout_until'

export default function SecretGate() {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [lockoutUntil, setLockoutUntil] = useState<number | null>(null)
  const [now, setNow] = useState(Date.now())

  const question = useMemo(() => {
    const index = Math.floor(Math.random() * secretQuestions.length)
    return secretQuestions[index]
  }, [])

  useEffect(() => {
    const stored = sessionStorage.getItem(LOCKOUT_KEY)
    if (stored) {
      const value = Number(stored)
      if (!Number.isNaN(value)) {
        setLockoutUntil(value)
      }
    }
  }, [])

  useEffect(() => {
    if (!lockoutUntil) return

    const timer = window.setInterval(() => {
      setNow(Date.now())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [lockoutUntil])

  const isLockedOut = lockoutUntil !== null && now < lockoutUntil
  const remainingMs = lockoutUntil ? Math.max(lockoutUntil - now, 0) : 0
  const remainingSeconds = Math.ceil(remainingMs / 1000)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isLockedOut) return

    if (input.trim() === secretPassword) {
      setError('')
      navigate('/interview-checksheet')
      return
    }

    const nextAttempts = attempts + 1
    setAttempts(nextAttempts)

    if (nextAttempts >= MAX_ATTEMPTS) {
      const until = Date.now() + LOCKOUT_MS
      sessionStorage.setItem(LOCKOUT_KEY, String(until))
      setLockoutUntil(until)
      setError('Too many attempts. Try again in a few minutes.')
      return
    }

    setError(`Incorrect password. ${MAX_ATTEMPTS - nextAttempts} attempt(s) remaining.`)
  }

  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-green-500">Danger Zone</span> Access
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Answer the prompt and enter the access password to continue.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Science Check</p>
          <p className="text-lg font-semibold mb-6">{question}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              disabled={isLockedOut}
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
            />
            <button
              type="submit"
              disabled={isLockedOut}
              className="w-full bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              {isLockedOut ? `Locked (${remainingSeconds}s)` : 'Enter'}
            </button>
            {error ? <p className="text-sm text-red-500">{error}</p> : null}
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            Hint: the password is always the same.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
