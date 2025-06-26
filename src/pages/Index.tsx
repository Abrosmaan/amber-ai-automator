
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-900">
        <Header />
        <WhyChooseUsSection />
        <ShowcaseSection />
        <CTASection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
