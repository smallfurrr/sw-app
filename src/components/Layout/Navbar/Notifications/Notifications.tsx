import React from 'react';
import styles from './Notifications.module.scss';
import { UserInterface } from '../../../../types';
import Image from 'next/image';
interface NotificationsProps {
  user: UserInterface;
}

const Notifications: React.FC<NotificationsProps> = ({ user }) => {
  const { notifications_count } = user;

  return (
    <a href="#" className={`d-none d-md-block ${styles['link-container']}`}>
      <div className="me-4" style={{ position: 'relative' }}>
        <div
          className={`d-flex align-items-center justify-content-center ${styles['unread-count-badge']}`}
        >
          <span>{notifications_count}</span>
        </div>
        <Image height={24} width={24} src="/icon-mail.svg" alt="mail-icon" />
      </div>
    </a>
  );
};

export default Notifications;
