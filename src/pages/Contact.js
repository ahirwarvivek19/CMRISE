import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const PageContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Section = styled.section`
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MapColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ContactInfo = styled.div`
  background: var(--background-secondary);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--background-primary);
  border-radius: var(--border-radius);
  
  svg {
    color: var(--primary-color);
    font-size: 1.5rem;
    flex-shrink: 0;
  }
`;

const ContactText = styled.div`
  h4 {
    color: var(--text-primary);
    font-weight: 600;
    margin-bottom: 0.25rem;
    font-family: 'Poppins', sans-serif;
  }
  
  p {
    color: var(--text-secondary);
    margin: 0;
    white-space: pre-line;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: var(--transition);
  
  &:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

const MapContainer = styled.div`
  background: var(--background-accent);
  width: 100%;
  height: 400px;
  border-radius: var(--border-radius);
  overflow: hidden;
  border: 1px solid var(--border-color);
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>{t('contact.hero.title')}</HeroTitle>
            <HeroSubtitle>
              {t('contact.hero.subtitle')}
            </HeroSubtitle>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>{t('contact.section.title')}</SectionTitle>
          <SectionSubtitle>
            {t('contact.section.subtitle')}
          </SectionSubtitle>
          
          <ContactGrid>
            <MapColumn>
              <MapContainer>
                <MapFrame
                  title={t('contact.map.title')}
                  src='https://maps.google.com/maps?q=SANDIPANI%20GOVT.%20H.S.S.%20MAHARAJWADA%20NO.3%20UJJAIN,%20Daudkhedi,%20Ujjain,%20M.P.%20456010&z=16&output=embed'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  allowFullScreen
                />
              </MapContainer>
            </MapColumn>
            
            <ContactInfo>
              <ContactItem>
                <FaMapMarkerAlt />
                <ContactText>
                  <h4>{t('contact.info.address.title')}</h4>
                  <p>{t('contact.info.address.description')}</p>
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <FaPhone />
                <ContactText>
                  <h4>{t('contact.info.phone.title')}</h4>
                  <p>+91 1234567890</p>
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <FaEnvelope />
                <ContactText>
                  <h4>{t('contact.info.email.title')}</h4>
                  <p>maharajwada.no.3@gmail.com</p>
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <FaClock />
                <ContactText>
                  <h4>{t('contact.info.hours.title')}</h4>
                  <p>{t('contact.info.hours.description')}</p>
                </ContactText>
              </ContactItem>
              
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>{t('contact.social.title')}</h4>
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
              </div>
            </ContactInfo>
          </ContactGrid>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Contact;
