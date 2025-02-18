'use client';
import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { HomePage } from '@/components/main/homePage';

export default function Home() {


  return (
    <main>
      <Header />
      <HomePage />
      <Footer />
    </main>
  );
}
