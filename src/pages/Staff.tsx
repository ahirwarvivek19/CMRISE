import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { STAFF_BY_DEPARTMENT, STAFF_PHOTO_MAP } from '../data/staffData';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/layout/Section';

const DEPARTMENT_ORDER = ['Administration', 'Teaching Staff', 'Support Staff'];

const Staff = () => {
  const { t } = useTranslation();

  const getPhotoSrc = (id: string) => {
    const filename = STAFF_PHOTO_MAP[id];
    if (!filename) return null;
    return `${import.meta.env.BASE_URL}staff/${filename}`;
  };

  const getDepartmentLabel = (key: string) =>
    t(`staff.departments.${key.replace(/\s+/g, '')}`);

  return (
    <div className="page">
      <PageHeader
        eyebrow={t('nav.staff')}
        title={t('staff.hero.title')}
        subtitle={t('staff.hero.subtitle')}
      />

      <Section variant="muted">
        {DEPARTMENT_ORDER.map((deptKey) => {
          const members = STAFF_BY_DEPARTMENT[deptKey];
          if (!members?.length) return null;

          return (
            <div className="staff-dept" key={deptKey}>
              <h2 className="staff-dept__title">{getDepartmentLabel(deptKey)}</h2>
              <div className="staff-grid">
                {members.map((member, index) => {
                  const photo = getPhotoSrc(member.id);
                  const name = t(`staff.names.${member.id}`, { defaultValue: member.name });

                  return (
                    <motion.article
                      key={member.id}
                      className="staff-card"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.02 }}
                    >
                      <div className="staff-card__photo">
                        {photo ? (
                          <img src={photo} alt={name} loading="lazy" />
                        ) : (
                          <div className="staff-card__placeholder">
                            <FaChalkboardTeacher aria-hidden />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="staff-card__name">{name}</h3>
                        <p className="staff-card__role">{member.designation}</p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Section>
    </div>
  );
};

export default Staff;
