
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, DollarSign, Clock, Target } from 'lucide-react';

const ROISection: React.FC = () => {
  const { t } = useLanguage();

  const roiMetrics = [
    {
      icon: <DollarSign className="h-8 w-8 text-amber-400" />,
      title: t('roi.savings.title'),
      value: '$5,000 - $15,000',
      subtitle: t('roi.savings.subtitle'),
      description: t('roi.savings.description')
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-400" />,
      title: t('roi.payback.title'),
      value: '2-4',
      subtitle: t('roi.payback.subtitle'),
      description: t('roi.payback.description')
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-amber-400" />,
      title: t('roi.efficiency.title'),
      value: '60-80%',
      subtitle: t('roi.efficiency.subtitle'),
      description: t('roi.efficiency.description')
    },
    {
      icon: <Target className="h-8 w-8 text-amber-400" />,
      title: t('roi.accuracy.title'),
      value: '95%+',
      subtitle: t('roi.accuracy.subtitle'),
      description: t('roi.accuracy.description')
    }
  ];

  const businessCases = [
    {
      industry: t('roi.cases.ecommerce.industry'),
      challenge: t('roi.cases.ecommerce.challenge'),
      solution: t('roi.cases.ecommerce.solution'),
      results: t('roi.cases.ecommerce.results'),
      roi: '$8,500/month'
    },
    {
      industry: t('roi.cases.saas.industry'),
      challenge: t('roi.cases.saas.challenge'),
      solution: t('roi.cases.saas.solution'),
      results: t('roi.cases.saas.results'),
      roi: '$12,000/month'
    },
    {
      industry: t('roi.cases.healthcare.industry'),
      challenge: t('roi.cases.healthcare.challenge'),
      solution: t('roi.cases.healthcare.solution'),
      results: t('roi.cases.healthcare.results'),
      roi: '$6,200/month'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ROI Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t('roi.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('roi.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {roiMetrics.map((metric, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{metric.value}</div>
                <div className="text-amber-600 font-semibold mb-2">{metric.subtitle}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{metric.title}</h3>
                <p className="text-slate-600 text-sm">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Business Cases */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            {t('roi.cases.title')}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessCases.map((businessCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-amber-400/10 rounded-lg p-3 mb-4">
                    <div className="text-amber-600 font-semibold">{businessCase.industry}</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">{t('roi.cases.challenge_label')}</h4>
                      <p className="text-slate-600 text-sm">{businessCase.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">{t('roi.cases.solution_label')}</h4>
                      <p className="text-slate-600 text-sm">{businessCase.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">{t('roi.cases.results_label')}</h4>
                      <p className="text-slate-600 text-sm">{businessCase.results}</p>
                    </div>
                    
                    <div className="bg-slate-900 text-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-amber-400">{businessCase.roi}</div>
                      <div className="text-sm">{t('roi.cases.monthly_savings')}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
