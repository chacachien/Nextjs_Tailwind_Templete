'use client';
import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { HomePage } from '@/components/main/homePage';
import ProductsPage from '@/app/products/page';

export default function CategoryPage() {


  return (
    <main>
      <Header />
      <ProductsPage />
      <Footer />
    </main>
  );
}
