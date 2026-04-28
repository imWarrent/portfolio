"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Scroll direction detection
      setHidden(currentY > lastScrollY.current && currentY > 100);
      setScrolled(currentY > 50);
      lastScrollY.current = currentY;

      // Progress bar
      setScrollProgress((currentY / totalHeight) * 100);

      // Active section detection
      const sections = navLinks.map((link) =>
        document.querySelector(link.href.replace("#", "#"))
      );
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement | null;
        if (section && section.offsetTop - 150 <= currentY) {
          setActiveSection(navLinks[i].href.replace("#", ""));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${
        hidden ? styles.hidden : ""
      }`}
    >
      <div className={styles.inner}>
        <Link href="#about" className={styles.logo}>
          <span className={styles.logoAccent}>W</span>arrent
          <span className={styles.logoDot}>.</span>
        </Link>

        {/* Desktop Nav */}
        <div className={styles.links}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${
                activeSection === link.href.replace("#", "")
                  ? styles.linkActive
                  : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
              <span className={styles.linkUnderline} />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          mobileOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Scroll Progress */}
      <div className={styles.progressTrack}>
        <div
          className={styles.progressBar}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}
