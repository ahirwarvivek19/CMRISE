import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
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

const ContactForm = styled.form`
  background: var(--background-primary);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  width: 100%;
  
  &:hover {
    background: #1e3a8a;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  &:disabled {
    background: var(--text-secondary);
    cursor: not-allowed;
    transform: none;
  }
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

const MapSection = styled.div`
  margin: 3rem 0;
  text-align: center;
`;

const MapContainer = styled.div`
  background: var(--background-accent);
  height: 400px;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--primary-color);
  border: 1px solid var(--border-color);
  
  @media (max-width: 768px) {
    height: 300px;
    font-size: 1.5rem;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      alert('Thank you for your message! We will get back to you soon.');
    }, 1000);
  };

  const isFormValid = formData.name && formData.email && formData.message;

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
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">{t('contact.form.name.label')}</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder={t('contact.form.name.placeholder')}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">{t('contact.form.email.label')}</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder={t('contact.form.email.placeholder')}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="phone">{t('contact.form.phone.label')}</FormLabel>
                <FormInput
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.phone.placeholder')}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">{t('contact.form.subject.label')}</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.subject.placeholder')}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">{t('contact.form.message.label')}</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder={t('contact.form.message.placeholder')}
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={!isFormValid || isSubmitting}>
                {isSubmitting ? t('contact.form.submit.sending') : t('contact.form.submit.button')}
              </SubmitButton>
            </ContactForm>
            
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
                  <p>info@cmriseujjain.edu.in</p>
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
                  <SocialLink href="#" aria-label="Facebook">
                    <FaFacebook />
                  </SocialLink>
                  <SocialLink href="#" aria-label="Twitter">
                    <FaTwitter />
                  </SocialLink>
                  <SocialLink href="#" aria-label="Instagram">
                    <FaInstagram />
                  </SocialLink>
                  <SocialLink href="#" aria-label="LinkedIn">
                    <FaLinkedin />
                  </SocialLink>
                </SocialLinks>
              </div>
            </ContactInfo>
          </ContactGrid>
        </Container>
      </Section>

      <Section style={{ background: 'var(--background-secondary)' }}>
        <Container>
          <MapSection>
            <SectionTitle>{t('contact.map.title')}</SectionTitle>
            <SectionSubtitle>
              {t('contact.map.subtitle')}
            </SectionSubtitle>
            
            <MapContainer>
              🗺️ {t('contact.map.coming_soon')}
            </MapContainer>
            
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              {t('contact.map.description')}
            </p>
          </MapSection>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Contact;

