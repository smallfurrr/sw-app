import React from 'react';
import styles from './Navbar.module.scss';
import ProfileMenu from './ProfileMenu';
import Notifications from './Notifications';
import { UserInterface } from '../../../types';
import Image from 'next/image';

interface NavbarProps {
  user: UserInterface;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <div className={`container-fluid px-5 py-3 py-lg-0 ${styles.navbar}`}>
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
        <div className="col-4 d-md-none d-flex align-items-center">
          <button className="btn d-flex align-items-center">
            <Image src="/icon-menu.svg" alt="menu" width={36} height={36} />
          </button>
        </div>
        <div className="col-4 d-md-none d-flex align-items-center justify-content-center">
          <h4 className="mb-0">NARWHAL</h4>
        </div>
        <div className="col-4 col-md-3 d-flex justify-content-end align-items-center">
          <Notifications user={user} />
          <ProfileMenu user={user} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
