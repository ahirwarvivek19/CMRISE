import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const HeroContainer = styled.section`
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeroButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &.primary {
    background: white;
    color: var(--primary-color);
    
    &:hover {
      background: #f3f4f6;
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }
  }
  
  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background: white;
      color: var(--primary-color);
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  
  &.circle-1 {
    width: 100px;
    height: 100px;
    top: 20%;
    left: 10%;
  }
  
  &.circle-2 {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 15%;
  }
  
  &.circle-3 {
    width: 80px;
    height: 80px;
    bottom: 20%;
    left: 20%;
  }
`;

const Hero = ({ 
  title, 
  subtitle, 
  primaryButton, 
  secondaryButton, 
  onPrimaryClick, 
  onSecondaryClick,
  showFloatingElements = true 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <HeroContainer>
      {showFloatingElements && (
        <FloatingElements>
          <FloatingElement 
            className="circle-1"
            variants={floatingVariants}
            animate="animate"
          />
          <FloatingElement 
            className="circle-2"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
          />
          <FloatingElement 
            className="circle-3"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
          />
        </FloatingElements>
      )}
      
      <HeroContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroTitle variants={itemVariants}>
            {title}
          </HeroTitle>
          
          <HeroSubtitle variants={itemVariants}>
            {subtitle}
          </HeroSubtitle>
          
          <HeroButtons variants={itemVariants}>
            {primaryButton && (
              <HeroButton 
                className="primary"
                onClick={onPrimaryClick}
              >
                {primaryButton}
              </HeroButton>
            )}
            
            {secondaryButton && (
              <HeroButton 
                className="secondary"
                onClick={onSecondaryClick}
              >
                {secondaryButton}
              </HeroButton>
            )}
          </HeroButtons>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

