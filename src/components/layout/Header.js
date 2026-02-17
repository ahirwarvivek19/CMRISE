import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
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
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const TopBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const MainHeader = styled.div`
  padding: 0;
  background: var(--background-primary);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.5rem;

  @media (max-width: 480px) {
    padding: 0 0.25rem;
  }
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0rem;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

const BrandCodes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--text-secondary, #666);
  line-height: 1.3;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BrandSection = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
    gap: 0.5rem;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

const Logo = styled.span`
  display: flex;
  align-items: center;
  color: var(--primary-color);
  font-family: 'Poppins', sans-serif;
  flex-shrink: 0;

  img {
    height: 48px;
    width: auto;
  }

  @media (max-width: 768px) {
    img {
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 32px;
    }
  }
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const BrandName = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const BrandAddress = styled.span`
  font-size: 0.875rem;
  color: var(--text-secondary, #666);
  line-height: 1.3;
  margin-top: 0.1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 0.25rem 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.15rem 0.4rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
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
  padding: 0.2rem 0.75rem;
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
    font-size: 1.3rem;
    padding: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 0.25rem;
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
  left: 0;
  width: 80%;
  max-width: 320px;
  height: 100%;
  background: var(--background-primary);
  padding: 2rem;
  overflow-y: auto;
  border-radius: 0 1.5rem 1.5rem 0;
  box-shadow: var(--shadow-lg, 0 10px 30px rgba(0, 0, 0, 0.15));
  transform: translateX(${props => (props.isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-out;
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
  left: 1rem;
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
    { path: '/staff', label: t('nav.staff') },
    { path: '/admissions', label: t('nav.admissions') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <HeaderContainer className={isScrolled ? 'scrolled' : ''}>
      <TopBar>
        <TopBarContent>
          <span>Excellence in Education, Innovation in Learning</span>
        </TopBarContent>
      </TopBar>
      
      <MainHeader>
        <HeaderContent>
          <BrandRow>
            <BrandSection to="/">
              <Logo>
                <img
                  src={`${process.env.PUBLIC_URL}/logo.svg`}
                  alt={t('header.schoolName')}
                  className="logo-icon"
                />
              </Logo>
              <BrandText>
                <BrandName>{t('header.schoolName')}</BrandName>
                <BrandAddress>{t('header.address')}</BrandAddress>
              </BrandText>
            </BrandSection>
            <BrandCodes>
              <span>{t('header.diseCode')}</span>
              <span>{t('header.mpBoardCode')}</span>
            </BrandCodes>
          </BrandRow>
          <NavRow>
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
            <MobileMenuButton
              onClick={toggleMobileMenu}
              aria-label={t('header.menuToggle')}
            >
              <FaBars />
            </MobileMenuButton>
          </NavRow>
        </HeaderContent>
      </MainHeader>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuContent isOpen={isMobileMenuOpen}>
          <CloseButton
            onClick={closeMobileMenu}
            aria-label={t('header.closeMenu')}
          >
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

