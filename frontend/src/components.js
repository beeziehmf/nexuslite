import React, { useState, useEffect, useRef } from 'react';

// Enhanced Header Component with navigation
export const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: '🏠' },
    { id: 'marketplace', label: 'Marketplace', icon: '🛍️' },
    { id: 'workflows', label: 'Workflows', icon: '⚡' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'chat', label: 'Chat IA', icon: '💬' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
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
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800'
                }`}
              >
                <span>{item.icon}</span>
                <span className="font-light">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
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
          <div className="md:hidden bg-gray-900 border-t border-gray-800 animate-slideDown">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Enhanced Search Bar Component
export const SearchBar = ({ onSearch, query, setQuery, isLoading }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const quickCommands = [
    { command: '/crm', description: 'Gérer votre CRM' },
    { command: '/workflow', description: 'Créer un workflow' },
    { command: '/analytics', description: 'Voir les analytics' },
    { command: '/connect', description: 'Connecter une app' }
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.startsWith('/')) {
      const filtered = quickCommands.filter(cmd => 
        cmd.command.includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className={`relative rounded-2xl bg-gray-900 border-2 transition-all duration-300 ${
          isFocused ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' : 'border-gray-700'
        }`}>
          <div className="flex items-center">
            <div className="flex-1 relative">
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                placeholder="Décrivez votre tâche ou tapez '/' pour les commandes rapides..."
                className="w-full px-8 py-6 text-lg bg-transparent text-white placeholder-gray-400 border-none outline-none font-light"
              />
              
              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-xl shadow-xl z-10">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(suggestion.command);
                        setShowSuggestions(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-cyan-400 font-mono">{suggestion.command}</span>
                        <span className="text-gray-400">{suggestion.description}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex items-center px-4 space-x-3">
              {/* AI Status */}
              {isLoading && (
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-200"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-400"></div>
                  </div>
                </div>
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

// Marketplace Component
export const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  const categories = [
    { id: 'all', name: 'Toutes', count: 200 },
    { id: 'crm', name: 'CRM', count: 45 },
    { id: 'marketing', name: 'Marketing', count: 38 },
    { id: 'ecommerce', name: 'E-commerce', count: 32 },
    { id: 'finance', name: 'Finance', count: 28 },
    { id: 'productivity', name: 'Productivité', count: 35 },
    { id: 'analytics', name: 'Analytics', count: 22 }
  ];

  const integrations = [
    { id: 1, name: 'Salesforce', category: 'crm', icon: '☁️', rating: 4.8, installs: '50K+', description: 'CRM leader mondial avec APIs complètes et intégrations avancées', features: ['Lead Management', 'Pipeline Automation', 'Custom Objects', 'Advanced Analytics'], pricing: 'Freemium' },
    { id: 2, name: 'HubSpot', category: 'crm', icon: '🎯', rating: 4.7, installs: '35K+', description: 'Marketing automation et CRM intégré pour PME', features: ['Email Marketing', 'Contact Management', 'Sales Pipeline', 'Landing Pages'], pricing: 'Gratuit' },
    { id: 3, name: 'Shopify', category: 'ecommerce', icon: '🛍️', rating: 4.9, installs: '100K+', description: 'Plateforme e-commerce complète avec app store', features: ['Store Management', 'Inventory Sync', 'Order Processing', 'Payment Gateway'], pricing: 'Payant' },
    { id: 4, name: 'Stripe', category: 'finance', icon: '💳', rating: 4.8, installs: '75K+', description: 'Paiements en ligne sécurisés et API flexibles', features: ['Payment Processing', 'Subscription Management', 'Fraud Detection', 'Global Payments'], pricing: 'Commission' },
    { id: 5, name: 'Slack', category: 'productivity', icon: '💬', rating: 4.6, installs: '80K+', description: 'Communication d\'équipe et intégrations workflow', features: ['Team Chat', 'File Sharing', 'App Integrations', 'Workflow Builder'], pricing: 'Freemium' },
    { id: 6, name: 'Google Analytics', category: 'analytics', icon: '📊', rating: 4.5, installs: '90K+', description: 'Analytics web complet avec insights avancés', features: ['Web Analytics', 'Real-time Data', 'Custom Reports', 'Goal Tracking'], pricing: 'Gratuit' },
    { id: 7, name: 'Mailchimp', category: 'marketing', icon: '📧', rating: 4.4, installs: '60K+', description: 'Email marketing et automation pour entreprises', features: ['Email Campaigns', 'Audience Segmentation', 'A/B Testing', 'Analytics'], pricing: 'Freemium' },
    { id: 8, name: 'Notion', category: 'productivity', icon: '📝', rating: 4.7, installs: '45K+', description: 'Workspace all-in-one pour équipes modernes', features: ['Note Taking', 'Project Management', 'Database', 'Team Collaboration'], pricing: 'Freemium' }
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const IntegrationCard = ({ integration }) => (
    <div 
      className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-200 cursor-pointer hover-lift"
      onClick={() => setSelectedIntegration(integration)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center text-2xl">
            {integration.icon}
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{integration.name}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-yellow-400">⭐</span>
              <span className="text-gray-400 text-sm">{integration.rating}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 text-sm">{integration.installs}</span>
            </div>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
          integration.pricing === 'Gratuit' ? 'bg-green-500/20 text-green-400' :
          integration.pricing === 'Freemium' ? 'bg-blue-500/20 text-blue-400' :
          'bg-orange-500/20 text-orange-400'
        }`}>
          {integration.pricing}
        </div>
      </div>
      
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{integration.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {integration.features.slice(0, 3).map((feature, index) => (
          <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs">
            {feature}
          </span>
        ))}
        {integration.features.length > 3 && (
          <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded-md text-xs">
            +{integration.features.length - 3} more
          </span>
        )}
      </div>
      
      <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium">
        Connecter
      </button>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-light text-white mb-4">
          Marketplace <span className="text-cyan-400">Intégrations</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Découvrez et connectez plus de 200 outils professionnels
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher une intégration..."
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
          />
          <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-cyan-400 text-black border-cyan-400'
                  : 'bg-gray-900 text-gray-300 border-gray-700 hover:border-cyan-400'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration) => (
          <IntegrationCard key={integration.id} integration={integration} />
        ))}
      </div>

      {/* Integration Modal */}
      {selectedIntegration && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center text-3xl">
                    {selectedIntegration.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{selectedIntegration.name}</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-gray-400">{selectedIntegration.rating}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">{selectedIntegration.installs}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedIntegration(null)}
                  className="text-gray-400 hover:text-white p-2"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-300 mb-6">{selectedIntegration.description}</p>

              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">Fonctionnalités</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedIntegration.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg">
                      <span className="text-cyan-400">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium">
                  Connecter maintenant
                </button>
                <button className="px-6 py-3 border border-gray-700 text-gray-300 rounded-xl hover:border-cyan-400 transition-all duration-200">
                  Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Workflow Builder Component
export const WorkflowBuilder = () => {
  const [workflows, setWorkflows] = useState([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  const workflowTemplates = [
    {
      id: 1,
      name: 'Lead to Customer',
      description: 'Automatiser le processus de conversion lead vers client',
      category: 'Sales',
      steps: 5,
      integrations: ['Salesforce', 'HubSpot', 'Slack'],
      icon: '🎯'
    },
    {
      id: 2,
      name: 'E-commerce Order Processing',
      description: 'Traitement automatique des commandes e-commerce',
      category: 'E-commerce',
      steps: 7,
      integrations: ['Shopify', 'Stripe', 'Google Sheets'],
      icon: '🛍️'
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      description: 'Campagne marketing automatisée multi-canal',
      category: 'Marketing',
      steps: 6,
      integrations: ['Mailchimp', 'Facebook Ads', 'Google Analytics'],
      icon: '📊'
    },
    {
      id: 4,
      name: 'Customer Support',
      description: 'Support client automatisé avec escalade',
      category: 'Support',
      steps: 4,
      integrations: ['Zendesk', 'Slack', 'Gmail'],
      icon: '🎧'
    }
  ];

  const WorkflowCard = ({ workflow }) => (
    <div 
      className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-200 cursor-pointer hover-lift"
      onClick={() => setSelectedWorkflow(workflow)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center text-2xl">
            {workflow.icon}
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{workflow.name}</h3>
            <span className="text-cyan-400 text-sm">{workflow.category}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-gray-400 text-sm">{workflow.steps} étapes</div>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm mb-4">{workflow.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {workflow.integrations.map((integration, index) => (
          <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs">
            {integration}
          </span>
        ))}
      </div>
      
      <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium">
        Utiliser ce template
      </button>
    </div>
  );

  const WorkflowCanvas = ({ workflow }) => (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold text-xl">{workflow.name}</h3>
        <button
          onClick={() => setSelectedWorkflow(null)}
          className="text-gray-400 hover:text-white p-2"
        >
          ✕
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Workflow Steps Visualization */}
        <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
            1
          </div>
          <span className="text-gray-300 text-sm text-center">Trigger</span>
          <span className="text-gray-400 text-xs text-center mt-1">Nouveau lead</span>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full ml-2"></div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
            2
          </div>
          <span className="text-gray-300 text-sm text-center">Action</span>
          <span className="text-gray-400 text-xs text-center mt-1">Créer contact</span>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full ml-2"></div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
            3
          </div>
          <span className="text-gray-300 text-sm text-center">Notification</span>
          <span className="text-gray-400 text-xs text-center mt-1">Slack alert</span>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium">
          Activer ce workflow
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-light text-white mb-4">
          Builder <span className="text-cyan-400">Workflows</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Créez et gérez vos automatisations en quelques clics
        </p>
      </div>

      {selectedWorkflow ? (
        <WorkflowCanvas workflow={selectedWorkflow} />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button
                onClick={() => setIsCreating(true)}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
              >
                + Créer un workflow
              </button>
              <button className="px-6 py-3 border border-gray-700 text-gray-300 rounded-xl hover:border-cyan-400 transition-all duration-200">
                Mes workflows
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-white mb-6">Templates populaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowTemplates.map((workflow) => (
                <WorkflowCard key={workflow.id} workflow={workflow} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Analytics Dashboard Component
export const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('executions');

  const metrics = [
    { id: 'executions', label: 'Exécutions', value: '12,845', change: '+23%', color: 'cyan' },
    { id: 'success', label: 'Taux de succès', value: '98.2%', change: '+1.2%', color: 'green' },
    { id: 'savings', label: 'Temps économisé', value: '340h', change: '+45%', color: 'blue' },
    { id: 'integrations', label: 'Intégrations actives', value: '24', change: '+3', color: 'purple' }
  ];

  const MetricCard = ({ metric }) => (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-400 text-sm">{metric.label}</span>
        <span className={`text-${metric.color}-400 text-sm ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
          {metric.change}
        </span>
      </div>
      <div className="text-3xl font-light text-white">{metric.value}</div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-light text-white mb-4">
            Analytics <span className="text-cyan-400">Dashboard</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Suivez les performances de vos automatisations
          </p>
        </div>
        
        <div className="flex space-x-2">
          {['24h', '7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                timeRange === range
                  ? 'bg-cyan-400 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <h3 className="text-white font-semibold text-xl mb-4">Exécutions par jour</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[65, 78, 90, 81, 56, 75, 85].map((height, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-cyan-500 to-blue-600 rounded-t-lg flex-1"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <h3 className="text-white font-semibold text-xl mb-4">Top Intégrations</h3>
          <div className="space-y-4">
            {[
              { name: 'Salesforce', usage: 85, color: 'cyan' },
              { name: 'Slack', usage: 72, color: 'blue' },
              { name: 'Google Sheets', usage: 68, color: 'green' },
              { name: 'Mailchimp', usage: 54, color: 'purple' }
            ].map((integration, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300">{integration.name}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${integration.color}-400`}
                      style={{ width: `${integration.usage}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-400 text-sm">{integration.usage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
        <h3 className="text-white font-semibold text-xl mb-4">Activité récente</h3>
        <div className="space-y-4">
          {[
            { action: 'Workflow "Lead to Customer" exécuté', time: '2 min ago', status: 'success' },
            { action: 'Nouvelle intégration Shopify connectée', time: '15 min ago', status: 'info' },
            { action: 'Erreur dans workflow "Email Campaign"', time: '1h ago', status: 'error' },
            { action: 'API limite atteinte pour HubSpot', time: '2h ago', status: 'warning' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  activity.status === 'success' ? 'bg-green-400' :
                  activity.status === 'error' ? 'bg-red-400' :
                  activity.status === 'warning' ? 'bg-yellow-400' :
                  'bg-blue-400'
                }`}></div>
                <span className="text-gray-300">{activity.action}</span>
              </div>
              <span className="text-gray-400 text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Enhanced Chat Component
export const EnhancedChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
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
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: `Je comprends votre demande concernant "${message}". Je peux vous aider à créer une automatisation pour cela. Voulez-vous que je vous propose un workflow spécifique ?`,
        timestamp: new Date(),
        suggestions: [
          'Créer un workflow',
          'Voir les intégrations disponibles',
          'Configurer les paramètres'
        ]
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-light text-white mb-4">
          Chat <span className="text-cyan-400">IA</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Discutez avec Nexus pour créer vos automatisations
        </p>
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-xl h-96 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-400 mt-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">N</span>
              </div>
              <p>Bonjour ! Je suis Nexus, votre assistant IA.</p>
              <p className="text-sm mt-2">Comment puis-je vous aider à automatiser vos tâches ?</p>
            </div>
          )}
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300'
              }`}>
                {message.type === 'ai' && (
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-xs">N</span>
                    </div>
                    <span className="text-xs text-gray-400">Nexus AI</span>
                  </div>
                )}
                <p className="text-sm">{message.content}</p>
                {message.suggestions && (
                  <div className="mt-3 space-y-1">
                    {message.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSend(suggestion)}
                        className="block w-full text-left p-2 bg-gray-700 hover:bg-gray-600 rounded text-xs transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-800 rounded-lg p-4 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-200"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-400"></div>
                </div>
                <span className="text-gray-400 text-sm">Nexus réfléchit...</span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-700 p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
              placeholder="Tapez votre message..."
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            />
            <button
              onClick={() => handleSend(input)}
              disabled={!input.trim()}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50"
            >
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Home Component (original enhanced)
export const Home = ({ onSearch, query, setQuery, isLoading, response }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1
    }));
    setParticles(newParticles);
  }, []);

  const integrationCategories = [
    { name: 'CRM', icon: '👥', description: 'Salesforce, HubSpot, Pipedrive' },
    { name: 'E-commerce', icon: '🛒', description: 'Shopify, WooCommerce, Magento' },
    { name: 'Marketing', icon: '📊', description: 'Mailchimp, Google Ads, Facebook' },
    { name: 'Finance', icon: '💰', description: 'QuickBooks, Stripe, PayPal' },
    { name: 'Productivité', icon: '⚡', description: 'Slack, Notion, Trello' },
    { name: 'Analytics', icon: '📈', description: 'Google Analytics, Mixpanel' }
  ];

  const handleCategoryClick = (category) => {
    const categoryQueries = {
      'CRM': 'Aide-moi avec mon CRM',
      'E-commerce': 'Automatiser ma boutique en ligne',
      'Marketing': 'Optimiser mes campagnes marketing',
      'Finance': 'Gérer ma comptabilité',
      'Productivité': 'Améliorer ma productivité',
      'Analytics': 'Analyser mes données'
    };
    
    setQuery(categoryQueries[category]);
    onSearch(categoryQueries[category]);
  };

  return (
    <div className="relative">
      {/* Animated Background */}
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

      <div className="relative z-10 space-y-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight animate-fadeInUp">
              Automatisez avec
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">
                l'intelligence artificielle
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed animate-fadeInUp animation-delay-200">
              Nexus connecte vos outils métier avec plus de 200 intégrations professionnelles. 
              Créez des workflows intelligents en langage naturel.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fadeInUp animation-delay-400">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">200+ intégrations</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">IA conversationnelle</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">Workflows automatisés</span>
            </div>
          </div>
        </div>

        {/* Enhanced Search */}
        <div className="animate-fadeInUp animation-delay-600">
          <SearchBar 
            onSearch={onSearch}
            query={query}
            setQuery={setQuery}
            isLoading={isLoading}
          />
        </div>

        {/* Integration Categories */}
        <div className="animate-fadeInUp animation-delay-800">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrationCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className="group p-4 bg-gray-900 border border-gray-700 rounded-xl hover:border-cyan-400 hover:bg-gray-800 transition-all duration-200 text-left hover-lift"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-white font-medium">{category.name}</span>
                </div>
                <p className="text-gray-400 text-sm font-light">{category.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* AI Response */}
        {response && (
          <div className="animate-fadeInUp">
            <AIResponse response={response} isLoading={isLoading} />
          </div>
        )}
      </div>
    </div>
  );
};

// AI Response Component (enhanced)
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
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center animate-pulse">
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

              {/* Follow-up Actions */}
              {response.actions && response.actions.length > 0 && (
                <div className="mt-8">
                  <h4 className="text-cyan-400 font-medium mb-4">Actions suggérées</h4>
                  <div className="space-y-3">
                    {response.actions.map((action, index) => (
                      <button
                        key={index}
                        className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-cyan-400 hover:bg-gray-700 transition-all duration-200 text-left hover-lift"
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

// Footer Component (enhanced)
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