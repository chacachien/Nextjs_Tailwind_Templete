'use client';
import Image from 'next/image';
import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { HomePage } from '@/components/main/homePage';

export default function Home() {
  const handleToggle = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <main>
      <Header />
      <HomePage />
      <Footer />
    </main>
  );
}
