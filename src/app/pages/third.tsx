"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IconBus,
  IconDeviceGamepad,
  IconExternalLink,
  IconPhoto,
  IconPaw,
  IconSchool,
  IconSpy,
  IconFileText,
} from "@tabler/icons-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import ImageModal from "../../components/ImageModal";
import styles from "./third.module.css";

interface Project {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  /** External link (e.g. live site, repo) */
  link?: string;
  /** Image paths in /public — e.g. ["/projects/parapo-1.png", "/projects/parapo-2.png"] */
  images?: string[];
}

const projects: Project[] = [
  {
    icon: <IconBus size={24} />,
    title: "Para Po",
    category: "Mobile App",
    description:
      "A commuter-focused mobile app providing real-time, community-driven updates on traffic, routes, and road conditions to make daily travel smarter and less stressful.",
    tags: ["Flutter", "Firebase", "Maps API", "Real-time Data"],
    color: "#c2410c",
    // link: "https://harvard-resume-builder-rrennth.vercel.app/",
    // images: ["/projects/parapo-1.png", "/projects/parapo-2.png"],
  },
  {
    icon: <IconDeviceGamepad size={24} />,
    title: "Social Circle",
    category: "Game Development",
    description:
      "An educational RPG set during the pandemic, blending storytelling and gameplay to teach health protocols and decision-making through immersive quests.",
    tags: ["Unity", "C#", "Game Design", "Narrative Systems"],
    color: "#15803d",
    // link: "https://harvard-resume-builder-rrennth.vercel.app/",
    // images: ["/projects/parapo-1.png", "/projects/parapo-2.png"],
  },
  {
    icon: <IconPaw size={24} />,
    title: "Pawtrol",
    category: "Web App",
    description:
      "A platform connecting pet owners and veterinarians, featuring AI-assisted symptom checking, appointment coordination, and pet care guidance.",
    tags: ["Next.js", "AI Integration", "Node.js", "MongoDB"],
    color: "#7c3aed",
    link: "https://pawtrol-rrenth.vercel.app/",
    // images: ["/projects/parapo-1.png", "/projects/parapo-2.png"],
  },
  {
    icon: <IconSchool size={24} />,
    title: "UniDiscover",
    category: "Platform",
    description:
      "A LinkedIn-style platform tailored for students and institutions, helping users discover scholarships, universities, and opportunities aligned with their goals.",
    tags: ["React", "NestJS", "PostgreSQL", "Search Engine"],
    color: "#2563eb",
    // link: "https://harvard-resume-builder-rrennth.vercel.app/",
    // images: ["/projects/parapo-1.png", "/projects/parapo-2.png"],
  },
  {
    icon: <IconSpy size={24} />,
    title: "Among Words",
    category: "Web Game",
    description:
      "A multiplayer word-based social deduction game inspired by impostor mechanics, where players identify the odd one out through clever guessing and deception.",
    tags: ["WebSockets", "Node.js", "Game Logic", "Real-time"],
    color: "#dc2626",
    // link: "https://harvard-resume-builder-rrennth.vercel.app/",
    // images: ["/projects/parapo-1.png", "/projects/parapo-2.png"],
  },
  {
    icon: <IconFileText size={24} />,
    title: "Resume Builder",
    category: "Web App",
    description:
      "A dynamic resume builder that helps users create professional, ATS-friendly resumes with customizable templates and real-time previews.",
    tags: ["Next.js", "PDF Generation", "Form Handling", "UI/UX"],
    color: "#0f766e",
    link: "https://harvard-resume-builder-rrennth.vercel.app/",
  },
];

export default function ProjectsSection() {
  const sectionRef = useScrollReveal();
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalTitle, setModalTitle] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (images: string[], title: string) => {
    setModalImages(images);
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <>
      <section ref={sectionRef} id="projects" className={styles.section}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerContent} data-animate="from-right" data-delay="0">
              <p className={styles.sectionLabel}>SHOWCASE</p>
              <h2 className={styles.sectionTitle}>
                Featured
                <br />
                <span className={styles.titleOutline}>Projects</span>
              </h2>
              <p className={styles.sectionDesc}>
                A curated selection of projects that showcase my capabilities
                across web, mobile, and game development.
              </p>
            </div>
          </div>

          {/* Project Grid */}
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.card} data-animate data-delay={`${index * 0.08}`}>
                <div className={styles.cardTop}>
                  <div
                    className={styles.cardIcon}
                    style={{ color: project.color }}
                  >
                    {project.icon}
                  </div>
                  {/* Action buttons */}
                  <div className={styles.cardActions}>
                    {project.images && project.images.length > 0 && (
                      <button
                        className={styles.cardActionBtn}
                        onClick={() => openModal(project.images!, project.title)}
                        aria-label={`View ${project.title} screenshots`}
                        title="View screenshots"
                      >
                        <IconPhoto size={16} />
                      </button>
                    )}
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className={styles.cardActionBtn}
                        aria-label={`Visit ${project.title}`}
                        title="Visit project"
                      >
                        <IconExternalLink size={16} />
                      </Link>
                    )}
                  </div>
                </div>
                <span className={styles.cardCategory}>{project.category}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className={styles.githubCta} data-animate data-delay="0.2">
            <Link
              href="https://github.com/imWarrent"
              target="_blank"
              className={styles.githubLink}
            >
              <IconExternalLink size={18} />
              View more on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        images={modalImages}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </>
  );
}
