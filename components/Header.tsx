
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Про нас', href: '#about' },
    { name: 'Послуги', href: '#services' },
    { name: 'Портфоліо', href: '#portfolio' },
    { name: 'Відгуки', href: '#reviews' },
    { name: 'Контакти', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            S <span className="text-blue-600">LeveL</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:0986681181"
            className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all ${
              isScrolled 
                ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-blue-600'
            }`}
          >
            <Phone size={16} />
            <span className="font-semibold text-sm">098 668 1181</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:0986681181"
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-xl font-bold"
            >
              <Phone size={18} />
              <span>Подзвонити зараз</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
