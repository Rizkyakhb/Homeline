import React from 'react';
import Layout from './Layout';
import ProfileComponent from '../component/ProfileComponent';
import RekomendasiNotaris from '../component/RekomendasiNotaris';

const Notaris = () => {
  return (
    <Layout>
       <div className="container mx-auto mt-8">
      <ProfileComponent />
      {/* Komponen-komponen lainnya */}
    </div>
    <div className="text-left mx-8">
      <p className="text-4xl font-bold mt-4 mb-10">Rekomendasi Notaris</p>
      {/* Konten lainnya */}
    </div>
    <div className="container mx-auto mt-8">
      <RekomendasiNotaris />
      {/* Komponen-komponen lainnya */}
    </div>
    </Layout>
  );
};

export default Notaris;
