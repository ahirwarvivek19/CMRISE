import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin-left: 0.5rem;
  }
`;

const LanguageButton = styled.button`
  background: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: 2px solid var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  min-width: 60px;

  &:hover {
    background: ${props => props.active ? 'var(--primary-color)' : 'var(--background-accent)'};
    transform: translateY(-1px);
    box-shadow: var(--shadow-lg);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
    min-width: 50px;
  }
`;

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ToggleContainer>
      <LanguageButton
        active={currentLanguage === 'en'}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </LanguageButton>
      <LanguageButton
        active={currentLanguage === 'hi'}
        onClick={() => changeLanguage('hi')}
        aria-label="हिंदी में बदलें"
      >
        हिं
      </LanguageButton>
    </ToggleContainer>
  );
};

export default LanguageToggle;
