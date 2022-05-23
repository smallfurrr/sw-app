import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { CURRENT_USER } from './mock';

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="d-flex" style={{ height: '100%' }}>
      <Sidebar />
      <div className="d-flex flex-column flex-grow-1">
        <Navbar user={CURRENT_USER} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
