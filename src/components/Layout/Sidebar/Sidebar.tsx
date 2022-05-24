import React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import styles from './Sidebar.module.scss';
import Image from 'next/image';

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div
      className={`d-flex flex-column justify-content-between flex-shrink-0 bg-dark d-none d-md-flex ${styles.sidebar}`}
    >
      <div className="d-flex flex-column align-items-center">
        <a href="#">
          <div className={styles.logo}>
            <Image
              src="/sw-logo-white.svg"
              alt="saleswhale-logo"
              width={38}
              height={32}
            />
          </div>
        </a>
        <a href="#">
          <div className={styles.link}>
            <Image
              src="/icon-campaign.svg"
              alt="talk-bubbles"
              width={28}
              height={26}
            />
          </div>
        </a>
        <a href="#">
          <div
            className={clsx(
              styles.link,
              pathname === '/' && styles['active-link']
            )}
          >
            <Image
              src="/icon-teams.svg"
              alt="buildings"
              height={34}
              width={34}
            />
          </div>
        </a>
        <a href="#">
          <div className={styles.link}>
            <Image src="/icon-leads.svg" alt="people" width={32} height={28} />
          </div>
        </a>
        <a href="#">
          <div className={styles.link}>
            <Image src="/icon-reports.svg" alt="graph" width={30} height={30} />
          </div>
        </a>
      </div>
      <a href="#">
        <div className={styles.link}>
          <Image src="/icon-help.svg" alt="help" width={26} height={26} />
        </div>
      </a>
    </div>
  );
};

export default Sidebar;
