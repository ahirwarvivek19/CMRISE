import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaTrophy, FaBookOpen, FaClipboardCheck } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Carousel, { type CarouselSlide } from '../components/ui/Carousel';
import Section from '../components/layout/Section';
import ResultLookup from '../components/results/ResultLookup';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const carouselSlides: CarouselSlide[] = [
    {
      id: 'welcome',
      title: t('home.carousel.slide1.title'),
      subtitle: t('home.carousel.slide1.subtitle'),
      ctaLabel: t('home.carousel.slide1.cta'),
      image:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80',
    },
    {
      id: 'excellence',
      title: t('home.carousel.slide2.title'),
      subtitle: t('home.carousel.slide2.subtitle'),
      ctaLabel: t('home.carousel.slide2.cta'),
      image:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80',
    },
    {
      id: 'community',
      title: t('home.carousel.slide3.title'),
      subtitle: t('home.carousel.slide3.subtitle'),
      ctaLabel: t('home.carousel.slide3.cta'),
      image:
        'https://images.unsplash.com/photo-1427504490125-79a9ec92833f?auto=format&fit=crop&w=1600&q=80',
    },
  ];

  const handleCarouselCta = (slide: CarouselSlide) => {
    if (slide.id === 'welcome') navigate('/admissions');
    else if (slide.id === 'excellence') navigate('/academics');
    else navigate('/about');
  };

  const stats = [
    { icon: <FaGraduationCap />, number: '500+', label: t('hero.stats.students', { count: 500 }) },
    { icon: <FaUsers />, number: '25+', label: t('hero.stats.teachers', { count: 25 }) },
    { icon: <FaTrophy />, number: '15+', label: t('hero.stats.awards', { count: 15 }) },
    { icon: <FaBookOpen />, number: '25+', label: t('hero.stats.years', { count: 25 }) },
  ];

  const features = [
    {
      icon: '🏛️',
      title: t('home.features.items.infrastructure.title'),
      text: t('home.features.items.infrastructure.text'),
    },
    {
      icon: '📚',
      title: t('home.features.items.curriculum.title'),
      text: t('home.features.items.curriculum.text'),
    },
    {
      icon: '🤝',
      title: t('home.features.items.attention.title'),
      text: t('home.features.items.attention.text'),
    },
    {
      icon: '🎨',
      title: t('home.features.items.activities.title'),
      text: t('home.features.items.activities.text'),
    },
    {
      icon: '🔬',
      title: t('home.features.items.science.title'),
      text: t('home.features.items.science.text'),
    },
    {
      icon: '🎭',
      title: t('home.features.items.arts.title'),
      text: t('home.features.items.arts.text'),
    },
  ];

  return (
    <div className="home">
      <Carousel slides={carouselSlides} onCtaClick={handleCarouselCta} />

      <Section variant="muted">
        <header className="section__header">
          <p className="section__eyebrow">{t('home.stats.eyebrow')}</p>
          <h2 className="section__title">{t('home.stats.title')}</h2>
          <p className="section__subtitle">{t('home.stats.subtitle')}</p>
        </header>
        <div className="stat-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-tile"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="stat-tile__icon">{stat.icon}</div>
              <div className="stat-tile__value">{stat.number}</div>
              <div className="stat-tile__label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="results-preview" variant="accent">
        <div className="home-results">
          <div className="home-results__copy">
            <header className="section__header home-results__header">
              <p className="section__eyebrow">{t('home.results.eyebrow')}</p>
              <h2 className="section__title">{t('home.results.title')}</h2>
              <p className="section__subtitle">{t('home.results.subtitle')}</p>
            </header>
            <div className="home-results__icon" aria-hidden>
              <FaClipboardCheck />
            </div>
            <button type="button" className="btn btn--outline" onClick={() => navigate('/student-result')}>
              {t('home.results.fullPortal')}
            </button>
          </div>
          <div className="home-results__panel mod-card">
            <h3 className="mod-card__title">{t('home.results.quickCheck')}</h3>
            <p className="mod-card__text">{t('home.results.quickHint')}</p>
            <ResultLookup compact />
          </div>
        </div>
      </Section>

      <Section>
        <header className="section__header">
          <p className="section__eyebrow">{t('home.features.eyebrow')}</p>
          <h2 className="section__title">{t('home.features.title')}</h2>
          <p className="section__subtitle">{t('home.features.subtitle')}</p>
        </header>
        <div className="mod-grid">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              className="mod-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="mod-card__icon" aria-hidden>
                {feature.icon}
              </div>
              <h3 className="mod-card__title">{feature.title}</h3>
              <p className="mod-card__text">{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section variant="dark" className="home-cta">
        <div className="home-cta__inner">
          <h2 className="section__title">{t('home.cta.title')}</h2>
          <p className="section__subtitle">{t('home.cta.subtitle')}</p>
          <button type="button" className="btn btn--secondary" onClick={() => navigate('/admissions')}>
            {t('home.cta.button')}
          </button>
        </div>
      </Section>
    </div>
  );
};

export default Home;
