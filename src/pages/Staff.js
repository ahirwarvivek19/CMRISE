import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { STAFF_BY_DEPARTMENT, STAFF_PHOTO_MAP } from '../data/staffData';
import './Staff.css';

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
  background: var(--background-secondary);

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const DepartmentBlock = styled.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DepartmentHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-color);
  display: inline-block;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StaffGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
`;

const StaffCard = styled(motion.div)`
  background: var(--background-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: var(--transition);

  &:hover {
    border-color: var(--primary-color);
  }
`;

const StaffPhoto = styled.div`
  width: 4rem;
  height: 4rem;
  min-width: 4rem;
  border-radius: 50%;
  overflow: hidden;
  background: var(--background-accent);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StaffPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--background-accent) 0%, var(--border-color) 100%);
  color: var(--primary-color);
  font-size: 1.5rem;
`;

const StaffInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const StaffName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.3;
`;

const StaffDesignation = styled.p`
  font-size: 0.875rem;
  color: var(--primary-color);
  font-weight: 500;
  margin: 0;
`;

const DEPARTMENT_ORDER = ['Administration', 'Teaching Staff', 'Support Staff'];

const Staff = () => {
  const { t } = useTranslation();

  const getPhotoSrc = (id) => {
    const filename = STAFF_PHOTO_MAP[id];
    if (!filename) return null;
    return `${process.env.PUBLIC_URL}/staff/${filename}`;
  };

  const getDepartmentLabel = (key) => t(`staff.departments.${key.replace(/\s+/g, '')}`);

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>{t('staff.hero.title')}</HeroTitle>
            <HeroSubtitle>{t('staff.hero.subtitle')}</HeroSubtitle>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          {DEPARTMENT_ORDER.map((deptKey) => {
            const members = STAFF_BY_DEPARTMENT[deptKey];
            if (!members || members.length === 0) return null;

            return (
              <DepartmentBlock key={deptKey}>
                <DepartmentHeading>{getDepartmentLabel(deptKey)}</DepartmentHeading>
                <StaffGrid>
                  {members.map((member, index) => (
                    <StaffCard
                      key={member.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.02 }}
                    >
                      <StaffPhoto>
                        {getPhotoSrc(member.id) ? (
                          <img
                            src={getPhotoSrc(member.id)}
                            alt={member.name}
                            loading="lazy"
                          />
                        ) : (
                          <StaffPlaceholder>
                            <FaChalkboardTeacher />
                          </StaffPlaceholder>
                        )}
                      </StaffPhoto>
                      <StaffInfo>
                        <StaffName>{member.name}</StaffName>
                        <StaffDesignation>{member.designation}</StaffDesignation>
                      </StaffInfo>
                    </StaffCard>
                  ))}
                </StaffGrid>
              </DepartmentBlock>
            );
          })}
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Staff;
