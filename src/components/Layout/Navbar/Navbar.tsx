import React from 'react';
import styles from './Navbar.module.scss';
import ProfileMenu from './ProfileMenu';
import Notifications from './Notifications';

const Navbar = () => {
  return (
    <div className={`container-fluid px-5 ${styles.navbar}`}>
      <div className="row" style={{ height: '100%' }}>
        <div className="col-md-9 d-none d-md-flex align-items-center">
          <div className="pe-5">
            <h5 className={`mb-0 ${styles['product-title']}`}>NARWHAL</h5>
          </div>
          <div
            className={`ps-4 d-flex align-items-center ${styles['breadcrumb-container']}`}
          >
            <h5 className={`mb-0 ${styles.breadcrumb}`}>Teams</h5>
          </div>
        </div>
        <div className="col-xs-4 col-md-3 d-flex justify-content-end align-items-center">
          <Notifications />
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
