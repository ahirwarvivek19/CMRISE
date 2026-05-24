import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import Section from '../components/layout/Section';
import './Gallery.css';

const carouselImports = import.meta.glob('../media/carousel/*.{png,jpg,jpeg,webp,avif,mp4,webm,mov}', { eager: true, query: '?url', import: 'default' });
const galleryImports = import.meta.glob('../media/gallery/*.{png,jpg,jpeg,webp,avif,mp4,webm,mov}', { eager: true, query: '?url', import: 'default' });

const mediaItems = [
  ...Object.values(carouselImports),
  ...Object.values(galleryImports)
].map((src: unknown, index) => ({
  id: index,
  src: src as string,
  alt: `Gallery Media ${index + 1}`
}));

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src.split('?')[0]);

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="gallery-page">
      <Section variant="muted">
        <header className="section__header">
          <p className="section__eyebrow">Sandipani Vidyalaya</p>
          <h1 className="section__title">{t('nav.gallery')}</h1>
          <p className="section__subtitle">Memories and highlights from our school.</p>
        </header>

        <div className="gallery-grid">
          {mediaItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.1 }}
              onClick={() => setSelectedImage(item.src)}
            >
              {isVideo(item.src) ? (
                <video 
                  src={item.src} 
                  className="gallery-image" 
                  muted 
                  loop 
                  playsInline 
                  autoPlay 
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="gallery-image" 
                  loading="lazy" 
                />
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button 
              type="button" 
              className="lightbox-close" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            
            {isVideo(selectedImage) ? (
              <motion.video
                src={selectedImage}
                className="lightbox-image"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                controls
                autoPlay
              >
                <track kind="captions" srcLang="en" label="English" />
              </motion.video>
            ) : (
              <motion.img
                src={selectedImage}
                alt="Fullscreen view"
                className="lightbox-image"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
