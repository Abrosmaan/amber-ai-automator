
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,180,0,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,180,0,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">$5,000+</div>
              <div className="text-slate-400 text-sm">{t('stats.savings')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">2-4</div>
              <div className="text-slate-400 text-sm">{t('stats.roi')} {t('stats.months')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">70%+</div>
              <div className="text-slate-400 text-sm">{t('stats.automation')}</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold px-8 py-4 text-lg group"
            >
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg group"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              {t('hero.cta.secondary')}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Trusted by businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <Users className="h-8 w-8 text-slate-600" />
              <div className="text-slate-600 font-semibold">500+</div>
              <div className="text-slate-600">Businesses Automated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
