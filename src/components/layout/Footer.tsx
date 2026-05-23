import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__col">
          <h3 className="site-footer__title">{t('footer.quickLinks')}</h3>
          <ul className="site-footer__links">
            <li><Link to="/">{t('nav.home')}</Link></li>
            <li><Link to="/about">{t('nav.about')}</Link></li>
            <li><Link to="/academics">{t('nav.academics')}</Link></li>
            <li><Link to="/facilities">{t('nav.facilities')}</Link></li>
            <li><Link to="/admissions">{t('nav.admissions')}</Link></li>
            <li><Link to="/student-result">{t('nav.results')}</Link></li>
            <li><Link to="/contact">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__title">{t('footer.academicLinks')}</h3>
          <ul className="site-footer__links">
            <li><Link to="/academics#primary">{t('academics.programs.primary.title')}</Link></li>
            <li><Link to="/academics#secondary">{t('academics.programs.secondary.title')}</Link></li>
            <li><Link to="/academics#higher">{t('academics.programs.higherSecondary.title')}</Link></li>
            <li><Link to="/academics#curriculum">{t('academics.curriculum.title')}</Link></li>
            <li><Link to="/academics#activities">{t('academics.activities.title')}</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__title">{t('footer.contactInfo')}</h3>
          <div className="site-footer__contact">
            <p><FaMapMarkerAlt aria-hidden /> {t('header.address')}</p>
            <p><FaPhone aria-hidden /> {t('header.phone')}</p>
            <p><FaEnvelope aria-hidden /> {t('header.email')}</p>
          </div>
          <div className="site-footer__social">
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

        <div className="site-footer__col">
          <h3 className="site-footer__title">{t('footer.importantLinks')}</h3>
          <ul className="site-footer__links">
            <li><Link to="/student-result">{t('footer.links.results')}</Link></li>
            <li><Link to="/admissions">{t('nav.admissions')}</Link></li>
            <li><Link to="/staff">{t('nav.staff')}</Link></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bar">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Sandipani Vidyalaya. {t('footer.copyright')} |{' '}
            {t('footer.poweredBy')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
