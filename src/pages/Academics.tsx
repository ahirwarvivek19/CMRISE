import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaBookOpen,
  FaFutbol,
  FaMusic,
  FaPalette,
  FaLaptop,
  FaMicroscope,
  FaGlobe,
  FaUsers,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/layout/Section';

const Academics = () => {
  const { t } = useTranslation();

  const programs = [
    {
      icon: '👶',
      title: t('academics.programs.primary.title'),
      subtitle: t('academics.programs.primary.subtitle'),
      description: t('academics.programs.primary.description'),
      features: [
        t('academics.programs.primary.features.interactive'),
        t('academics.programs.primary.features.activityBased'),
        t('academics.programs.primary.features.characterBuilding'),
        t('academics.programs.primary.features.basicComputerSkills'),
        t('academics.programs.primary.features.physicalEducation'),
      ],
    },
    {
      icon: '🎓',
      title: t('academics.programs.secondary.title'),
      subtitle: t('academics.programs.secondary.subtitle'),
      description: t('academics.programs.secondary.description'),
      features: [
        t('academics.programs.secondary.features.coreSubjects'),
        t('academics.programs.secondary.features.practicalLearning'),
        t('academics.programs.secondary.features.creativeArts'),
        t('academics.programs.secondary.features.sportsPhysicalDevelopment'),
        t('academics.programs.secondary.features.technologyIntegration'),
      ],
    },
    {
      icon: '🏆',
      title: t('academics.programs.higherSecondary.title'),
      subtitle: t('academics.programs.higherSecondary.subtitle'),
      description: t('academics.programs.higherSecondary.description'),
      features: [
        t('academics.programs.higherSecondary.features.scienceCommerceArts'),
        t('academics.programs.higherSecondary.features.advancedLaboratoryFacilities'),
        t('academics.programs.higherSecondary.features.careerCounselingGuidance'),
        t('academics.programs.higherSecondary.features.competitiveExamPreparation'),
        t('academics.programs.higherSecondary.features.leadershipDevelopment'),
      ],
    },
  ];

  const subjects = [
    { icon: <FaBookOpen />, title: t('academics.subjects.languages.title'), description: t('academics.subjects.languages.description') },
    { icon: <FaMicroscope />, title: t('academics.subjects.mathematics.title'), description: t('academics.subjects.mathematics.description') },
    { icon: <FaMicroscope />, title: t('academics.subjects.sciences.title'), description: t('academics.subjects.sciences.description') },
    { icon: <FaGlobe />, title: t('academics.subjects.socialStudies.title'), description: t('academics.subjects.socialStudies.description') },
    { icon: <FaLaptop />, title: t('academics.subjects.computerScience.title'), description: t('academics.subjects.computerScience.description') },
    { icon: <FaPalette />, title: t('academics.subjects.artsCrafts.title'), description: t('academics.subjects.artsCrafts.description') },
  ];

  const activities = [
    { icon: <FaFutbol />, title: t('academics.activities.sports.title'), description: t('academics.activities.sports.description') },
    { icon: <FaMusic />, title: t('academics.activities.music.title'), description: t('academics.activities.music.description') },
    { icon: <FaPalette />, title: t('academics.activities.visualArts.title'), description: t('academics.activities.visualArts.description') },
    { icon: <FaGraduationCap />, title: t('academics.activities.academicClubs.title'), description: t('academics.activities.academicClubs.description') },
    { icon: <FaUsers />, title: t('academics.activities.leadershipPrograms.title'), description: t('academics.activities.leadershipPrograms.description') },
    { icon: <FaLaptop />, title: t('academics.activities.technologyInnovation.title'), description: t('academics.activities.technologyInnovation.description') },
  ];

  return (
    <div className="page">
      <PageHeader
        eyebrow={t('nav.academics')}
        title={t('academics.hero.title')}
        subtitle={t('academics.hero.subtitle')}
      />

      <Section id="programs">
        <header className="section__header">
          <p className="section__eyebrow">{t('academics.programs.title')}</p>
          <h2 className="section__title">{t('academics.programs.title')}</h2>
          <p className="section__subtitle">{t('academics.programs.subtitle')}</p>
        </header>
        <div className="program-grid">
          {programs.map((program, index) => (
            <motion.article
              key={program.title}
              className="program-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="program-card__head">
                <div className="program-card__icon">{program.icon}</div>
                <h3 className="program-card__title">{program.title}</h3>
                <p className="program-card__subtitle">{program.subtitle}</p>
              </div>
              <div className="program-card__body">
                <p>{program.description}</p>
                <ul>
                  {program.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section variant="muted" id="curriculum">
        <header className="section__header">
          <p className="section__eyebrow">{t('academics.curriculum.title')}</p>
          <h2 className="section__title">{t('academics.curriculum.title')}</h2>
          <p className="section__subtitle">{t('academics.curriculum.subtitle')}</p>
        </header>
        <div className="panel-inset">
          <div className="mod-grid">
            {subjects.map((subject, index) => (
              <motion.article
                key={subject.title}
                className="mod-card"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="mod-card__icon">{subject.icon}</div>
                <h3 className="mod-card__title">{subject.title}</h3>
                <p className="mod-card__text">{subject.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="activities">
        <header className="section__header">
          <p className="section__eyebrow">{t('academics.activities.sports.title')}</p>
          <h2 className="section__title">{t('academics.activities.title')}</h2>
          <p className="section__subtitle">{t('academics.activities.subtitle')}</p>
        </header>
        <div className="mod-grid">
          {activities.map((activity, index) => (
            <motion.article
              key={activity.title}
              className="mod-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="mod-card__icon">{activity.icon}</div>
              <h3 className="mod-card__title">{activity.title}</h3>
              <p className="mod-card__text">{activity.description}</p>
            </motion.article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Academics;
