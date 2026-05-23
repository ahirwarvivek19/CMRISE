import React from 'react';
import { motion } from 'framer-motion';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, eyebrow }) => (
  <header className="page-header">
    <div className="container page-header__inner">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {eyebrow && <p className="page-header__eyebrow">{eyebrow}</p>}
        <h1 className="page-header__title">{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      </motion.div>
    </div>
  </header>
);

export default PageHeader;
