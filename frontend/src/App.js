import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Header, 
  Home, 
  Marketplace, 
  WorkflowBuilder, 
  AnalyticsDashboard, 
  EnhancedChat, 
  Footer 
} from './components';

// Mock data for professional AI responses
const mockResponses = {
  default: {
    answer: "Je suis Nexus, votre assistant IA spécialisé dans l'automatisation des processus métier. Je peux vous aider à connecter vos outils, créer des workflows intelligents et optimiser votre productivité avec plus de 200 intégrations professionnelles. Comment puis-je automatiser vos tâches aujourd'hui ?",
    integrations: [
      { name: "Slack", icon: "💬", description: "Automatisation des notifications et workflows" },
      { name: "Salesforce", icon: "☁️", description: "Synchronisation CRM et leads" },
      { name: "Google Workspace", icon: "📊", description: "Gestion documentaire et calendrier" },
      { name: "Zapier", icon: "⚡", description: "Connecteur universel d'applications" }
    ],
    actions: [
      { icon: "🔗", title: "Créer une intégration", description: "Connecter deux ou plusieurs applications" },
      { icon: "⚙️", title: "Configurer un workflow", description: "Automatiser une séquence de tâches" },
      { icon: "📋", title: "Voir les templates", description: "Utiliser des modèles prédéfinis" }
    ]
  },
  crm: {
    answer: "Les systèmes CRM sont essentiels pour gérer vos relations clients. Je peux vous aider à automatiser la synchronisation des données, créer des workflows de nurturing et optimiser votre tunnel de vente avec des intégrations intelligentes.",
    integrations: [
      { name: "Salesforce", icon: "☁️", description: "CRM leader mondial avec APIs complètes" },
      { name: "HubSpot", icon: "🎯", description: "Marketing automation et CRM intégré" },
      { name: "Pipedrive", icon: "📈", description: "CRM visuel orienté pipeline" },
      { name: "Zoho CRM", icon: "📊", description: "Suite CRM complète et abordable" }
    ],
    actions: [
      { icon: "🔄", title: "Synchroniser les contacts", description: "Automatiser la mise à jour des données clients" },
      { icon: "📧", title: "Workflow email", description: "Créer des séquences automatisées" },
      { icon: "📊", title: "Rapports automatiques", description: "Générer des dashboards en temps réel" }
    ]
  },
  'e-commerce': {
    answer: "L'e-commerce nécessite une automatisation précise pour optimiser les ventes. Je peux connecter votre boutique en ligne avec vos outils de gestion, automatiser les commandes et synchroniser les inventaires en temps réel.",
    integrations: [
      { name: "Shopify", icon: "🛍️", description: "Plateforme e-commerce complète" },
      { name: "WooCommerce", icon: "🛒", description: "Solution WordPress flexible" },
      { name: "Magento", icon: "🏪", description: "Plateforme enterprise robuste" },
      { name: "BigCommerce", icon: "💳", description: "Solution cloud scalable" }
    ],
    actions: [
      { icon: "📦", title: "Gestion des stocks", description: "Automatiser la synchronisation d'inventaire" },
      { icon: "💳", title: "Processus de paiement", description: "Optimiser le tunnel de conversion" },
      { icon: "📈", title: "Analytics ventes", description: "Tracker les performances en temps réel" }
    ]
  },
  marketing: {
    answer: "Le marketing automation vous permet de nurture vos prospects efficacement. Je peux créer des workflows multi-canaux, automatiser vos campagnes et optimiser votre ROI avec des intégrations intelligentes.",
    integrations: [
      { name: "Mailchimp", icon: "📧", description: "Email marketing et automation" },
      { name: "Google Ads", icon: "🎯", description: "Publicité payante et tracking" },
      { name: "Facebook Ads", icon: "📱", description: "Social media advertising" },
      { name: "ActiveCampaign", icon: "⚡", description: "Marketing automation avancé" }
    ],
    actions: [
      { icon: "📧", title: "Campagnes email", description: "Automatiser les séquences de nurturing" },
      { icon: "📊", title: "Lead scoring", description: "Qualifier automatiquement les prospects" },
      { icon: "🎯", title: "Retargeting", description: "Créer des audiences personnalisées" }
    ]
  },
  finance: {
    answer: "La gestion financière automatisée améliore votre cash-flow et réduit les erreurs. Je peux connecter vos systèmes comptables, automatiser la facturation et créer des rapports financiers en temps réel.",
    integrations: [
      { name: "QuickBooks", icon: "📊", description: "Comptabilité professionnelle" },
      { name: "Stripe", icon: "💳", description: "Paiements en ligne sécurisés" },
      { name: "PayPal", icon: "💰", description: "Solution de paiement globale" },
      { name: "Xero", icon: "📈", description: "Comptabilité cloud moderne" }
    ],
    actions: [
      { icon: "🧾", title: "Facturation automatique", description: "Générer et envoyer les factures" },
      { icon: "💰", title: "Rapprochement bancaire", description: "Synchroniser les transactions" },
      { icon: "📊", title: "Reporting financier", description: "Dashboards en temps réel" }
    ]
  },
  'productivité': {
    answer: "L'automatisation de la productivité libère du temps pour les tâches à valeur ajoutée. Je peux optimiser vos workflows, synchroniser vos outils de communication et créer des processus intelligents.",
    integrations: [
      { name: "Slack", icon: "💬", description: "Communication d'équipe centralisée" },
      { name: "Notion", icon: "📝", description: "Workspace all-in-one" },
      { name: "Trello", icon: "📋", description: "Gestion de projets visuels" },
      { name: "Asana", icon: "✅", description: "Collaboration d'équipe avancée" }
    ],
    actions: [
      { icon: "⚡", title: "Automatiser les tâches", description: "Créer des workflows répétitifs" },
      { icon: "📅", title: "Synchroniser les calendriers", description: "Optimiser la planification" },
      { icon: "📊", title: "Rapports d'activité", description: "Tracker la productivité d'équipe" }
    ]
  },
  analytics: {
    answer: "L'analyse de données automatisée vous donne des insights exploitables en temps réel. Je peux connecter vos sources de données, créer des dashboards intelligents et automatiser vos rapports.",
    integrations: [
      { name: "Google Analytics", icon: "📊", description: "Analytics web complet" },
      { name: "Mixpanel", icon: "📈", description: "Product analytics avancé" },
      { name: "Tableau", icon: "📋", description: "Visualisation de données" },
      { name: "Power BI", icon: "⚡", description: "Business intelligence Microsoft" }
    ],
    actions: [
      { icon: "📊", title: "Dashboards automatiques", description: "Créer des rapports en temps réel" },
      { icon: "🔍", title: "Analyse prédictive", description: "Identifier les tendances futures" },
      { icon: "📧", title: "Alertes intelligentes", description: "Notifications sur seuils critiques" }
    ]
  }
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    setResponse(null);
    
    // Simulate AI processing with realistic delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate response based on query
    const lowerQuery = searchQuery.toLowerCase();
    let selectedResponse = mockResponses.default;
    
    if (lowerQuery.includes('crm') || lowerQuery.includes('client') || lowerQuery.includes('vente')) {
      selectedResponse = mockResponses.crm;
    } else if (lowerQuery.includes('e-commerce') || lowerQuery.includes('boutique') || lowerQuery.includes('vente en ligne')) {
      selectedResponse = mockResponses['e-commerce'];
    } else if (lowerQuery.includes('marketing') || lowerQuery.includes('campagne') || lowerQuery.includes('publicité')) {
      selectedResponse = mockResponses.marketing;
    } else if (lowerQuery.includes('finance') || lowerQuery.includes('comptabilité') || lowerQuery.includes('facturation')) {
      selectedResponse = mockResponses.finance;
    } else if (lowerQuery.includes('productivité') || lowerQuery.includes('tâche') || lowerQuery.includes('workflow')) {
      selectedResponse = mockResponses['productivité'];
    } else if (lowerQuery.includes('analytics') || lowerQuery.includes('données') || lowerQuery.includes('rapport')) {
      selectedResponse = mockResponses.analytics;
    }
    
    setResponse(selectedResponse);
    setIsLoading(false);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <Home
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
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'chat':
        return <EnhancedChat />;
      default:
        return (
          <Home
            onSearch={handleSearch}
            query={query}
            setQuery={setQuery}
            isLoading={isLoading}
            response={response}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-20">
            {renderActiveSection()}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;