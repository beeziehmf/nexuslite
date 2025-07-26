import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  PublicHeader,
  PrivateHeader,
  Sidebar,
  LandingPage,
  LoginModal,
  Dashboard,
  Marketplace, 
  WorkflowBuilder,
  CreatorHub,
  AnalyticsDashboard, 
  ChatGPTInterface,
  SettingsPanel,
  AINews,
  TeamManagement,
  SaaSFooter
} from './components';

// Mock data for professional AI responses
const mockResponses = {
  default: {
    answer: "Je suis Nexus, votre orchestrateur IA spécialisé dans l'automatisation des processus métier. Je peux analyser vos besoins et orchestrer automatiquement une série de tâches complexes en sélectionnant les meilleurs outils et processus. Comment puis-je vous aider aujourd'hui ?",
    integrations: [
      { name: "Slack", icon: "💬", description: "Orchestration des notifications et workflows" },
      { name: "Salesforce", icon: "☁️", description: "Synchronisation CRM et orchestration des données" },
      { name: "Google Workspace", icon: "📊", description: "Gestion documentaire et orchestration calendrier" },
      { name: "Zapier", icon: "⚡", description: "Connecteur universel pour orchestration" }
    ],
    actions: [
      { icon: "🔗", title: "Orchestrer une intégration", description: "Analyser et connecter automatiquement vos outils" },
      { icon: "⚙️", title: "Lancer un workflow", description: "Orchestrer une séquence de tâches complexes" },
      { icon: "📋", title: "Optimiser un processus", description: "Analyser et améliorer vos workflows existants" }
    ]
  },
  crm: {
    answer: "Je vais orchestrer une analyse complète de votre CRM. Nexus va automatiquement analyser vos données, identifier les opportunités d'optimisation et exécuter les actions nécessaires avec les meilleurs outils disponibles.",
    integrations: [
      { name: "Salesforce", icon: "☁️", description: "Orchestration CRM avancée avec APIs complètes" },
      { name: "HubSpot", icon: "🎯", description: "Orchestration marketing automation et CRM" },
      { name: "Pipedrive", icon: "📈", description: "Orchestration pipeline visuel et processus" },
      { name: "Zoho CRM", icon: "📊", description: "Orchestration suite CRM complète" }
    ],
    actions: [
      { icon: "🔄", title: "Orchestrer la synchronisation", description: "Automatiser la mise à jour des données clients" },
      { icon: "📧", title: "Orchestrer les campagnes", description: "Lancer des séquences marketing automatisées" },
      { icon: "📊", title: "Orchestrer l'analyse", description: "Générer des insights et rapports automatiques" }
    ]
  },
  marketing: {
    answer: "Je vais orchestrer une campagne marketing complète. Nexus analysera votre audience, sélectionnera les meilleurs canaux, créera le contenu optimisé et lancera automatiquement votre campagne multi-canal.",
    integrations: [
      { name: "Mailchimp", icon: "📧", description: "Orchestration email marketing avancée" },
      { name: "Google Ads", icon: "🎯", description: "Orchestration publicité payante intelligente" },
      { name: "Facebook Ads", icon: "📱", description: "Orchestration social media advertising" },
      { name: "ActiveCampaign", icon: "⚡", description: "Orchestration marketing automation" }
    ],
    actions: [
      { icon: "📧", title: "Orchestrer les campagnes", description: "Automatiser les séquences de nurturing" },
      { icon: "📊", title: "Orchestrer le scoring", description: "Qualifier automatiquement les prospects" },
      { icon: "🎯", title: "Orchestrer le retargeting", description: "Créer des audiences personnalisées" }
    ]
  }
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  // Check authentication on app load
  useEffect(() => {
    const savedAuth = localStorage.getItem('nexus_auth');
    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      setIsAuthenticated(true);
      setUser(authData.user);
    }
  }, []);

  const handleLogin = (credentials) => {
    // Simulate login process
    const userData = {
      name: credentials.name || 'Utilisateur',
      email: credentials.email || 'user@example.com',
      company: credentials.company || 'Mon Entreprise',
      plan: 'Enterprise',
      role: 'Admin',
      team: 'Équipe Marketing',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format'
    };
    
    setUser(userData);
    setIsAuthenticated(true);
    setShowLoginModal(false);
    setActiveSection('dashboard');
    
    // Save to localStorage
    localStorage.setItem('nexus_auth', JSON.stringify({
      user: userData,
      timestamp: Date.now()
    }));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setActiveSection('dashboard');
    localStorage.removeItem('nexus_auth');
  };

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    setResponse(null);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const lowerQuery = searchQuery.toLowerCase();
    let selectedResponse = mockResponses.default;
    
    if (lowerQuery.includes('crm') || lowerQuery.includes('client') || lowerQuery.includes('vente')) {
      selectedResponse = mockResponses.crm;
    } else if (lowerQuery.includes('marketing') || lowerQuery.includes('campagne') || lowerQuery.includes('publicité')) {
      selectedResponse = mockResponses.marketing;
    }
    
    setResponse(selectedResponse);
    setIsLoading(false);
  };

  const renderAuthenticatedContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <Dashboard
            user={user}
            onSearch={handleSearch}
            query={query}
            setQuery={setQuery}
            isLoading={isLoading}
            response={response}
          />
        );
      case 'marketplace':
        return <Marketplace />;
      case 'workflows':
        return <WorkflowBuilder />;
      case 'creator-hub':
        return <CreatorHub />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'chat':
        return <ChatGPTInterface />;
      case 'settings':
        return <SettingsPanel user={user} />;
      case 'ai-news':
        return <AINews />;
      case 'team':
        return <TeamManagement user={user} />;
      default:
        return (
          <Dashboard
            user={user}
            onSearch={handleSearch}
            query={query}
            setQuery={setQuery}
            isLoading={isLoading}
            response={response}
          />
        );
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black">
        <PublicHeader onLogin={() => setShowLoginModal(true)} />
        <LandingPage onLogin={() => setShowLoginModal(true)} />
        <SaaSFooter />
        
        {showLoginModal && (
          <LoginModal
            onClose={() => setShowLoginModal(false)}
            onLogin={handleLogin}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <Sidebar
        user={user}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <PrivateHeader 
          user={user}
          onLogout={handleLogout}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />
        
        <main className="flex-1 pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-8">
              {renderAuthenticatedContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;