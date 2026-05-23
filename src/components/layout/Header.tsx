import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../ui/LanguageToggle';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/academics', label: t('nav.academics') },
    { path: '/facilities', label: t('nav.facilities') },
    { path: '/staff', label: t('nav.staff') },
    { path: '/admissions', label: t('nav.admissions') },
    { path: '/student-result', label: t('nav.results') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className={`site-header${isScrolled ? ' site-header--scrolled' : ''}`}>
      <div className="site-header__ribbon">
        <div className="container site-header__ribbon-inner">
          <span>{t('header.slogan')}</span>
        </div>
      </div>

      <div className="site-header__main">
        <div className="container site-header__main-inner">
          <Link to="/" className="site-header__brand">
            <img
              src={`${import.meta.env.BASE_URL}logo-new.png`}
              alt={t('header.schoolName')}
              className="site-header__logo"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}logo.svg`;
              }}
            />
            <div className="site-header__brand-text">
              <span className="site-header__name">{t('header.schoolName')}</span>
              <span className="site-header__address">{t('header.address')}</span>
            </div>
          </Link>

          <div className="site-header__codes" aria-hidden>
            <span>{t('header.diseCode')}</span>
            <span>{t('header.mpBoardCode')}</span>
          </div>
        </div>
      </div>

      <div className="site-header__nav-bar">
        <div className="container site-header__nav-inner">
          <nav className="site-header__nav" aria-label="Main">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`site-header__link${location.pathname === item.path ? ' site-header__link--active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageToggle />
          </nav>

          <button
            type="button"
            className="site-header__menu-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label={t('header.menuToggle')}
          >
            <FaBars />
          </button>
        </div>
      </div>

      <div
        className={`site-header__drawer${isMobileMenuOpen ? ' site-header__drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <button
          type="button"
          className="site-header__drawer-close"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label={t('header.closeMenu')}
        >
          <FaTimes />
        </button>
        <nav className="site-header__drawer-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`site-header__drawer-link${location.pathname === item.path ? ' site-header__drawer-link--active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {isMobileMenuOpen && (
        <button
          type="button"
          className="site-header__backdrop"
          aria-label={t('header.closeMenu')}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
