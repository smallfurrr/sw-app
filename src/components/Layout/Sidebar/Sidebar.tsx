import React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div
      className={`d-flex flex-column justify-content-between flex-shrink-0 bg-dark vh-100 float-start d-none d-md-block ${styles.sidebar}`}
    >
      <div className="d-flex flex-column align-items-center">
        <a href="#">
          <div className={styles.logo}>
            <img src="/sw-logo-white.svg" />
          </div>
        </a>
        <a href="#">
          <div className={styles.link}>
            <img src="/icon-campaign.svg" />
          </div>
        </a>
        <a href="#">
          <div
            className={clsx(
              styles.link,
              pathname === '/' && styles['active-link']
            )}
          >
            <img src="/icon-teams.svg" />
          </div>
        </a>
        <a href="#">
          <div className={styles.link}>
            <img src="/icon-leads.svg" />
          </div>
        </a>
        <a href="#">
          <div className={styles.link}>
            <img src="/icon-reports.svg" />
          </div>
        </a>
      </div>
      <a href="#">
        <div className={styles.link}>
          <img src="/icon-help.svg" />
        </div>
      </a>
    </div>
  );
};

export default Sidebar;
