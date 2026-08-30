import React from 'react';
import { Building } from 'lucide-react';

export const ClientLogos: React.FC = () => {
  const clientLogos = [
    { src: '/images/clients/c1.png', name: 'Client 1' },
    { src: '/images/clients/c2.png', name: 'Client 2' },
    { src: '/images/clients/c3.png', name: 'Client 3' },
    { src: '/images/clients/c4.png', name: 'Client 4' },
    { src: '/images/clients/c5.png', name: 'Client 5' },
    { src: '/images/clients/c6.png', name: 'Client 6' },
    { src: '/images/clients/c7.png', name: 'Client 7' },
    { src: '/images/clients/c8.png', name: 'Client 8' },
    { src: '/images/clients/c9.png', name: 'Client 9' },
    { src: '/images/clients/c10.png', name: 'Client 10' },
    { src: '/images/clients/c11.jpg', name: 'Client 11' },
    { src: '/images/clients/c12.jpg', name: 'Client 12' },
    { src: '/images/clients/c13.jpg', name: 'Client 13' },
    { src: '/images/clients/c14.jpg', name: 'Client 14' }
  ];

  return (
    <section className="py-14 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block mb-8">
          TRUSTED BY 1,000+ INDUSTRIAL ENTERPRISES & FACTORIES ACROSS INDIA
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 items-center justify-center">
          {clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="p-3 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-center hover:shadow-md hover:border-emerald-300 transition-all h-20"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
