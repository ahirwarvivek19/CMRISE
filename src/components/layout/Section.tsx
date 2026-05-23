import React from 'react';
import './Section.css';

type SectionVariant = 'default' | 'muted' | 'accent' | 'dark';

interface SectionProps {
  children: React.ReactNode;
  variant?: SectionVariant;
  id?: string;
  className?: string;
  narrow?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  variant = 'default',
  id,
  className = '',
  narrow = false,
}) => (
  <section
    id={id}
    className={`section section--${variant}${narrow ? ' section--narrow' : ''} ${className}`.trim()}
  >
    <div className="container">{children}</div>
  </section>
);

export default Section;
