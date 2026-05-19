import { useState, type FormEvent } from 'react'

const FORM_ENDPOINT =
  'https://docs.google.com/forms/d/e/1FAIpQLScvpwieaOEQGIZ_emPH7hnI6fwW9D7AeIvu_zmmhJSt5nnhFA/formResponse'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    const fullName = data.get('full_name') as string
    const emailAddress = data.get('email_address') as string
    const message = data.get('message') as string

    const url =
      `${FORM_ENDPOINT}?usp=pp_url` +
      `&entry.1537159743=${encodeURIComponent(fullName)}` +
      `&entry.1892208282=${encodeURIComponent(emailAddress)}` +
      `&entry.1827350325=${encodeURIComponent(message)}`

    try {
      // Google Forms blocks CORS, so we use no-cors and assume success on send.
      await fetch(url, { method: 'POST', mode: 'no-cors' })
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="full_name">Full Name:</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          className="form-control"
          required
          disabled={status === 'submitting'}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email_address">Email Address:</label>
        <input
          type="email"
          id="email_address"
          name="email_address"
          className="form-control"
          required
          disabled={status === 'submitting'}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          className="form-control"
          rows={6}
          required
          disabled={status === 'submitting'}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Submit'}
        </button>
      </div>
      {status === 'success' && (
        <p style={{ color: 'green', marginTop: '10px' }}>Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p style={{ color: 'red', marginTop: '10px' }}>
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  )
}
