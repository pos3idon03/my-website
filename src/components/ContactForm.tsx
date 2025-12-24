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

  useEffect(() => {
    if (submitMessage) {
      const timeoutId = setTimeout(() => {
        setSubmitMessage('')
      }, 5000)

      return () => clearTimeout(timeoutId)
    }
  }, [submitMessage])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Placeholder for form submission logic
    console.log('Form submitted:', form)
    setSubmitMessage('Thank you for your message! I will get back to you soon.')
    setIsSuccess(true)

    // Reset form
    setForm({
      name: '',
      email: '',
      message: ''
    })
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
        <button type="submit" className="submit-button">
          Send Message
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

