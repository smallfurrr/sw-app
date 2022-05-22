import React from 'react';
import styles from './Navbar.module.scss';

const Notifications = () => {
  return (
    <a href="#" className="d-none d-md-block">
      <div className="me-4" style={{ position: 'relative' }}>
        <div
          className={`d-flex align-items-center justify-content-center ${styles['unread-count-badge']}`}
        >
          <span>3</span>
        </div>
        <img src="/icon-mail.svg" alt="mail-icon" />
      </div>
    </a>
  );
};

export default Notifications;
