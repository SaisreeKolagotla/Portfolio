'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal, social } from '@/lib/config'
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: null },
  ]

  return (
    <section id="contact" className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--fg)' }}>
            Let's <span style={{ color: 'var(--brand)' }}>Connect</span>
          </h2>
          <div className="brand-line w-20 mx-auto mt-4" />
          <p className="mt-4 max-w-lg mx-auto" style={{ color: 'var(--fg-muted)' }}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="card p-5 flex items-center gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--brand-glow)', color: 'var(--brand)' }}
                >
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono mb-0.5" style={{ color: 'var(--fg-muted)' }}>{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-medium transition-colors hover:text-[var(--brand)]"
                      style={{ color: 'var(--fg)' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-medium" style={{ color: 'var(--fg)' }}>{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="card p-5"
            >
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--fg-muted)' }}>Find me online</p>
              <div className="flex gap-3">
                {social.github && (
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:border-[var(--brand)] hover:text-[var(--brand)]"
                    style={{ borderColor: 'var(--border)', color: 'var(--fg-muted)', background: 'var(--bg)' }}
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:border-[var(--brand)] hover:text-[var(--brand)]"
                    style={{ borderColor: 'var(--border)', color: 'var(--fg-muted)', background: 'var(--bg)' }}
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono mb-2" style={{ color: 'var(--fg-muted)' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl text-sm border transition-colors"
                    style={{
                      background: 'var(--bg)',
                      borderColor: 'var(--border)',
                      color: 'var(--fg)',
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono mb-2" style={{ color: 'var(--fg-muted)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm border transition-colors"
                    style={{
                      background: 'var(--bg)',
                      borderColor: 'var(--border)',
                      color: 'var(--fg)',
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono mb-2" style={{ color: 'var(--fg-muted)' }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Job opportunity"
                  className="w-full px-4 py-3 rounded-xl text-sm border transition-colors"
                  style={{
                    background: 'var(--bg)',
                    borderColor: 'var(--border)',
                    color: 'var(--fg)',
                  }}
                />
              </div>

              <div>
                <label className="block text-xs font-mono mb-2" style={{ color: 'var(--fg-muted)' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl text-sm border transition-colors resize-none"
                  style={{
                    background: 'var(--bg)',
                    borderColor: 'var(--border)',
                    color: 'var(--fg)',
                  }}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-xl text-sm"
                  style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.3)' }}
                >
                  <CheckCircle2 size={16} /> Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-xl text-sm"
                  style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)' }}
                >
                  <AlertCircle size={16} /> {errorMsg}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
