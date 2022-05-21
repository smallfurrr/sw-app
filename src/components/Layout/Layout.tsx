import React from 'react';
import Sidebar from './Sidebar';

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
