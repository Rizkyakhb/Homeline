import React, { useState } from 'react';

const ContactDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center p-2 text-black hover:text-gray-700 focus:outline-none focus:text-gray-700"
      >
        Akun
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6 9l4 4 4-4"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg text-center">
          <a
            href="./Profil"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Profil
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100"
          >
            Keluar
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactDropdown;