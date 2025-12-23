import React from 'react';
import styled from 'styled-components';
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
import './Academics.css';

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

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProgramCard = styled(motion.div)`
  background: var(--background-primary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  border: 1px solid var(--border-color);

  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }
`;

const ProgramHeader = styled.div`
  background: var(--primary-color);
  color: white;
  padding: 2rem;
  text-align: center;
`;

const ProgramIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ProgramTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
`;

const ProgramSubtitle = styled.p`
  opacity: 0.9;
  font-size: 1rem;
`;

const ProgramContent = styled.div`
  padding: 2rem;
`;

const ProgramDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProgramFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProgramFeature = styled.li`
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

const CurriculumSection = styled.div`
  background: var(--background-secondary);
  padding: 3rem;
  border-radius: var(--border-radius);
  margin: 3rem 0;
`;

const CurriculumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SubjectCard = styled(motion.div)`
  background: var(--background-primary);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  text-align: center;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
`;

const SubjectIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const SubjectTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
`;

const SubjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
`;

const ActivitiesSection = styled.div`
  margin: 3rem 0;
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ActivityCard = styled(motion.div)`
  background: var(--background-primary);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  text-align: center;

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
  }
`;

const ActivityIcon = styled.div`
  font-size: 3rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
`;

const ActivityTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`;

const ActivityDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Academics = () => {
  // ...existing code...

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
        t(
          'academics.programs.higherSecondary.features.advancedLaboratoryFacilities'
        ),
        t(
          'academics.programs.higherSecondary.features.careerCounselingGuidance'
        ),
        t(
          'academics.programs.higherSecondary.features.competitiveExamPreparation'
        ),
        t('academics.programs.higherSecondary.features.leadershipDevelopment'),
      ],
    },
  ];

  const subjects = [
    {
      icon: <FaBookOpen />,
      title: t('academics.subjects.languages.title'),
      description: t('academics.subjects.languages.description'),
    },
    {
      icon: <FaMicroscope />,
      title: t('academics.subjects.mathematics.title'),
      description: t('academics.subjects.mathematics.description'),
    },
    {
      icon: <FaMicroscope />,
      title: t('academics.subjects.sciences.title'),
      description: t('academics.subjects.sciences.description'),
    },
    {
      icon: <FaGlobe />,
      title: t('academics.subjects.socialStudies.title'),
      description: t('academics.subjects.socialStudies.description'),
    },
    {
      icon: <FaLaptop />,
      title: t('academics.subjects.computerScience.title'),
      description: t('academics.subjects.computerScience.description'),
    },
    {
      icon: <FaPalette />,
      title: t('academics.subjects.artsCrafts.title'),
      description: t('academics.subjects.artsCrafts.description'),
    },
  ];

  const activities = [
    {
      icon: <FaFutbol />,
      title: t('academics.activities.sports.title'),
      description: t('academics.activities.sports.description'),
    },
    {
      icon: <FaMusic />,
      title: t('academics.activities.music.title'),
      description: t('academics.activities.music.description'),
    },
    {
      icon: <FaPalette />,
      title: t('academics.activities.visualArts.title'),
      description: t('academics.activities.visualArts.description'),
    },
    {
      icon: <FaGraduationCap />,
      title: t('academics.activities.academicClubs.title'),
      description: t('academics.activities.academicClubs.description'),
    },
    {
      icon: <FaUsers />,
      title: t('academics.activities.leadershipPrograms.title'),
      description: t('academics.activities.leadershipPrograms.description'),
    },
    {
      icon: <FaLaptop />,
      title: t('academics.activities.technologyInnovation.title'),
      description: t('academics.activities.technologyInnovation.description'),
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
            <HeroTitle>{t('academics.programs.title')}</HeroTitle>
            <HeroSubtitle>{t('academics.programs.subtitle')}</HeroSubtitle>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>{t('academics.programs.title')}</SectionTitle>
          <SectionSubtitle>{t('academics.programs.subtitle')}</SectionSubtitle>
          <ProgramsGrid>
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ProgramHeader>
                  <ProgramIcon>{program.icon}</ProgramIcon>
                  <ProgramTitle>{program.title}</ProgramTitle>
                  <ProgramSubtitle>{program.subtitle}</ProgramSubtitle>
                </ProgramHeader>
                <ProgramContent>
                  <ProgramDescription>{program.description}</ProgramDescription>
                  <ProgramFeatures>
                    {program.features.map((feature, featureIndex) => (
                      <ProgramFeature key={featureIndex}>
                        {feature}
                      </ProgramFeature>
                    ))}
                  </ProgramFeatures>
                </ProgramContent>
              </ProgramCard>
            ))}
          </ProgramsGrid>
        </Container>
      </Section>

      <Section style={{ background: 'var(--background-secondary)' }}>
        <Container>
          <SectionTitle>{t('academics.subjects.languages.title')}</SectionTitle>
          <SectionSubtitle>
            {t('academics.subjects.languages.description')}
          </SectionSubtitle>
          <CurriculumSection>
            <CurriculumGrid>
              {subjects.map((subject, index) => (
                <SubjectCard
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SubjectIcon>{subject.icon}</SubjectIcon>
                  <SubjectTitle>{subject.title}</SubjectTitle>
                  <SubjectDescription>{subject.description}</SubjectDescription>
                </SubjectCard>
              ))}
            </CurriculumGrid>
          </CurriculumSection>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>{t('academics.activities.sports.title')}</SectionTitle>
          <SectionSubtitle>
            {t('academics.activities.sports.description')}
          </SectionSubtitle>
          <ActivitiesGrid>
            {activities.map((activity, index) => (
              <ActivityCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ActivityIcon>{activity.icon}</ActivityIcon>
                <ActivityTitle>{activity.title}</ActivityTitle>
                <ActivityDescription>
                  {activity.description}
                </ActivityDescription>
              </ActivityCard>
            ))}
          </ActivitiesGrid>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Academics;
