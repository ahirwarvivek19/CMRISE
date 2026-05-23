import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaBullseye,
  FaHeart,
  FaHandshake,
  FaLightbulb,
  FaStar,
  FaUsers,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './About.css';

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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentText = styled.div`
  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-family: 'Poppins', sans-serif;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
    font-size: 1.125rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 1.5rem;
  }

  li {
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
  }
`;

const ContentImage = styled.div`
  background: var(--background-accent);
  height: 400px;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--primary-color);

  @media (max-width: 768px) {
    height: 300px;
    font-size: 3rem;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const ValueCard = styled(motion.div)`
  background: var(--background-primary);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  text-align: center;
  border: 1px solid var(--border-color);

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
  }
`;

const ValueIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`;

const ValueDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Timeline = styled.div`
  position: relative;
  margin: 3rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--primary-color);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 2rem;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;

  &:nth-child(odd) {
    .timeline-content {
      margin-left: 50%;
      padding-left: 3rem;

      @media (max-width: 768px) {
        margin-left: 4rem;
        padding-left: 1rem;
      }
    }

    .timeline-dot {
      left: 50%;
      transform: translateX(-50%);

      @media (max-width: 768px) {
        left: 2rem;
        transform: none;
      }
    }
  }

  &:nth-child(even) {
    .timeline-content {
      margin-right: 50%;
      padding-right: 3rem;
      text-align: right;

      @media (max-width: 768px) {
        margin-right: 4rem;
        padding-right: 1rem;
        text-align: left;
      }
    }

    .timeline-dot {
      right: 50%;
      transform: translateX(50%);

      @media (max-width: 768px) {
        right: auto;
        left: 2rem;
        transform: none;
      }
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: var(--shadow-sm);
`;

const TimelineContent = styled.div`
  background: var(--background-primary);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);

  h4 {
    color: var(--primary-color);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-family: 'Poppins', sans-serif;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .year {
    color: var(--secondary-color);
    font-weight: 600;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const About = () => {
  const { t } = useTranslation();
  const values = [
    {
      icon: <FaBullseye />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
    },
    {
      icon: <FaHandshake />,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description'),
    },
    {
      icon: <FaUsers />,
      title: t('about.values.community.title'),
      description: t('about.values.community.description'),
    },
    {
      icon: <FaLightbulb />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
    },
    {
      icon: <FaHeart />,
      title: t('about.values.compassion.title'),
      description: t('about.values.compassion.description'),
    },
    {
      icon: <FaStar />,
      title: t('about.values.achievement.title'),
      description: t('about.values.achievement.description'),
    },
  ];

  const timeline = [
    {
      year: '1998',
      title: t('about.timeline.foundation.title'),
      description: t('about.timeline.foundation.description'),
    },
    {
      year: '2005',
      title: t('about.timeline.expansion.title'),
      description: t('about.timeline.expansion.description'),
    },
    {
      year: '2010',
      title: t('about.timeline.recognition.title'),
      description: t('about.timeline.recognition.description'),
    },
    {
      year: '2015',
      title: t('about.timeline.technologyIntegration.title'),
      description: t('about.timeline.technologyIntegration.description'),
    },
    {
      year: '2020',
      title: t('about.timeline.digitalTransformation.title'),
      description: t('about.timeline.digitalTransformation.description'),
    },
    {
      year: '2024',
      title: t('about.timeline.futureReady.title'),
      description: t('about.timeline.futureReady.description'),
    },
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>{t('about.hero.title')}</HeroTitle>
            <HeroSubtitle>{t('about.hero.subtitle')}</HeroSubtitle>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>{t('about.story.title')}</SectionTitle>
          <SectionSubtitle>{t('about.story.subtitle')}</SectionSubtitle>

          <ContentGrid>
            <ContentText>
              <h3>{t('about.story.legacyTitle')}</h3>
              <p>{t('about.story.legacyDescription1')}</p>
              <p>{t('about.story.legacyDescription2')}</p>
              <ul>
                <li>{t('about.story.legacyPoints.point1')}</li>
                <li>{t('about.story.legacyPoints.point2')}</li>
                <li>{t('about.story.legacyPoints.point3')}</li>
                <li>{t('about.story.legacyPoints.point4')}</li>
              </ul>
            </ContentText>
            <ContentImage>🏛️</ContentImage>
          </ContentGrid>
        </Container>
      </Section>

      <Section style={{ background: 'var(--background-secondary)' }}>
        <Container>
          <SectionTitle>{t('about.missionVision.title')}</SectionTitle>
          <SectionSubtitle>{t('about.missionVision.subtitle')}</SectionSubtitle>

          <ContentGrid>
            <ContentImage>🎯</ContentImage>
            <ContentText>
              <h3>{t('about.missionVision.missionTitle')}</h3>
              <p>{t('about.missionVision.missionDescription')}</p>

              <h3>{t('about.missionVision.visionTitle')}</h3>
              <p>{t('about.missionVision.visionDescription')}</p>
            </ContentText>
          </ContentGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>{t('about.coreValues.title')}</SectionTitle>
          <SectionSubtitle>{t('about.coreValues.subtitle')}</SectionSubtitle>

          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Container>
      </Section>

      <Section style={{ background: 'var(--background-secondary)' }}>
        <Container>
          <SectionTitle>{t('about.journey.title')}</SectionTitle>
          <SectionSubtitle>{t('about.journey.subtitle')}</SectionSubtitle>

          <Timeline>
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TimelineDot className='timeline-dot' />
                <TimelineContent className='timeline-content'>
                  <div className='year'>{item.year}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default About;
