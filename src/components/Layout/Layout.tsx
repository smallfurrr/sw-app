import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <Sidebar />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
