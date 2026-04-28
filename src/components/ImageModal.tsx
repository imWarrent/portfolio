"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import styles from "./ImageModal.module.css";

interface ImageModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function ImageModal({ images, isOpen, onClose, title }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) {
      setCurrentIndex(0);
      return;
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose, goNext, goPrev]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.title}>
            {title && <span>{title}</span>}
            {images.length > 1 && (
              <span className={styles.counter}>
                {currentIndex + 1} / {images.length}
              </span>
            )}
          </span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <IconX size={20} />
          </button>
        </div>

        {/* Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={images[currentIndex]}
            alt={`${title || "Project"} screenshot ${currentIndex + 1}`}
            fill
            style={{ objectFit: "contain" }}
            sizes="90vw"
            priority
          />
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={goPrev} aria-label="Previous">
              <IconChevronLeft size={24} />
            </button>
            <button className={`${styles.navBtn} ${styles.navNext}`} onClick={goNext} aria-label="Next">
              <IconChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className={styles.dots}>
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ""}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
