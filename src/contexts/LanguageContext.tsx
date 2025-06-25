
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation & Header
    'nav.solutions': 'Solutions',
    'nav.industries': 'Industries', 
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.consultation': 'Get Consultation',
    
    // Showcase Section
    'showcase.title': 'AI Agents in Action',
    'showcase.subtitle': 'Watch real business scenarios where our AI Agents handle routine tasks while keeping critical decisions in human hands. Each demonstration shows measurable ROI and practical implementation.',
    
    'showcase.support.title': 'Customer Support Automation',
    'showcase.support.description': 'AI handles 70% of customer inquiries, escalates complex issues to human agents with full context',
    'showcase.support.roi': '$5,000 monthly savings on support staff costs',
    
    'showcase.hr.title': 'HR Knowledge Management',
    'showcase.hr.description': 'Automated employee queries and streamlined internal processes with human oversight',
    'showcase.hr.roi': '$3,200 monthly savings on HR operational costs',
    
    'showcase.finance.title': 'Financial Process Monitoring',
    'showcase.finance.description': 'Automated spend tracking and financial analysis with human approval for major decisions',
    'showcase.finance.roi': '$4,500 monthly savings through optimized financial operations',
    
    'showcase.ecommerce.title': 'E-commerce Order Processing',
    'showcase.ecommerce.description': 'Automated order fulfillment and inventory management with exception handling',
    'showcase.ecommerce.roi': '$6,200 monthly savings on operational costs',
    
    'showcase.sales.title': 'Sales Lead Qualification',
    'showcase.sales.description': 'AI qualifies leads and schedules meetings, escalates high-value prospects to sales team',
    'showcase.sales.roi': '$4,800 monthly savings on sales operations',
    
    'showcase.scheduling.title': 'Appointment Scheduling',
    'showcase.scheduling.description': 'Automated appointment booking and rescheduling with calendar integration',
    'showcase.scheduling.roi': '$2,800 monthly savings on administrative costs',
    
    // ROI Section
    'roi.title': 'Measurable Business Impact',
    'roi.subtitle': 'Our AI Agents deliver concrete, trackable results that directly impact your bottom line.',
    
    'roi.savings.title': 'Monthly Cost Savings',
    'roi.savings.subtitle': 'Average per business',
    'roi.savings.description': 'Reduce operational costs through intelligent automation of routine tasks',
    
    'roi.payback.title': 'ROI Timeframe',
    'roi.payback.subtitle': 'Months to full payback',
    'roi.payback.description': 'Fast return on investment with measurable efficiency gains',
    
    'roi.efficiency.title': 'Task Automation',
    'roi.efficiency.subtitle': 'Of routine work automated',
    'roi.efficiency.description': 'Free your team to focus on strategic, high-value activities',
    
    'roi.accuracy.title': 'Process Accuracy',
    'roi.accuracy.subtitle': 'Consistent performance',
    'roi.accuracy.description': 'Eliminate human error in repetitive tasks while maintaining quality',
    
    'roi.cases.title': 'Real Business Success Stories',
    'roi.cases.challenge_label': 'Challenge',
    'roi.cases.solution_label': 'AI Solution',
    'roi.cases.results_label': 'Results',
    'roi.cases.monthly_savings': 'Monthly Savings',
    
    'roi.cases.ecommerce.industry': 'E-commerce (500+ orders/day)',
    'roi.cases.ecommerce.challenge': 'Manual order processing, inventory tracking, and customer service consuming 12 hours/day of staff time',
    'roi.cases.ecommerce.solution': 'AI agents handle order processing, inventory alerts, and 80% of customer inquiries',
    'roi.cases.ecommerce.results': '90% reduction in processing time, 99.2% accuracy, 24/7 customer support availability',
    
    'roi.cases.saas.industry': 'SaaS Company (200 employees)',
    'roi.cases.saas.challenge': 'Lead qualification, customer onboarding, and support tickets overwhelming sales and support teams',
    'roi.cases.saas.solution': 'AI qualifies leads, automates onboarding workflows, handles tier-1 support',
    'roi.cases.saas.results': '60% faster lead response, 40% improvement in conversion rates, 50% reduction in support workload',
    
    'roi.cases.healthcare.industry': 'Healthcare Practice (5 doctors)',
    'roi.cases.healthcare.challenge': 'Patient scheduling, insurance verification, and appointment reminders taking 4 hours daily',
    'roi.cases.healthcare.solution': 'AI manages scheduling, verifies insurance, sends automated reminders and follow-ups',
    'roi.cases.healthcare.results': '75% reduction in no-shows, 100% insurance verification accuracy, staff focus on patient care',
    
    // CTA Section
    'cta.title': 'Ready to See Your ROI?',
    'cta.subtitle': 'Get a custom ROI estimate and implementation roadmap for your specific business needs.',
    'cta.button': 'Calculate My AI ROI',
    
    // Chat
    'chat.placeholder': 'Ask about AI automation for your business...',
    'chat.limit.message': 'I\'d love to connect you with our AI specialists for a deeper conversation about your specific needs. Would you like to schedule a consultation?',
    'chat.contact.cta': 'Contact Our Team',
    
    // Footer
    'footer.disclaimer': 'Disclaimer: Business scenarios shown may be AI-generated for demonstration purposes. AmberSoft provides expert human support to turn these concepts into working, measurable AI solutions.',
    'footer.rights': '© 2024 AmberSoft. All rights reserved.',
  },
  ru: {
    // Navigation & Header
    'nav.solutions': 'Решения',
    'nav.industries': 'Отрасли',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'nav.consultation': 'Получить консультацию',
    
    // Showcase Section
    'showcase.title': 'ИИ-агенты в действии',
    'showcase.subtitle': 'Смотрите реальные бизнес-сценарии, где наши ИИ-агенты выполняют рутинные задачи, оставляя критические решения за людьми. Каждая демонстрация показывает измеримую окупаемость и практическую реализацию.',
    
    'showcase.support.title': 'Автоматизация поддержки клиентов',
    'showcase.support.description': 'ИИ обрабатывает 70% запросов клиентов, передавая сложные вопросы операторам с полным контекстом',
    'showcase.support.roi': '₽350,000 месячной экономии на персонале поддержки',
    
    'showcase.hr.title': 'HR управление знаниями',
    'showcase.hr.description': 'Автоматизированные запросы сотрудников и оптимизированные внутренние процессы под контролем людей',
    'showcase.hr.roi': '₽220,000 месячной экономии на HR операциях',
    
    'showcase.finance.title': 'Мониторинг финансовых процессов',
    'showcase.finance.description': 'Автоматическое отслеживание расходов и финансовый анализ с одобрением важных решений человеком',
    'showcase.finance.roi': '₽315,000 месячной экономии через оптимизацию финансовых операций',
    
    'showcase.ecommerce.title': 'Обработка заказов E-commerce',
    'showcase.ecommerce.description': 'Автоматическое выполнение заказов и управление складом с обработкой исключений',
    'showcase.ecommerce.roi': '₽430,000 месячной экономии на операционных расходах',
    
    'showcase.sales.title': 'Квалификация продажных лидов',
    'showcase.sales.description': 'ИИ квалифицирует лиды и назначает встречи, передавая ценных клиентов отделу продаж',
    'showcase.sales.roi': '₽335,000 месячной экономии на продажных операциях',
    
    'showcase.scheduling.title': 'Планирование встреч',
    'showcase.scheduling.description': 'Автоматическое бронирование и перенос встреч с интеграцией календаря',
    'showcase.scheduling.roi': '₽195,000 месячной экономии на административных расходах',
    
    // ROI Section
    'roi.title': 'Измеримое влияние на бизнес',
    'roi.subtitle': 'Наши ИИ-агенты обеспечивают конкретные, отслеживаемые результаты, которые напрямую влияют на вашу прибыль.',
    
    'roi.savings.title': 'Месячная экономия затрат',
    'roi.savings.subtitle': 'В среднем на бизнес',
    'roi.savings.description': 'Сокращение операционных расходов через интеллектуальную автоматизацию рутинных задач',
    
    'roi.payback.title': 'Срок окупаемости',
    'roi.payback.subtitle': 'Месяцев до полной окупаемости',
    'roi.payback.description': 'Быстрая окупаемость инвестиций с измеримым ростом эффективности',
    
    'roi.efficiency.title': 'Автоматизация задач',
    'roi.efficiency.subtitle': 'Рутинной работы автоматизировано',
    'roi.efficiency.description': 'Освободите команду для фокуса на стратегических, высокоценных активностях',
    
    'roi.accuracy.title': 'Точность процессов',
    'roi.accuracy.subtitle': 'Стабильная производительность',
    'roi.accuracy.description': 'Исключите человеческие ошибки в повторяющихся задачах, сохраняя качество',
    
    'roi.cases.title': 'Реальные истории успеха бизнеса',
    'roi.cases.challenge_label': 'Вызов',
    'roi.cases.solution_label': 'ИИ Решение',
    'roi.cases.results_label': 'Результаты',
    'roi.cases.monthly_savings': 'Месячная экономия',
    
    'roi.cases.ecommerce.industry': 'E-commerce (500+ заказов/день)',
    'roi.cases.ecommerce.challenge': 'Ручная обработка заказов, отслеживание склада и обслуживание клиентов занимают 12 часов/день персонала',
    'roi.cases.ecommerce.solution': 'ИИ-агенты обрабатывают заказы, оповещения о складе и 80% запросов клиентов',
    'roi.cases.ecommerce.results': '90% сокращение времени обработки, 99.2% точность, 24/7 поддержка клиентов',
    
    'roi.cases.saas.industry': 'SaaS Компания (200 сотрудников)',
    'roi.cases.saas.challenge': 'Квалификация лидов, онбординг клиентов и тикеты поддержки перегружают команды продаж и поддержки',
    'roi.cases.saas.solution': 'ИИ квалифицирует лиды, автоматизирует рабочие процессы онбординга, обрабатывает поддержку первого уровня',
    'roi.cases.saas.results': '60% быстрее отклик на лиды, 40% улучшение конверсии, 50% сокращение нагрузки поддержки',
    
    'roi.cases.healthcare.industry': 'Медицинская практика (5 врачей)',
    'roi.cases.healthcare.challenge': 'Планирование пациентов, проверка страховки и напоминания о встречах занимают 4 часа ежедневно',
    'roi.cases.healthcare.solution': 'ИИ управляет планированием, проверяет страховку, отправляет автоматические напоминания и последующие действия',
    'roi.cases.healthcare.results': '75% сокращение неявок, 100% точность проверки страховки, персонал фокусируется на уходе за пациентами',
    
    // CTA Section
    'cta.title': 'Готовы увидеть свою окупаемость?',
    'cta.subtitle': 'Получите индивидуальную оценку ROI и дорожную карту внедрения для ваших конкретных бизнес-потребностей.',
    'cta.button': 'Рассчитать мою окупаемость ИИ',
    
    // Chat
    'chat.placeholder': 'Спросите об автоматизации ИИ для вашего бизнеса...',
    'chat.limit.message': 'Я хотел бы связать вас с нашими специалистами по ИИ для более глубокого обсуждения ваших потребностей. Хотели бы записаться на консультацию?',
    'chat.contact.cta': 'Связаться с командой',
    
    // Footer  
    'footer.disclaimer': 'Примечание: Показанные бизнес-сценарии могут быть сгенерированы ИИ в демонстрационных целях. AmberSoft предоставляет экспертную поддержку для превращения этих концепций в работающие, измеримые ИИ-решения.',
    'footer.rights': '© 2024 AmberSoft. Все права защищены.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
