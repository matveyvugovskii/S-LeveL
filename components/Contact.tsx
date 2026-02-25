
import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Контакти</h2>
              <p className="text-gray-600 mb-8">Завітайте до нас або зателефонуйте для отримання консультації.</p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Адреса</h4>
                    <p className="text-gray-600 text-sm">вулиця Здолбунівська, 13, Київ, 02081</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Телефон</h4>
                    <a href="tel:0986681181" className="text-blue-600 font-bold">098 668 1181</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Графік роботи</h4>
                    <p className="text-gray-600 text-sm">Пн-Сб: 09:00 - 20:00, Нд: Вихідний</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-80 rounded-3xl overflow-hidden border border-gray-100 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.23!2d30.62539!3d50.418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5e03a1e555b%3A0xbcfef29c0dc6fb7f!2zUyBMZXZlTCAtLSDQvdCw0YLRj9C20L3Ri9C1INC_0L7RgtC_0LvQutC4!5e0!3m2!1suk!2sua!4v1715800000000!5m2!1suk!2sua" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-8">Залишити заявку</h3>
            
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send size={40} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Дякуємо!</h4>
                <p className="text-gray-600">Ваша заявка успішно надіслана. Наш менеджер зв'яжеться з вами найближчим часом.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-blue-600 font-bold underline"
                >
                  Надіслати ще раз
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 px-1">Ім’я</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Як до вас звертатися?"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 px-1">Телефон</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+380"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 px-1">Тип стелі</label>
                  <select className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white appearance-none">
                    <option>Матова</option>
                    <option>Глянцева</option>
                    <option>Дворівнева</option>
                    <option>З LED-підсвіткою</option>
                    <option>Тіньовий профіль</option>
                    <option>Інше</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 px-1">Повідомлення</label>
                  <textarea 
                    rows={4}
                    placeholder="Додаткові деталі (площа, кількість точок світла тощо)"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={formStatus === 'sending'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {formStatus === 'sending' ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Замовити консультацію</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-center text-gray-400">Натискаючи кнопку, ви погоджуєтеся на обробку персональних даних</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
