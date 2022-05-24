import React from 'react';
import Image from 'next/image';
import styles from './TeamsHeader.module.scss';
import Search from '../../../components/Search';
import { ALL, FAVORITES, ARCHIVED } from '../const';
import clsx from 'clsx';

interface TeamsHeaderProps {
  handleFilter: (filter: string) => void;
  activeFilter: string;
}

const TeamsHeader: React.FC<TeamsHeaderProps> = ({
  handleFilter,
  activeFilter,
}) => {
  return (
    <div className={`container-fluid px-5 ${styles['header-container']}`}>
      <div className={`row ${styles['top-row']}`}>
        <div className="col-xs-12 col-md-6 d-flex align-items-center">
          <Image
            src="/icon-teams-grey.svg"
            width={30}
            height={34}
            alt="teams-icon"
          />
          <h3 className={`mb-0 ${styles['page-title']}`}>Teams</h3>
        </div>
        <div className="col-xs-12 col-md-6 d-flex align-items-center justify-content-lg-end">
          <button className={`btn ${styles['create-btn']}`}>
            <Image src="/icon-add.svg" height={16} width={16} alt="plus-icon" />
            <span>CREATE NEW TEAM</span>
          </button>
        </div>
      </div>
      <div className="row flex-column-reverse flex-md-row">
        <div
          className={`d-flex col-xs-12 col-md-6 pb-0 ${styles['bottom-row-item']} ${styles['filter-btns-container']}`}
        >
          <button
            onClick={() => handleFilter(ALL)}
            className={clsx(
              'btn',
              `${styles['filter-btn']}`,
              activeFilter === ALL && `${styles['active-filter']}`
            )}
          >
            All
          </button>
          <button
            onClick={() => handleFilter(FAVORITES)}
            className={clsx(
              'btn',
              `${styles['filter-btn']}`,
              activeFilter === FAVORITES && `${styles['active-filter']}`
            )}
          >
            Favorites
          </button>
          <button
            onClick={() => handleFilter(ARCHIVED)}
            className={clsx(
              'btn',
              `${styles['filter-btn']}`,
              activeFilter === ARCHIVED && `${styles['active-filter']}`
            )}
          >
            Archived
          </button>
        </div>
        <div
          className={`col-xs-12 col-md-6 ${styles['bottom-row-item']} d-flex justify-content-lg-end`}
        >
          <Search
            placeholder="Search team name..."
            handleSearch={() => console.log('I am a search')}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamsHeader;
