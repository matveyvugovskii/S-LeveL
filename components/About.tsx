
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const points = [
    'Досвідчені майстри (понад 10 років)',
    'Якісні європейські матеріали',
    'Акуратний монтаж без пилу',
    'Рейтинг 5.0 (на основі 76 відгуків)',
    'Повний цикл робіт "під ключ"'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
                alt="Професійний монтаж" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-3xl hidden md:block shadow-xl">
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-sm uppercase tracking-wider font-semibold opacity-80">Років досвіду</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Ваш комфорт починається з <span className="text-blue-600">S LeveL</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ми спеціалізуємося на створенні сучасних стельових рішень, які не лише прикрашають інтер’єр, а й забезпечують його довговічність. Наша команда об’єднує професіоналізм, швидкість та увагу до деталей.
            </p>
            
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">
                    {point.includes('Рейтинг') ? (
                      <a 
                        href="https://www.google.com/maps/place/S+LeveL+--+%D0%BD%D0%B0%D1%82%D1%8F%D0%B6%D0%BD%D1%8B%D0%B5+%D0%BF%D0%BE%D1%82%D0%BE%D0%BB%D0%BA%D0%B8/@50.4188585,30.5575935,12.74z/data=!4m10!1m2!2m1!1z0L3QsNGC0Y_QttC90ZYg0YHRgtC10LvRlg!3m6!1s0x40d4c5e03a1e555b:0xbcfef29c0dc6fb7f!8m2!3d50.4180038!4d30.6253901!15sChnQvdCw0YLRj9C20L3RliDRgdGC0LXQu9GWkgEcZmluaXNoaW5nX21hdGVyaWFsc19zdXBwbGllcuABAA!16s%2Fg%2F11h4g81r8s?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        {point}
                      </a>
                    ) : point}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <a 
                href="#services" 
                className="inline-flex items-center text-blue-600 font-bold hover:underline"
              >
                Дізнатися більше про послуги →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
