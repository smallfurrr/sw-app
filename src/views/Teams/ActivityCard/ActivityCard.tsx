import React from 'react';
import { ActivityInterface } from '../../../types';
import styles from './ActivityCard.module.scss';

interface ActivityCardProps {
  activity: ActivityInterface;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const { person, action, target, created_at } = activity;
  const { avatar, name } = person;

  const getActivityText = (name: string, action: string, target: string) => {
    if (action.includes('increased')) {
      return (
        <p className={`mb-0 ${styles['activity-body']}`}>
          <span className={`${styles['activity-body-bold']}`}>{name}</span>{' '}
          increased{' '}
          <span className={`${styles['activity-body-bold']}`}>{target}</span>
          &apos;s quota.
        </p>
      );
    } else if (action.includes('added')) {
      return (
        <p className={`mb-0 ${styles['activity-body']}`}>
          <span className={`${styles['activity-body-bold']}`}>{name}</span>{' '}
          added new leads to{' '}
          <span className={`${styles['activity-body-bold']}`}>{target}</span>.
        </p>
      );
    } else if (action.includes('archived')) {
      return (
        <p className={`mb-0 ${styles['activity-body']}`}>
          <span className={`${styles['activity-body-bold']}`}>{name}</span>{' '}
          archived the team{' '}
          <span className={`${styles['activity-body-bold']}`}>{target}</span>.
        </p>
      );
    }
    return '';
  };

  return (
    <div className={`d-flex ${styles['activity-container']}`}>
      <div
        className={`${styles['activity-avatar']}`}
        style={{ backgroundImage: `url(${avatar})` }}
      />
      <div>
        {getActivityText(name, action, target)}
        <span className={`${styles['activity-created-text']}`}>
          {created_at}
        </span>
      </div>
    </div>
  );
};

export default ActivityCard;
