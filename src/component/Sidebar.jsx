import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Sidebar = () => {
  return (
<div className="bg-[#C8BFB8] h-[1100px] w-64 ml-4 rounded-tl-3xl">
           {/* Daftar menu atau navigasi */}
           <ul className="text-white text-[#4C4C4C]">
  <li className="p-4 hover:bg-[#FFFFFF] cursor-pointer hover:text-black">
    <a href="./Admindashboard">Dashboard</a>
  </li>
  <li className="p-4 hover:bg-[#FFFFFF] cursor-pointer hover:text-black">
    <a href="./Adminlistpesanan">List Pesanan</a>
  </li>
  <li className="p-4 hover:bg-[#FFFFFF] cursor-pointer hover:text-black">
    <a href="./Adminpelanggan">Pelanggan</a>
  </li>
  <li className="p-4 hover:bg-[#FFFFFF] cursor-pointer hover:text-black">
    <a href="./Adminnotaris">Notaris</a>
  </li>
  <li className="p-4 hover:bg-[#FFFFFF] cursor-pointer hover:text-black">
    <a href="./Adminpostblog">Post Blog</a>
  </li>
  <li className="p-4 hover:bg-[#FFFFFF] cursor-pointer hover:text-black">
    <a href="./Adminblog">Blog</a>
  </li>
  {/* Tambahkan lebih banyak menu sesuai kebutuhan */}
</ul>
        </div>
        );
    };
    
    export default Sidebar;
    