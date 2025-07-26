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

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a3.5 3.5 0 1113.5 0H15m-6 0a3.5 3.5 0 00-7 0h1.5m6 0v1a3.5 3.5 0 07 0v-1m-7 0V9a3.5 3.5 0 017 0v1M9 21h6" />
  </svg>
);

const TaskIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const MicIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
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

const ExclamationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

// Public Header Component
export const PublicHeader = ({ onLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onLogin}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
            >
              Connexion
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">
                Fonctionnalités
              </a>
              <a href="#integrations" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">
                Intégrations
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">
                Tarifs
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Private Header Component
export const PrivateHeader = ({ user, activeSection, setActiveSection, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
    { id: 'marketplace', label: 'Marketplace', icon: MarketplaceIcon },
    { id: 'workflows', label: 'Workflows', icon: WorkflowIcon },
    { id: 'analytics', label: 'Analytics', icon: AnalyticsIcon },
    { id: 'chat', label: 'Chat IA', icon: ChatIcon }
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
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800'
                  }`}
                >
                  <IconComponent />
                  <span className="font-light">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
              >
                <UserIcon />
                <span className="font-light">{user?.name}</span>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl">
                  <div className="px-4 py-3 border-b border-gray-700">
                    <p className="text-white font-medium">{user?.name}</p>
                    <p className="text-gray-400 text-sm">{user?.email}</p>
                    <p className="text-cyan-400 text-xs">Plan {user?.plan}</p>
                  </div>
                  <div className="py-2">
                    <button
                      onClick={onLogout}
                      className="w-full flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                    >
                      <LogoutIcon />
                      <span>Déconnexion</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
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
                    <IconComponent />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Landing Page Component
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

  const features = [
    {
      icon: TaskIcon,
      title: "Orchestration Intelligente",
      description: "Nexus analyse vos besoins et orchestre automatiquement une série de tâches complexes"
    },
    {
      icon: DatabaseIcon,
      title: "200+ Intégrations",
      description: "Connectez tous vos outils préférés avec notre marketplace d'intégrations"
    },
    {
      icon: TrendingUpIcon,
      title: "Sélection Automatique",
      description: "L'IA sélectionne automatiquement les meilleurs outils et processus"
    },
    {
      icon: AnalyticsIcon,
      title: "Analytics Avancé",
      description: "Suivez les performances de vos orchestrations avec des métriques détaillées"
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
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
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">Orchestration intelligente</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">200+ intégrations</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">Sélection automatique</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Fonctionnalités <span className="text-cyan-400">Avancées</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez comment Nexus révolutionne l'automatisation avec l'intelligence artificielle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-black" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Prêt à orchestrer vos tâches ?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Rejoignez des milliers d'entreprises qui utilisent déjà Nexus pour automatiser leurs processus
          </p>
          <button
            onClick={onLogin}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium text-lg"
          >
            Démarrer maintenant
          </button>
        </div>
      </section>
    </main>
  );
};

// Login Modal Component
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

// Dashboard Component
export const Dashboard = ({ user, onSearch, query, setQuery, isLoading, response }) => {
  const quickActions = [
    { title: "Orchestrer CRM", description: "Analyser et optimiser vos données clients", icon: DatabaseIcon },
    { title: "Campagne Marketing", description: "Créer une campagne multi-canal automatisée", icon: TrendingUpIcon },
    { title: "Synchroniser Outils", description: "Connecter et synchroniser vos applications", icon: ServerIcon },
    { title: "Analyser Performance", description: "Générer des insights et rapports", icon: AnalyticsIcon }
  ];

  const recentActivity = [
    { action: "Orchestration CRM Salesforce", time: "Il y a 2 heures", status: "success" },
    { action: "Campagne email Mailchimp", time: "Il y a 4 heures", status: "success" },
    { action: "Synchronisation Slack", time: "Il y a 6 heures", status: "pending" },
    { action: "Analyse Google Analytics", time: "Il y a 1 jour", status: "success" }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl p-6">
        <h1 className="text-3xl font-light text-white mb-2">
          Bienvenue, {user?.name} ! 👋
        </h1>
        <p className="text-gray-400 text-lg">
          Prêt à orchestrer vos tâches avec l'intelligence artificielle ?
        </p>
      </div>

      {/* Search Section */}
      <div className="text-center">
        <h2 className="text-2xl font-light text-white mb-4">
          Décrivez ce que vous voulez <span className="text-cyan-400">orchestrer</span>
        </h2>
        <SearchBar 
          onSearch={onSearch}
          query={query}
          setQuery={setQuery}
          isLoading={isLoading}
        />
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-xl font-light text-white mb-4">Actions rapides</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <button
                key={index}
                onClick={() => {
                  setQuery(`Je veux ${action.description.toLowerCase()}`);
                  onSearch(`Je veux ${action.description.toLowerCase()}`);
                }}
                className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:border-cyan-400 transition-all duration-200 text-left"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <IconComponent className="w-6 h-6 text-cyan-400" />
                  <span className="text-white font-medium">{action.title}</span>
                </div>
                <p className="text-gray-400 text-sm">{action.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* AI Response */}
      {response && (
        <AIResponse response={response} isLoading={isLoading} />
      )}

      {/* Recent Activity */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
        <h3 className="text-xl font-light text-white mb-4">Activité récente</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  activity.status === 'success' ? 'bg-green-400' :
                  activity.status === 'pending' ? 'bg-yellow-400' : 'bg-red-400'
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

// Enhanced Search Bar Component
export const SearchBar = ({ onSearch, query, setQuery, isLoading }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
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
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Décrivez la tâche complexe que Nexus doit orchestrer..."
                className="w-full px-8 py-6 text-lg bg-transparent text-white placeholder-gray-400 border-none outline-none font-light"
              />
            </div>
            
            <div className="flex items-center px-4 space-x-3">
              {isLoading && (
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-200"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-400"></div>
                  </div>
                </div>
              )}
              
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <MicIcon />
              </button>
              
              <button
                type="submit"
                disabled={!query.trim() || isLoading}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
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
      </form>
    </div>
  );
};

// AI Response Component
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
              <p className="text-gray-400 text-sm">Orchestrateur IA • BotIntegrate</p>
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-200"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-400"></div>
              </div>
              <span className="text-gray-400">Nexus orchestre votre demande...</span>
            </div>
          ) : (
            <>
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

              {response.actions && response.actions.length > 0 && (
                <div className="mt-8">
                  <h4 className="text-cyan-400 font-medium mb-4">Orchestration planifiée</h4>
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

// Keep existing components but update them for SaaS context
export const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
    { id: 1, name: 'Salesforce', category: 'crm', icon: '☁️', rating: 4.8, installs: '50K+', description: 'Orchestration CRM leader mondial', features: ['Lead Management', 'Pipeline Automation', 'Custom Objects'], pricing: 'Freemium' },
    { id: 2, name: 'HubSpot', category: 'crm', icon: '🎯', rating: 4.7, installs: '35K+', description: 'Orchestration marketing automation', features: ['Email Marketing', 'Contact Management', 'Sales Pipeline'], pricing: 'Gratuit' },
    { id: 3, name: 'Shopify', category: 'ecommerce', icon: '🛍️', rating: 4.9, installs: '100K+', description: 'Orchestration e-commerce complète', features: ['Store Management', 'Inventory Sync', 'Order Processing'], pricing: 'Payant' },
    { id: 4, name: 'Stripe', category: 'finance', icon: '💳', rating: 4.8, installs: '75K+', description: 'Orchestration paiements en ligne', features: ['Payment Processing', 'Subscription Management', 'Fraud Detection'], pricing: 'Commission' },
    { id: 5, name: 'Slack', category: 'productivity', icon: '💬', rating: 4.6, installs: '80K+', description: 'Orchestration communication équipe', features: ['Team Chat', 'File Sharing', 'App Integrations'], pricing: 'Freemium' },
    { id: 6, name: 'Google Analytics', category: 'analytics', icon: '📊', rating: 4.5, installs: '90K+', description: 'Orchestration analytics web', features: ['Web Analytics', 'Real-time Data', 'Custom Reports'], pricing: 'Gratuit' }
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-light text-white mb-4">
          Marketplace <span className="text-cyan-400">Intégrations</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Connectez vos outils pour une orchestration optimale
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher une intégration..."
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
          />
          <SearchIcon className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration) => (
          <div key={integration.id} className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center text-2xl">
                  {integration.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{integration.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-400 text-sm">{integration.rating}</span>
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
            
            <p className="text-gray-300 text-sm mb-4">{integration.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {integration.features.map((feature, index) => (
                <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs">
                  {feature}
                </span>
              ))}
            </div>
            
            <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium">
              Orchestrer avec cet outil
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Keep WorkflowBuilder, AnalyticsDashboard, EnhancedChat, and Footer components from previous implementation
// but update them for SaaS context

export const WorkflowBuilder = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-light text-white mb-4">
          Builder <span className="text-cyan-400">Workflows</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Créez des orchestrations complexes avec l'IA
        </p>
      </div>
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
        <p className="text-gray-400">Interface de construction de workflows à venir...</p>
      </div>
    </div>
  );
};

export const AnalyticsDashboard = () => {
  const metrics = [
    { label: 'Orchestrations', value: '2,847', change: '+23%', color: 'cyan' },
    { label: 'Taux de réussite', value: '96.2%', change: '+4.1%', color: 'green' },
    { label: 'Temps économisé', value: '1,240h', change: '+67%', color: 'blue' },
    { label: 'Intégrations actives', value: '28', change: '+12', color: 'purple' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-light text-white mb-4">
          Dashboard <span className="text-cyan-400">Analytics</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Suivez les performances de vos orchestrations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-gray-900 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm">{metric.label}</span>
              <span className="text-green-400 text-sm">{metric.change}</span>
            </div>
            <div className="text-3xl font-light text-white">{metric.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
        <h3 className="text-white font-semibold text-xl mb-4">Orchestrations récentes</h3>
        <div className="space-y-4">
          {[
            { name: 'Analyse CRM Salesforce', status: 'Terminé', time: '2h' },
            { name: 'Campagne Mailchimp', status: 'En cours', time: '45min' },
            { name: 'Sync Google Analytics', status: 'Planifié', time: '1h' }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <span className="text-gray-300">{item.name}</span>
              <div className="flex items-center space-x-4">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  item.status === 'Terminé' ? 'bg-green-500/20 text-green-400' :
                  item.status === 'En cours' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {item.status}
                </span>
                <span className="text-gray-400 text-sm">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const EnhancedChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 0,
      type: 'ai',
      content: "Bonjour ! Je suis Nexus, votre orchestrateur IA. Je peux analyser vos besoins et orchestrer automatiquement une série de tâches complexes. Que voulez-vous accomplir aujourd'hui ?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

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

    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: `Je comprends votre demande : "${message}". Je vais orchestrer les tâches nécessaires pour vous aider. Voulez-vous que je commence l'orchestration ?`,
        timestamp: new Date()
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
          Conversez avec Nexus pour orchestrer vos tâches
        </p>
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-xl h-96 flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
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
                    <span className="text-xs text-gray-400">Nexus IA</span>
                  </div>
                )}
                <p className="text-sm">{message.content}</p>
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
                <span className="text-gray-400 text-sm">Nexus analyse...</span>
              </div>
            </div>
          )}
        </div>

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
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

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
              Orchestrateur IA pour automatiser vos tâches complexes avec intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Produit</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Orchestration</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Intégrations</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">API</a></li>
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
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 BotIntegrate. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};