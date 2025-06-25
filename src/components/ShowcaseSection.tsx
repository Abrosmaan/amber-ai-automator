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
  TrendingUp,
  Building,
  Shield
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
        { type: 'customer' as const, message: 'Hi, I need help with my recent order #12345. It was supposed to arrive yesterday but I haven\'t received it yet.', time: '10:23' },
        { type: 'ai' as const, message: 'I can see your order #12345 for the wireless headphones. According to tracking, it was marked as delivered yesterday at 3:47 PM to your front door. Let me check if there were any delivery issues.', time: '10:23' },
        { type: 'customer' as const, message: 'I was home all day and didn\'t receive anything. The package might have been stolen or delivered to wrong address.', time: '10:24' },
        { type: 'ai' as const, message: 'I understand your concern. I\'ve initiated a delivery investigation with our carrier and filed a claim. I can either send a replacement immediately or provide a full refund. Which would you prefer?', time: '10:24' },
        { type: 'customer' as const, message: 'I\'d like a replacement, but I need it by this weekend for a trip', time: '10:25' },
        { type: 'system' as const, message: '🔄 Complex shipping request detected - Escalating to human agent Sarah', time: '10:25' },
        { type: 'human' as const, message: 'Hi! I\'m Sarah from our priority support team. I\'ll arrange express shipping for your replacement at no extra cost. You\'ll have it by Friday. I\'m also adding a $20 credit for the inconvenience.', time: '10:26' }
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
        { type: 'employee' as const, message: 'I need to request vacation time for next month. What\'s the process and how many days do I have left?', time: '14:15' },
        { type: 'ai' as const, message: 'I can help you with that! You currently have 18 vacation days available for this year. Let me pull up the vacation request form. When would you like to take time off?', time: '14:15' },
        { type: 'employee' as const, message: 'I want to take off from March 15th to 20th, that\'s 6 days total', time: '14:16' },
        { type: 'ai' as const, message: 'Perfect! I\'ve filled out the form with March 15-20 (6 days). I see you have an important project deadline on March 14th. Your manager Lisa typically approves requests within 24 hours. Should I submit this request?', time: '14:16' },
        { type: 'employee' as const, message: 'Yes, please submit it. Also, will this affect my health insurance enrollment deadline?', time: '14:17' },
        { type: 'ai' as const, message: 'Request submitted! I\'ve also blocked your calendar tentatively. Regarding health insurance - your enrollment deadline is April 30th, so your vacation won\'t affect it. I can set a reminder for you if needed.', time: '14:17' }
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
        { type: 'system' as const, message: '💰 Monthly spend analysis complete - Unusual patterns detected', time: '09:00' },
        { type: 'ai' as const, message: 'Software subscriptions are up 23% this month ($12,400 vs budget $10,100). I\'ve identified 3 unused licenses costing $2,100/month: Adobe Creative Suite (2 licenses), Slack Enterprise (1 license).', time: '09:00' },
        { type: 'ai' as const, message: 'Additionally, I found duplicate payments for Microsoft Office - accounting charged twice for the same renewal. Total duplicate amount: $1,200.', time: '09:01' },
        { type: 'system' as const, message: '⚠️ Budget variance exceeds 20% threshold - Escalating to Finance Director', time: '09:01' },
        { type: 'human' as const, message: 'Thanks for the detailed analysis. Please proceed with canceling the unused licenses and initiate the duplicate payment recovery. Set up alerts for any future spend above 15% variance.', time: '09:15' },
        { type: 'ai' as const, message: 'Actions completed: License cancellations processed, duplicate payment claim filed, new alert threshold set to 15%. Estimated monthly savings: $2,100.', time: '09:16' }
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
        { type: 'system' as const, message: '📦 New order #7834 received - Processing automatically', time: '16:30' },
        { type: 'ai' as const, message: 'Order #7834 processed: 2x Wireless Headphones ($299 each), payment verified via Credit Card ending 4521, shipping address confirmed in Los Angeles, CA.', time: '16:30' },
        { type: 'ai' as const, message: 'Shipping label generated for FedEx Express, tracking number: 1234567890. Customer notified via email and SMS. Expected delivery: Thursday, March 16th.', time: '16:30' },
        { type: 'system' as const, message: '⚠️ Inventory alert: Wireless Headphones stock level critical - Only 3 units remaining', time: '16:31' },
        { type: 'ai' as const, message: 'Reorder analysis complete: Supplier B offers best price ($180/unit vs $195/unit from Supplier A). Purchase order created for 50 units, delivery scheduled for March 18th.', time: '16:31' },
        { type: 'ai' as const, message: 'Customer #7834 added to VIP list (3rd purchase this month). Automatic 10% discount applied to future orders. Loyalty points awarded: 598 points.', time: '16:32' }
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
        { type: 'lead' as const, message: 'I\'m interested in your enterprise plan pricing for our company. We have about 500 employees and need integration with our existing CRM.', time: '11:45' },
        { type: 'ai' as const, message: 'Great! For a 500-employee organization, our Enterprise plan starts at $15k/month. I see you need CRM integration - we support Salesforce, HubSpot, and Pipedrive. Which CRM are you currently using?', time: '11:45' },
        { type: 'lead' as const, message: 'We\'re using Salesforce. Also, what\'s your implementation timeline? We need this running by Q2.', time: '11:46' },
        { type: 'ai' as const, message: 'Perfect! Our Salesforce integration is very robust. For 500 users, typical implementation is 6-8 weeks. I can schedule a technical demo showing the Salesforce integration specifically. What\'s your role in the decision-making process?', time: '11:46' },
        { type: 'lead' as const, message: 'I\'m the CTO. I need to see the technical capabilities and then present to our executive team next week.', time: '11:47' },
        { type: 'system' as const, message: '🎯 High-value lead detected (CTO, 500+ employees, urgent timeline) - Escalating to senior sales rep Mike', time: '11:47' },
        { type: 'human' as const, message: 'Hi! I\'m Mike, senior enterprise specialist. I can arrange a comprehensive technical demo tomorrow at 2 PM with our CTO. I\'ll also prepare ROI projections and implementation timeline specifically for your Q2 deadline.', time: '11:50' }
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
        { type: 'client' as const, message: 'I need to reschedule my appointment with Dr. Smith this Friday. Something urgent came up at work.', time: '13:20' },
        { type: 'ai' as const, message: 'I can help you reschedule. I see your appointment is Friday at 3 PM for a follow-up consultation. Dr. Smith has availability next Tuesday at 2 PM, Wednesday at 10 AM, or Thursday at 4 PM. Which works best?', time: '13:20' },
        { type: 'client' as const, message: 'Tuesday at 2 PM works perfectly. Will I need to bring the same lab results?', time: '13:21' },
        { type: 'ai' as const, message: 'Tuesday at 2 PM confirmed! Yes, please bring your lab results from last week. I\'ve updated Dr. Smith\'s calendar and sent you a confirmation email with parking instructions and preparation notes.', time: '13:21' },
        { type: 'client' as const, message: 'Great! Also, can you remind me what I need to do before the appointment?', time: '13:22' },
        { type: 'ai' as const, message: 'Of course! You need to: 1) Fast for 8 hours before the appointment, 2) Bring your lab results and insurance card, 3) Arrive 15 minutes early for check-in. I\'ll send you a reminder on Monday morning.', time: '13:22' }
      ],
      metrics: {
        automation: '80%',
        noShows: '-45%',
        efficiency: '+60%',
        savings: '$2,800/month'
      }
    },
    {
      id: 'legal-contracts',
      title: 'Legal Document Processing',
      description: 'AI Agent reviews contracts, flags issues, and manages legal workflows while keeping critical decisions with lawyers.',
      roi: 'ROI: 65% faster contract review, $8,000/month saved on routine legal tasks',
      icon: <FileText className="h-8 w-8 text-amber-400" />,
      chatFlow: [
        { type: 'client' as const, message: 'I need to review this vendor contract before signing. Can you check for any red flags?', time: '10:30' },
        { type: 'ai' as const, message: 'I\'ve analyzed your vendor contract. Found 3 concerns: 1) Liability cap is unusually low ($50K vs industry standard $500K), 2) Auto-renewal clause with 90-day notice, 3) Indemnification clause favors vendor heavily.', time: '10:31' },
        { type: 'client' as const, message: 'Those sound serious. What do you recommend?', time: '10:32' },
        { type: 'ai' as const, message: 'I\'ve prepared suggested revisions for points 1 and 3. However, the liability cap requires legal expertise to negotiate properly. I\'ve flagged this for attorney review due to potential $2M+ risk exposure.', time: '10:32' },
        { type: 'system' as const, message: '⚖️ High-risk contract terms detected - Escalating to Senior Legal Counsel', time: '10:33' },
        { type: 'human' as const, message: 'I\'ve reviewed the AI analysis - excellent catch on the liability cap. I\'ll negotiate directly with their legal team. The other suggestions look good to implement.', time: '10:45' }
      ],
      metrics: {
        reviewTime: '< 15 min',
        accuracy: '96%',
        riskReduction: '78%',
        savings: '$8,000/month'
      }
    },
    {
      id: 'property-management',
      title: 'Real Estate Property Management',
      description: 'AI Agent handles tenant inquiries, maintenance requests, and lease management while escalating complex issues.',
      roi: 'ROI: 70% reduction in response time, $4,500/month operational savings',
      icon: <Building className="h-8 w-8 text-amber-400" />,
      chatFlow: [
        { type: 'client' as const, message: 'The heating in apartment 4B isn\'t working. My tenant is complaining and it\'s getting cold.', time: '08:15' },
        { type: 'ai' as const, message: 'I\'ve logged the heating issue for unit 4B. Checking our preferred contractor network... HVAC Tech Solutions has availability today at 2 PM. Estimated cost: $150-300 for typical heating repairs. Should I schedule?', time: '08:15' },
        { type: 'client' as const, message: 'Yes, schedule it. Also, the tenant wants to know about lease renewal options.', time: '08:16' },
        { type: 'ai' as const, message: 'HVAC appointment confirmed for 2 PM, tenant notified. For lease renewal: current rent is $1,800, market rate is $1,950. I can prepare a renewal offer at $1,875 (competitive rate) or discuss other terms. What\'s your preference?', time: '08:16' },
        { type: 'client' as const, message: 'That sounds reasonable. Also, I want to discuss property tax implications of the new rental rate.', time: '08:17' },
        { type: 'system' as const, message: '🏢 Tax consultation required - Escalating to Property Management Specialist', time: '08:17' },
        { type: 'human' as const, message: 'Hi! I\'m Janet, your property specialist. The rental increase will affect your tax bracket slightly. Let me prepare a detailed analysis with tax optimization strategies for your portfolio.', time: '08:25' }
      ],
      metrics: {
        responseTime: '< 10 min',
        tenantSatisfaction: '91%',
        maintenanceEfficiency: '+65%',
        savings: '$4,500/month'
      }
    },
    {
      id: 'insurance-claims',
      title: 'Insurance Claims Processing',
      description: 'AI Agent processes claims, verifies documents, and handles routine approvals while flagging complex cases.',
      roi: 'ROI: 80% faster claim processing, $12,000/month in operational efficiency',
      icon: <Shield className="h-8 w-8 text-amber-400" />,
      chatFlow: [
        { type: 'client' as const, message: 'I need to file a claim for water damage in my basement. The pipe burst last night and flooded everything.', time: '09:30' },
        { type: 'ai' as const, message: 'I\'m sorry to hear about the water damage. I\'ve started claim #WD-2024-3456. Your policy covers water damage from burst pipes. I need photos of the damage and a list of affected items. Can you upload these?', time: '09:30' },
        { type: 'client' as const, message: 'Yes, uploading now. The damage includes my home office equipment, some furniture, and personal items. Total estimate around $15,000.', time: '09:32' },
        { type: 'ai' as const, message: 'Photos received and verified. I\'ve identified: 1 laptop, 1 desk, 2 chairs, books, and electronics. Your deductible is $1,000. I can pre-approve up to $5,000 for immediate repairs to prevent further damage.', time: '09:33' },
        { type: 'client' as const, message: 'That would be great. I also have some antique furniture that might be worth more than I originally estimated.', time: '09:34' },
        { type: 'system' as const, message: '💎 High-value items detected - Escalating to Senior Claims Adjuster', time: '09:34' },
        { type: 'human' as const, message: 'Hi, I\'m Robert, senior adjuster. I\'ll arrange for a specialist appraiser to evaluate the antique furniture. Your $5,000 emergency repair authorization is approved - contractors can start immediately.', time: '09:45' }
      ],
      metrics: {
        processingTime: '< 2 hours',
        accuracy: '94%',
        customerSatisfaction: '88%',
        savings: '$12,000/month'
      }
    },
    {
      id: 'marketing-analytics',
      title: 'Marketing Campaign Analytics',
      description: 'AI Agent analyzes campaign performance, optimizes ad spend, and provides insights while escalating strategy decisions.',
      roi: 'ROI: 45% better ad performance, $9,200/month in optimized ad spend',
      icon: <TrendingUp className="h-8 w-8 text-amber-400" />,
      chatFlow: [
        { type: 'client' as const, message: 'How did our Facebook ads perform this week? I want to optimize the budget allocation.', time: '14:00' },
        { type: 'ai' as const, message: 'This week\'s Facebook campaign analysis: $2,500 spent, 45,000 impressions, 1,200 clicks (2.67% CTR), 89 conversions. Cost per conversion: $28. Your best performing ad is the "Spring Sale" creative with 4.2% CTR.', time: '14:00' },
        { type: 'client' as const, message: 'That\'s better than last week. Should I increase budget on the Spring Sale ad?', time: '14:01' },
        { type: 'ai' as const, message: 'Yes, I recommend increasing Spring Sale budget by 40% ($400 more). I\'ve also identified that 18-24 age group converts 60% better than others. Should I reallocate targeting to focus more on this demographic?', time: '14:01' },
        { type: 'client' as const, message: 'Sounds good. Also, I\'m thinking about expanding to Instagram and TikTok. What\'s your analysis?', time: '14:02' },
        { type: 'system' as const, message: '📊 Multi-platform strategy decision - Escalating to Marketing Strategist', time: '14:02' },
        { type: 'human' as const, message: 'Hi! I\'m Lisa, marketing strategist. Based on your audience data, TikTok could work well for the 18-24 segment. Instagram might overlap too much with Facebook. Let me prepare a detailed expansion strategy with budget projections.', time: '14:10' }
      ],
      metrics: {
        campaignOptimization: '+45%',
        timeToInsights: '< 5 min',
        adSpendEfficiency: '+32%',
        savings: '$9,200/month'
      }
    }
  ];

  return (
    <section className="py-12 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Agent Demo
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            See how AI Agents transform business operations across industries with measurable ROI
          </p>
        </div>

        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent className="-ml-4">
            {mockups.map((mockup, index) => (
              <CarouselItem key={mockup.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <AIAgentMockup mockup={mockup} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ShowcaseSection;
