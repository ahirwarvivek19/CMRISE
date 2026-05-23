import React from 'react';
import { motion } from 'framer-motion';
import { FaWifi, FaShieldAlt, FaBus, FaSeedling, FaBook, FaGraduationCap } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/layout/Section';

const Facilities = () => {
  const { t } = useTranslation();

  const facilities = [
    {
      icon: '🏫',
      title: t('facilities.smart_classrooms.title'),
      description: t('facilities.smart_classrooms.description'),
      features: Object.values(t('facilities.smart_classrooms.features', { returnObjects: true }) as Record<string, string>),
    },
    {
      icon: '🔬',
      title: t('facilities.science_laboratories.title'),
      description: t('facilities.science_laboratories.description'),
      features: Object.values(t('facilities.science_laboratories.features', { returnObjects: true }) as Record<string, string>),
    },
    {
      icon: '💻',
      title: t('facilities.computer_lab.title'),
      description: t('facilities.computer_lab.description'),
      features: Object.values(t('facilities.computer_lab.features', { returnObjects: true }) as Record<string, string>),
    },
    {
      icon: '📚',
      title: t('facilities.library_resource_center.title'),
      description: t('facilities.library_resource_center.description'),
      features: Object.values(t('facilities.library_resource_center.features', { returnObjects: true }) as Record<string, string>),
    },
    {
      icon: '⚽',
      title: t('facilities.sports_facilities.title'),
      description: t('facilities.sports_facilities.description'),
      features: Object.values(t('facilities.sports_facilities.features', { returnObjects: true }) as Record<string, string>),
    },
    {
      icon: '🎨',
      title: t('facilities.arts_music_rooms.title'),
      description: t('facilities.arts_music_rooms.description'),
      features: Object.values(t('facilities.arts_music_rooms.features', { returnObjects: true }) as Record<string, string>),
    },
  ];

  const infrastructure = [
    { icon: <FaWifi />, title: t('facilities.infrastructure.wifi_campus.title'), description: t('facilities.infrastructure.wifi_campus.description') },
    { icon: <FaShieldAlt />, title: t('facilities.infrastructure.security_systems.title'), description: t('facilities.infrastructure.security_systems.description') },
    { icon: <FaBus />, title: t('facilities.infrastructure.transportation.title'), description: t('facilities.infrastructure.transportation.description') },
    { icon: <FaSeedling />, title: t('facilities.infrastructure.green_campus.title'), description: t('facilities.infrastructure.green_campus.description') },
    { icon: <FaBook />, title: t('facilities.infrastructure.study_areas.title'), description: t('facilities.infrastructure.study_areas.description') },
    { icon: <FaGraduationCap />, title: t('facilities.infrastructure.digital_resources.title'), description: t('facilities.infrastructure.digital_resources.description') },
  ];

  return (
    <div className="page">
      <PageHeader
        eyebrow={t('nav.facilities')}
        title={t('facilities.hero.title')}
        subtitle={t('facilities.hero.subtitle')}
      />

      <Section>
        <header className="section__header">
          <p className="section__eyebrow">{t('facilities.overview.title')}</p>
          <h2 className="section__title">{t('facilities.overview.title')}</h2>
          <p className="section__subtitle">{t('facilities.overview.subtitle')}</p>
        </header>
        <div className="program-grid">
          {facilities.map((facility, index) => (
            <motion.article
              key={facility.title}
              className="program-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="facility-card__band" aria-hidden>
                {facility.icon}
              </div>
              <div className="program-card__body">
                <h3 className="mod-card__title" style={{ marginBottom: '0.5rem' }}>
                  {facility.title}
                </h3>
                <p>{facility.description}</p>
                <ul>
                  {facility.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <header className="section__header">
          <p className="section__eyebrow">{t('facilities.infrastructureSection.title')}</p>
          <h2 className="section__title">{t('facilities.infrastructureSection.title')}</h2>
          <p className="section__subtitle">{t('facilities.infrastructureSection.subtitle')}</p>
        </header>
        <div className="mod-grid">
          {infrastructure.map((item, index) => (
            <motion.article
              key={item.title}
              className="mod-card"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="mod-card__icon">{item.icon}</div>
              <h3 className="mod-card__title">{item.title}</h3>
              <p className="mod-card__text">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Facilities;
