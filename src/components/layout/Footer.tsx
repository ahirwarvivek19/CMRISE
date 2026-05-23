import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const FooterContainer = styled.footer`
  background: var(--text-primary);
  color: white;
  padding: 3rem 0 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: var(--secondary-color);
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.5rem;

  a {
    color: #d1d5db;
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      color: var(--secondary-color);
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #d1d5db;

  svg {
    color: var(--secondary-color);
    flex-shrink: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: var(--transition);

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid #374151;
  padding-top: 1rem;
  text-align: center;
  color: #9ca3af;
  font-size: 0.875rem;
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>{t('footer.quickLinks')}</h3>
            <FooterLinks>
              <FooterLink>
                <Link to='/'>{t('nav.home')}</Link>
              </FooterLink>
              <FooterLink>
                <Link to='/about'>{t('nav.about')}</Link>
              </FooterLink>
              <FooterLink>
                <Link to='/academics'>{t('nav.academics')}</Link>
              </FooterLink>
              <FooterLink>
                <Link to='/facilities'>{t('nav.facilities')}</Link>
              </FooterLink>
              <FooterLink>
                <Link to='/admissions'>{t('nav.admissions')}</Link>
              </FooterLink>
              <FooterLink>
                <Link to='/contact'>{t('nav.contact')}</Link>
              </FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>{t('footer.academicLinks')}</h3>
            <FooterLinks>
              <FooterLink>
                <Link to='/academics#primary'>
                  {t('academics.programs.primary.title')}
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to='/academics#secondary'>
                  {t('academics.programs.secondary.title')}
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to='/academics#higher'>
                  {t('academics.programs.higherSecondary.title')}
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to='/academics#curriculum'>
                  {t('academics.curriculum.title')}
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to='/academics#activities'>
                  {t('academics.activities.title')}
                </Link>
              </FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>{t('footer.contactInfo')}</h3>
            <ContactInfo>
              <ContactItem>
                <FaMapMarkerAlt />
                <span>{t('header.address')}</span>
              </ContactItem>
              <ContactItem>
                <FaPhone />
                <span>{t('header.phone')}</span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <span>{t('header.email')}</span>
              </ContactItem>
            </ContactInfo>
            <SocialLinks>
              <SocialLink
                href='https://www.facebook.com/profile.php?id=100084242721730'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialLink>
              <SocialLink
                href='https://www.youtube.com/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='YouTube'
              >
                <FaYoutube />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>{t('footer.importantLinks')}</h3>
            <FooterLinks>
              <FooterLink>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  {t('footer.links.studentPortal')}
                </a>
              </FooterLink>
              <FooterLink>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  {t('footer.links.parentPortal')}
                </a>
              </FooterLink>
              <FooterLink>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  {t('footer.links.staffPortal')}
                </a>
              </FooterLink>
              <FooterLink>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  {t('footer.links.results')}
                </a>
              </FooterLink>
              <FooterLink>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  {t('footer.links.eventsCalendar')}
                </a>
              </FooterLink>
            </FooterLinks>
          </FooterSection>
        </FooterGrid>

        <BottomBar>
          <p>
            &copy; {new Date().getFullYear()} Sandipani Vidyalaya.{' '}
            {t('footer.copyright')} | {t('footer.poweredBy')}
          </p>
        </BottomBar>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
