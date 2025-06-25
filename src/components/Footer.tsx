
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">A</span>
              </div>
              <span className="text-white font-semibold text-lg">Amber AI Solutions</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Custom AI Agents that automate routine business processes while keeping critical decisions under human control. Built by AmberSoft for measurable business results.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#support" className="hover:text-amber-400 transition-colors">Customer Support</a></li>
              <li><a href="#knowledge" className="hover:text-amber-400 transition-colors">Knowledge Management</a></li>
              <li><a href="#financial" className="hover:text-amber-400 transition-colors">Financial Monitoring</a></li>
              <li><a href="#ecommerce" className="hover:text-amber-400 transition-colors">E-commerce Automation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>info@ambersoft.ai</li>
              <li>+1 (555) 123-4567</li>
              <li>Schedule Consultation</li>
              <li>Enterprise Sales</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-800 pt-8 mb-6">
          <p className="text-slate-500 text-xs leading-relaxed">
            {t('footer.disclaimer')}
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>{t('footer.rights')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
