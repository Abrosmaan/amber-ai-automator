
import { useState, useEffect } from 'react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface ChatSession {
  messageCount: number;
  isLimited: boolean;
  sessionId: string;
}

export const useAIChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState<ChatSession>(() => {
    const stored = localStorage.getItem('amber-ai-chat-session');
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...parsed,
        isLimited: parsed.messageCount >= 8 // Limit after 8 messages (4 exchanges)
      };
    }
    return {
      messageCount: 0,
      isLimited: false,
      sessionId: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  });

  useEffect(() => {
    localStorage.setItem('amber-ai-chat-session', JSON.stringify(session));
  }, [session]);

  const sendMessage = async (content: string): Promise<void> => {
    if (session.isLimited) return;

    const userMessage: Message = {
      id: `user_${Date.now()}`,
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    const aiResponse = generateAIResponse(content, session.messageCount);
    const aiMessage: Message = {
      id: `ai_${Date.now()}`,
      type: 'ai',
      content: aiResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);

    // Update session
    const newMessageCount = session.messageCount + 2; // User + AI message
    const newSession = {
      ...session,
      messageCount: newMessageCount,
      isLimited: newMessageCount >= 8
    };
    setSession(newSession);
  };

  const resetSession = () => {
    localStorage.removeItem('amber-ai-chat-session');
    setMessages([]);
    setSession({
      messageCount: 0,
      isLimited: false,
      sessionId: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });
  };

  return {
    messages,
    isLoading,
    session,
    sendMessage,
    resetSession
  };
};

const generateAIResponse = (userMessage: string, messageCount: number): string => {
  // If approaching limit, suggest human consultation
  if (messageCount >= 6) {
    return "I'd love to connect you with our AI specialists for a deeper conversation about your specific needs. Our experts can provide detailed ROI calculations and custom implementation strategies. Would you like to schedule a consultation?";
  }

  const lowerMessage = userMessage.toLowerCase();
  
  // Business-focused responses
  if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('roi')) {
    return "Our AI solutions typically provide ROI within 2-4 months. For example, automating customer support can save $5,000+ monthly on staffing costs. The exact savings depend on your current processes and volume. Would you like me to help estimate potential savings for your specific use case?";
  }
  
  if (lowerMessage.includes('automat') || lowerMessage.includes('process')) {
    return "We specialize in automating routine business processes while keeping humans in control of critical decisions. Our most popular automations include customer support (70% of inquiries), financial monitoring, and employee onboarding. Which area of your business has the most repetitive tasks?";
  }
  
  if (lowerMessage.includes('support') || lowerMessage.includes('customer')) {
    return "Our AI agents can handle 70% of typical customer inquiries automatically - things like order status, basic troubleshooting, and FAQ responses. Complex issues are seamlessly escalated to human agents with full context. This typically saves businesses $3,000-$8,000 monthly in support costs.";
  }
  
  if (lowerMessage.includes('implementation') || lowerMessage.includes('how') || lowerMessage.includes('start')) {
    return "Implementation typically takes 2-6 weeks depending on complexity. We start with a free consultation to map your processes, then build custom AI agents specifically for your business needs. No generic chatbots - everything is tailored to your industry and workflows.";
  }
  
  if (lowerMessage.includes('industry') || lowerMessage.includes('business') || lowerMessage.includes('company')) {
    return "We work across industries - e-commerce, professional services, healthcare, finance, and more. Each AI agent is custom-built for your specific business processes and industry requirements. What industry is your business in? I can share relevant case studies.";
  }

  // Default responses with business focus
  const responses = [
    "That's a great question! Our AI agents are designed to handle routine tasks while keeping humans in control of important decisions. This approach typically reduces operational costs by 30-60% while improving efficiency. What specific business challenges are you looking to address?",
    "Interesting! We've helped over 500 businesses automate similar processes. The key is identifying which tasks are truly routine vs. which require human judgment. Would you like to explore what automation opportunities exist in your current workflows?",
    "Absolutely! Our approach focuses on measurable business outcomes. Most clients see significant time savings within the first month and full ROI within 2-4 months. What's driving your interest in AI automation - cost reduction, efficiency, or growth?",
    "That makes sense. One thing that sets us apart is our human-first approach - AI handles the routine work, but important decisions always stay with your team. Have you considered which processes in your business are most time-consuming or repetitive?"
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
};
