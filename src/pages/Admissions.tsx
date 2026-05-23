import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFileAlt,
  FaDownload,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaUserGraduate,
  FaCertificate,
  FaIdCard,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/layout/Section';

const Admissions = () => {
  const { t } = useTranslation();

  const handleDownloadForm = () => {
    alert('Application form download not implemented yet.');
  };

  const handleDownloadBrochure = () => {
    alert('School brochure download not implemented yet.');
  };

  const processSteps = [
    {
      icon: <FaFileAlt />,
      title: t('admissions.process.steps.applicationSubmission.title'),
      description: t('admissions.process.steps.applicationSubmission.description'),
    },
    {
      icon: <FaCheckCircle />,
      title: t('admissions.process.steps.documentVerification.title'),
      description: t('admissions.process.steps.documentVerification.description'),
    },
    {
      icon: <FaUserGraduate />,
      title: t('admissions.process.steps.assessmentInterview.title'),
      description: t('admissions.process.steps.assessmentInterview.description'),
    },
    {
      icon: <FaCertificate />,
      title: t('admissions.process.steps.admissionConfirmation.title'),
      description: t('admissions.process.steps.admissionConfirmation.description'),
    },
  ];

  const requirements = [
    {
      icon: <FaIdCard />,
      title: t('admissions.requirements.documents.birthCertificate.title'),
      items: [t('admissions.requirements.documents.birthCertificate.description')],
    },
    {
      icon: <FaFileAlt />,
      title: t('admissions.requirements.documents.previousSchoolRecords.title'),
      items: [t('admissions.requirements.documents.previousSchoolRecords.description')],
    },
    {
      icon: <FaCheckCircle />,
      title: t('admissions.requirements.documents.addressProof.title'),
      items: [t('admissions.requirements.documents.addressProof.description')],
    },
  ];

  return (
    <div className="page">
      <PageHeader
        eyebrow={t('nav.admissions')}
        title={t('admissions.hero.title')}
        subtitle={t('admissions.hero.subtitle')}
      />

      <Section>
        <header className="section__header">
          <p className="section__eyebrow">{t('admissions.process.title')}</p>
          <h2 className="section__title">{t('admissions.process.title')}</h2>
          <p className="section__subtitle">{t('admissions.process.subtitle')}</p>
        </header>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              className="process-step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="process-step__num">{index + 1}</span>
              <div className="process-step__icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.article>
          ))}
        </div>
        <div className="sheet-embed">
          <iframe
            title="Admission information"
            src="https://docs.google.com/spreadsheets/d/19rdKHHvGIxweD3078b-GW9U4AIBPazMpaivu83uztRg/preview"
            loading="lazy"
          />
        </div>
      </Section>

      <Section variant="muted">
        <header className="section__header">
          <p className="section__eyebrow">{t('admissions.requirements.title')}</p>
          <h2 className="section__title">{t('admissions.requirements.title')}</h2>
          <p className="section__subtitle">{t('admissions.requirements.subtitle')}</p>
        </header>
        <div className="mod-grid">
          {requirements.map((req, index) => (
            <motion.article
              key={req.title}
              className="mod-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="mod-card__icon">{req.icon}</div>
              <h3 className="mod-card__title">{req.title}</h3>
              <ul className="content-split__body" style={{ listStyle: 'none', padding: 0 }}>
                {req.items.map((item) => (
                  <li key={item} style={{ color: 'var(--color-ink-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section>
        <header className="section__header">
          <p className="section__eyebrow">{t('admissions.forms.title')}</p>
          <h2 className="section__title">{t('admissions.forms.title')}</h2>
          <p className="section__subtitle">{t('admissions.forms.subtitle')}</p>
        </header>
        <div className="download-panel">
          <p className="mod-card__text">{t('admissions.forms.applicationForm.description')}</p>
          <div className="download-panel__actions">
            <button type="button" className="btn btn--secondary" onClick={handleDownloadForm}>
              <FaDownload aria-hidden /> {t('admissions.forms.applicationForm.download')}
            </button>
            <button type="button" className="btn btn--outline" onClick={handleDownloadBrochure}>
              <FaDownload aria-hidden /> {t('admissions.forms.prospectus.download')}
            </button>
          </div>
        </div>
        <div className="help-banner mod-card" style={{ marginTop: '1.5rem' }}>
          <h3 className="mod-card__title">{t('admissions.help.title')}</h3>
          <p className="mod-card__text">{t('admissions.help.subtitle')}</p>
          <div className="help-banner__contacts">
            <span className="help-banner__item">
              <FaPhone aria-hidden /> {t('admissions.help.contact.phone')}
            </span>
            <span className="help-banner__item">
              <FaEnvelope aria-hidden /> {t('admissions.help.contact.email')}
            </span>
            <span className="help-banner__item">
              <FaClock aria-hidden /> {t('admissions.help.contact.hours')}
            </span>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Admissions;
