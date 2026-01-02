import { useState, useEffect } from 'react';
import { 
  Button, 
  Card, 
  Input, 
  Badge, 
  Divider, 
  Container, 
  Stack, 
  Text,
  IconButton 
} from './components/DesignSystem';
import { OverviewPage, ComponentsPage, TokensPage, ResourcesPage } from './components/Pages';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreedToTerms: false
  });

  // Hide splash screen after animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Listen for scroll to show/hide scroll to top button and update navbar
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for navigation events from pages
  useEffect(() => {
    const handleNavigate = (e) => {
      setActiveTab(e.detail.page);
    };
    window.addEventListener('navigate', handleNavigate);
    return () => window.removeEventListener('navigate', handleNavigate);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Account created successfully!');
  };

  const handleFormReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      agreedToTerms: false
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Splash Screen */}
      {showSplash && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center animate-fade-out">
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
              <span className="text-black text-5xl font-bold">N</span>
            </div>
            <Text variant="h1" className="!mb-2 animate-fade-in">Nona</Text>
            <Text variant="body" className="text-neutral-400 animate-fade-in">Digital Product Interface</Text>
            <div className="mt-8 flex justify-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-black/80 backdrop-blur-xl transition-all duration-300">
        <Container>
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => setActiveTab('overview')}
              className="flex items-center space-x-3 hover:opacity-80 transition-all duration-500 hover:scale-105"
            >
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center transition-all duration-500 hover:rounded-xl">
                <span className="text-black text-sm font-semibold">N</span>
              </div>
              <Text variant="h4" className="!mb-0 text-white">Nona</Text>
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {['Overview', 'Components', 'Tokens', 'Resources'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveTab(item.toLowerCase());
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-md
                    transition-all duration-500 ease-out
                    hover:scale-105 hover:-translate-y-0.5
                    ${activeTab === item.toLowerCase()
                      ? 'bg-neutral-900 text-white shadow-lg'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center space-x-2">
              {/* Desktop Icons */}
              <div className="hidden md:flex items-center space-x-2">
                <IconButton 
                  variant="ghost" 
                  size="md"
                  onClick={() => {
                    setShowSearch(!showSearch);
                    alert('Search functionality coming soon!');
                  }}
                  aria-label="Search"
                  className="text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all duration-500 hover:scale-110 hover:rotate-12"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </IconButton>
                <IconButton 
                  variant="ghost" 
                  size="md"
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    alert('You have no new notifications');
                  }}
                  aria-label="Notifications"
                  className="text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all duration-500 hover:scale-110 hover:-rotate-12"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </IconButton>
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-all duration-500 hover:scale-110"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6 transition-transform duration-500 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 transition-transform duration-500 hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-neutral-800 animate-fade-in">
              <nav className="flex flex-col space-y-1">
                {['Overview', 'Components', 'Tokens', 'Resources'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveTab(item.toLowerCase());
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`
                      px-4 py-3 text-left text-sm font-medium rounded-md
                      transition-all duration-500 ease-out
                      hover:translate-x-2
                      ${activeTab === item.toLowerCase()
                        ? 'bg-neutral-900 text-white shadow-lg'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </nav>
              <div className="flex items-center space-x-2 mt-4 px-4">
                <IconButton 
                  variant="ghost" 
                  size="md"
                  onClick={() => {
                    setShowSearch(!showSearch);
                    alert('Search functionality coming soon!');
                  }}
                  aria-label="Search"
                  className="text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all duration-500 hover:scale-110 hover:rotate-12"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </IconButton>
                <IconButton 
                  variant="ghost" 
                  size="md"
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    alert('You have no new notifications');
                  }}
                  aria-label="Notifications"
                  className="text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all duration-500 hover:scale-110 hover:-rotate-12"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </IconButton>
              </div>
            </div>
          )}
        </Container>
      </header>

      {/* Main Content - Page Router */}
      <main className="min-h-[calc(100vh-4rem)] pt-16">
        {activeTab === 'overview' && <OverviewPage />}
        {activeTab === 'components' && <ComponentsPage />}
        {activeTab === 'tokens' && <TokensPage />}
        {activeTab === 'resources' && <ResourcesPage />}
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full shadow-lg hover:bg-neutral-200 transition-all duration-500 flex items-center justify-center z-50 hover:scale-110 hover:-translate-y-1 animate-fade-in"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-black mt-16">
        <Container>
          <div className="py-8 flex flex-col md:flex-row items-center justify-between">
            <Text variant="small" className="!text-neutral-500">
              © 2026 Nona. Built with confidence.
            </Text>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('resources'); }} className="text-sm text-neutral-400 hover:text-white transition-colors">
                Documentation
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('components'); }} className="text-sm text-neutral-400 hover:text-white transition-colors">
                Components
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); window.open('https://github.com', '_blank'); }} className="text-sm text-neutral-400 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;

