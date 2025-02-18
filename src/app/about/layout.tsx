'use client';
import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { HomePage } from '@/components/main/homePage';
import AboutPage from '@/app/about/page';

export default function About() {


  return (
    <main>
      <Header />
      <AboutPage />
      <Footer />
    </main>
  );
}
