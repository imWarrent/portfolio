"use client";

import HeroSection from "./pages/first";
import ExperienceSection from "./pages/second";
import ProjectsSection from "./pages/third";
import SkillsSection from "./pages/fourth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <hr className="section-divider" />
        <ExperienceSection />
        <hr className="section-divider" />
        <ProjectsSection />
        <hr className="section-divider" />
        <SkillsSection />
      </main>
      <Footer />
      {/* Subtle noise texture overlay for editorial feel */}
      <div className="noise-overlay" />
    </>
  );
}
