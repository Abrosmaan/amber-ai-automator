
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const CTASection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-amber-400 to-amber-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-slate-800 mb-10 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              {t('cta.button')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-800">
            <div>
              <div className="text-2xl font-bold mb-2">15 min</div>
              <div className="text-sm">Free consultation</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">No commitment</div>
              <div className="text-sm">Just expert advice</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Custom ROI</div>
              <div className="text-sm">Estimate for your business</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
