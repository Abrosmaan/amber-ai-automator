
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, DollarSign, Clock, Target } from 'lucide-react';

const CTASection: React.FC = () => {
  const { t } = useLanguage();

  const roiMetrics = [
    {
      icon: <DollarSign className="h-8 w-8 text-amber-400" />,
      title: 'Monthly Savings',
      value: '$5,000 - $15,000',
      subtitle: 'per month',
      description: 'Reduce operational costs through automation of repetitive tasks and improved efficiency'
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-400" />,
      title: 'Payback Period',
      value: '2-4',
      subtitle: 'months',
      description: 'Quick return on investment with immediate productivity gains'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-amber-400" />,
      title: 'Efficiency Gain',
      value: '60-80%',
      subtitle: 'improvement',
      description: 'Dramatic reduction in task completion time and human error rates'
    },
    {
      icon: <Target className="h-8 w-8 text-amber-400" />,
      title: 'Accuracy Rate',
      value: '95%+',
      subtitle: 'precision',
      description: 'Consistent, reliable performance with minimal errors'
    }
  ];

  const businessCases = [
    {
      industry: 'E-commerce Platform',
      challenge: 'Customer support team overwhelmed with 500+ daily inquiries, 24-hour response times, high support costs',
      solution: 'AI Agent handles 70% of customer inquiries, escalates complex issues to humans',
      results: '90% faster response times, 24/7 availability, 40% reduction in support costs',
      roi: '$8,500/month'
    },
    {
      industry: 'SaaS Company',
      challenge: 'Sales team spending 60% of time on lead qualification instead of closing deals',
      solution: 'AI Agent qualifies leads, schedules demos, provides instant product information',
      results: '3x more qualified leads processed, 50% increase in demo conversion rates',
      roi: '$12,000/month'
    },
    {
      industry: 'Healthcare Practice',
      challenge: 'Staff overwhelmed with appointment scheduling, patient inquiries, insurance verification',
      solution: 'AI Agent manages scheduling, answers common questions, handles routine tasks',
      results: '80% reduction in administrative workload, improved patient satisfaction',
      roi: '$6,200/month'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ROI Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Real Business Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See the measurable impact AI Agents deliver across different industries and business functions
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
            Success Case Studies
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
                      <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                      <p className="text-slate-600 text-sm">{businessCase.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">AI Solution</h4>
                      <p className="text-slate-600 text-sm">{businessCase.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Results</h4>
                      <p className="text-slate-600 text-sm">{businessCase.results}</p>
                    </div>
                    
                    <div className="bg-slate-900 text-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-amber-400">{businessCase.roi}</div>
                      <div className="text-sm">Monthly Savings</div>
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

export default CTASection;
