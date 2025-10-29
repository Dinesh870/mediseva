
import React from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { EmergencySection } from './components/EmergencySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { StatsSection } from './components/StatsSection';
import { NewsSection } from './components/NewsSection';
import { AppointmentCTASection } from './components/AppointmentCTASection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FeaturesSection />
        <DoctorsSection />
        <EmergencySection />
        <TestimonialsSection />
        <StatsSection />
        <NewsSection />
        <AppointmentCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
