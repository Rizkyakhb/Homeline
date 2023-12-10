import React from 'react';
import Navbaradmin from '../component/Navbaradmin';


const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-[#FFFFFF]'>
      <Navbaradmin />
      {children}
    </div>
  );
};

export default Layout;
