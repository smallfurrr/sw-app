import React from 'react';
import styles from './Navbar.module.scss';
import { UserInterface } from '../../../types';
interface NotificationsProps {
  user: UserInterface;
}

const Notifications: React.FC<NotificationsProps> = ({ user }) => {
  const { notifications_count } = user;

  return (
    <a href="#" className="d-none d-md-block">
      <div className="me-4" style={{ position: 'relative' }}>
        <div
          className={`d-flex align-items-center justify-content-center ${styles['unread-count-badge']}`}
        >
          <span>{notifications_count}</span>
        </div>
        <img src="/icon-mail.svg" alt="mail-icon" />
      </div>
    </a>
  );
};

export default Notifications;
