import React from 'react';
import Layout from './Layout';
import Images from '../assets/images/avatar.png'

const Profil = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto mb-10 mt-10 bg-white p-8 rounded-md shadow-lg">
  <div className="text-3xl font-bold ml-16">Profil Saya</div>
  <div className="flex justify-center">
    {/* Sisi Kiri: Gambar Profil dan Tombol Edit Foto */}
    <div className="w-1/3 text-center mt-4"> {/* Tambahkan kelas w-1/3 di sini */}
      <img src={Images} alt='...'
        className="h-23 w-auto rounded object-cover mx-auto"
      />
      <button className="mt-2 text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
        Edit Foto
      </button>
    </div>

    {/* Sisi Kanan: Data Diri dan Tombol Edit Data */}
    <div className="flex-1">
      <div className="mb-2 flex items-center my-4">
        <span className="text-gray-600 flex-shrink-0">Nama</span>
        <p className="text-gray-600 border ml-14 px-6 py-1 rounded inline-block w-full">Johon Adre</p>
      </div>
      <div className="mb-2 flex items-center my-4">
        <span className="text-gray-600 flex-shrink-0 mr-1">Email</span>
        <p className="text-gray-600 border ml-14 px-6 py-1 rounded inline-block w-full">Johon Adre</p>
      </div>
      <div className="mb-2 flex items-center my-4">
        <span className="text-gray-600 flex-shrink-0">Kata Sandi</span>
        <p className="text-gray-600 border ml-5 px-6 py-1 rounded inline-block w-full">Johon Adre</p>
      </div>
      <div className="mb-2 flex items-center my-4">
        <span className="text-gray-600 flex-shrink-0">No Telp</span>
        <p className="text-gray-600 border ml-11 px-6 py-1 rounded inline-block w-full">Johon Adre</p>
      </div>
      <div className="mb-2 flex items-center my-4">
        <span className="text-gray-600 flex-shrink-0">Alamat</span>
        <p className="text-gray-600 border ml-12 px-6 py-1 rounded inline-block w-full">Johon Adre</p>
      </div>
      {/* Sisipkan sisa kode untuk data diri lainnya */}
      <div className="flex justify-end mt-8">
        <button className="bg-[#715C4B] text-white px-4 py-2 rounded focus:outline-none focus:bg-[#715C4B] hover:bg-[#40362E]">
          Edit Data
        </button>
      </div>
    </div>
  </div>
</div>

    </Layout>
  );
};

export default Profil;
