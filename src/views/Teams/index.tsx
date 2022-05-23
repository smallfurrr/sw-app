import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import TeamCard from './TeamCard';
import TeamsHeader from './TeamsHeader';
import styles from './Teams.module.scss';
import { TEAMS } from './mock';

export const ALL = 'All';
export const FAVORITES = 'Favorites';
export const ARCHIVED = 'Archived';

const Teams = () => {
  const [displayedTeams, setDisplayedTeams] = useState(TEAMS);
  const [filter, setFilter] = useState('All');

  const handleFilterTeams = (selectedFilter: string) => {
    if (selectedFilter === filter) return;

    setFilter(selectedFilter);
    let nextDisplayedTeams;

    switch (selectedFilter) {
      case ALL:
        setDisplayedTeams(TEAMS);
        break;
      case FAVORITES:
        nextDisplayedTeams = TEAMS.filter((team) => team.is_favorited);
        setDisplayedTeams(nextDisplayedTeams);
        break;
      case ARCHIVED:
        nextDisplayedTeams = TEAMS.filter((team) => team.is_archived);
        setDisplayedTeams(nextDisplayedTeams);
        break;
      default:
        setDisplayedTeams(TEAMS);
        break;
    }
  };

  return (
    <Layout>
      <TeamsHeader handleFilter={handleFilterTeams} />
      <div className="container-fluid px-5 py-5">
        <div className="row d-flex justify-content-between">
          <div className={`col-12 col-lg-9 p-0 ${styles['teams-container']}`}>
            <div
              className={`d-flex flex-column flex-md-row justify-content-md-between py-3 px-4 ${styles['teams-title-row']}`}
            >
              {/* TODO title should be dynamic - like all, favourite etc */}
              <h5 className="mb-0">All Teams</h5>
              {/* TODO count should be dynamic */}
              <span>
                Showing {displayedTeams.length - 1} out of{' '}
                {displayedTeams.length - 1} teams
              </span>
            </div>
            <div className="container-fluid py-3">
              <div className="row mt-auto g-3">
                {displayedTeams.map((team, index) => {
                  return (
                    <div
                      key={`${team.id}+${index}`}
                      className="col-12 col-lg-6 col-xl-4"
                    >
                      <TeamCard team={team} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={`col-12 col-lg-3 ${styles['activity-container']}`}>
            Activity
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Teams;
