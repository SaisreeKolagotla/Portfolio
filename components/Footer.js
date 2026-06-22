"use client";
import { motion } from "framer-motion";
import { personal, social } from "@/lib/config";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const year = new Date().getFullYear();

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className="relative border-t"
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
    >
      {/* Top brand line */}
      <div className="brand-line" />

      <div className="max-w-6xl px-6 py-12 mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 mb-2 md:justify-start">
              <div
                className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-lg"
                style={{ background: "var(--brand)" }}
              >
                KG
              </div>
              <span
                className="text-lg font-bold"
                style={{ color: "var(--fg)" }}
              >
                Saisree<span style={{ color: "var(--brand)" }}>.</span>
              </span>
            </div>
            <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
              Data Analyst · Python · SQL · Data Analytics
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm transition-colors hover:text-[var(--brand)]"
                style={{ color: "var(--fg-muted)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social + scroll top */}
          <div className="flex items-center gap-3">
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all hover:border-[var(--brand)] hover:text-[var(--brand)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg-muted)",
                  background: "var(--card)",
                }}
              >
                <Github size={16} />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all hover:border-[var(--brand)] hover:text-[var(--brand)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg-muted)",
                  background: "var(--card)",
                }}
              >
                <Linkedin size={16} />
              </a>
            )}
            <a
              href={`mailto:${personal.email}`}
              className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all hover:border-[var(--brand)] hover:text-[var(--brand)]"
              style={{
                borderColor: "var(--border)",
                color: "var(--fg-muted)",
                background: "var(--card)",
              }}
            >
              <Mail size={16} />
            </a>

            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollTop}
              className="flex items-center justify-center ml-2 transition-all border rounded-lg w-9 h-9"
              style={{
                borderColor: "var(--brand)",
                color: "var(--brand)",
                background: "var(--brand-glow)",
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col items-center justify-between gap-2 pt-6 mt-8 text-xs border-t sm:flex-row"
          style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
        >
          <span>
            © {year} {personal.name}. All rights reserved.
          </span>
          {/* <span className="flex items-center gap-1">
            Built with <Heart size={12} className="text-red-400 fill-red-400" />{" "}
            using modern analytics UI patterns
          </span> */}
        </div>
      </div>
    </footer>
  );
}
