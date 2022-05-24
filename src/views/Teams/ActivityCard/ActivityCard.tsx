import React from 'react';
import { ActivityInterface } from '../../../types';
import styles from './ActivityCard.module.scss';

interface ActivityCardProps {
  activity: ActivityInterface;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const { person, action, target, created_at } = activity;
  const { avatar, name } = person;

  const lowercaseAction = action.toLowerCase();

  const getActivityText = (name: string, action: string, target: string) => {
    if (action.includes('increased')) {
      return (
        <>
          <span className={`${styles['activity-body-bold']}`}>{name}</span>{' '}
          increased{' '}
          <span className={`${styles['activity-body-bold']}`}>{target}</span>
          &apos;s quota.
        </>
      );
    } else if (action.includes('added')) {
      return (
        <>
          <span className={`${styles['activity-body-bold']}`}>{name}</span>{' '}
          added new leads to{' '}
          <span className={`${styles['activity-body-bold']}`}>{target}</span>.
        </>
      );
    } else if (action.includes('archived')) {
      return (
        <>
          <span className={`${styles['activity-body-bold']}`}>{name}</span>{' '}
          archived the team{' '}
          <span className={`${styles['activity-body-bold']}`}>{target}</span>.
        </>
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
        <p className={`mb-0 ${styles['activity-body']}`}>
          {getActivityText(name, lowercaseAction, target)}
        </p>

        <span className={`${styles['activity-created-text']}`}>
          {created_at}
        </span>
      </div>
    </div>
  );
};

export default ActivityCard;
