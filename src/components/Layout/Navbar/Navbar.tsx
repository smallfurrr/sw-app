import React from 'react';
import styles from './Navbar.module.scss';
import ProfileMenu from './ProfileMenu';
import Inbox from './Inbox';

const Navbar = () => {
  return (
    <div className={`container-fluid ${styles.navbar}`}>
      <div className="row py-3">
        <div className="col-md-2">1 of 4</div>
        <div className="col-md-7">2 of 4</div>
        <div className="col-xs-6 col-md-3 d-flex justify-content-end align-items-center">
          <Inbox />
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
