"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/config";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className="section-pad"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Portfolio</span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mt-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--fg)",
            }}
          >
            Featured <span style={{ color: "var(--brand)" }}>Projects</span>
          </h2>
          <div className="brand-line w-20 mx-auto mt-4" />
          <p className="mt-4 text-sm" style={{ color: "var(--fg-muted)" }}>
            Things I've built — add more projects in{" "}
            <code
              className="px-2 py-0.5 rounded text-xs"
              style={{ background: "var(--brand-glow)", color: "var(--brand)" }}
            >
              lib/config.js
            </code>
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card p-6 flex flex-col group"
            >
              {/* Top bar with color accent */}
              <div
                className="h-1 rounded-full mb-6 transition-all duration-300"
                style={{
                  background: `linear-gradient(90deg, ${project.color}, transparent)`,
                }}
              />

              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `${project.color}18`,
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  {project.icon}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold leading-tight mb-1"
                    style={{ color: "var(--fg)" }}
                  >
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-mono"
                      style={{
                        background: `${project.color}18`,
                        color: project.color,
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5 flex-1"
                style={{ color: "var(--fg-muted)" }}
              >
                {project.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    <CheckCircle2
                      size={14}
                      style={{ color: project.color, flexShrink: 0 }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-full font-mono border"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--fg-muted)",
                      background: "var(--bg)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-auto">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 hover:border-[var(--brand)] hover:text-[var(--brand)]"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--fg-muted)",
                      background: "var(--bg)",
                    }}
                  >
                    <Github size={15} /> GitHub
                  </a>
                )}
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      background: `${project.color}18`,
                      color: project.color,
                      border: `1px solid ${project.color}40`,
                    }}
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
                {project.live === "#" && (
                  <span
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium opacity-50 cursor-not-allowed"
                    style={{
                      background: "var(--bg)",
                      color: "var(--fg-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {/* <ExternalLink size={15} /> Coming Soon */}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href={`https://github.com/SaisreeKolagotla?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex"
          >
            <Github size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
