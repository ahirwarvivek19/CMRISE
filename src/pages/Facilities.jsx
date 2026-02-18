import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaChalkboardTeacher,
  FaFlask,
  FaBook,
  FaFutbol,
  FaPalette,
  FaMusic,
  FaWifi,
  FaShieldAlt,
  FaBus,
  FaSeedling,
  FaGraduationCap,
  FaUsers,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Facilities.css';

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

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FacilityCard = styled(motion.div)`
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

const FacilityImage = styled.div`
  height: 200px;
  background: var(--background-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--primary-color);
`;

const FacilityContent = styled.div`
  padding: 2rem;
`;

const FacilityTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`;

const FacilityDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FacilityFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FacilityFeature = styled.li`
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
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

const InfrastructureSection = styled.div`
  background: var(--background-secondary);
  padding: 3rem;
  border-radius: var(--border-radius);
  margin: 3rem 0;
`;

const InfrastructureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const InfrastructureItem = styled(motion.div)`
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

const InfrastructureIcon = styled.div`
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
`;

const InfrastructureTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
`;

const InfrastructureDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Facilities = () => {
  const { t } = useTranslation();

  const facilities = [
    {
      icon: '🏫',
      title: t('facilities.smart_classrooms.title'),
      description: t('facilities.smart_classrooms.description'),
      features: [
        t('facilities.smart_classrooms.features.interactive_whiteboards'),
        t('facilities.smart_classrooms.features.audio_visual_equipment'),
        t('facilities.smart_classrooms.features.climate_control_systems'),
        t('facilities.smart_classrooms.features.ergonomic_furniture'),
        t('facilities.smart_classrooms.features.high_speed_internet'),
      ],
    },
    {
      icon: '🔬',
      title: t('facilities.science_laboratories.title'),
      description: t('facilities.science_laboratories.description'),
      features: [
        t('facilities.science_laboratories.features.advanced_equipment'),
        t('facilities.science_laboratories.features.safety_protocols'),
        t(
          'facilities.science_laboratories.features.experienced_lab_assistants'
        ),
        t('facilities.science_laboratories.features.regular_maintenance'),
        t('facilities.science_laboratories.features.student_safety_gear'),
      ],
    },
    {
      icon: '💻',
      title: t('facilities.computer_lab.title'),
      description: t('facilities.computer_lab.description'),
      features: [
        t('facilities.computer_lab.features.latest_computers'),
        t('facilities.computer_lab.features.programming_software'),
        t('facilities.computer_lab.features.internet_access'),
        t('facilities.computer_lab.features.technical_support'),
        t('facilities.computer_lab.features.regular_updates'),
      ],
    },
    {
      icon: '📚',
      title: t('facilities.library_resource_center.title'),
      description: t('facilities.library_resource_center.description'),
      features: [
        t('facilities.library_resource_center.features.vast_book_collection'),
        t('facilities.library_resource_center.features.digital_resources'),
        t('facilities.library_resource_center.features.study_spaces'),
        t('facilities.library_resource_center.features.research_assistance'),
        t('facilities.library_resource_center.features.quiet_zones'),
      ],
    },
    {
      icon: '⚽',
      title: t('facilities.sports_facilities.title'),
      description: t('facilities.sports_facilities.description'),
      features: [
        t('facilities.sports_facilities.features.cricket_ground'),
        t('facilities.sports_facilities.features.football_field'),
        t('facilities.sports_facilities.features.basketball_court'),
        t('facilities.sports_facilities.features.indoor_games'),
        t('facilities.sports_facilities.features.sports_equipment'),
      ],
    },
    {
      icon: '🎨',
      title: t('facilities.arts_music_rooms.title'),
      description: t('facilities.arts_music_rooms.description'),
      features: [
        t('facilities.arts_music_rooms.features.art_studio'),
        t('facilities.arts_music_rooms.features.music_room'),
        t('facilities.arts_music_rooms.features.dance_studio'),
        t('facilities.arts_music_rooms.features.exhibition_space'),
        t('facilities.arts_music_rooms.features.professional_equipment'),
      ],
    },
  ];

  const infrastructure = [
    {
      icon: <FaWifi />,
      title: t('facilities.infrastructure.wifi_campus.title'),
      description: t('facilities.infrastructure.wifi_campus.description'),
    },
    {
      icon: <FaShieldAlt />,
      title: t('facilities.infrastructure.security_systems.title'),
      description: t('facilities.infrastructure.security_systems.description'),
    },
    {
      icon: <FaBus />,
      title: t('facilities.infrastructure.transportation.title'),
      description: t('facilities.infrastructure.transportation.description'),
    },
    {
      icon: <FaSeedling />,
      title: t('facilities.infrastructure.green_campus.title'),
      description: t('facilities.infrastructure.green_campus.description'),
    },
    {
      icon: <FaBook />,
      title: t('facilities.infrastructure.study_areas.title'),
      description: t('facilities.infrastructure.study_areas.description'),
    },
    {
      icon: <FaGraduationCap />,
      title: t('facilities.infrastructure.digital_resources.title'),
      description: t('facilities.infrastructure.digital_resources.description'),
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
            <HeroTitle>{t('facilities.smart_classrooms.title')}</HeroTitle>
            <HeroSubtitle>
              {t('facilities.smart_classrooms.description')}
            </HeroSubtitle>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>{t('facilities.smart_classrooms.title')}</SectionTitle>
          <SectionSubtitle>
            {t('facilities.smart_classrooms.description')}
          </SectionSubtitle>
          {/* ...existing code for smart classrooms... */}
        </Container>
      </Section>

      <Section style={{ background: 'var(--background-secondary)' }}>
        <Container>
          <SectionTitle>
            {t('facilities.infrastructure.wifi_campus.title')}
          </SectionTitle>
          <SectionSubtitle>
            {t('facilities.infrastructure.wifi_campus.description')}
          </SectionSubtitle>
          {/* ...existing code for wifi campus... */}
        </Container>
      </Section>

      <Section style={{ background: 'var(--background-secondary)' }}>
        <Container>
          <SectionTitle>Campus Infrastructure</SectionTitle>
          <SectionSubtitle>
            Supporting facilities that ensure a comfortable and productive
            learning environment
          </SectionSubtitle>

          <InfrastructureSection>
            <InfrastructureGrid>
              {infrastructure.map((item, index) => (
                <InfrastructureItem
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <InfrastructureIcon>{item.icon}</InfrastructureIcon>
                  <InfrastructureTitle>{item.title}</InfrastructureTitle>
                  <InfrastructureDescription>
                    {item.description}
                  </InfrastructureDescription>
                </InfrastructureItem>
              ))}
            </InfrastructureGrid>
          </InfrastructureSection>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Facilities;
