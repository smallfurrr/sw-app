import React from 'react';
import styles from './Navbar.module.scss';
import ProfileMenu from './ProfileMenu';
import Notifications from './Notifications';

const Navbar = () => {
  return (
    <div className={`container-fluid ${styles.navbar}`}>
      <div className="row" style={{ height: '100%' }}>
        <div className="col-md-3 col-lg-2 d-none d-md-flex justify-content-center align-items-center py-3">
          <h5 className={`mb-0 ${styles['product-title']}`}>NARWHAL</h5>
        </div>
        <div
          className={`col-md-6 col-lg-7 d-none d-md-flex align-items-center py-3 ps-4 ${styles['breadcrumb-container']}`}
        >
          <h5 className={`mb-0 ${styles.breadcrumb}`}>Teams</h5>
        </div>
        <div className="col-xs-4 col-md-3 d-flex justify-content-end align-items-center py-3">
          <Notifications />
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
