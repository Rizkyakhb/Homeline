// GalleryComponent.jsx

import React from 'react';
import Blog1 from "../assets/images/blog1.png"
import Blog2 from "../assets/images/blog2.png"
import Blog3 from "../assets/images/blog3.png"
import Blog4 from "../assets/images/blog4.png"
import Blog5 from "../assets/images/blog5.png"
import Blog6 from "../assets/images/blog6.png"

const GalleryComponent = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-20">
      {/* Baris Pertama */}
      <div className="col-span-3 md:col-span-1 border bg-white pb-5 rounded-bl-md rounded-br-3xl h-[430px]">
        <div className="relative aspect-ratio-16/9">
          {/* Ganti URL gambar dengan URL sesuai */}
          <img
          src={Blog1}
          alt="Profile Image"
          className="w-120 h-full rounded-md"
        />
        </div>
        <div className="mt-[-50px] px-5 text-center">
          <p className="text-left text-sm text-gray-500">14-11-2023</p>
          <p className="text-lg font-bold">Tips Cari Rumah Dengan Nyaman</p>
        </div>
      </div>

      {/* Baris Kedua */}
      <div className="col-span-3 md:col-span-1 border bg-white pb-5 rounded-bl-md rounded-br-3xl h-[430px]">
        <div className="relative aspect-ratio-16/9">
          {/* Ganti URL gambar dengan URL sesuai */}
          <img
          src={Blog2}
          alt="Profile Image"
          className="w-full h-auto rounded-md"
        />
        </div>
        <div className="mt-[-50px] px-5 text-center">
        <p className="text-left text-sm text-gray-500">14-11-2023</p>
          <p className="text-lg font-bold">Tips Memilih Notaris</p>
        </div>
      </div>

      {/* Baris Ketiga */}
      <div className="col-span-3 md:col-span-1 border bg-white pb-5 rounded-bl-md rounded-br-3xl h-[430px]">
        <div className="relative aspect-ratio-16/9">
          {/* Ganti URL gambar dengan URL sesuai */}
          <img
          src={Blog3}
          alt="Profile Image"
          className="w-full h-auto rounded-md"
        />
        </div>
        <div className="mt-[-50px] px-5 text-center">
        <p className="text-left text-sm text-gray-500">14-11-2023</p>
          <p className="text-lg font-bold">Cara Mengurus Surat Tanah</p>
        </div>
      </div>

    {/* Baris Keempat */}
      <div className="col-span-3 md:col-span-1 border bg-white pb-5 rounded-bl-md rounded-br-3xl h-[430px]">
        <div className="relative aspect-ratio-16/9">
          {/* Ganti URL gambar dengan URL sesuai */}
          <img
          src={Blog4}
          alt="Profile Image"
          className="w-full h-auto rounded-md"
        />
        </div>
        <div className="mt-[-50px] px-5 text-center">
        <p className="text-left text-sm text-gray-500">14-11-2023</p>
          <p className="text-lg font-bold">Tips Memilih Notaris</p>
        </div>
      </div>

      {/* Baris Kelima */}
      <div className="col-span-3 md:col-span-1 border bg-white pb-5 rounded-bl-md rounded-br-3xl h-[430px]">
        <div className="relative aspect-ratio-16/9">
          {/* Ganti URL gambar dengan URL sesuai */}
          <img
          src={Blog5}
          alt="Profile Image"
          className="w-full h-auto rounded-md"
        />
        </div>
        <div className="mt-[-50px] px-5 text-center">
        <p className="text-left text-sm text-gray-500">14-11-2023</p>
          <p className="text-lg font-bold">Cara Mengurus Surat Tanah</p>
        </div>
      </div>

      {/* Baris Keenam */}
      <div className="col-span-3 md:col-span-1 border bg-white pb-5 rounded-bl-md rounded-br-3xl h-[430px]">
        <div className="relative aspect-ratio-16/9">
          {/* Ganti URL gambar dengan URL sesuai */}
          <img
          src={Blog6}
          alt="Profile Image"
          className="w-full h-auto rounded-md"
        />
        </div>
        <div className="mt-[-50px] px-5 text-center">
        <p className="text-left text-sm text-gray-500">14-11-2023</p>
          <p className="text-lg font-bold">Apa itu Homeline?</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
