"use client";

import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
  IconArrowUp,
} from "@tabler/icons-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Footer.module.css";

const socialLinks = [
  {
    icon: <IconMail size={22} />,
    href: "mailto:imwarrentpadolina@gmail.com",
    label: "Email",
  },
  {
    icon: <IconBrandLinkedin size={22} />,
    href: "https://www.linkedin.com/in/warrent-p-6a3745243/",
    label: "LinkedIn",
  },
  {
    icon: <IconBrandGithub size={22} />,
    href: "https://github.com/imWarrent",
    label: "GitHub",
  },
  {
    icon: <IconPhone size={22} />,
    href: "#",
    label: "Phone",
    onClick: () => {
      navigator.clipboard.writeText("(+63) 956 927 2696");
    },
  },
];

export default function Footer() {
  const footerRef = useScrollReveal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} id="contact" className={styles.footer}>
      <div className={styles.topBorder} />

      <div className={styles.container}>
        {/* CTA Section */}
        <div className={styles.ctaSection} data-animate data-delay="0">
          <p className={styles.ctaLabel}>INTERESTED?</p>
          <h2 className={styles.ctaHeading}>
            Let&apos;s build something
            <span className={styles.ctaAccent}> great together.</span>
          </h2>
          <p className={styles.ctaDesc}>
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Link href="mailto:imwarrentpadolina@gmail.com" className={styles.ctaButton}>
            <IconMail size={18} />
            Get In Touch
          </Link>
        </div>

        {/* Divider */}
        <div className={styles.divider} data-animate data-delay="0.1" />

        {/* Bottom row */}
        <div className={styles.bottomRow} data-animate data-delay="0.2">
          <div className={styles.brand}>
            <p className={styles.brandName}>
              <span className={styles.brandAccent}>W</span>arrent Padolina
            </p>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} — Crafted with care
            </p>
          </div>

          <div className={styles.socials}>
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                className={styles.socialLink}
                aria-label={social.label}
                onClick={social.onClick}
              >
                {social.icon}
              </Link>
            ))}
          </div>

          <button
            className={styles.backToTop}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <IconArrowUp size={16} />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
