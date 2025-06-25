
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AIAgentMockup from './AIAgentMockup';
import { 
  MessageSquare, 
  Book, 
  CircleDollarSign, 
  ShoppingCart,
  Users,
  Calendar,
  FileText,
  TrendingUp
} from 'lucide-react';

const ShowcaseSection: React.FC = () => {
  const { t } = useLanguage();

  const mockups = [
    {
      id: 'customer-support',
      title: t('showcase.support.title'),
      description: t('showcase.support.description'),
      roi: t('showcase.support.roi'),
      icon: <MessageSquare className="h-8 w-8 text-amber-400" />,
      chatFlow: [
        { type: 'customer' as const, message: 'Hi, I need help with my recent order #12345', time: '10:23' },
        { type: 'ai' as const, message: 'I can see your order was delivered yesterday. What specific issue are you experiencing?', time: '10:23' },
        { type: 'customer' as const, message: 'The item seems damaged and I want a refund', time: '10:24' },
        { type: 'system' as const, message: '🔄 Complex issue detected - Escalating to human agent Sarah', time: '10:24' },
        { type: 'human' as const, message: 'Hi! I\'m Sarah, I\'ll process your refund immediately. Can you upload a photo of the damage?', time: '10:25' }
      ],
      metrics: {
        automation: '70%',
        responseTime: '< 30 sec',
        satisfaction: '94%',
        savings: '$5,000/month'
      }
    },
    {
      id: 'hr-knowledge',
      title: t('showcase.hr.title'),
      description: t('showcase.hr.description'),
      roi: t('showcase.hr.roi'),
      icon: <Book className="h-8 w-8 text-amber-400" />,
      chatFlow: [
        { type: 'employee' as const, message: 'How do I request vacation time?', time: '14:15' },
        { type: 'ai' as const, message: 'I\'ve opened the vacation request form for you. You have 18 days available. When would you like to take time off?', time: '14:15' },
        { type: 'employee' as const, message: 'Next month, from the 15th to 20th', time: '14:16' },
        { type: 'ai' as const, message: 'Request submitted to your manager Lisa. She typically approves within 24 hours. I\'ve also blocked your calendar tentatively.', time: '14:16' }
      ],
      metrics: {
        automation: '85%',
        onboardingTime: '2 days',
        hrWorkload: '-60%',
        savings: '$3,200/month'
      }
    },
    {
      id: 'financial-monitoring',
      title: t('showcase.finance.title'),
      description: t('showcase.finance.description'),
      roi: t('showcase.finance.roi'),
      icon: <CircleDollarSign className="h-8 w-8 text-amber-400" />,
      chatFlow: [
        { type: 'system' as const, message: '💰 Monthly spend analysis complete', time: '09:00' },
        { type: 'ai' as const, message: 'Software subscriptions up 23% ($12,400 vs budget $10,100). Identified 3 unused licenses worth $2,100/month.', time: '09:00' },
        { type: 'system' as const, message: '⚠️ Major decision required - Escalating to Finance Director', time: '09:01' },
        { type: 'human' as const, message: 'Thanks for the analysis. Approve the license cancellations and set up alerts for future overspend.', time: '09:15' }
      ],
      metrics: {
        monitoring: '24/7',
        savings: '$2,100/month',
        accuracy: '97%',
        alertSpeed: '< 1 hour'
      }
    },
    {
      id: 'ecommerce',
      title: t('showcase.ecommerce.title'),
      description: t('showcase.ecommerce.description'),
      roi: t('showcase.ecommerce.roi'),
      icon: <ShoppingCart className="h-8 w-8 text-amber-400" />,
      chatFlow: [
        { type: 'system' as const, message: '📦 New order #7834 - Processing automatically', time: '16:30' },
        { type: 'ai' as const, message: 'Order confirmed: 2x Product A, payment processed, shipping label generated, customer notified', time: '16:30' },
        { type: 'system' as const, message: '⚠️ Low stock alert: Only 3 units remaining', time: '16:31' },
        { type: 'ai' as const, message: 'Reorder triggered: 50 units from Supplier B (best price), delivery in 2 days', time: '16:31' }
      ],
      metrics: {
        orderTime: '< 5 min',
        accuracy: '99.2%',
        manualTasks: '-75%',
        savings: '$6,200/month'
      }
    },
    {
      id: 'sales-lead',
      title: t('showcase.sales.title'),
      description: t('showcase.sales.description'),
      roi: t('showcase.sales.roi'),
      icon: <Users className="h-8 w-8 text-amber-400" />,
      chatFlow: [
        { type: 'lead' as const, message: 'I\'m interested in your enterprise plan pricing', time: '11:45' },
        { type: 'ai' as const, message: 'Based on your company size (500+ employees), our Enterprise plan starts at $15k/month. Would you like to see a custom demo?', time: '11:45' },
        { type: 'lead' as const, message: 'Yes, and I need it integrated with Salesforce', time: '11:46' },
        { type: 'system' as const, message: '🎯 High-value lead detected - Escalating to senior sales rep Mike', time: '11:46' },
        { type: 'human' as const, message: 'Hi! I\'m Mike, our enterprise specialist. I can show you the Salesforce integration tomorrow at 2 PM?', time: '11:50' }
      ],
      metrics: {
        leadResponse: '< 2 min',
        qualification: '90%',
        conversion: '+35%',
        savings: '$4,800/month'
      }
    },
    {
      id: 'scheduling',
      title: t('showcase.scheduling.title'),
      description: t('showcase.scheduling.description'),
      roi: t('showcase.scheduling.roi'),
      icon: <Calendar className="h-8 w-8 text-amber-400" />,
      chatFlow: [
        { type: 'client' as const, message: 'I need to reschedule my appointment on Friday', time: '13:20' },
        { type: 'ai' as const, message: 'I see your 3 PM appointment with Dr. Smith. I have availability next Tuesday at 2 PM or Wednesday at 10 AM?', time: '13:20' },
        { type: 'client' as const, message: 'Tuesday works perfect', time: '13:21' },
        { type: 'ai' as const, message: 'Rescheduled! Dr. Smith notified, calendar updated, reminder set. You\'ll receive a confirmation email shortly.', time: '13:21' }
      ],
      metrics: {
        automation: '80%',
        noShows: '-45%',
        efficiency: '+60%',
        savings: '$2,800/month'
      }
    }
  ];

  return (
    <section className="py-12 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('showcase.title')}
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {t('showcase.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mockups.map((mockup, index) => (
            <AIAgentMockup key={mockup.id} mockup={mockup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
