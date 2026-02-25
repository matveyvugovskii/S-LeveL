
import React from 'react';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-6">
              <span className="text-3xl font-bold tracking-tighter">
                S <span className="text-blue-500">LeveL</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Створюємо ідеальний простір з 2014 року. Преміальні натяжні стелі для вашого дому та бізнесу у Києві та області.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/slevel_potolok/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Навігація</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Про компанію</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Наші послуги</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Портфоліо</a></li>
              <li><a href="#reviews" className="hover:text-blue-400 transition-colors">Відгуки</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Послуги</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Тіньові стелі</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">LED-підсвітка</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Матові стелі</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Фотодрук</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Контакти</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>м. Київ, вул. Здолбунівська, 13</li>
              <li><a href="tel:0986681181" className="hover:text-white transition-colors">098 668 1181</a></li>
              <li>slevel@ceiling.kyiv.ua</li>
              <li>Пн-Сб: 09:00 - 20:00</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2024 S LeveL Stretch Ceilings. Усі права захищені.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
