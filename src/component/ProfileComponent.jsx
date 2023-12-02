// ProfileComponent.jsx

import React from "react";
import Notaris4 from "../assets/images/notaris4.png"



const ProfileComponent = () => {
  return (
    <div className="flex my-10">
      {/* Sisi Kiri (Gambar) */}
      <div className="w-1/3 pr-4">
        {/* Ganti URL gambar dengan URL sesuai */}
        <img
          src={Notaris4}
          alt="Profile Image"
          className="w-120 h-full rounded-md"
        />
      </div>

      {/* Sisi Kanan (Judul, Isi Teks, Data Diri, Tombol) */}
      <div className="w-2/3 mx-5">
        <h1 className="text-2xl font-bold">Agus Setiawan, SH., M.Kn.</h1>
        <h1 className="text-xl font-bold mb-4">Rungkut, Surabaya</h1>
        <h1 className="text-xl font-bold mb-2">Deskripsi:</h1>

        <p className="text-sm mb-4">
          Saya seorang profesional hukum dengan latar belakang pendidikan dan
          pengalaman sebagai notaris. Pemahaman mendalam saya dalam menyusun dan
          memverifikasi dokumen hukum, seperti akta otentik dan perjanjian
          bisnis, telah teruji dalam menangani transaksi dengan teliti. Saya
          mengutamakan kejujuran, kecermatan, dan komunikasi efektif untuk
          memberikan layanan berkualitas kepada klien. Dengan izin praktik sah
          dari Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia, saya
          siap memberikan kontribusi positif untuk memenuhi kebutuhan hukum dan
          bisnis klien.
        </p>

        {/* Data Diri */}
        <div className="flex justify-between">
          {/* Data Diri */}
          <div className="mb-4">
            <h2 className="text-lg text-gray-600 font-semibold">Link LinkedIn</h2>
            <p className="text-l text-black mb-2">agus</p>
            <h2 className="text-lg text-gray-600 font-semibold mb-2">Link LinkedIn</h2>
            <p className="text-l text-black mb-2">agus</p>
            <h2 className="text-lg text-gray-600 font-semibold mb-2">Link LinkedIn</h2>
            <p className="text-l text-black mb-2">agus</p>
           
          </div>

          {/* Tombol */}
          <div className="flex-col mt-28">
            <button className="w-60 bg-[#40362E] text-white py-2 px-4  mx-5 my-2 rounded-bl-2xl">
              Tombol 1
            </button>
            <br />
            <button className="w-60 bg-[#40362E] text-white py-2 px-4 mx-5 my-2 rounded-bl-2xl">
              Tombol 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
