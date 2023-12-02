import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';


const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-[#FFF9EF]'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
