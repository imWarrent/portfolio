"use client";

import Link from "next/link";
import { IconArrowDownRight } from "@tabler/icons-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./first.module.css";

export default function HeroSection() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="about" className={styles.hero}>
      {/* Background decorative elements */}
      <div className={styles.bgGrid} />
      <div className={`${styles.floatCircle} ${styles.circle1}`} />
      <div className={`${styles.floatCircle} ${styles.circle2}`} />
      <div className={`${styles.floatCircle} ${styles.circle3}`} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge} data-animate data-delay="0.1">
            <span className={styles.badgeDot} />
            AVAILABLE FOR WORK
          </div>

          {/* Name */}
          <div className={styles.nameBlock}>
            <h1 className={styles.nameRow} data-animate data-delay="0.2">
              <span className={styles.nameLight}>I&apos;m </span>
              <span className={styles.nameBold}>Warrent</span>
            </h1>
            <h1 className={styles.nameRow} data-animate data-delay="0.35">
              <span className={styles.nameOutline}>Padolina</span>
              <span className={styles.namePeriod}>.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className={styles.subtitle} data-animate data-delay="0.45">
            A passionate <span className={styles.highlight}>Software Developer</span> who
            crafts elegant solutions through clean code. Specializing in
            full-stack web development with a love for building products that
            make a difference.
          </p>

          {/* CTA */}
          <div className={styles.ctaRow} data-animate data-delay="0.55">
            <Link href="mailto:imwarrentpadolina@gmail.com" className={styles.cta}>
              Let&apos;s Talk
              <IconArrowDownRight size={18} />
            </Link>
            <Link
              href="https://github.com/imWarrent"
              target="_blank"
              className={styles.ctaOutline}
            >
              View GitHub
            </Link>
          </div>

          {/* Stats */}
          <div className={styles.statsGrid} data-animate data-delay="0.65">
            <div className={styles.stat}>
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Projects Built</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>Companies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className={styles.scrollHint} data-animate data-delay="0.8">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
