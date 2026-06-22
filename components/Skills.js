"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/config";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
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
          <span className="badge mb-4">Technical Skills</span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mt-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--fg)",
            }}
          >
            My <span style={{ color: "var(--brand)" }}>Tech Stack</span>
          </h2>
          <div className="brand-line w-20 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="card p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3
                  className="font-bold text-lg"
                  style={{ color: "var(--fg)" }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {group.items.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--fg)" }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-xs font-mono"
                        style={{ color: "var(--brand)" }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "var(--border)" }}
                    >
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: gi * 0.15 + si * 0.08 + 0.3,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-3 justify-center"
        >
          {skills
            .flatMap((g) => g.items)
            .map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.04 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 text-sm rounded-full border font-medium cursor-default"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg-muted)",
                  background: "var(--card)",
                  transition: "all 0.2s ease",
                }}
              >
                {skill.name}
              </motion.span>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
