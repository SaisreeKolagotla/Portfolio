'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personal, education } from '@/lib/config'
import { GraduationCap, Code2, Layers, Zap } from 'lucide-react'

const icons = [Code2, Layers, Zap]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--fg)' }}>
            Who I <span style={{ color: 'var(--brand)' }}>Am</span>
          </h2>
          <div className="brand-line w-20 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--fg-muted)' }}>
              {personal.about}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {personal.highlights.map((h, i) => {
                const Icon = icons[i]
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl border"
                    style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--brand-glow)', color: 'var(--brand)' }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1" style={{ color: 'var(--fg)' }}>{h.label}</div>
                      <div className="text-sm" style={{ color: 'var(--fg-muted)' }}>{h.desc}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--fg)' }}>
              <GraduationCap size={22} style={{ color: 'var(--brand)' }} />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="card p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold mb-1" style={{ color: 'var(--fg)' }}>{edu.degree}</div>
                      <div className="text-sm mb-2" style={{ color: 'var(--fg-muted)' }}>{edu.institution}</div>
                      <span
                        className="text-xs px-2 py-1 rounded-full font-mono"
                        style={{ background: 'var(--brand-glow)', color: 'var(--brand)' }}
                      >
                        {edu.score}
                      </span>
                    </div>
                    <span
                      className="text-xs font-mono flex-shrink-0 mt-1"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      {edu.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
