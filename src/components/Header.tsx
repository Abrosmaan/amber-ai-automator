
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">A</span>
            </div>
            <span className="text-white font-semibold text-lg">Amber AI Solutions</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-slate-300 hover:text-amber-400 font-medium transition-colors">
              {t('nav.solutions')}
            </a>
            <a href="#industries" className="text-slate-300 hover:text-amber-400 font-medium transition-colors">
              {t('nav.industries')}
            </a>
            <a href="#about" className="text-slate-300 hover:text-amber-400 font-medium transition-colors">
              {t('nav.about')}
            </a>
            <a href="#contact" className="text-slate-300 hover:text-amber-400 font-medium transition-colors">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Right side - Language switcher and CTA */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold">
              {t('nav.consultation')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
