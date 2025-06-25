
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, ArrowRight, CheckCircle, Users } from 'lucide-react';

interface ScenarioCardProps {
  title: string;
  description: string;
  savings: string;
  icon: React.ReactNode;
  demoMessages: { type: 'ai' | 'human' | 'system'; message: string }[];
  metrics: { label: string; value: string; change?: string }[];
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({
  title,
  description,
  savings,
  icon,
  demoMessages,
  metrics
}) => {
  const [showDemo, setShowDemo] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const startDemo = () => {
    setShowDemo(true);
    setCurrentMessage(0);
    
    // Simulate message progression
    const interval = setInterval(() => {
      setCurrentMessage(prev => {
        if (prev >= demoMessages.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-400/50 transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center group-hover:bg-amber-400/30 transition-colors">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Savings highlight */}
        <div className="bg-amber-400/10 border border-amber-400/20 rounded-lg p-3 mb-6">
          <p className="text-amber-400 font-semibold text-sm">{savings}</p>
        </div>

        {/* Demo section */}
        {!showDemo ? (
          <Button 
            onClick={startDemo}
            className="w-full bg-slate-700 hover:bg-slate-600 text-white border border-slate-600"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            See AI Agent in Action
          </Button>
        ) : (
          <div className="space-y-4">
            {/* Chat interface */}
            <div className="bg-slate-900 rounded-lg p-4 min-h-[200px]">
              <div className="space-y-3">
                {demoMessages.slice(0, currentMessage + 1).map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === 'human' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        msg.type === 'ai'
                          ? 'bg-amber-400/20 text-amber-100'
                          : msg.type === 'human'
                          ? 'bg-blue-500/20 text-blue-100'
                          : 'bg-slate-700 text-slate-300 text-center w-full'
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-slate-700/50 rounded-lg p-3 text-center">
                  <div className="text-amber-400 font-semibold">{metric.value}</div>
                  <div className="text-slate-400 text-xs">{metric.label}</div>
                  {metric.change && (
                    <div className="text-green-400 text-xs flex items-center justify-center mt-1">
                      <ArrowRight className="h-3 w-3 mr-1" />
                      {metric.change}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ScenarioCard;
