import { useState } from 'react'
import { contacts, availability } from '../data'
import { contactIcons } from '../icons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const sendMessage = () => {
    const { name, email, msg } = form
    if (!name || !email || !msg) {
      alert('Please fill all fields.')
      return
    }
    const mailto = `mailto:sunilkumarofficial57@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${name}`,
    )}&body=${encodeURIComponent(`${msg}\n\nFrom: ${email}`)}`
    window.location.href = mailto
    setSent(true)
    setForm({ name: '', email: '', msg: '' })
  }

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title reveal">Let's Work Together</h2>
        <p className="section-sub reveal">
          Have a project in mind? I'd love to hear about it. Let's create
          something amazing together.
        </p>
        <div className="availability reveal">
          <span className="availability-label">I'm available for</span>
          <div className="availability-chips">
            {availability.map((a) => (
              <span className="availability-chip" key={a}>{a}</span>
            ))}
          </div>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            {contacts.map((c) => {
              const Icon = contactIcons[c.icon]
              const inner = (
                <>
                  <div className="contact-icon">{Icon && <Icon />}</div>
                  <div>
                    <div className="contact-label">{c.label}</div>
                    <div className="contact-val">{c.val}</div>
                  </div>
                </>
              )
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-item"
                >
                  {inner}
                </a>
              ) : (
                <div className="contact-item" style={{ cursor: 'default' }} key={c.label}>
                  {inner}
                </div>
              )
            })}
          </div>
          <div className="contact-form reveal">
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: '1.5rem' }}>
              Send a Message
            </h3>
            <div className="form-row">
              <label>Your Name</label>
              <input type="text" placeholder="Your name" value={form.name} onChange={update('name')} />
            </div>
            <div className="form-row">
              <label>Email Address</label>
              <input type="email" placeholder="name@example.com" value={form.email} onChange={update('email')} />
            </div>
            <div className="form-row">
              <label>Message</label>
              <textarea placeholder="Tell me about your project..." value={form.msg} onChange={update('msg')} />
            </div>
            <button className="btn btn-primary" onClick={sendMessage} style={{ width: '100%' }}>
              Send Message
            </button>
            {sent && <div className="form-status">✅ Thanks! I'll get back to you soon.</div>}
          </div>
        </div>
      </div>
    </section>
  )
}
