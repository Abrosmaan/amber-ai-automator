
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScenarioCard from './ScenarioCard';
import { MessageSquare, Book, CircleDollarSign, ShoppingCart } from 'lucide-react';

const ScenariosSection: React.FC = () => {
  const { t } = useLanguage();

  const scenarios = [
    {
      title: t('scenario.support.title'),
      description: t('scenario.support.description'),
      savings: t('scenario.support.savings'),
      icon: <MessageSquare className="h-6 w-6 text-amber-400" />,
      demoMessages: [
        { type: 'human' as const, message: 'Hi, I need help with my recent order #12345' },
        { type: 'ai' as const, message: 'I can see your order was delivered yesterday. What specific issue are you experiencing?' },
        { type: 'human' as const, message: 'The item seems damaged and I want a refund' },
        { type: 'system' as const, message: '🔄 Complex issue detected - Escalating to human agent Sarah' },
        { type: 'ai' as const, message: 'I\'ve connected you with Sarah, our specialist, who will process your refund immediately.' }
      ],
      metrics: [
        { label: 'Response Time', value: '< 30sec', change: '85% faster' },
        { label: 'Resolution Rate', value: '70%', change: 'Automated' },
        { label: 'Agent Workload', value: '-60%', change: 'Reduced' },
        { label: 'Customer Satisfaction', value: '94%', change: '+12%' }
      ]
    },
    {
      title: t('scenario.knowledge.title'),
      description: t('scenario.knowledge.description'),
      savings: t('scenario.knowledge.savings'),
      icon: <Book className="h-6 w-6 text-amber-400" />,
      demoMessages: [
        { type: 'human' as const, message: 'How do I access the company VPN?' },
        { type: 'ai' as const, message: 'Here\'s your personalized VPN setup guide. I\'ve also scheduled your security training for next week.' },
        { type: 'human' as const, message: 'What\'s our policy on remote work equipment?' },
        { type: 'ai' as const, message: 'You\'re eligible for a $500 home office stipend. I\'ve sent the request form to your email and notified HR.' }
      ],
      metrics: [
        { label: 'Onboarding Time', value: '2 days', change: '70% faster' },
        { label: 'Query Resolution', value: '95%', change: 'Instant' },
        { label: 'HR Workload', value: '-50%', change: 'Reduced' },
        { label: 'Employee Satisfaction', value: '91%', change: '+18%' }
      ]
    },
    {
      title: t('scenario.financial.title'),
      description: t('scenario.financial.description'),
      savings: t('scenario.financial.savings'),
      icon: <CircleDollarSign className="h-6 w-6 text-amber-400" />,
      demoMessages: [
        { type: 'system' as const, message: '💰 Monthly spend analysis complete' },
        { type: 'ai' as const, message: 'Software subscriptions up 23% this month ($12,400 vs. budget $10,100)' },
        { type: 'ai' as const, message: 'Identified 3 unused licenses worth $2,100/month. Recommend cancellation?' },
        { type: 'system' as const, message: '⚠️ Major decision required - Escalating to Finance Director' },
        { type: 'ai' as const, message: 'Approval request sent to Lisa for $2,100 monthly savings opportunity.' }
      ],
      metrics: [
        { label: 'Cost Monitoring', value: '24/7', change: 'Automated' },
        { label: 'Savings Identified', value: '$2,100', change: 'Monthly' },
        { label: 'Approval Time', value: '2 hours', change: '90% faster' },
        { label: 'Budget Accuracy', value: '97%', change: '+15%' }
      ]
    },
    {
      title: t('scenario.ecommerce.title'),
      description: t('scenario.ecommerce.description'),
      savings: t('scenario.ecommerce.savings'),
      icon: <ShoppingCart className="h-6 w-6 text-amber-400" />,
      demoMessages: [
        { type: 'system' as const, message: '📦 New order #7834 - Processing automatically' },
        { type: 'ai' as const, message: 'Inventory check: 5 units available, shipping label generated, customer notified' },
        { type: 'system' as const, message: '⚠️ Low stock alert: Only 2 units remaining' },
        { type: 'ai' as const, message: 'Reorder triggered: 50 units from Supplier A (best price), delivery in 3 days' },
        { type: 'ai' as const, message: 'Customer inquiry about shipping - responded with tracking info automatically' }
      ],
      metrics: [
        { label: 'Order Processing', value: '< 5min', change: '80% faster' },
        { label: 'Inventory Accuracy', value: '99.2%', change: '+8%' },
        { label: 'Manual Tasks', value: '-75%', change: 'Reduced' },
        { label: 'Customer Satisfaction', value: '96%', change: '+14%' }
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t('scenarios.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('scenarios.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {scenarios.map((scenario, index) => (
            <ScenarioCard key={index} {...scenario} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenariosSection;
