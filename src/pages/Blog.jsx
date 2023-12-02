import React from 'react';
import Layout from './Layout';
import GalleryComponent from '../component/GalleryComponent';

const Blog = () => {
  return (
    <Layout> 
      <div className="text-left mx-5">
      <p className="text-xl font-bold my-4">Home - Blog</p>
      <div className="border-b border-gray-500 mb-8"></div>
      <p className="text-center text-4xl font-bold mt-4 mb-10">Blog Homeline</p>
      {/* Konten lainnya */}
    </div>
    <div className="container mx-auto mt-8">
      <GalleryComponent />
      {/* Komponen-komponen lainnya */}
    </div>
    </Layout>
  );
};

export default Blog;
