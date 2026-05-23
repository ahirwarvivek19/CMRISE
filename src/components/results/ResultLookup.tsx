import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  fetchStudentResult,
  isResultsConfigured,
  type StudentResultRecord,
} from '../../services/studentResults';
import './ResultLookup.css';

interface ResultLookupProps {
  compact?: boolean;
  onResult?: (result: StudentResultRecord | null) => void;
}

const ResultLookup: React.FC<ResultLookupProps> = ({ compact = false, onResult }) => {
  const { t } = useTranslation();
  const [scholarNumber, setScholarNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [result, setResult] = useState<StudentResultRecord | null>(null);

  const configured = isResultsConfigured();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setNotFound(false);
    setResult(null);
    onResult?.(null);

    const trimmed = scholarNumber.trim();
    if (!trimmed) {
      setError(t('results.form.errorEmpty'));
      return;
    }

    if (!configured) {
      setError(t('results.form.errorNotConfigured'));
      return;
    }

    setIsLoading(true);
    try {
      const parsed = await fetchStudentResult(trimmed);
      if (!parsed) {
        setNotFound(true);
      } else {
        setResult(parsed);
        onResult?.(parsed);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : t('results.form.errorGeneric');
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const isPass = result?.status?.toLowerCase() === 'pass';

  return (
    <div className={`result-lookup${compact ? ' result-lookup--compact' : ''}`}>
      <form className="result-lookup__form" onSubmit={handleSubmit} noValidate>
        <label className="result-lookup__label" htmlFor={compact ? 'scholar-compact' : 'scholarNumber'}>
          {t('results.form.label')}
        </label>
        <div className="result-lookup__row">
          <input
            id={compact ? 'scholar-compact' : 'scholarNumber'}
            className="result-lookup__input"
            type="text"
            autoComplete="off"
            placeholder={t('results.form.placeholder')}
            value={scholarNumber}
            onChange={(ev) => setScholarNumber(ev.target.value)}
          />
          <button type="submit" className="btn btn--primary" disabled={!scholarNumber.trim() || isLoading}>
            {isLoading ? t('results.form.loading') : t('results.form.submit')}
          </button>
        </div>
        {!compact && (
          <p className="result-lookup__hint">{t('results.form.hint')}</p>
        )}
        {!configured && (
          <p className="result-lookup__status result-lookup__status--warn">{t('results.form.notConfigured')}</p>
        )}
        {error && <p className="result-lookup__status result-lookup__status--error">{error}</p>}
        {notFound && !error && (
          <p className="result-lookup__status result-lookup__status--error">{t('results.form.notFound')}</p>
        )}
      </form>

      {result && (
        <div className="result-card" role="region" aria-live="polite" aria-label={t('results.panel.title')}>
          <div className="result-card__head">
            <div>
              <h3 className="result-card__name">{result.studentName || t('results.panel.student')}</h3>
              <p className="result-card__meta">
                {t('results.panel.scholar')}: <strong>{result.scholarNumber}</strong>
              </p>
              <p className="result-card__meta">
                {t('results.panel.class')}: <strong>{result.className || '—'}</strong>
              </p>
            </div>
            {result.status && (
              <span className={`result-card__badge${isPass ? ' result-card__badge--pass' : ' result-card__badge--fail'}`}>
                {result.status}
              </span>
            )}
          </div>
          {result.subjects.length > 0 ? (
            <table className="result-card__table">
              <thead>
                <tr>
                  <th scope="col">{t('results.panel.subject')}</th>
                  <th scope="col">{t('results.panel.marks')}</th>
                </tr>
              </thead>
              <tbody>
                {result.subjects.map((subject) => (
                  <tr key={subject.name}>
                    <td>{subject.name}</td>
                    <td>{subject.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="result-lookup__hint">{t('results.panel.noSubjects')}</p>
          )}
        </div>
      )}

      {!result && !compact && !error && !notFound && !isLoading && (
        <p className="result-lookup__hint result-lookup__hint--panel">{t('results.panel.empty')}</p>
      )}
    </div>
  );
};

export default ResultLookup;
