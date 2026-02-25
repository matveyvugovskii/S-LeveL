
import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Відгуки наших клієнтів</h2>
          <p className="text-gray-600">Ваша довіра – наша головна цінність.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-blue-100 relative">
              <Quote className="absolute top-6 right-6 text-blue-100" size={48} />
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-amber-500" size={18} />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-gray-900">{review.name}</span>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/maps/place/S+LeveL+--+%D0%BD%D0%B0%D1%82%D1%8F%D0%B6%D0%BD%D1%8B%D0%B5+%D0%BF%D0%BE%D1%82%D0%BE%D0%BB%D0%BA%D0%B8/@50.4188585,30.5575935,12.74z/data=!4m10!1m2!2m1!1z0L3QsNGC0Y_QttC90ZYg0YHRgtC10LvRlg!3m6!1s0x40d4c5e03a1e555b:0xbcfef29c0dc6fb7f!8m2!3d50.4180038!4d30.6253901!15sChnQvdCw0YLRj9C20L3RliDRgdGC0LXQu9GWkgEcZmluaXNoaW5nX21hdGVyaWFsc19zdXBwbGllcuABAA!16s%2Fg%2F11h4g81r8s?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-600 font-bold hover:text-blue-700"
          >
            <span>Дивитися всі відгуки на Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
