"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./second.module.css";

const experiences = [
  {
    role: "Software Engineer",
    company: "Career EDGE",
    period: "April 2025 — Present",
    description:
      "Building scalable web applications and internal tools using Next.js, Node.js, MongoDB, and AWS. Contributing to backend optimization, cloud infrastructure, and technical decisions across client projects.",
    tags: ["AWS", "Next.js", "Node.js", "MongoDB"],
    current: true,
  },
  {
    role: "Lead Software Engineer",
    company: "Cryptex Consulting Services Ltd Co.",
    period: "May 2024 — April 2025",
    description:
      "Led development of enterprise applications, mentored developers, and architected scalable backend and frontend solutions using NestJS, Next.js, PostgreSQL, and AWS, while actively participating in client meetings to align technical execution with business requirements.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "AWS"],
    current: false,
  },
  {
    role: "Associate Software Engineer",
    company: "Cryptex Consulting Services Ltd Co.",
    period: "May 2023 — May 2024",
    description:
      "Developed and maintained enterprise web applications, working on backend APIs, frontend features, database integrations, and production deployments in agile teams.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "AWS"],
    current: false,
  },
  {
    role: "Intern",
    company: "Cryptex Consulting Services Ltd Co.",
    period: "February 2023 — May 2023",
    description:
      "Contributed to frontend and backend development tasks while learning enterprise development workflows, Git collaboration, and agile software practices.",
    tags: ["JavaScript", "Git", "Agile"],
    current: false,
  },
];

export default function ExperienceSection() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="experience" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent} data-animate="from-left" data-delay="0">
            <p className={styles.sectionLabel}>CAREER PATH</p>
            <h2 className={styles.sectionTitle}>
              Work
              <br />
              <span className={styles.titleOutline}>Experience</span>
            </h2>
            <p className={styles.sectionDesc}>
              A journey of continuous growth — from intern to senior developer,
              each role shaping my expertise and perspective.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine} data-animate="line" data-delay="0.1" />
          {experiences.map((exp, index) => (
            <div key={index} className={styles.card} data-animate data-delay={`${0.15 + index * 0.12}`}>
              <div className={styles.cardDot}>
                {exp.current && <span className={styles.cardDotPulse} />}
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.tags}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
