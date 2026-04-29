"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { personal, social } from "@/lib/config";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] },
});

const techStack = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Redux Toolkit",
  "Tailwind CSS",
];

export default function Hero() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.025) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(56,189,248,0.025) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Left ambient glow */}
      <div
        className="absolute top-1/4 -left-40 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Right ambient glow */}
      <div
        className="absolute -bottom-10 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 py-28 w-full">
        <div
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          style={{ minHeight: "78vh" }}
        >
          {/* ── LEFT ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}
            <motion.div {...fadeUp(0.05)} className="mb-7">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs border"
                style={{
                  background: "rgba(56,189,248,0.06)",
                  borderColor: "rgba(56,189,248,0.22)",
                  color: "var(--brand)",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name — Playfair Display */}
            <motion.h1
              {...fadeUp(0.12)}
              className="mb-5"
              style={{ lineHeight: 1.05 }}
            >
              <span
                className="block"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.8rem, 5.8vw, 5rem)",
                  color: "var(--fg)",
                  letterSpacing: "-0.01em",
                }}
              >
                {personal.name.split(" ")[0]}
              </span>
              <span
                className="block"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.8rem, 5.8vw, 5rem)",
                  letterSpacing: "-0.01em",
                  background:
                    "linear-gradient(135deg, #38bdf8 0%, #818cf8 55%, #f472b6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {personal.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            {/* Role */}
            <motion.div
              {...fadeUp(0.2)}
              className="flex items-center gap-3 mb-5"
            >
              <div
                className="w-8 h-0.5 rounded-full flex-shrink-0"
                style={{ background: "var(--brand)" }}
              />
              <span
                className="text-sm sm:text-base font-medium"
                style={{
                  color: "var(--fg-muted)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {personal.role} &middot; {personal.roleHighlight}
              </span>
            </motion.div>

            {/* Tagline — Inter */}
            <motion.p
              {...fadeUp(0.27)}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-[460px]"
              style={{
                color: "var(--fg-muted)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              {personal.tagline}
            </motion.p>

            {/* Tech pills */}
            <motion.div {...fadeUp(0.33)} className="flex flex-wrap gap-2 mb-9">
              {techStack.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.38 + i * 0.055 }}
                  whileHover={{ y: -2 }}
                  className="px-3 py-1.5 text-xs rounded-lg border cursor-default select-none"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--fg-muted)",
                    background: "var(--card)",
                    fontFamily: "'DM Mono', monospace",
                    transition: "all 0.18s ease",
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.41)}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#projects");
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #38bdf8, #6366f1)",
                  boxShadow: "0 8px 28px rgba(56,189,248,0.22)",
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: "none",
                }}
              >
                View Projects <ArrowRight size={15} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={personal.resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg)",
                  background: "var(--card)",
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: "none",
                }}
              >
                <Download size={15} /> Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#contact");
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg)",
                  background: "var(--card)",
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: "none",
                }}
              >
                <Mail size={15} /> Contact
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div {...fadeUp(0.48)} className="flex items-center gap-4">
              <div
                className="h-px w-10"
                style={{ background: "var(--border)" }}
              />
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social"
                >
                  <Github size={17} />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social"
                >
                  <Linkedin size={17} />
                </a>
              )}
              <a href={`mailto:${personal.email}`} className="hero-social">
                <Mail size={17} />
              </a>
              <div
                className="h-px w-10"
                style={{ background: "var(--border)" }}
              />
            </motion.div>
          </div>

          {/* ── RIGHT — Clean circular image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.85,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            {/* Soft outer glow behind circle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                style={{
                  width: "75%",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(56,189,248,0.14) 0%, rgba(99,102,241,0.08) 50%, transparent 75%)",
                  filter: "blur(32px)",
                }}
              />
            </div>

            {/* Circle container */}
            <div
              className="relative"
              style={{ width: "min(100%, 420px)", aspectRatio: "1" }}
            >
              {/* Spinning gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(56,189,248,0.5), rgba(139,92,246,0.4), rgba(244,114,182,0.3), transparent, rgba(56,189,248,0.5))",
                  padding: "2px",
                  borderRadius: "50%",
                }}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ background: "var(--bg)" }}
                />
              </motion.div>

              {/* Static subtle border ring */}
              <div
                className="absolute inset-[3px] rounded-full pointer-events-none"
                style={{
                  border: "1px solid rgba(56,189,248,0.15)",
                }}
              />

              {/* The photo — clean circle */}
              <div
                className="absolute inset-[4px] rounded-full overflow-hidden"
                style={{
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <Image
                  src={personal.photo}
                  alt={personal.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 42vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 5%",
                  }}
                />
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-2 -right-6 z-10 flex items-center gap-2 px-3 py-2 rounded-xl text-xs border shadow-xl"
                style={{
                  background: "rgba(10,14,22,0.90)",
                  borderColor: "rgba(56,189,248,0.3)",
                  color: "#38bdf8",
                  fontFamily: "'DM Mono', monospace",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.45)",
                }}
              >
                <span style={{ color: "#34d399" }}>◆</span> Next.js Dev
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="absolute -bottom-2 -left-6 z-10 flex items-center gap-2 px-3 py-2 rounded-xl text-xs border shadow-xl"
                style={{
                  background: "rgba(10,14,22,0.90)",
                  borderColor: "rgba(139,92,246,0.35)",
                  color: "#a78bfa",
                  fontFamily: "'DM Mono', monospace",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.45)",
                }}
              >
                ✦ React.js
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 flex flex-col items-center gap-1.5"
          style={{ transform: "translateX(-50%)", color: "var(--fg-muted)" }}
        >
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={15} />
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-social {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--card);
          border: 1px solid var(--border);
          color: var(--fg-muted);
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .hero-social:hover {
          border-color: var(--brand);
          color: var(--brand);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(56, 189, 248, 0.15);
        }
      `}</style>
    </section>
  );
}
