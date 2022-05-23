import React from 'react';
import styles from './Navbar.module.scss';
import { UserInterface } from '../../../types';

interface ProfileMenuProps {
  user: UserInterface;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ user }) => {
  const { name, avatar } = user;

  return (
    <div className="btn-group">
      <button
        type="button"
        className={`btn-sm dropdown-toggle dropdown-toggle-split ${styles['profile-btn']}`}
        data-bs-display="static"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="d-none d-md-inline-block">Hello, {name}</span>
        <img src={avatar} alt="user-picture" className={styles.avatar} />
      </button>
      <ul className={`dropdown-menu ${styles['profile-dropdown']}`}>
        <li>
          <a
            className={`dropdown-item ${styles['profile-dropdown-item']}`}
            href="#"
          >
            View Profile
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${styles['profile-dropdown-item']}`}
            href="#"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
