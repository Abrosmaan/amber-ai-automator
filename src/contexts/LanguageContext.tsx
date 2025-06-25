
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
    
    // Hero Section
    'hero.title': 'Automate Routine, Keep Control Over What Matters',
    'hero.subtitle': 'Transform your business with custom AI Agents that handle repetitive tasks while you focus on strategic decisions. Measurable ROI in 2-4 months.',
    'hero.cta.primary': 'Get Your AI Efficiency Estimate',
    'hero.cta.secondary': 'Talk to a Real Person',
    
    // Stats
    'stats.savings': 'Average Monthly Savings',
    'stats.roi': 'ROI Timeframe',
    'stats.automation': 'Task Automation Rate',
    'stats.months': 'months',
    
    // Scenarios
    'scenarios.title': 'See AI Agents in Action',
    'scenarios.subtitle': 'Real business scenarios where our AI Agents automate routine work while keeping critical decisions in your hands.',
    
    'scenario.support.title': 'Customer Support & Service',
    'scenario.support.description': 'AI handles 70% of typical inquiries, escalates complex issues to human agents',
    'scenario.support.savings': '$5,000 monthly saved on support staff',
    
    'scenario.knowledge.title': 'Internal Knowledge Management',
    'scenario.knowledge.description': 'Automated employee onboarding and instant access to company knowledge base',
    'scenario.knowledge.savings': '$3,200 monthly saved on training costs',
    
    'scenario.financial.title': 'Financial Process Monitoring',
    'scenario.financial.description': 'Automated spend tracking and forecasting with human approval for major decisions',
    'scenario.financial.savings': '$4,500 monthly saved on financial operations',
    
    'scenario.ecommerce.title': 'E-commerce Automation',
    'scenario.ecommerce.description': 'Automated order processing and inventory management with exception handling',
    'scenario.ecommerce.savings': '$6,200 monthly saved on operational costs',
    
    // Why Choose Us
    'why.title': 'Why Amber AI Solutions?',
    'why.subtitle': 'We deliver tailored, business-specific AI Agents, not generic chatbots.',
    'why.custom.title': 'Custom Solutions',
    'why.custom.description': 'Every AI Agent is built specifically for your business needs and processes',
    'why.roi.title': 'Guaranteed ROI',
    'why.roi.description': 'Complete ROI estimation and performance tracking with continuous optimization',
    'why.human.title': 'Human-First Approach',
    'why.human.description': 'AI handles routine tasks, humans make critical decisions - the perfect balance',
    
    // CTA Section
    'cta.title': 'Ready to Transform Your Business?',
    'cta.subtitle': 'Book a consultation with our AI experts and get your personalized automation strategy.',
    'cta.button': 'Schedule Free Consultation',
    
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
    
    // Hero Section
    'hero.title': 'Автоматизируйте рутину, контролируйте важное',
    'hero.subtitle': 'Трансформируйте бизнес с помощью индивидуальных ИИ-агентов, которые выполняют повторяющиеся задачи, пока вы фокусируетесь на стратегических решениях. Измеримая окупаемость за 2-4 месяца.',
    'hero.cta.primary': 'Оценить эффективность ИИ',
    'hero.cta.secondary': 'Поговорить с экспертом',
    
    // Stats
    'stats.savings': 'Средняя месячная экономия',
    'stats.roi': 'Срок окупаемости',
    'stats.automation': 'Уровень автоматизации',
    'stats.months': 'месяца',
    
    // Scenarios
    'scenarios.title': 'ИИ-агенты в действии',
    'scenarios.subtitle': 'Реальные бизнес-сценарии, где наши ИИ-агенты автоматизируют рутинную работу, оставляя критические решения за людьми.',
    
    'scenario.support.title': 'Поддержка клиентов',
    'scenario.support.description': 'ИИ обрабатывает 70% типовых запросов, передавая сложные вопросы операторам',
    'scenario.support.savings': '₽350,000 месячной экономии на персонале',
    
    'scenario.knowledge.title': 'Управление знаниями',
    'scenario.knowledge.description': 'Автоматическое обучение сотрудников и мгновенный доступ к базе знаний компании',
    'scenario.knowledge.savings': '₽220,000 месячной экономии на обучении',
    
    'scenario.financial.title': 'Финансовый мониторинг',
    'scenario.financial.description': 'Автоматическое отслеживание расходов и прогнозирование с одобрением важных решений человеком',
    'scenario.financial.savings': '₽315,000 месячной экономии на финансовых операциях',
    
    'scenario.ecommerce.title': 'E-commerce автоматизация',
    'scenario.ecommerce.description': 'Автоматическая обработка заказов и управление складом с обработкой исключений',
    'scenario.ecommerce.savings': '₽430,000 месячной экономии на операционных расходах',
    
    // Why Choose Us
    'why.title': 'Почему Amber AI Solutions?',
    'why.subtitle': 'Мы создаем индивидуальные, специализированные ИИ-агенты, а не универсальные чат-боты.',
    'why.custom.title': 'Индивидуальные решения',
    'why.custom.description': 'Каждый ИИ-агент создается специально для ваших бизнес-потребностей и процессов',
    'why.roi.title': 'Гарантированная окупаемость',
    'why.roi.description': 'Полная оценка ROI и отслеживание производительности с постоянной оптимизацией',
    'why.human.title': 'Человеко-ориентированный подход',
    'why.human.description': 'ИИ выполняет рутинные задачи, люди принимают критические решения - идеальный баланс',
    
    // CTA Section
    'cta.title': 'Готовы трансформировать бизнес?',
    'cta.subtitle': 'Запишитесь на консультацию с нашими экспертами по ИИ и получите персональную стратегию автоматизации.',
    'cta.button': 'Записаться на бесплатную консультацию',
    
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
