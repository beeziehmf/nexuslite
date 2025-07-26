import React, { useState, useEffect, useRef } from 'react';

// React Icons Components
const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const MarketplaceIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const WorkflowIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CreatorIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const NewsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg>
);

const TeamIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a3.5 3.5 0 1113.5 0H15m-6 0a3.5 3.5 0 00-7 0h1.5m6 0v1a3.5 3.5 0 07 0v-1m-7 0V9a3.5 3.5 0 017 0v1M9 21h6" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const CanvasIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const LogoutIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const BellIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const MicIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

const PaperclipIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
  </svg>
);

// Enhanced Sidebar Component
export const Sidebar = ({ user, activeSection, setActiveSection, collapsed, setCollapsed }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon, category: 'main' },
    { id: 'chat', label: 'Chat IA', icon: ChatIcon, category: 'main' },
    { id: 'creator-hub', label: 'Creator Hub', icon: CreatorIcon, category: 'main' },
    { id: 'workflows', label: 'Workflows', icon: WorkflowIcon, category: 'main' },
    { id: 'marketplace', label: 'Marketplace', icon: MarketplaceIcon, category: 'tools' },
    { id: 'analytics', label: 'Analytics', icon: AnalyticsIcon, category: 'tools' },
    { id: 'ai-news', label: 'Actualités IA', icon: NewsIcon, category: 'tools' },
    { id: 'team', label: 'Équipe', icon: TeamIcon, category: 'manage' },
    { id: 'settings', label: 'Paramètres', icon: SettingsIcon, category: 'manage' }
  ];

  const categories = {
    main: 'Principal',
    tools: 'Outils',
    manage: 'Gestion'
  };

  return (
    <div className={`fixed left-0 top-0 h-full bg-gray-900 border-r border-gray-800 z-40 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {!collapsed && (
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-black font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-light text-white">
                nexus<span className="text-cyan-400 font-normal">lite</span>
              </span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {Object.entries(categories).map(([categoryKey, categoryLabel]) => (
            <div key={categoryKey}>
              {!collapsed && (
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  {categoryLabel}
                </h3>
              )}
              <div className="space-y-1">
                {navItems.filter(item => item.category === categoryKey).map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-cyan-400/10 text-cyan-400 border-r-2 border-cyan-400'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                      title={collapsed ? item.label : ''}
                    >
                      <IconComponent />
                      {!collapsed && <span className="font-medium">{item.label}</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-3">
            <img
              src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=0ea5e9&color=fff`}
              alt={user?.name}
              className="w-8 h-8 rounded-full"
            />
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{user?.name}</p>
                <p className="text-xs text-gray-400 truncate">{user?.role} • {user?.plan}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Private Header Component
export const PrivateHeader = ({ user, onLogout, sidebarCollapsed, setSidebarCollapsed }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-30 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <div className="flex items-center justify-between h-16 px-4">
          {/* Left section - could be breadcrumbs or search */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors md:hidden"
            >
              <MenuIcon />
            </button>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-400">
              <span>Espace de travail</span>
              <span>/</span>
              <span className="text-white">{user?.company}</span>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors relative"
              >
                <BellIcon />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                  3
                </span>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-xl">
                  <div className="p-4 border-b border-gray-700">
                    <h3 className="text-white font-medium">Notifications</h3>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    <div className="p-4 border-b border-gray-700 hover:bg-gray-700 cursor-pointer">
                      <p className="text-white text-sm">Nouvelle orchestration terminée</p>
                      <p className="text-gray-400 text-xs mt-1">Il y a 5 minutes</p>
                    </div>
                    <div className="p-4 border-b border-gray-700 hover:bg-gray-700 cursor-pointer">
                      <p className="text-white text-sm">Limite d'API atteinte pour Salesforce</p>
                      <p className="text-gray-400 text-xs mt-1">Il y a 1 heure</p>
                    </div>
                    <div className="p-4 hover:bg-gray-700 cursor-pointer">
                      <p className="text-white text-sm">Nouveau membre ajouté à l'équipe</p>
                      <p className="text-gray-400 text-xs mt-1">Il y a 2 heures</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-3">
              <img
                src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=0ea5e9&color=fff`}
                alt={user?.name}
                className="w-8 h-8 rounded-full"
              />
              <div className="hidden md:block">
                <p className="text-white text-sm font-medium">{user?.name}</p>
                <p className="text-gray-400 text-xs">{user?.team}</p>
              </div>
              <button
                onClick={onLogout}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <LogoutIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// ChatGPT-style Interface
export const ChatGPTInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Bonjour ! Je suis Nexus, votre assistant IA pour l'orchestration de tâches. Comment puis-je vous aider aujourd'hui ?",
      timestamp: new Date(),
      model: 'Nexus-4o'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [canvasMode, setCanvasMode] = useState(false);
  const [canvasContent, setCanvasContent] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (message) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check if should activate canvas mode
    if (lowerMessage.includes('canvas') || lowerMessage.includes('visualiser') || lowerMessage.includes('créer un diagramme')) {
      setCanvasMode(true);
      setCanvasContent({
        type: 'workflow',
        title: 'Workflow Orchestration',
        elements: [
          { id: 1, type: 'trigger', label: 'Déclencheur', x: 50, y: 100 },
          { id: 2, type: 'action', label: 'Action 1', x: 200, y: 100 },
          { id: 3, type: 'condition', label: 'Condition', x: 350, y: 100 },
          { id: 4, type: 'action', label: 'Action 2', x: 500, y: 100 }
        ]
      });
    }

    let response = "Je comprends votre demande. ";
    
    if (lowerMessage.includes('crm')) {
      response += "Je peux vous aider à orchestrer une analyse complète de votre CRM avec Salesforce, HubSpot ou d'autres outils. Voulez-vous que je commence par analyser vos données clients ?";
    } else if (lowerMessage.includes('marketing')) {
      response += "Je peux orchestrer une campagne marketing multi-canal pour vous. Cela inclurait la segmentation d'audience, la création de contenu et le déploiement automatique. Souhaitez-vous que je commence ?";
    } else if (lowerMessage.includes('workflow')) {
      response += "Je peux créer un workflow automatisé pour votre processus. Décrivez-moi les étapes que vous souhaitez automatiser et je vais orchestrer les bonnes intégrations.";
    } else {
      response += "Je peux vous aider à orchestrer des tâches complexes en utilisant les meilleures intégrations disponibles. Pouvez-vous me dire plus spécifiquement ce que vous voulez accomplir ?";
    }

    return {
      id: Date.now() + 1,
      type: 'ai',
      content: response,
      timestamp: new Date(),
      model: 'Nexus-4o',
      tokens: Math.floor(Math.random() * 500) + 100
    };
  };

  const CanvasView = ({ content }) => (
    <div className="w-full h-96 bg-gray-800 rounded-lg border border-gray-700 p-4 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-medium">{content.title}</h3>
        <button
          onClick={() => setCanvasMode(false)}
          className="text-gray-400 hover:text-white"
        >
          <CloseIcon />
        </button>
      </div>
      
      <div className="relative h-full">
        {content.elements.map((element) => (
          <div
            key={element.id}
            className={`absolute px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 ${
              element.type === 'trigger' ? 'bg-green-500 text-white' :
              element.type === 'action' ? 'bg-blue-500 text-white' :
              element.type === 'condition' ? 'bg-yellow-500 text-black' :
              'bg-gray-600 text-white'
            }`}
            style={{ left: element.x, top: element.y }}
          >
            {element.label}
          </div>
        ))}
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path
            d="M 130 110 Q 165 110 180 110"
            stroke="#4B5563"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 280 110 Q 315 110 330 110"
            stroke="#4B5563"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 430 110 Q 465 110 480 110"
            stroke="#4B5563"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-black">
      {/* Chat Section */}
      <div className={`flex flex-col transition-all duration-300 ${canvasMode ? 'w-1/2' : 'w-full'}`}>
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light text-white">Chat IA</h1>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCanvasMode(!canvasMode)}
                className={`p-2 rounded-lg transition-colors ${
                  canvasMode ? 'bg-cyan-400 text-black' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <CanvasIcon />
              </button>
              <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800">
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-4xl ${message.type === 'user' ? 'flex flex-row-reverse' : 'flex'}`}>
                <div className={`flex-shrink-0 ${message.type === 'user' ? 'ml-3' : 'mr-3'}`}>
                  {message.type === 'ai' ? (
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">N</span>
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <UserIcon className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-white">
                      {message.type === 'ai' ? 'Nexus' : 'Vous'}
                    </span>
                    {message.model && (
                      <span className="text-xs text-gray-400">{message.model}</span>
                    )}
                    <span className="text-xs text-gray-500">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300">{message.content}</p>
                  </div>
                  {message.tokens && (
                    <div className="mt-2 text-xs text-gray-500">
                      {message.tokens} tokens utilisés
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex mr-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">N</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-white">Nexus</span>
                  <span className="text-xs text-gray-400">réfléchit...</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-200"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-400"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-end space-x-2">
            <div className="flex-1">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(input);
                  }
                }}
                placeholder="Tapez votre message... (Shift+Enter pour nouvelle ligne)"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none resize-none"
                rows="1"
                style={{ minHeight: '44px', maxHeight: '120px' }}
              />
            </div>
            <button
              onClick={() => handleSend(input)}
              disabled={!input.trim() || isTyping}
              className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SendIcon />
            </button>
          </div>
          <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 hover:text-gray-400">
                <PaperclipIcon className="w-4 h-4" />
                <span>Joindre</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-gray-400">
                <MicIcon className="w-4 h-4" />
                <span>Vocal</span>
              </button>
            </div>
            <span>Nexus peut faire des erreurs. Vérifiez les informations importantes.</span>
          </div>
        </div>
      </div>

      {/* Canvas Section */}
      {canvasMode && (
        <div className="w-1/2 border-l border-gray-800 p-4">
          <h2 className="text-xl font-light text-white mb-4">Canvas Mode</h2>
          {canvasContent ? (
            <CanvasView content={canvasContent} />
          ) : (
            <div className="w-full h-96 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
              <div className="text-center">
                <CanvasIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Demandez à Nexus de créer un diagramme ou un workflow</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Creator Hub Component
export const CreatorHub = () => {
  const [activeTab, setActiveTab] = useState('templates');

  const workflowTemplates = [
    {
      id: 1,
      name: 'Onboarding Client',
      description: 'Processus complet d\'onboarding pour nouveaux clients',
      category: 'Sales',
      complexity: 'Avancé',
      estimatedTime: '2-3 heures',
      integrations: ['Salesforce', 'HubSpot', 'Slack', 'DocuSign'],
      preview: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: 'Campagne Marketing Multi-Canal',
      description: 'Orchestration complète de campagne marketing',
      category: 'Marketing',
      complexity: 'Expert',
      estimatedTime: '4-6 heures',
      integrations: ['Mailchimp', 'Google Ads', 'Facebook', 'Analytics'],
      preview: '/api/placeholder/300/200'
    },
    {
      id: 3,
      name: 'Analyse Performance Équipe',
      description: 'Collecte et analyse des métriques d\'équipe',
      category: 'Analytics',
      complexity: 'Intermédiaire',
      estimatedTime: '1-2 heures',
      integrations: ['Jira', 'Slack', 'Google Sheets', 'Tableau'],
      preview: '/api/placeholder/300/200'
    }
  ];

  const myCreations = [
    {
      id: 1,
      name: 'Workflow Ventes Q4',
      status: 'Actif',
      lastRun: '2024-01-15',
      executions: 1247,
      successRate: 96.8
    },
    {
      id: 2,
      name: 'Automatisation Support',
      status: 'En pause',
      lastRun: '2024-01-10',
      executions: 892,
      successRate: 94.2
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-light text-white mb-2">Creator Hub</h1>
          <p className="text-gray-400">Créez et gérez vos workflows d'orchestration</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium">
          <PlusIcon className="w-5 h-5 inline mr-2" />
          Nouveau Workflow
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800">
        <nav className="flex space-x-8">
          {[
            { id: 'templates', label: 'Templates', count: workflowTemplates.length },
            { id: 'my-creations', label: 'Mes Créations', count: myCreations.length },
            { id: 'shared', label: 'Partagés', count: 12 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'templates' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowTemplates.map((template) => (
            <div key={template.id} className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400 transition-all duration-200">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <CreatorIcon className="w-16 h-16 text-gray-600" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{template.name}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    template.complexity === 'Débutant' ? 'bg-green-500/20 text-green-400' :
                    template.complexity === 'Intermédiaire' ? 'bg-yellow-500/20 text-yellow-400' :
                    template.complexity === 'Avancé' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {template.complexity}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{template.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{template.category}</span>
                  <span>{template.estimatedTime}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.integrations.slice(0, 3).map((integration, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs">
                      {integration}
                    </span>
                  ))}
                  {template.integrations.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded-md text-xs">
                      +{template.integrations.length - 3}
                    </span>
                  )}
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium">
                  Utiliser ce template
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'my-creations' && (
        <div className="space-y-4">
          {myCreations.map((creation) => (
            <div key={creation.id} className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <WorkflowIcon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{creation.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Dernière exécution: {creation.lastRun}</span>
                      <span>•</span>
                      <span>{creation.executions} exécutions</span>
                      <span>•</span>
                      <span>{creation.successRate}% succès</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    creation.status === 'Actif' ? 'bg-green-500/20 text-green-400' :
                    creation.status === 'En pause' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {creation.status}
                  </span>
                  <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
                    <SettingsIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Settings Panel Component
export const SettingsPanel = ({ user }) => {
  const [activeTab, setActiveTab] = useState('agents');

  const agents = [
    {
      id: 1,
      name: 'Assistant Marketing',
      type: 'Spécialisé',
      status: 'Actif',
      description: 'Expert en campagnes marketing et automation',
      integrations: ['Mailchimp', 'Google Ads', 'Facebook'],
      lastActive: '2024-01-15'
    },
    {
      id: 2,
      name: 'Analyseur CRM',
      type: 'Données',
      status: 'Actif',
      description: 'Analyse et optimisation des données clients',
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive'],
      lastActive: '2024-01-14'
    },
    {
      id: 3,
      name: 'Coordinateur Équipe',
      type: 'Workflow',
      status: 'En pause',
      description: 'Gestion des tâches et coordination équipe',
      integrations: ['Slack', 'Trello', 'Asana'],
      lastActive: '2024-01-10'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-light text-white mb-2">Paramètres</h1>
        <p className="text-gray-400">Gérez vos agents IA et configurations</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800">
        <nav className="flex space-x-8">
          {[
            { id: 'agents', label: 'Agents IA' },
            { id: 'integrations', label: 'Intégrations' },
            { id: 'team', label: 'Équipe' },
            { id: 'billing', label: 'Facturation' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Agents Tab */}
      {activeTab === 'agents' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-light text-white">Vos Agents IA</h2>
            <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              <PlusIcon className="w-4 h-4 inline mr-2" />
              Créer un Agent
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">AI</span>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    agent.status === 'Actif' ? 'bg-green-500/20 text-green-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {agent.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">{agent.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{agent.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="bg-gray-800 px-2 py-1 rounded">{agent.type}</span>
                  <span>Actif: {agent.lastActive}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.integrations.map((integration, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs">
                      {integration}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                    Configurer
                  </button>
                  <button className="px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
                    <SettingsIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other tabs content */}
      {activeTab === 'integrations' && (
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
          <p className="text-gray-400">Configuration des intégrations...</p>
        </div>
      )}

      {activeTab === 'team' && (
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
          <p className="text-gray-400">Gestion d'équipe...</p>
        </div>
      )}

      {activeTab === 'billing' && (
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
          <p className="text-gray-400">Facturation et abonnements...</p>
        </div>
      )}
    </div>
  );
};

// AI News Component
export const AINews = () => {
  const news = [
    {
      id: 1,
      title: 'OpenAI lance GPT-4 Turbo avec de nouvelles capacités',
      summary: 'Amélioration significative des performances et réduction des coûts',
      category: 'Innovation',
      source: 'OpenAI',
      date: '2024-01-15',
      relevance: 'Haute'
    },
    {
      id: 2,
      title: 'Microsoft intègre Copilot dans Teams pour les entreprises',
      summary: 'Nouvelle suite d\'outils IA pour la collaboration d\'équipe',
      category: 'Entreprise',
      source: 'Microsoft',
      date: '2024-01-14',
      relevance: 'Haute'
    },
    {
      id: 3,
      title: 'Anthropic dévoile Claude 3 avec des capacités multimodales',
      summary: 'Traitement texte, image et code dans un seul modèle',
      category: 'Modèles',
      source: 'Anthropic',
      date: '2024-01-13',
      relevance: 'Moyenne'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-light text-white mb-2">Actualités IA</h1>
        <p className="text-gray-400">Restez informé des dernières innovations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {news.map((article) => (
          <div key={article.id} className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                article.relevance === 'Haute' ? 'bg-red-500/20 text-red-400' :
                article.relevance === 'Moyenne' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-green-500/20 text-green-400'
              }`}>
                {article.relevance}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{article.summary}</p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{article.source}</span>
              <span>{article.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Keep existing components but add the missing ones
export const PublicHeader = ({ onLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-black font-bold text-sm">N</span>
              </div>
              <span className="text-2xl font-light text-white tracking-wide">
                nexus<span className="text-cyan-400 font-normal">lite</span>
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors font-light">
              Fonctionnalités
            </a>
            <a href="#integrations" className="text-gray-300 hover:text-cyan-400 transition-colors font-light">
              Intégrations
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors font-light">
              Tarifs
            </a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors font-light">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={onLogin}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
            >
              Connexion
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export const LandingPage = ({ onLogin }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1
    }));
    setParticles(newParticles);
  }, []);

  return (
    <main className="pt-16">
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-pulse"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.id * 0.1}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight">
            Orchestrez vos tâches avec
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal mt-4">
              l'intelligence artificielle
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed mb-12">
            Nexus analyse vos besoins et orchestre automatiquement une série de tâches complexes 
            en sélectionnant les meilleurs outils et processus pour atteindre vos objectifs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onLogin}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium text-lg"
            >
              Commencer gratuitement
            </button>
            <button className="px-8 py-4 border border-gray-700 text-gray-300 rounded-xl hover:border-cyan-400 transition-all duration-200 font-medium text-lg">
              Voir la démo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export const LoginModal = ({ onClose, onLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">Connexion</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2"
          >
            <CloseIcon />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Nom complet
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Entreprise
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              placeholder="Mon Entreprise"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-4">
          Démo gratuite - Aucune carte de crédit requise
        </p>
      </div>
    </div>
  );
};

// Enhanced SaaS Footer
export const SaaSFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-black font-bold">N</span>
              </div>
              <span className="text-2xl font-light text-white">
                nexus<span className="text-cyan-400 font-normal">lite</span>
              </span>
            </div>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Plateforme d'orchestration IA pour équipes enterprise. Automatisez vos processus métier 
              avec l'intelligence artificielle et plus de 200 intégrations.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produit</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Orchestration IA</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Creator Hub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Équipes Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Équipes Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Équipes Produit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Équipes IT</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Statut</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} BotIntegrate. Tous droits réservés.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
                <a href="#" className="hover:text-white transition-colors">Conditions</a>
                <a href="#" className="hover:text-white transition-colors">Sécurité</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Construit avec ❤️ par BotIntegrate</span>
              <div className="flex items-center space-x-2 px-3 py-1 bg-gray-800 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">Tous systèmes opérationnels</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Keep existing components with minor updates
export const Dashboard = ({ user, onSearch, query, setQuery, isLoading, response }) => {
  const quickActions = [
    { title: "Orchestrer CRM", description: "Analyser et optimiser vos données clients", icon: HomeIcon, color: "from-blue-500 to-cyan-500" },
    { title: "Campagne Marketing", description: "Créer une campagne multi-canal automatisée", icon: AnalyticsIcon, color: "from-purple-500 to-pink-500" },
    { title: "Synchroniser Outils", description: "Connecter et synchroniser vos applications", icon: WorkflowIcon, color: "from-green-500 to-emerald-500" },
    { title: "Analyser Performance", description: "Générer des insights et rapports", icon: AnalyticsIcon, color: "from-orange-500 to-red-500" }
  ];

  const recentOrchestrations = [
    { name: "Orchestration CRM Salesforce", status: "Terminé", time: "Il y a 2 heures", duration: "12 min", tasks: 8 },
    { name: "Campagne email Mailchimp", status: "En cours", time: "Il y a 4 heures", duration: "25 min", tasks: 12 },
    { name: "Synchronisation Slack", status: "Planifié", time: "Il y a 6 heures", duration: "8 min", tasks: 5 },
    { name: "Analyse Google Analytics", status: "Terminé", time: "Il y a 1 jour", duration: "15 min", tasks: 10 }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-light text-white mb-2">
              Bienvenue, {user?.name} ! 👋
            </h1>
            <p className="text-gray-400 text-lg">
              Votre espace de travail {user?.company} • {user?.team}
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-6 text-center">
              <div>
                <div className="text-2xl font-light text-white">24</div>
                <div className="text-sm text-gray-400">Orchestrations</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white">156h</div>
                <div className="text-sm text-gray-400">Temps économisé</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white">18</div>
                <div className="text-sm text-gray-400">Intégrations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="text-center">
        <h2 className="text-2xl font-light text-white mb-4">
          Que voulez-vous <span className="text-cyan-400">orchestrer</span> aujourd'hui ?
        </h2>
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-gray-900 border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && onSearch(query)}
              placeholder="Décrivez la tâche complexe que Nexus doit orchestrer..."
              className="w-full px-8 py-6 text-lg bg-transparent text-white placeholder-gray-400 border-none outline-none font-light"
            />
            <button
              onClick={() => onSearch(query)}
              disabled={!query.trim() || isLoading}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <PlayIcon />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-xl font-light text-white mb-6">Actions rapides</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <button
                key={index}
                onClick={() => {
                  setQuery(`Je veux ${action.description.toLowerCase()}`);
                  onSearch(`Je veux ${action.description.toLowerCase()}`);
                }}
                className="group bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-200 text-left hover-lift"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">{action.title}</h4>
                <p className="text-gray-400 text-sm">{action.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* AI Response */}
      {response && (
        <div className="animate-fadeInUp">
          <h3 className="text-xl font-light text-white mb-6">Réponse de Nexus</h3>
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center animate-pulse">
                <span className="text-black font-bold">N</span>
              </div>
              <div>
                <span className="text-white font-medium text-lg">Nexus AI</span>
                <p className="text-gray-400 text-sm">Orchestrateur IA • BotIntegrate</p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                {response.answer}
              </p>
            </div>

            {response.integrations && response.integrations.length > 0 && (
              <div className="mt-8">
                <h4 className="text-cyan-400 font-medium mb-4">Outils sélectionnés par l'IA</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {response.integrations.map((integration, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-cyan-400 transition-all duration-200 hover-lift"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-lg">{integration.icon}</span>
                        <span className="text-white font-medium">{integration.name}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{integration.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Recent Orchestrations */}
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
        <h3 className="text-xl font-light text-white mb-6">Orchestrations récentes</h3>
        <div className="space-y-4">
          {recentOrchestrations.map((orchestration, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${
                  orchestration.status === 'Terminé' ? 'bg-green-400' :
                  orchestration.status === 'En cours' ? 'bg-blue-400' :
                  orchestration.status === 'Planifié' ? 'bg-yellow-400' : 'bg-red-400'
                }`}></div>
                <div>
                  <span className="text-white font-medium">{orchestration.name}</span>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                    <span>{orchestration.tasks} tâches</span>
                    <span>•</span>
                    <span>{orchestration.duration}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  orchestration.status === 'Terminé' ? 'bg-green-500/20 text-green-400' :
                  orchestration.status === 'En cours' ? 'bg-blue-500/20 text-blue-400' :
                  orchestration.status === 'Planifié' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {orchestration.status}
                </span>
                <div className="text-gray-400 text-sm mt-1">{orchestration.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add missing components (simplified for now)
export const Marketplace = () => (
  <div className="space-y-8">
    <h1 className="text-3xl font-light text-white">Marketplace</h1>
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
      <p className="text-gray-400">Interface Marketplace avec 200+ intégrations...</p>
    </div>
  </div>
);

export const WorkflowBuilder = () => (
  <div className="space-y-8">
    <h1 className="text-3xl font-light text-white">Workflow Builder</h1>
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
      <p className="text-gray-400">Interface de construction de workflows...</p>
    </div>
  </div>
);

export const AnalyticsDashboard = () => (
  <div className="space-y-8">
    <h1 className="text-3xl font-light text-white">Analytics</h1>
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
      <p className="text-gray-400">Dashboard analytics avec métriques...</p>
    </div>
  </div>
);

export const TeamManagement = ({ user }) => (
  <div className="space-y-8">
    <h1 className="text-3xl font-light text-white">Gestion d'Équipe</h1>
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
      <p className="text-gray-400">Interface de gestion d'équipe pour {user?.company}...</p>
    </div>
  </div>
);