
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Settings, CircleDollarSign, Users } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Settings className="h-8 w-8 text-amber-400" />,
      title: t('why.custom.title'),
      description: t('why.custom.description')
    },
    {
      icon: <CircleDollarSign className="h-8 w-8 text-amber-400" />,
      title: t('why.roi.title'),
      description: t('why.roi.description')
    },
    {
      icon: <Users className="h-8 w-8 text-amber-400" />,
      title: t('why.human.title'),
      description: t('why.human.description')
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('why.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('why.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-amber-400/50 transition-all duration-300 text-center group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-400/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
