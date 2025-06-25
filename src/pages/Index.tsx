
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import ShowcaseSection from '@/components/ShowcaseSection';
import ROISection from '@/components/ROISection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-900">
        <Header />
        <ShowcaseSection />
        <ROISection />
        <CTASection />
        <Footer />
        <AIChat />
      </div>
    </LanguageProvider>
  );
};

export default Index;
