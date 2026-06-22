import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Methodology from '../components/Methodology';
import Team from '../components/Team';
import SuccessStories from '../components/SuccessStories';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Methodology />
      <Team />
      <SuccessStories />
      <Footer />
    </div>
  );
}
