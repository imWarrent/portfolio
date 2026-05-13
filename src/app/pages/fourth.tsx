"use client";

import {
  IconCode,
  IconServer,
  IconDatabase,
  IconCloud,
  IconTool,
  IconBrain,
} from "@tabler/icons-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./fourth.module.css";

const skillCategories = [
  {
    title: "Frontend",
    icon: <IconCode size={22} />,
    skills: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "Flutter",
      "Tailwind",
      "Bootstrap",
      "Mantine",
      "MaterialUI",
    ],
  },
  {
    title: "Backend",
    icon: <IconServer size={22} />,
    skills: ["NodeJS", "NestJS", "PHP", "C#", "Prisma", "WebSocket", "Axios"],
  },
  {
    title: "Database",
    icon: <IconDatabase size={22} />,
    skills: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "MongoDB",
      "Firebase",
      "MeiliSearch",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <IconCloud size={22} />,
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes"],
  },
  {
    title: "Tools & Workflow",
    icon: <IconTool size={22} />,
    skills: ["Git", "SourceTree", "Jira", "Agile", "Unity", "Novu"],
  },
  {
    title: "AI & LLM",
    icon: <IconBrain size={22} />,
    skills: [
      "Claude Code",
      "OpenAI Codex",
      "GitHub Copilot",
      "LLM Integration",
      "Prompt Engineering",
      "Anthropic API",
      "OpenAI API",
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="skills" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent} data-animate="from-right" data-delay="0">
            <p className={styles.sectionLabel}>TOOLKIT</p>
            <h2 className={styles.sectionTitle}>
              Skills &
              <br />
              <span className={styles.titleOutline}>Technologies</span>
            </h2>
            <p className={styles.sectionDesc}>
              A fast learner constantly seeking opportunities to expand my
              knowledge — here&apos;s a snapshot of the tools and technologies I
              bring to every project.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.categoryCard} data-animate data-delay={`${index * 0.1}`}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <span key={skill} className={styles.skillPill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
