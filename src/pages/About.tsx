import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBullseye,
  FaHeart,
  FaHandshake,
  FaLightbulb,
  FaStar,
  FaUsers,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/layout/Section';

const About = () => {
  const { t } = useTranslation();

  const values = [
    { icon: <FaBullseye />, title: t('about.values.excellence.title'), description: t('about.values.excellence.description') },
    { icon: <FaHandshake />, title: t('about.values.integrity.title'), description: t('about.values.integrity.description') },
    { icon: <FaUsers />, title: t('about.values.community.title'), description: t('about.values.community.description') },
    { icon: <FaLightbulb />, title: t('about.values.innovation.title'), description: t('about.values.innovation.description') },
    { icon: <FaHeart />, title: t('about.values.compassion.title'), description: t('about.values.compassion.description') },
    { icon: <FaStar />, title: t('about.values.achievement.title'), description: t('about.values.achievement.description') },
  ];

  const timeline = [
    { year: '1998', title: t('about.timeline.foundation.title'), description: t('about.timeline.foundation.description') },
    { year: '2005', title: t('about.timeline.expansion.title'), description: t('about.timeline.expansion.description') },
    { year: '2010', title: t('about.timeline.recognition.title'), description: t('about.timeline.recognition.description') },
    { year: '2015', title: t('about.timeline.technologyIntegration.title'), description: t('about.timeline.technologyIntegration.description') },
    { year: '2020', title: t('about.timeline.digitalTransformation.title'), description: t('about.timeline.digitalTransformation.description') },
    { year: '2024', title: t('about.timeline.futureReady.title'), description: t('about.timeline.futureReady.description') },
  ];

  return (
    <div className="page">
      <PageHeader title={t('about.hero.title')} subtitle={t('about.hero.subtitle')} eyebrow={t('nav.about')} />

      <Section>
        <header className="section__header">
          <p className="section__eyebrow">{t('about.story.title')}</p>
          <h2 className="section__title">{t('about.story.title')}</h2>
          <p className="section__subtitle">{t('about.story.subtitle')}</p>
        </header>
        <div className="content-split">
          <div className="content-split__body">
            <h3>{t('about.story.legacyTitle')}</h3>
            <p>{t('about.story.legacyDescription1')}</p>
            <p>{t('about.story.legacyDescription2')}</p>
            <ul>
              <li>{t('about.story.legacyPoints.point1')}</li>
              <li>{t('about.story.legacyPoints.point2')}</li>
              <li>{t('about.story.legacyPoints.point3')}</li>
              <li>{t('about.story.legacyPoints.point4')}</li>
            </ul>
          </div>
          <div className="content-split__visual" aria-hidden>🏛️</div>
        </div>
      </Section>

      <Section variant="muted">
        <header className="section__header">
          <p className="section__eyebrow">{t('about.missionVision.title')}</p>
          <h2 className="section__title">{t('about.missionVision.title')}</h2>
          <p className="section__subtitle">{t('about.missionVision.subtitle')}</p>
        </header>
        <div className="content-split content-split--reverse">
          <div className="content-split__visual" aria-hidden>🎯</div>
          <div className="content-split__body">
            <h3>{t('about.missionVision.missionTitle')}</h3>
            <p>{t('about.missionVision.missionDescription')}</p>
            <h3>{t('about.missionVision.visionTitle')}</h3>
            <p>{t('about.missionVision.visionDescription')}</p>
          </div>
        </div>
      </Section>

      <Section>
        <header className="section__header">
          <p className="section__eyebrow">{t('about.coreValues.title')}</p>
          <h2 className="section__title">{t('about.coreValues.title')}</h2>
          <p className="section__subtitle">{t('about.coreValues.subtitle')}</p>
        </header>
        <div className="mod-grid">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              className="mod-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="mod-card__icon">{value.icon}</div>
              <h3 className="mod-card__title">{value.title}</h3>
              <p className="mod-card__text">{value.description}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <header className="section__header">
          <p className="section__eyebrow">{t('about.journey.title')}</p>
          <h2 className="section__title">{t('about.journey.title')}</h2>
          <p className="section__subtitle">{t('about.journey.subtitle')}</p>
        </header>
        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              className="timeline__item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__year">{item.year}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
