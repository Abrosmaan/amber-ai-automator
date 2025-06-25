
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAIChat } from '@/hooks/useAIChat';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Send, X, User, CircleUser } from 'lucide-react';

const AIChat: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { messages, isLoading, session, sendMessage } = useAIChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading || session.isLimited) return;
    
    const message = inputValue.trim();
    setInputValue('');
    await sendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-full w-16 h-16 shadow-lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat interface */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-96 z-40 bg-slate-900 border-slate-700 shadow-2xl">
          <CardContent className="p-0 h-full flex flex-col">
            {/* Header */}
            <div className="bg-amber-400 p-4 rounded-t-lg">
              <h3 className="font-semibold text-slate-900 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                AI Business Consultant
              </h3>
              <p className="text-slate-800 text-sm">Ask about AI automation for your business</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-slate-400 text-sm text-center py-8">
                  👋 Hi! I'm here to help you explore AI automation opportunities for your business. What would you like to know?
                </div>
              )}
              
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-start space-x-2 max-w-[80%]">
                    {message.type === 'ai' && (
                      <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-slate-900 text-xs font-bold">A</span>
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-lg text-sm ${
                        message.type === 'user'
                          ? 'bg-blue-500/20 text-blue-100'
                          : 'bg-slate-800 text-slate-200'
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.type === 'user' && (
                      <CircleUser className="h-6 w-6 text-slate-400 flex-shrink-0 mt-1" />
                    )}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-slate-900 text-xs font-bold">A</span>
                    </div>
                    <div className="bg-slate-800 text-slate-200 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {session.isLimited && (
                <div className="bg-amber-400/20 border border-amber-400/30 rounded-lg p-4 text-center">
                  <p className="text-amber-300 text-sm mb-3">{t('chat.limit.message')}</p>
                  <Button size="sm" className="bg-amber-400 hover:bg-amber-500 text-slate-900">
                    {t('chat.contact.cta')}
                  </Button>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            {!session.isLimited && (
              <div className="p-4 border-t border-slate-700">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={t('chat.placeholder')}
                    className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-400"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSend}
                    size="sm"
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-amber-400 hover:bg-amber-500 text-slate-900"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AIChat;
