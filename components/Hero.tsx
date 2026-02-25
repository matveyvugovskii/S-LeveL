
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=1920")' }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white mt-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 animate-in slide-in-from-bottom-8 duration-700">
            Натяжні стелі <br />
            <span className="text-blue-400">преміум-якості</span> у Києві
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-xl animate-in slide-in-from-bottom-10 duration-700 delay-150">
            Ідеально рівна стеля. Стильний інтер’єр. Гарантія якості від професіоналів S LeveL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-12 duration-700 delay-300">
            <a 
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-center transition-all transform hover:scale-105"
            >
              Отримати безкоштовний замір
            </a>
            <a 
              href="tel:0986681181"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-center transition-all"
            >
              Подзвонити зараз
            </a>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-bounce">
         <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-500 text-white p-2 rounded-lg font-bold">5.0</div>
              <div>
                <p className="text-sm font-bold text-white">Google Рейтинг</p>
                <p className="text-xs text-gray-300">76 відгуків клієнтів</p>
              </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Hero;
