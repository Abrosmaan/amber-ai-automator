
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ScenariosSection from '@/components/ScenariosSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <ScenariosSection />
        <WhyChooseUsSection />
        <CTASection />
        <Footer />
        <AIChat />
      </div>
    </LanguageProvider>
  );
};

export default Index;
