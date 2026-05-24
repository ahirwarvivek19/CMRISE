import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/layout/Section';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="page">
      <PageHeader
        eyebrow={t('nav.contact')}
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.subtitle')}
      />

      <Section variant="muted">
        <header className="section__header">
          <p className="section__eyebrow">{t('contact.section.title')}</p>
          <h2 className="section__title">{t('contact.section.title')}</h2>
          <p className="section__subtitle">{t('contact.section.subtitle')}</p>
        </header>

        <div className="contact-split">
          <div className="contact-map">
            <iframe
              title={t('contact.map.title')}
              src="https://maps.google.com/maps?q=SANDIPANI%20GOVT.%20H.S.S.%20MAHARAJWADA%20NO.3%20UJJAIN,%20Daudkhedi,%20Ujjain,%20M.P.%20456006&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="contact-panel">
            <div className="contact-row">
              <FaMapMarkerAlt aria-hidden />
              <div>
                <h4>{t('contact.info.address.title')}</h4>
                <p>{t('contact.info.address.description')}</p>
              </div>
            </div>
            <div className="contact-row">
              <FaPhone aria-hidden />
              <div>
                <h4>{t('contact.info.phone.title')}</h4>
                <p>{t('header.phone')}</p>
              </div>
            </div>
            <div className="contact-row">
              <FaEnvelope aria-hidden />
              <div>
                <h4>{t('contact.info.email.title')}</h4>
                <p>{t('header.email')}</p>
              </div>
            </div>
            <div className="contact-row">
              <FaClock aria-hidden />
              <div>
                <h4>{t('contact.info.hours.title')}</h4>
                <p>{t('contact.info.hours.description')}</p>
              </div>
            </div>

            <div className="contact-social">
              <h4>{t('contact.social.title')}</h4>
              <div className="contact-social__links">
                <a
                  href="https://www.facebook.com/profile.php?id=100084242721730"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
