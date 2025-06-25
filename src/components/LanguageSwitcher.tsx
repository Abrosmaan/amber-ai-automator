
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-slate-800/50 rounded-lg p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
          language === 'en'
            ? 'bg-amber-400 text-slate-900'
            : 'text-slate-300 hover:text-white hover:bg-slate-700'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
          language === 'ru'
            ? 'bg-amber-400 text-slate-900'
            : 'text-slate-300 hover:text-white hover:bg-slate-700'
        }`}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
