

import React from 'react';
import Notaris3 from "../assets/images/notaris3.png"
import Notaris2 from "../assets/images/notaris2.png"
import Notaris1 from "../assets/images/notaris1.png"

const RekomendasiNotaris = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-20">
      {/* Baris Pertama */}
      <div className="col-span-3 md:col-span-1 border bg-white rounded-md pb-5 rounded-bl-md rounded-br-3xl h-[360px]">
        <div className="relative aspect-ratio-16/9">
          {/* Ganti URL gambar dengan URL sesuai */}
          <img
          src={Notaris3}
          alt="Profile Image"
          className="w-full h-80 rounded-md"
        />
        </div>
        <div className="mt-[-30px] text-center">
        <p className="text-sm text-gray-500 text-left pl-5">Surabaya</p>
          <p className="text-lg font-bold">Rini Susanto, S.H., M.Kn.</p>
          
        </div>
      </div>

      {/* Baris Kedua */}
      <div className="col-span-3 md:col-span-1 border bg-white rounded-md pb-5 rounded-bl-md rounded-br-3xl h-[360px]">
        <div className="relative aspect-ratio-16/9">
          {/* Ganti URL gambar dengan URL sesuai */}
          <img
          src={Notaris2}
          alt="Profile Image"
          className="w-full h-80 rounded-md"
        />
        </div>
        <div className="mt-[-30px] text-center">
        <p className="text-sm text-gray-500 text-left pl-5">Surabaya</p>
          <p className="text-lg font-bold">Irfan Fauzi, S.H., M.Kn.</p>
        </div>
      </div>

      {/* Baris Ketiga */}
      <div className="col-span-3 md:col-span-1 border bg-white rounded-md pb-5 rounded-bl-md rounded-br-3xl h-[360px]">
        <div className="relative aspect-ratio-16/9">
          {/* Ganti URL gambar dengan URL sesuai */}
          <img
          src={Notaris1}
          alt="Profile Image"
          className="w-full h-80 rounded-md"
        />
        </div>
        <div className="mt-[-30px] text-center ">
        <p className="text-sm text-gray-500 text-left pl-5">Surabaya</p>
          <p className="text-lg font-bold">Susanto, S.H., M.Kn.</p>
        </div>
      </div>

    
    </div>
  );
};

export default RekomendasiNotaris;
