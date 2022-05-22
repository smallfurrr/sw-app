import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="d-flex flex-column flex-grow-1">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
