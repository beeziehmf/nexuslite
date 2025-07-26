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

const CogIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ConnectIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ExclamationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
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

const TrendingDownIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
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

// Enhanced Header Component with React Icons
export const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: HomeIcon },
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
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 animate-slideDown">
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

// Enhanced Analytics Dashboard with Task Orchestration Focus
export const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('tasks');

  const metrics = [
    { 
      id: 'tasks', 
      label: 'Tâches orchestrées', 
      value: '15,234', 
      change: '+28%', 
      color: 'cyan',
      icon: TaskIcon,
      description: 'Tâches complexes automatisées'
    },
    { 
      id: 'success', 
      label: 'Taux de réussite', 
      value: '97.8%', 
      change: '+2.1%', 
      color: 'green',
      icon: CheckIcon,
      description: 'Tâches terminées avec succès'
    },
    { 
      id: 'efficiency', 
      label: 'Efficacité IA', 
      value: '89.2%', 
      change: '+12%', 
      color: 'blue',
      icon: TrendingUpIcon,
      description: 'Optimisation des processus'
    },
    { 
      id: 'time', 
      label: 'Temps économisé', 
      value: '1,247h', 
      change: '+67%', 
      color: 'purple',
      icon: ClockIcon,
      description: 'Heures automatisées ce mois'
    }
  ];

  const runningTasks = [
    {
      id: 1,
      name: 'Analyse de données clients',
      progress: 78,
      status: 'running',
      subtasks: ['Extraction CRM', 'Nettoyage données', 'Analyse patterns'],
      estimatedTime: '12 min'
    },
    {
      id: 2,
      name: 'Campagne marketing automatisée',
      progress: 45,
      status: 'running',
      subtasks: ['Segmentation audience', 'Création contenu', 'Planification envoi'],
      estimatedTime: '25 min'
    },
    {
      id: 3,
      name: 'Synchronisation multi-plateforme',
      progress: 92,
      status: 'completing',
      subtasks: ['Salesforce → HubSpot', 'Slack notifications', 'Rapport final'],
      estimatedTime: '3 min'
    }
  ];

  const aiInsights = [
    {
      type: 'optimization',
      title: 'Optimisation détectée',
      message: 'Votre workflow CRM peut être optimisé de 23% en parallélisant les tâches de validation',
      impact: 'high',
      action: 'Appliquer l\'optimisation'
    },
    {
      type: 'warning',
      title: 'Limite API approchée',
      message: 'L\'intégration Salesforce approche 80% de sa limite quotidienne',
      impact: 'medium',
      action: 'Configurer alternative'
    },
    {
      type: 'success',
      title: 'Nouveau record d\'efficacité',
      message: 'Vos automatisations ont économisé 47h cette semaine (+35% vs semaine précédente)',
      impact: 'low',
      action: 'Voir détails'
    }
  ];

  const MetricCard = ({ metric }) => {
    const IconComponent = metric.icon;
    const isPositive = metric.change.startsWith('+');
    
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 bg-${metric.color}-500/20 rounded-lg flex items-center justify-center`}>
              <IconComponent className={`text-${metric.color}-400`} />
            </div>
            <div>
              <span className="text-gray-400 text-sm">{metric.label}</span>
              <p className="text-gray-500 text-xs">{metric.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            {isPositive ? (
              <TrendingUpIcon className="w-4 h-4 text-green-400" />
            ) : (
              <TrendingDownIcon className="w-4 h-4 text-red-400" />
            )}
            <span className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {metric.change}
            </span>
          </div>
        </div>
        <div className="text-3xl font-light text-white">{metric.value}</div>
      </div>
    );
  };

  const TaskProgressCard = ({ task }) => {
    const statusColors = {
      running: 'blue',
      completing: 'green',
      pending: 'yellow'
    };

    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-cyan-400 transition-all duration-200">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium">{task.name}</h4>
          <div className="flex items-center space-x-2">
            <ClockIcon className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 text-sm">{task.estimatedTime}</span>
          </div>
        </div>
        
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-gray-400 text-sm">Progression</span>
            <span className="text-cyan-400 text-sm">{task.progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className={`bg-gradient-to-r from-${statusColors[task.status]}-500 to-${statusColors[task.status]}-600 h-2 rounded-full transition-all duration-300`}
              style={{ width: `${task.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-1">
          {task.subtasks.map((subtask, index) => (
            <div key={index} className="flex items-center space-x-2">
              {index < Math.floor(task.progress / 33) ? (
                <CheckIcon className="w-4 h-4 text-green-400" />
              ) : index === Math.floor(task.progress / 33) ? (
                <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <div className="w-4 h-4 border border-gray-600 rounded-full"></div>
              )}
              <span className={`text-sm ${
                index < Math.floor(task.progress / 33) ? 'text-green-400' : 
                index === Math.floor(task.progress / 33) ? 'text-cyan-400' : 'text-gray-400'
              }`}>
                {subtask}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const InsightCard = ({ insight }) => {
    const impactColors = {
      high: 'red',
      medium: 'yellow',
      low: 'green'
    };

    const typeIcons = {
      optimization: TrendingUpIcon,
      warning: ExclamationIcon,
      success: CheckIcon
    };

    const IconComponent = typeIcons[insight.type];

    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-cyan-400 transition-all duration-200">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 bg-${impactColors[insight.impact]}-500/20 rounded-lg flex items-center justify-center`}>
              <IconComponent className={`w-4 h-4 text-${impactColors[insight.impact]}-400`} />
            </div>
            <div>
              <h4 className="text-white font-medium text-sm">{insight.title}</h4>
              <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-${impactColors[insight.impact]}-500/20 text-${impactColors[insight.impact]}-400`}>
                {insight.impact}
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-3">{insight.message}</p>
        <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-sm font-medium">
          {insight.action}
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-light text-white mb-4">
            Dashboard <span className="text-cyan-400">Analytics</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Nexus orchestre vos tâches complexes avec intelligence artificielle
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

      {/* Running Tasks */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white font-semibold text-xl flex items-center space-x-3">
            <TaskIcon className="text-cyan-400" />
            <span>Tâches en cours d'exécution</span>
          </h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm">Nexus actif</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {runningTasks.map((task) => (
            <TaskProgressCard key={task.id} task={task} />
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
        <h3 className="text-white font-semibold text-xl mb-6 flex items-center space-x-3">
          <TrendingUpIcon className="text-cyan-400" />
          <span>Insights IA</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiInsights.map((insight, index) => (
            <InsightCard key={index} insight={insight} />
          ))}
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
        <h3 className="text-white font-semibold text-xl mb-6">Performance des tâches</h3>
        <div className="h-64 flex items-end justify-between space-x-2">
          {[85, 92, 78, 96, 88, 94, 91, 89, 97, 93, 90, 95, 87, 91].map((height, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="bg-gradient-to-t from-cyan-500 to-blue-600 rounded-t-lg w-full transition-all duration-300 hover:from-cyan-400 hover:to-blue-500"
                style={{ height: `${height}%` }}
              ></div>
              <span className="text-gray-400 text-xs mt-2">{index + 1}j</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Enhanced Chat IA Component
export const EnhancedChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 0,
      type: 'ai',
      content: "Bonjour ! Je suis Nexus, votre orchestrateur de tâches IA. Je peux analyser vos besoins et orchestrer automatiquement une série de tâches complexes en sélectionnant les meilleurs outils et processus. Décrivez-moi ce que vous voulez accomplir !",
      timestamp: new Date(),
      capabilities: [
        "Analyser des données complexes",
        "Automatiser des workflows multi-étapes",
        "Orchestrer plusieurs intégrations",
        "Optimiser les processus métier"
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCapabilities, setShowCapabilities] = useState(true);
  const messagesEndRef = useRef(null);

  const taskTemplates = [
    {
      name: "Analyse complète client",
      description: "Extraire, analyser et créer un rapport client complet",
      tasks: ["Extraction CRM", "Analyse comportementale", "Génération insights", "Rapport automatique"]
    },
    {
      name: "Campagne marketing optimisée",
      description: "Créer et lancer une campagne marketing cross-canal",
      tasks: ["Segmentation audience", "Création contenu", "A/B testing", "Déploiement multi-canal"]
    },
    {
      name: "Synchronisation système",
      description: "Synchroniser données entre tous vos outils",
      tasks: ["Mapping données", "Transformation", "Validation", "Synchronisation"]
    }
  ];

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
    setShowCapabilities(false);

    // Simulate AI response with task orchestration
    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('client') || lowerMessage.includes('crm')) {
      return {
        id: Date.now() + 1,
        type: 'ai',
        content: "Je vais orchestrer une analyse complète de vos données clients. Nexus va automatiquement :",
        timestamp: new Date(),
        orchestration: {
          title: "Analyse Client Orchestrée",
          tasks: [
            { name: "Extraction données CRM", status: "completed", tool: "Salesforce API" },
            { name: "Nettoyage et validation", status: "running", tool: "Python Scripts" },
            { name: "Analyse comportementale", status: "pending", tool: "ML Models" },
            { name: "Génération insights", status: "pending", tool: "GPT-4" },
            { name: "Création rapport", status: "pending", tool: "PowerBI" }
          ],
          estimatedTime: "15 minutes"
        },
        suggestions: [
          "Ajouter une segmentation RFM",
          "Inclure une prédiction de churn",
          "Créer un dashboard temps réel"
        ]
      };
    } else if (lowerMessage.includes('marketing') || lowerMessage.includes('campagne')) {
      return {
        id: Date.now() + 1,
        type: 'ai',
        content: "Je vais créer et orchestrer une campagne marketing optimisée. Nexus va coordonner :",
        timestamp: new Date(),
        orchestration: {
          title: "Campagne Marketing Orchestrée",
          tasks: [
            { name: "Analyse audience cible", status: "completed", tool: "Google Analytics" },
            { name: "Création contenu personnalisé", status: "running", tool: "OpenAI GPT-4" },
            { name: "Design visuel automatique", status: "pending", tool: "Midjourney API" },
            { name: "A/B testing setup", status: "pending", tool: "Mailchimp" },
            { name: "Déploiement multi-canal", status: "pending", tool: "Zapier" }
          ],
          estimatedTime: "45 minutes"
        },
        suggestions: [
          "Ajouter retargeting Facebook",
          "Inclure SMS marketing",
          "Configurer lead scoring"
        ]
      };
    } else {
      return {
        id: Date.now() + 1,
        type: 'ai',
        content: "Je comprends votre demande. Nexus peut orchestrer automatiquement une séquence de tâches optimisées pour atteindre votre objectif. Précisez-moi votre besoin et je vais sélectionner les meilleurs outils et processus.",
        timestamp: new Date(),
        suggestions: [
          "Automatiser un processus métier",
          "Analyser des données complexes",
          "Synchroniser mes systèmes",
          "Optimiser mes workflows"
        ]
      };
    }
  };

  const OrchestrationView = ({ orchestration }) => (
    <div className="mt-4 bg-gray-800 border border-gray-700 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-cyan-400 font-medium">{orchestration.title}</h4>
        <div className="flex items-center space-x-2">
          <ClockIcon className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400 text-sm">{orchestration.estimatedTime}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {orchestration.tasks.map((task, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              {task.status === 'completed' ? (
                <CheckIcon className="w-5 h-5 text-green-400" />
              ) : task.status === 'running' ? (
                <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <div className="w-5 h-5 border border-gray-500 rounded-full"></div>
              )}
              <div>
                <span className={`text-sm font-medium ${
                  task.status === 'completed' ? 'text-green-400' : 
                  task.status === 'running' ? 'text-cyan-400' : 'text-gray-400'
                }`}>
                  {task.name}
                </span>
                <p className="text-xs text-gray-500">{task.tool}</p>
              </div>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              task.status === 'completed' ? 'bg-green-500/20 text-green-400' :
              task.status === 'running' ? 'bg-cyan-500/20 text-cyan-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {task.status === 'completed' ? 'Terminé' : 
               task.status === 'running' ? 'En cours' : 'En attente'}
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-sm font-medium">
        Lancer l'orchestration
      </button>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-light text-white mb-4">
          Nexus <span className="text-cyan-400">IA</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Orchestrateur intelligent de tâches complexes
        </p>
      </div>

      {/* Quick Task Templates */}
      {showCapabilities && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {taskTemplates.map((template, index) => (
            <button
              key={index}
              onClick={() => handleSend(`Je veux ${template.description.toLowerCase()}`)}
              className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:border-cyan-400 transition-all duration-200 text-left"
            >
              <h3 className="text-white font-medium mb-2">{template.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{template.description}</p>
              <div className="space-y-1">
                {template.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-500 text-xs">{task}</span>
                  </div>
                ))}
              </div>
            </button>
          ))}
        </div>
      )}

      <div className="bg-gray-900 border border-gray-700 rounded-xl h-96 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg px-4 py-2'
                  : 'bg-gray-800 text-gray-300 rounded-lg px-4 py-2'
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
                
                {message.orchestration && (
                  <OrchestrationView orchestration={message.orchestration} />
                )}
                
                {message.capabilities && (
                  <div className="mt-3 space-y-1">
                    <p className="text-xs text-gray-400 font-medium">Capacités principales :</p>
                    {message.capabilities.map((capability, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckIcon className="w-3 h-3 text-cyan-400" />
                        <span className="text-xs text-gray-400">{capability}</span>
                      </div>
                    ))}
                  </div>
                )}
                
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
                <span className="text-gray-400 text-sm">Nexus orchestre votre demande...</span>
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
              placeholder="Décrivez la tâche complexe que vous voulez orchestrer..."
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

// Keep other components unchanged but use React icons
export const SearchBar = ({ onSearch, query, setQuery, isLoading }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const quickCommands = [
    { command: '/orchestrer', description: 'Lancer une orchestration de tâches' },
    { command: '/analyser', description: 'Analyser des données complexes' },
    { command: '/automatiser', description: 'Automatiser un processus' },
    { command: '/optimiser', description: 'Optimiser un workflow existant' }
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
                placeholder="Décrivez la tâche complexe que Nexus doit orchestrer..."
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
                <MicIcon />
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

// Update Home component to use React icons
export const Home = ({ onSearch, query, setQuery, isLoading, response }) => {
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

  const integrationCategories = [
    { name: 'CRM', icon: DatabaseIcon, description: 'Salesforce, HubSpot, Pipedrive' },
    { name: 'E-commerce', icon: MarketplaceIcon, description: 'Shopify, WooCommerce, Magento' },
    { name: 'Marketing', icon: TrendingUpIcon, description: 'Mailchimp, Google Ads, Facebook' },
    { name: 'Finance', icon: ServerIcon, description: 'QuickBooks, Stripe, PayPal' },
    { name: 'Productivité', icon: TaskIcon, description: 'Slack, Notion, Trello' },
    { name: 'Analytics', icon: AnalyticsIcon, description: 'Google Analytics, Mixpanel' }
  ];

  const handleCategoryClick = (category) => {
    const categoryQueries = {
      'CRM': 'Orchestrer une analyse complète de mes données CRM',
      'E-commerce': 'Automatiser tous mes processus e-commerce',
      'Marketing': 'Créer et lancer une campagne marketing optimisée',
      'Finance': 'Automatiser ma gestion financière et comptable',
      'Productivité': 'Optimiser tous mes workflows de productivité',
      'Analytics': 'Analyser et créer des insights de toutes mes données'
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
              Orchestrez vos tâches avec
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">
                l'intelligence artificielle
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed animate-fadeInUp animation-delay-200">
              Nexus analyse vos besoins et orchestre automatiquement une série de tâches complexes 
              en sélectionnant les meilleurs outils et processus pour atteindre vos objectifs.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fadeInUp animation-delay-400">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">Orchestration intelligente</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">Sélection automatique d'outils</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">Exécution optimisée</span>
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
            {integrationCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className="group p-4 bg-gray-900 border border-gray-700 rounded-xl hover:border-cyan-400 hover:bg-gray-800 transition-all duration-200 text-left hover-lift"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <IconComponent className="w-6 h-6 text-cyan-400" />
                    <span className="text-white font-medium">{category.name}</span>
                  </div>
                  <p className="text-gray-400 text-sm font-light">{category.description}</p>
                </button>
              );
            })}
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

// Marketplace Component (keep existing)
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
    { id: 6, name: 'Google Analytics', category: 'analytics', icon: '📊', rating: 4.5, installs: '90K+', description: 'Analytics web complet avec insights avancés', features: ['Web Analytics', 'Real-time Data', 'Custom Reports', 'Goal Tracking'], pricing: 'Gratuit' }
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
              <StarIcon className="w-4 h-4 text-yellow-400" />
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
          <IntegrationCard key={integration.id} integration={integration} />
        ))}
      </div>

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
                      <StarIcon className="w-4 h-4 text-yellow-400" />
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
                  <CloseIcon />
                </button>
              </div>

              <p className="text-gray-300 mb-6">{selectedIntegration.description}</p>

              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">Fonctionnalités</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedIntegration.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg">
                      <CheckIcon className="w-4 h-4 text-cyan-400" />
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

// WorkflowBuilder Component (keep existing)
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
          <CloseIcon />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
              <span className="text-gray-400">Nexus orchestre vos tâches...</span>
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
                  <h4 className="text-cyan-400 font-medium mb-4">Intégrations sélectionnées</h4>
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
              Orchestrateur IA pour automatiser vos tâches complexes avec plus de 200 intégrations.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Produit</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Orchestration</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Intégrations</a></li>
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