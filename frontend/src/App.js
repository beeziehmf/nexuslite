import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, SearchBar, CategoryButtons, AIResponse, Footer, HeroSection } from './components';

// Mock data for AI responses
const mockResponses = {
  default: {
    answer: "I'm an AI-powered search engine that provides accurate, trusted, and real-time answers to any question. I can help you research topics, analyze information, and provide insights backed by reliable sources. What would you like to know?",
    sources: [
      { title: "Perplexity AI", url: "https://www.perplexity.ai" },
      { title: "AI Search Technology", url: "https://example.com/ai-search" }
    ],
    followUpQuestions: [
      "How does AI search work?",
      "What makes Perplexity different from Google?",
      "Can you help with research papers?"
    ]
  },
  parenting: {
    answer: "Parenting involves nurturing, guiding, and supporting children through their development. Effective parenting combines love, structure, and communication to help children grow into confident, capable individuals. Key aspects include setting boundaries, providing emotional support, and modeling positive behavior.",
    sources: [
      { title: "American Academy of Pediatrics", url: "https://www.aap.org" },
      { title: "Child Development Institute", url: "https://childdevelopmentinfo.com" }
    ],
    followUpQuestions: [
      "What are the different parenting styles?",
      "How to handle toddler tantrums?",
      "Screen time recommendations for children?"
    ]
  },
  health: {
    answer: "Health encompasses physical, mental, and social well-being. Maintaining good health involves regular exercise, balanced nutrition, adequate sleep, stress management, and preventive care. A holistic approach to health considers all aspects of wellness.",
    sources: [
      { title: "World Health Organization", url: "https://www.who.int" },
      { title: "CDC Health Guidelines", url: "https://www.cdc.gov" }
    ],
    followUpQuestions: [
      "What are the benefits of regular exercise?",
      "How much sleep do adults need?",
      "What foods boost immune system?"
    ]
  },
  analyze: {
    answer: "Analysis involves examining data, information, or situations systematically to understand patterns, relationships, and insights. Effective analysis combines critical thinking, data interpretation, and logical reasoning to draw meaningful conclusions.",
    sources: [
      { title: "Data Analysis Methods", url: "https://example.com/data-analysis" },
      { title: "Critical Thinking Guide", url: "https://example.com/critical-thinking" }
    ],
    followUpQuestions: [
      "What are the steps in data analysis?",
      "How to avoid bias in analysis?",
      "What tools are used for data analysis?"
    ]
  },
  local: {
    answer: "Local information refers to area-specific data, services, and resources within your community. This includes local businesses, events, weather, news, and services that directly impact your immediate environment.",
    sources: [
      { title: "Local Government Services", url: "https://example.com/local-gov" },
      { title: "Community Resources", url: "https://example.com/community" }
    ],
    followUpQuestions: [
      "What's happening in my area today?",
      "How to find local services?",
      "What are the best restaurants nearby?"
    ]
  },
  sports: {
    answer: "Sports involve physical activity, competition, and skill development. They promote fitness, teamwork, and personal growth while providing entertainment and community engagement. Sports can be recreational or professional, individual or team-based.",
    sources: [
      { title: "Sports Medicine Journal", url: "https://example.com/sports-medicine" },
      { title: "Athletic Performance Research", url: "https://example.com/athletic-performance" }
    ],
    followUpQuestions: [
      "What are the benefits of playing sports?",
      "How to prevent sports injuries?",
      "What's the latest in sports technology?"
    ]
  }
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    setResponse(null);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate response based on query
    const lowerQuery = searchQuery.toLowerCase();
    let selectedResponse = mockResponses.default;
    
    if (lowerQuery.includes('parent') || lowerQuery.includes('child')) {
      selectedResponse = mockResponses.parenting;
    } else if (lowerQuery.includes('health') || lowerQuery.includes('medical')) {
      selectedResponse = mockResponses.health;
    } else if (lowerQuery.includes('analyze') || lowerQuery.includes('data')) {
      selectedResponse = mockResponses.analyze;
    } else if (lowerQuery.includes('local') || lowerQuery.includes('nearby')) {
      selectedResponse = mockResponses.local;
    } else if (lowerQuery.includes('sport') || lowerQuery.includes('game')) {
      selectedResponse = mockResponses.sports;
    }
    
    setResponse(selectedResponse);
    setIsLoading(false);
  };

  const handleCategoryClick = (category) => {
    const categoryResponses = {
      'Parenting': mockResponses.parenting,
      'Health': mockResponses.health,
      'Analyze': mockResponses.analyze,
      'Local': mockResponses.local,
      'Sports': mockResponses.sports
    };
    
    setQuery(`Tell me about ${category.toLowerCase()}`);
    setResponse(categoryResponses[category] || mockResponses.default);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-20">
            <HeroSection darkMode={darkMode} />
            
            <div className="flex flex-col items-center">
              <SearchBar 
                darkMode={darkMode} 
                onSearch={handleSearch}
                query={query}
                setQuery={setQuery}
              />
              
              <CategoryButtons 
                darkMode={darkMode} 
                onCategoryClick={handleCategoryClick}
              />
              
              {isLoading && (
                <div className="mt-8 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <span className={`ml-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Searching...
                  </span>
                </div>
              )}
              
              <AIResponse darkMode={darkMode} response={response} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;