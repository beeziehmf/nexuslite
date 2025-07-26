import React, { useState } from 'react';

// Header Component
export const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Perplexity
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
              Finance
            </a>
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
              Travel
            </a>
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
              Shopping
            </a>
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
              Academic
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'} transition-colors`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
              Library
            </a>
            <button className={`px-4 py-2 rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'} transition-colors`}>
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className={`block px-3 py-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}>
                Finance
              </a>
              <a href="#" className={`block px-3 py-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}>
                Travel
              </a>
              <a href="#" className={`block px-3 py-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}>
                Shopping
              </a>
              <a href="#" className={`block px-3 py-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}>
                Academic
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Search Bar Component
export const SearchBar = ({ darkMode, onSearch, query, setQuery }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className={`relative rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border-2 ${isFocused ? 'border-blue-500' : darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg transition-all duration-200`}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Ask anything..."
            className={`w-full px-6 py-4 text-lg rounded-xl ${darkMode ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'} border-none outline-none`}
          />
          <button
            type="submit"
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

// Category Buttons Component
export const CategoryButtons = ({ darkMode, onCategoryClick }) => {
  const categories = [
    { name: 'Parenting', icon: '👶' },
    { name: 'Health', icon: '🏥' },
    { name: 'Analyze', icon: '📊' },
    { name: 'Local', icon: '📍' },
    { name: 'Sports', icon: '⚽' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => onCategoryClick(category.name)}
          className={`px-4 py-2 rounded-full border ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'} transition-all duration-200 flex items-center space-x-2`}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

// AI Response Component
export const AIResponse = ({ darkMode, response }) => {
  if (!response) return null;

  return (
    <div className={`w-full max-w-4xl mx-auto mt-8 p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="space-y-4">
        <div className="flex items-center space-x-2 mb-4">
          <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-blue-600'} flex items-center justify-center`}>
            <span className="text-white text-sm font-bold">AI</span>
          </div>
          <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Perplexity</span>
        </div>
        
        <div className={`prose ${darkMode ? 'prose-invert' : 'prose-gray'} max-w-none`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            {response.answer}
          </p>
        </div>

        {/* Sources */}
        {response.sources && response.sources.length > 0 && (
          <div className="mt-6">
            <h4 className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Sources</h4>
            <div className="flex flex-wrap gap-2">
              {response.sources.map((source, index) => (
                <a
                  key={index}
                  href={source.url}
                  className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
                >
                  {source.title}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Follow-up Questions */}
        {response.followUpQuestions && response.followUpQuestions.length > 0 && (
          <div className="mt-6">
            <h4 className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Follow-up Questions</h4>
            <div className="space-y-2">
              {response.followUpQuestions.map((question, index) => (
                <button
                  key={index}
                  className={`block w-full text-left p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'} transition-colors`}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Footer Component
export const Footer = ({ darkMode }) => {
  return (
    <footer className={`mt-20 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
              Home
            </a>
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
              Discover
            </a>
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
              Spaces
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              © 2025 Perplexity Clone. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Hero Section Component
export const HeroSection = ({ darkMode }) => {
  return (
    <div className="text-center mb-12">
      <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Where knowledge begins
      </h1>
      <p className={`text-lg md:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
        Ask anything and get trusted, real-time answers powered by AI and backed by citations.
      </p>
    </div>
  );
};