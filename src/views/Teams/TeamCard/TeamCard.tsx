import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';
import { TeamInterface } from '../../../types';
import styles from './TeamCard.module.scss';

interface TeamCardProps {
  team: TeamInterface;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const {
    name,
    image,
    description,
    created_at,
    is_favorited,
    is_archived,
    archived_on,
    campaigns_count,
    leads_count,
  } = team;

  const truncate = (text) =>
    text?.length > 75 ? `${text.substring(0, 75)}...` : text;

  return (
    <div
      className={clsx(
        `${styles['team-card-container']}`,
        is_archived && styles.archived
      )}
    >
      <div className={`${styles['card-top-half']}`}>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div
              className={`${styles['team-avatar']}`}
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="d-flex flex-column">
              <h6 className="mb-0">{name}</h6>
              {created_at && !is_archived && (
                <span className={`${styles['created-text']}`}>
                  Created at {created_at}
                </span>
              )}
              {is_archived && archived_on && (
                <span className={`${styles['created-text']}`}>
                  Archived on {archived_on}
                </span>
              )}
            </div>
          </div>
          <div className="d-flex align-items-start">
            <Image
              src={is_favorited ? '/star-active.svg' : '/star-default.svg'}
              width={17}
              height={16}
              alt="favorited-indicator"
            />
          </div>
        </div>

        <div className={`${styles['description-container']}`}>
          <p className={`mb-0 ${styles['description-text']}`}>
            {truncate(description)}
          </p>
        </div>
      </div>

      <div className={`${styles['card-bottom-half']}`}>
        <div className="d-flex flex-column flex-xl-row">
          <div className="d-flex align-items-center me-3">
            <Image
              src="/icon-convo-small.svg"
              height={16}
              width={16}
              alt="convo-bubble"
            />
            <span className={`${styles['count-text']}`}>
              {campaigns_count} Campaigns
            </span>
          </div>
          <div className="d-flex align-items-center me-3">
            <Image
              src="/icon-leads-small.svg"
              height={16}
              width={16}
              alt="people-list"
            />
            <span className={`${styles['count-text']}`}>
              {leads_count} Leads
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
