import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/layout/Section';
import ResultLookup from '../components/results/ResultLookup';
import './StudentResult.css';

const StudentResult = () => {
  const { t } = useTranslation();

  return (
    <div className="student-result-page">
      <PageHeader
        eyebrow={t('results.hero.eyebrow')}
        title={t('results.hero.title')}
        subtitle={t('results.hero.subtitle')}
      />

      <Section variant="muted" narrow>
        <div className="student-result-page__grid">
          <div className="mod-card">
            <h2 className="mod-card__title">{t('results.form.cardTitle')}</h2>
            <p className="mod-card__text">{t('results.form.cardSubtitle')}</p>
            <ResultLookup />
          </div>

          <aside className="student-result-page__aside mod-card">
            <h2 className="mod-card__title">{t('results.help.title')}</h2>
            <ul className="student-result-page__list">
              <li>{t('results.help.item1')}</li>
              <li>{t('results.help.item2')}</li>
              <li>{t('results.help.item3')}</li>
            </ul>
            <p className="student-result-page__note">{t('results.help.note')}</p>
          </aside>
        </div>
      </Section>
    </div>
  );
};

export default StudentResult;
