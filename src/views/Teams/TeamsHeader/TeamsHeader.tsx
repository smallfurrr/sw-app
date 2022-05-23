import React from 'react';
import Image from 'next/image';
import styles from './TeamsHeader.module.scss';
import Search from '../../../components/Search';
import { ALL, FAVORITES, ARCHIVED } from '../index';

interface TeamsHeaderProps {
  handleFilter: (filter: string) => void;
}

const TeamsHeader: React.FC<TeamsHeaderProps> = ({ handleFilter }) => {
  return (
    <div className={`container-fluid px-5 ${styles['header-container']}`}>
      <div className={`row ${styles['top-row']}`}>
        <div className="col-xs-12 col-md-6 d-flex align-items-center">
          <img src="/icon-teams-grey.svg" alt="teams-icon" />
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
        <div className={`col-xs-12 col-md-6 ${styles['bottom-row-item']}`}>
          <button onClick={() => handleFilter(ALL)} className="btn">
            All
          </button>
          <button onClick={() => handleFilter(FAVORITES)} className="btn">
            Favorites
          </button>
          <button onClick={() => handleFilter(ARCHIVED)} className="btn">
            Archived
          </button>
        </div>
        <div
          className={`col-xs-12 col-md-6 ${styles['bottom-row-item']} d-flex justify-content-lg-end`}
        >
          <Search
            placeholder="Search team name..."
            // TODO?
            handleSearch={() => console.log('whee')}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamsHeader;
