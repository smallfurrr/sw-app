import React from 'react';
import styles from './Navbar.module.scss';

const Inbox = () => {
  return (
    <a href="#">
      <div className="me-4" style={{ position: 'relative' }}>
        <div
          className={`d-flex align-items-center justify-content-center ${styles['unread-count-badge']}`}
        >
          <span>3</span>
        </div>
        <img src="/icon-mail.svg" />
      </div>
    </a>
  );
};

export default Inbox;
