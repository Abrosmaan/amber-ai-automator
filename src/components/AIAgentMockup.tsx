
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface ChatMessage {
  type: 'customer' | 'ai' | 'human' | 'system' | 'employee' | 'lead' | 'client';
  message: string;
  time: string;
}

interface Mockup {
  id: string;
  title: string;
  description: string;
  roi: string;
  icon: React.ReactNode;
  chatFlow: ChatMessage[];
  metrics: Record<string, string>;
}

interface AIAgentMockupProps {
  mockup: Mockup;
  index: number;
}

const AIAgentMockup: React.FC<AIAgentMockupProps> = ({ mockup, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showMetrics, setShowMetrics] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentMessage < mockup.chatFlow.length) {
      interval = setTimeout(() => {
        setCurrentMessage(prev => prev + 1);
        if (currentMessage === mockup.chatFlow.length - 1) {
          setShowMetrics(true);
          setIsPlaying(false);
        }
      }, 2500);
    }

    return () => clearTimeout(interval);
  }, [isPlaying, currentMessage, mockup.chatFlow.length]);

  // Auto-scroll to bottom when new message appears
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [currentMessage]);

  const handlePlay = () => {
    if (currentMessage >= mockup.chatFlow.length) {
      setCurrentMessage(0);
      setShowMetrics(false);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentMessage(0);
    setIsPlaying(false);
    setShowMetrics(false);
  };

  const getMessageStyle = (type: string) => {
    switch (type) {
      case 'ai':
        return 'bg-amber-400/20 text-amber-100 border-l-4 border-amber-400';
      case 'human':
        return 'bg-blue-500/20 text-blue-100 border-l-4 border-blue-400';
      case 'system':
        return 'bg-slate-700 text-slate-300 text-center border border-slate-600';
      default:
        return 'bg-slate-600/50 text-white ml-auto border-r-4 border-slate-400';
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-400/30 transition-all duration-300 h-[800px] flex flex-col">
      <CardContent className="p-6 h-full flex flex-col">
        {/* Header - Fixed height */}
        <div className="flex items-start space-x-4 mb-4 flex-shrink-0 h-[120px]">
          <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
            {mockup.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 leading-tight">{mockup.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">{mockup.description}</p>
          </div>
        </div>

        {/* ROI Highlight - Fixed height */}
        <div className="bg-amber-400/10 border border-amber-400/20 rounded-lg p-3 mb-4 flex-shrink-0 h-[60px] flex items-center">
          <p className="text-amber-400 font-semibold text-sm">{mockup.roi}</p>
        </div>

        {/* Chat Interface - Fixed height container */}
        <div className="bg-slate-900 rounded-lg p-4 mb-4 flex flex-col h-[420px] flex-shrink-0">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-700 flex-shrink-0 h-[40px]">
            <div className="text-slate-400 text-sm">AI Agent Demo</div>
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={handlePlay}
                className="text-slate-400 hover:text-white"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleReset}
                className="text-slate-400 hover:text-white"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600 pr-2 min-h-0"
          >
            <div className="space-y-3 pb-2">
              {mockup.chatFlow.slice(0, currentMessage).map((msg, msgIndex) => (
                <div
                  key={msgIndex}
                  className={`p-3 rounded-lg text-sm max-w-[90%] transition-all duration-500 ease-out transform ${
                    msg.type === 'system' ? 'w-full max-w-full' : ''
                  } ${
                    ['customer', 'employee', 'lead', 'client'].includes(msg.type) ? 'ml-auto' : ''
                  } ${getMessageStyle(msg.type)} animate-in slide-in-from-bottom-2`}
                  style={{
                    animationDelay: `${msgIndex * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1 break-words">{msg.message}</div>
                    <div className="text-xs opacity-60 flex-shrink-0">{msg.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics/Button - Fixed height container with proper spacing */}
        <div className="h-[120px] flex items-center flex-shrink-0 px-2">
          {showMetrics ? (
            <div className="grid grid-cols-2 gap-2 w-full animate-in slide-in-from-bottom-2 duration-500">
              {Object.entries(mockup.metrics).map(([key, value]) => (
                <div key={key} className="bg-slate-700/50 rounded-lg p-2 text-center">
                  <div className="text-amber-400 font-semibold text-sm">{value}</div>
                  <div className="text-slate-400 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                </div>
              ))}
            </div>
          ) : (
            <Button
              onClick={handlePlay}
              className="w-full bg-slate-700 hover:bg-slate-600 text-white h-12 mx-2"
              disabled={isPlaying}
            >
              <Play className="mr-2 h-4 w-4" />
              {isPlaying ? 'Playing Demo...' : 'See AI Agent in Action'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAgentMockup;
