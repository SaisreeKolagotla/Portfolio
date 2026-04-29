'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '@/lib/config'
import { Briefcase, CheckCircle2, MapPin, Calendar } from 'lucide-react'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Work Experience</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--fg)' }}>
            Where I've <span style={{ color: 'var(--brand)' }}>Worked</span>
          </h2>
          <div className="brand-line w-20 mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--brand), transparent)' }}
          />

          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative pl-16 pb-12 last:pb-0"
            >
              {/* Dot */}
              <div
                className="absolute left-0 top-0 w-12 h-12 rounded-xl flex items-center justify-center border-2"
                style={{
                  background: 'var(--card)',
                  borderColor: 'var(--brand)',
                  color: 'var(--brand)',
                }}
              >
                <Briefcase size={20} />
              </div>

              {/* Card */}
              <div className="card p-6">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--fg)' }}>
                      {job.role}
                    </h3>
                    <p className="font-medium" style={{ color: 'var(--brand)' }}>{job.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className="px-3 py-1 text-xs rounded-full font-mono"
                      style={{ background: 'var(--brand-glow)', color: 'var(--brand)' }}
                    >
                      {job.type}
                    </span>
                    <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--fg-muted)' }}>
                      <Calendar size={12} />
                      {job.duration}
                    </div>
                    <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--fg-muted)' }}>
                      <MapPin size={12} />
                      {job.location}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-3 mb-5">
                  {job.achievements.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + j * 0.08 }}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      <CheckCircle2
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--brand)' }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full font-mono border"
                      style={{
                        borderColor: 'var(--border)',
                        color: 'var(--fg-muted)',
                        background: 'var(--bg)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
