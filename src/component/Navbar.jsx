import React, { useState } from 'react';
import ContactDropdown from './ContactDropdown';
import homeline from "../assets/images/homeline.png";


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav class="bg-[#C8BBAE] p-4 mt-4 ml-4 mr-4 rounded-tl-2xl rounded-br-2xl">
        <div class="container mx-auto flex items-center justify-between">
          
            <div class="flex items-center">
                
            <a href="#" class="flex items-center">
              <img src={homeline} class="h-8 me-3" alt="FlowBite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">
                Homeline
              </span>
            </a>
            </div>
            

           
            <div class="text-black">
                <a href="#" class="mr-4 px-5 bg-white p-2 rounded-full">Jual Properti</a>
                <a href="./Notaris" class="mr-4 px-5 bg-white p-2 rounded-full">Notaris</a>
                <a href="./Blog" class="mr-4 px-5 bg-white p-2 rounded-full">Blog</a>
                <a className="mr-4 bg-white p-2 rounded-full">
            <ContactDropdown />
          </a>
                
            </div>
        </div>
        
    </nav>
  );
};

export default Navbar;
