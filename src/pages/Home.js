import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaTrophy, FaBookOpen } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Hero from '../components/ui/Hero';
import Card from '../components/ui/Card';
import './Home.css';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const StatsSection = styled.section`
  padding: 4rem 0;
  background: var(--background-accent);
`;

const StatsContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const StatsTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 700;
`;

const StatsSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const StatIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
`;

const FeaturesSection = styled.section`
  padding: 4rem 0;
`;

const FeaturesContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const FeaturesTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 700;
`;

const FeaturesSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const CTASection = styled.section`
  padding: 4rem 0;
  background: var(--primary-color);
  color: white;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const CTASubtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.button)`
  background: white;
  color: var(--primary-color);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const Home = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: <FaGraduationCap />,
      number: 500,
      label: t('hero.stats.students', { count: 500 }),
    },
    {
      icon: <FaUsers />,
      number: 25,
      label: t('hero.stats.teachers', { count: 25 }),
    },
    {
      icon: <FaTrophy />,
      number: 15,
      label: t('hero.stats.awards', { count: 15 }),
    },
    {
      icon: <FaBookOpen />,
      number: 25,
      label: t('hero.stats.years', { count: 25 }),
    },
  ];

  const features = [
    {
      icon: '🏗️',
      title: 'Modern Infrastructure',
      description:
        'State-of-the-art facilities with smart classrooms, laboratories, and sports complexes.',
      button: t('common.learnMore'),
    },
    {
      icon: '📚',
      title: 'Comprehensive Curriculum',
      description:
        'Well-rounded education focusing on academic excellence and character development.',
      button: t('common.learnMore'),
    },
    {
      icon: '👥',
      title: 'Individual Attention',
      description:
        'Small class sizes ensuring personalized attention and support for every student.',
      button: t('common.viewAll'),
    },
    {
      icon: '🎨',
      title: 'Extra-Curricular Activities',
      description:
        'Wide range of activities including sports, arts, music, and leadership programs.',
      button: t('common.viewAll'),
    },
    {
      icon: '🔬',
      title: 'Science & Technology',
      description:
        'Advanced laboratories and technology integration for hands-on learning experiences.',
      button: t('common.learnMore'),
    },
    {
      icon: '🎭',
      title: 'Arts & Culture',
      description:
        'Creative expression through various art forms, music, and cultural activities.',
      button: t('common.viewAll'),
    },
  ];

  return (
    <HomeContainer>
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        primaryButton={t('hero.primaryButton')}
        secondaryButton={t('hero.secondaryButton')}
        onClick={() => (window.location.href = '/admissions')}
      />

      <StatsSection>
        <StatsContent>
          <StatsTitle>{t('home.stats.title')}</StatsTitle>
          <StatsSubtitle>{t('home.stats.subtitle')}</StatsSubtitle>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <StatIcon>{stat.icon}</StatIcon>
                <StatNumber>{stat.number}+</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </StatsContent>
      </StatsSection>

      <FeaturesSection>
        <FeaturesContent>
          <FeaturesTitle>{t('home.features.title')}</FeaturesTitle>
          <FeaturesSubtitle>{t('home.features.subtitle')}</FeaturesSubtitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <Card
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                button={feature.button}
                onClick={() => {}}
                delay={index * 0.1}
              />
            ))}
          </FeaturesGrid>
        </FeaturesContent>
      </FeaturesSection>

      <CTASection>
        <CTAContent>
          <CTATitle>{t('home.cta.title')}</CTATitle>
          <CTASubtitle>{t('home.cta.subtitle')}</CTASubtitle>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = '/admissions')}
          >
            {t('home.cta.button')}
          </CTAButton>
        </CTAContent>
      </CTASection>
    </HomeContainer>
  );
};

export default Home;
