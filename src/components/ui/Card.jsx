import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Card.css';

const CardContainer = styled(motion.div)`
  background: var(--background-primary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.background || 'var(--background-accent)'};
  background-image: ${props => props.image ? `url(${props.image})` : 'none'};
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.overlay || 'rgba(30, 64, 175, 0.1)'};
  }
`;

const CardIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: var(--primary-color);
  z-index: 1;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-family: 'Poppins', sans-serif;
`;

const CardDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
`;

const CardFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
`;

const CardButton = styled.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  width: 100%;
  
  &:hover {
    background: #1e3a8a;
    transform: translateY(-1px);
  }
`;

const CardBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--secondary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 2;
`;

const CardStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: var(--primary-color);
  }
`;

const Card = ({
  title,
  description,
  image,
  icon,
  background,
  overlay,
  badge,
  buttonText,
  onButtonClick,
  stats,
  className,
  ...props
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <CardContainer
      className={className}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      <CardImage 
        image={image} 
        background={background}
        overlay={overlay}
      >
        {badge && <CardBadge>{badge}</CardBadge>}
        {icon && <CardIcon>{icon}</CardIcon>}
      </CardImage>
      
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        
        {stats && (
          <CardStats>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                {stat.icon}
                <span>{stat.value}</span>
              </StatItem>
            ))}
          </CardStats>
        )}
        
        {buttonText && (
          <CardFooter>
            <CardButton onClick={onButtonClick}>
              {buttonText}
            </CardButton>
          </CardFooter>
        )}
      </CardContent>
    </CardContainer>
  );
};

export default Card;

