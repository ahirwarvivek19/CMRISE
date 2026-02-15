import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../ui/LanguageToggle';
import './Header.css';

const HeaderContainer = styled.header`
  background: var(--background-primary);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: var(--transition);
`;

const TopBar = styled.div`
  background: var(--primary-color);
  color: white;
  padding: 0.5rem 0;
  font-size: 0.875rem;
`;

const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MainHeader = styled.div`
  padding: 1rem 0;
  background: var(--background-primary);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
`;

const LogoText = styled.span`
  margin-left: 0.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
  position: relative;

  &:hover {
    color: var(--primary-color);
    background: var(--background-accent);
  }

  &.active {
    color: var(--primary-color);
    background: var(--background-accent);
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background: var(--primary-color);
    border-radius: 1px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1001;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const MobileMenuContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: var(--background-primary);
  padding: 2rem;
  overflow-y: auto;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  padding: 1rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
  border: 1px solid var(--border-color);

  &:hover {
    color: var(--primary-color);
    background: var(--background-accent);
  }

  &.active {
    color: var(--primary-color);
    background: var(--background-accent);
    border-color: var(--primary-color);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/academics', label: t('nav.academics') },
    { path: '/facilities', label: t('nav.facilities') },
    { path: '/admissions', label: t('nav.admissions') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <HeaderContainer className={isScrolled ? 'scrolled' : ''}>
      <TopBar>
        <TopBarContent>
          <ContactInfo>
            <ContactItem>
              <FaPhone />
              <span>{t('header.phone')}</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>{t('header.email')}</span>
            </ContactItem>
          </ContactInfo>
          <div>
            <span>{t('header.slogan')}</span>
          </div>
        </TopBarContent>
      </TopBar>
      
      <MainHeader>
        <HeaderContent>
          <Logo to="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="Sandipani Vidyalaya"
              className="logo-icon"
            />
            <LogoText>CMRISE Ujjain</LogoText>
          </Logo>
          
          <Nav>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </NavLink>
            ))}
            <LanguageToggle />
          </Nav>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            <FaBars />
          </MobileMenuButton>
        </HeaderContent>
      </MainHeader>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuContent>
          <CloseButton onClick={closeMobileMenu}>
            <FaTimes />
          </CloseButton>
          <MobileNav>
            {navItems.map((item) => (
              <MobileNavLink
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </MobileNav>
        </MobileMenuContent>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;

