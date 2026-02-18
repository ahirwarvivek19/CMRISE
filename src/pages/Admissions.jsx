import React, { useState } from 'react';
import styled from 'styled-components';
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
import './Admissions.css';

const PageContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
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

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const ProcessStep = styled(motion.div)`
  background: var(--background-primary);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  text-align: center;
  border: 1px solid var(--border-color);
  position: relative;

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
  }

  &::before {
    content: '${(props) => props.stepNumber}';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-color);
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.875rem;
  }
`;

const StepIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin: 1rem 0;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`;

const StepDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const RequirementsSection = styled.div`
  background: var(--background-secondary);
  padding: 3rem;
  border-radius: var(--border-radius);
  margin: 3rem 0;
`;

const RequirementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const RequirementCard = styled(motion.div)`
  background: var(--background-primary);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
`;

const RequirementTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`;

const RequirementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RequirementItem = styled.li`
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
  }
`;

const ContactSection = styled.div`
  text-align: center;
  margin: 3rem 0;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 2rem 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-secondary);

  svg {
    color: var(--primary-color);
    font-size: 1.5rem;
  }
`;

const DownloadSection = styled.div`
  background: var(--background-accent);
  padding: 3rem;
  border-radius: var(--border-radius);
  text-align: center;
  margin: 3rem 0;
`;

const DownloadButton = styled.button`
  background: var(--secondary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 1rem;

  &:hover {
    background: #d97706;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  @media (max-width: 768px) {
    margin: 0.5rem;
    padding: 0.875rem 1.5rem;
  }
`;

const Admissions = () => {
  // Download button handlers (stub implementations)
  const handleDownloadForm = () => {
    // TODO: Implement actual download logic
    alert('Application form download not implemented yet.');
  };

  const handleDownloadBrochure = () => {
    // TODO: Implement actual download logic
    alert('School brochure download not implemented yet.');
  };
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('process');

  const processSteps = [
    {
      icon: <FaFileAlt />,
      title: t('admissions.process.steps.applicationSubmission.title'),
      description: t(
        'admissions.process.steps.applicationSubmission.description'
      ),
    },
    // Add more steps as needed
  ];

  // Requirements and other data arrays should be defined here

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>{t('admissions.hero.title')}</HeroTitle>
            <HeroSubtitle>{t('admissions.hero.subtitle')}</HeroSubtitle>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>{t('admissions.process.title')}</SectionTitle>
          <SectionSubtitle>{t('admissions.process.subtitle')}</SectionSubtitle>
          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                stepNumber={index + 1}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <StepIcon>{step.icon}</StepIcon>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ProcessStep>
            ))}
          </ProcessGrid>
          <iframe src='https://docs.google.com/spreadsheets/d/19rdKHHvGIxweD3078b-GW9U4AIBPazMpaivu83uztRg/preview'></iframe>
        </Container>
      </Section>
      {/* ...existing code for requirements, download, contact sections... */}
    </PageContainer>
  );
};

export default Admissions;
