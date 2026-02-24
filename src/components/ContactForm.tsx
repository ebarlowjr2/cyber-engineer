import { useMemo, useState } from 'react'

interface ContactFormProps {
  className?: string
  inputClassName?: string
  textareaClassName?: string
  buttonClassName?: string
  statusClassName?: string
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm({
  className = 'space-y-6',
  inputClassName = 'w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors',
  textareaClassName = 'w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none',
  buttonClassName = 'bg-green-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors',
  statusClassName = 'text-sm text-gray-400',
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const endpoint = useMemo(() => {
    const envEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
    const envId = import.meta.env.VITE_FORMSPREE_ID as string | undefined

    if (envEndpoint) return envEndpoint
    if (envId) return `https://formspree.io/f/${envId}`
    return ''
  }, [])

  const isConfigured = Boolean(endpoint)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isConfigured) {
      setStatus('error')
      setErrorMessage('Contact form is not configured yet. Please reach out via email or social links.')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        setStatus('error')
        setErrorMessage('Something went wrong while sending your message. Please try again.')
        return
      }

      setStatus('success')
      event.currentTarget.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage('Unable to send your message right now. Please try again soon.')
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="hidden">
        <label htmlFor="_gotcha">Company</label>
        <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          className={inputClassName}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          required
          className={inputClassName}
        />
      </div>
      <div>
        <textarea
          name="message"
          rows={5}
          placeholder="Enter your message"
          required
          className={textareaClassName}
        ></textarea>
      </div>
      <button type="submit" className={buttonClassName} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' ? (
        <p className={statusClassName}>Thanks for reaching out! I’ll get back to you soon.</p>
      ) : null}
      {status === 'error' ? (
        <p className={statusClassName}>{errorMessage}</p>
      ) : null}
    </form>
  )
}
