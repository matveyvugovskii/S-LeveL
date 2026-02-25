
import React from 'react';
import { ShieldCheck, Clock, Zap, Award, Droplets } from 'lucide-react';

/* 
 * Data constants for the S LeveL landing page.
 */

export const SERVICES = [
  {
    id: 1,
    title: 'Матові стелі',
    description: 'Класичний варіант, що імітує ідеально пофарбовану поверхню без відблисків. Підійде для будь-якого інтер\'єру.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Тіньовий профіль',
    description: 'Створює ефект "літаючої" стелі з чітким темним примиканням до стіни. Сучасний тренд в дизайні.',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'LED-підсвітка',
    description: 'Світлові лінії, парящі профілі або контурне освітлення. Додає глибини та настрою вашому приміщенню.',
    imageUrl: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Глянцеві стелі',
    description: 'Мають дзеркальний ефект, що візуально розширює простір. Ідеально для ванних кімнат та коридорів.',
    imageUrl: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Дворівневі конструкції',
    description: 'Дозволяють зонувати простір та комбінувати різні кольори та фактури полотен.',
    imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'Тканинні стелі',
    description: 'Екологічне дихаюче покриття преміум-класу. Можливість монтажу без нагріву приміщення.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000'
  }
];

export const PORTFOLIO = [
  {
    id: 1,
    title: '',
    imageUrl: '/portfolio/1.jpg'
  },
  {
    id: 2,
    title: '',
    imageUrl: '/portfolio/2.jpg'
  },
  {
    id: 3,
    title: '',
    imageUrl: '/portfolio/3.jpg'
  },
  {
    id: 4,
    title: '',
    imageUrl: '/portfolio/4.jpg'
  },
  {
    id: 5,
    title: '',
    imageUrl: '/portfolio/5.jpg'
  },
  {
    id: 6,
    title: '',
    imageUrl: '/portfolio/6.jpg'
  }
];

export const BENEFITS = [
  {
    icon: <ShieldCheck size={32} className="text-blue-600" />,
    title: 'Гарантія 12 років',
    desc: 'Ми впевнені у якості полотна та наших монтажних робіт.'
  },
  {
    icon: <Clock size={32} className="text-blue-600" />,
    title: 'Монтаж за 1 день',
    desc: 'Швидко та якісно. Зазвичай встановлення займає кілька годин.'
  },
  {
    icon: <Zap size={32} className="text-blue-600" />,
    title: 'Чистий монтаж',
    desc: 'Використовуємо перфоратори з пилососами для максимальної чистоти.'
  },
  {
    icon: <Award size={32} className="text-blue-600" />,
    title: 'Преміум матеріали',
    desc: 'Виключно сертифіковані MSD, Teqtum та Descor.'
  },
  {
    icon: <Droplets size={32} className="text-blue-600" />,
    title: 'Захист від води',
    desc: 'Стелі витримують до 100л води на м2 у разі затоплення.'
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Олександр Коваленко',
    rating: 5,
    text: 'Дуже задоволений роботою! Майстри приїхали вчасно, все зробили швидко і головне – чисто. Тіньовий профіль виглядає неймовірно.',
    date: '15.04.2024'
  },
  {
    id: 2,
    name: 'Марина Соколова',
    rating: 5,
    text: 'Замовляла стелю у дитячу з підсвіткою. Дитина в захваті, а я вдячна за професійну консультацію та якісне виконання.',
    date: '02.05.2024'
  },
  {
    id: 3,
    name: 'Сергій Петренко',
    rating: 5,
    text: 'Це вже третя квартира, де S LeveL робить стелі. Стабільно висока якість та адекватні ціни. Рекомендую всім знайомим.',
    date: '20.05.2024'
  }
];
