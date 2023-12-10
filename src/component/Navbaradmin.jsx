import React, { useState } from 'react';
import homeline from "../assets/images/homeline.png";
import Images1 from "../assets/images/avatar.png"


const Navbaradmin = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#C8BBAE] p-4 mt-4 ml-4 mr-4 rounded-tl-2xl rounded-br-2xl">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <a href="#" className="flex items-center">
          <img src={homeline} className="h-8 me-3" alt="FlowBite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            Homeline
          </span>
        </a>
      </div>

      <div className="flex items-center mr-4">
      <span className="flex self-center text-xl ml-2 whitespace-nowrap text-black mr-2">
          Hello, <p className='font-semibold'> Admin</p>
        </span>
        <img
          src={Images1} // Gantilah dengan path yang sesuai
          className="h-10 w-10 rounded-full object-cover"
          alt="Profile"
        />
        
      </div>
    </div>
  </nav>
  );
};

export default Navbaradmin;
