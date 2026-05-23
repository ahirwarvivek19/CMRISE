import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css';

export interface CarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  accent?: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlayMs?: number;
  onCtaClick?: (slide: CarouselSlide) => void;
}

const Carousel: React.FC<CarouselProps> = ({ slides, autoPlayMs = 6000, onCtaClick }) => {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex((next + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (count <= 1 || autoPlayMs <= 0) return undefined;
    const timer = window.setInterval(next, autoPlayMs);
    return () => window.clearInterval(timer);
  }, [autoPlayMs, count, next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  if (count === 0) return null;

  const slide = slides[index];

  return (
    <section className="carousel" aria-roledescription="carousel" aria-label="Featured highlights">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="carousel__slide"
          style={{
            backgroundImage: slide.image
              ? `linear-gradient(105deg, rgba(0, 29, 57, 0.9) 0%, rgba(10, 65, 116, 0.65) 45%, rgba(78, 142, 162, 0.4) 100%), url(${slide.image})`
              : undefined,
            backgroundColor: slide.accent || 'var(--color-primary)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="carousel__inner container">
            <p className="carousel__eyebrow">Sandipani Vidyalaya</p>
            <h1 className="carousel__title">{slide.title}</h1>
            <p className="carousel__subtitle">{slide.subtitle}</p>
            {slide.ctaLabel && (
              <button
                type="button"
                className="btn btn--light carousel__cta"
                onClick={() => onCtaClick?.(slide)}
              >
                {slide.ctaLabel}
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {count > 1 && (
        <>
          <button
            type="button"
            className="carousel__nav carousel__nav--prev"
            onClick={prev}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            className="carousel__nav carousel__nav--next"
            onClick={next}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
          <div className="carousel__dots" role="tablist" aria-label="Slide navigation">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}: ${s.title}`}
                className={`carousel__dot${i === index ? ' carousel__dot--active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Carousel;
