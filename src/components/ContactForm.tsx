import { useState, useEffect } from 'react'
import '@/assets/styles/_contact-form.scss'
import '@/assets/styles/_section-titles.scss'

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitMessage, setSubmitMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (submitMessage) {
      const timeoutId = setTimeout(() => {
        setSubmitMessage('')
      }, 5000)

      return () => clearTimeout(timeoutId)
    }
  }, [submitMessage])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitMessage('Thank you for your message! I will get back to you soon.')
        setIsSuccess(true)
        // Reset form
        setForm({
          name: '',
          email: '',
          message: ''
        })
      } else {
        setSubmitMessage(
          data.error || 'Something went wrong. Please try again later.'
        )
        setIsSuccess(false)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage('Failed to send message. Please try again later.')
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setForm((prev) => ({
      ...prev,
      [id]: value
    }))
  }

  return (
    <div className="contact-form-section">
      <h2 className="section-title">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="your.email@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            value={form.message}
            onChange={handleChange}
            required
            className="form-textarea"
            rows={5}
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
        {submitMessage && (
          <p className={`submit-message ${isSuccess ? 'success' : ''}`}>
            {submitMessage}
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactForm

