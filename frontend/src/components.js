import React, { useState, useEffect } from 'react';

// Header Component
export const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors font-light">
              Intégrations
            </a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors font-light">
              Workflows
            </a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors font-light">
              Automatisations
            </a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors font-light">
              Entreprise
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors font-light">
              Dashboard
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium">
              Connexion
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-gray-800">
                Intégrations
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-gray-800">
                Workflows
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-gray-800">
                Automatisations
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-gray-800">
                Entreprise
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Enhanced Search Bar Component with AI animations
export const SearchBar = ({ darkMode, onSearch, query, setQuery, isLoading }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className={`relative rounded-2xl bg-gray-900 border-2 ${isFocused ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' : 'border-gray-700'} transition-all duration-300`}>
          <div className="flex items-center">
            <div className="flex-1">
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Décrivez votre tâche ou intégration..."
                className="w-full px-8 py-6 text-lg bg-transparent text-white placeholder-gray-400 border-none outline-none font-light"
              />
            </div>
            
            {/* AI Status Indicator */}
            <div className="flex items-center px-4 space-x-3">
              {isLoading && (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-200"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-400"></div>
                </div>
              )}
              
              {isTyping && !isLoading && (
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              )}
              
              {/* Voice Input */}
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1C11.172 1 10.5 1.672 10.5 2.5V11.5C10.5 12.328 11.172 13 12 13C12.828 13 13.5 12.328 13.5 11.5V2.5C13.5 1.672 12.828 1 12 1Z"/>
                  <path d="M9 11.5C9 13.157 10.343 14.5 12 14.5C13.657 14.5 15 13.157 15 11.5H16.5C16.5 13.736 14.736 15.5 12.5 15.5V17H16V18.5H8V17H11.5V15.5C9.264 15.5 7.5 13.736 7.5 11.5H9Z"/>
                </svg>
              </button>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={!query.trim() || isLoading}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19L19 12L12 5L5 12L12 19Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

// Professional Integration Categories
export const IntegrationCategories = ({ onCategoryClick }) => {
  const categories = [
    { name: 'CRM', icon: '👥', description: 'Salesforce, HubSpot, Pipedrive' },
    { name: 'E-commerce', icon: '🛒', description: 'Shopify, WooCommerce, Magento' },
    { name: 'Marketing', icon: '📊', description: 'Mailchimp, Google Ads, Facebook' },
    { name: 'Finance', icon: '💰', description: 'QuickBooks, Stripe, PayPal' },
    { name: 'Productivité', icon: '⚡', description: 'Slack, Notion, Trello' },
    { name: 'Analytics', icon: '📈', description: 'Google Analytics, Mixpanel' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => onCategoryClick(category.name)}
          className="group p-4 bg-gray-900 border border-gray-700 rounded-xl hover:border-cyan-400 hover:bg-gray-800 transition-all duration-200 text-left"
        >
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-2xl">{category.icon}</span>
            <span className="text-white font-medium">{category.name}</span>
          </div>
          <p className="text-gray-400 text-sm font-light">{category.description}</p>
        </button>
      ))}
    </div>
  );
};

// AI Response Component with professional styling
export const AIResponse = ({ response, isLoading }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (response) {
      setIsVisible(true);
    }
  }, [response]);

  if (!response && !isLoading) return null;

  return (
    <div className={`w-full max-w-6xl mx-auto mt-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl">
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-black font-bold">N</span>
            </div>
            <div>
              <span className="text-white font-medium text-lg">Nexus AI</span>
              <p className="text-gray-400 text-sm">Agent IA • BotIntegrate</p>
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-200"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-400"></div>
              </div>
              <span className="text-gray-400">Nexus analyse votre demande...</span>
            </div>
          ) : (
            <>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg font-light">
                  {response.answer}
                </p>
              </div>

              {/* Integration Suggestions */}
              {response.integrations && response.integrations.length > 0 && (
                <div className="mt-8">
                  <h4 className="text-cyan-400 font-medium mb-4">Intégrations recommandées</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {response.integrations.map((integration, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-cyan-400 transition-all duration-200"
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

              {/* Follow-up Actions */}
              {response.actions && response.actions.length > 0 && (
                <div className="mt-8">
                  <h4 className="text-cyan-400 font-medium mb-4">Actions suggérées</h4>
                  <div className="space-y-3">
                    {response.actions.map((action, index) => (
                      <button
                        key={index}
                        className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-cyan-400 hover:bg-gray-700 transition-all duration-200 text-left"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-cyan-400">{action.icon}</span>
                          <span className="text-white font-medium">{action.title}</span>
                        </div>
                        <p className="text-gray-400 text-sm mt-2">{action.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="mt-20 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-black font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-light text-white">
                nexus<span className="text-cyan-400 font-normal">lite</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm font-light">
              Agent IA professionnel pour automatiser vos processus métier avec plus de 200 intégrations.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Produit</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Intégrations</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Workflows</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">API</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Entreprise</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Sécurité</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Tarifs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">BotIntegrate</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 BotIntegrate. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <div className="text-center mb-12">
      <div className="mb-6">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
          Automatisez avec
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">
            l'intelligence artificielle
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
          Nexus connecte vos outils métier avec plus de 200 intégrations professionnelles. 
          Créez des workflows intelligents en langage naturel.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-gray-300 text-sm">200+ intégrations</span>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full">
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          <span className="text-gray-300 text-sm">IA conversationnelle</span>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="text-gray-300 text-sm">Workflows automatisés</span>
        </div>
      </div>
    </div>
  );
};