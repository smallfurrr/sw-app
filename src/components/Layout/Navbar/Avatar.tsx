import React from 'react';
import styles from './Navbar.module.scss';

const Avatar = () => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className={`btn-sm dropdown-toggle dropdown-toggle-split ${styles['profile-btn']}`}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>Hello, John</span>
        <img src="/mock-avatar.svg" className={styles.avatar} />
      </button>
      <ul className="dropdown-menu">
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

export default Avatar;
