import React from 'react';
import { Wind, Shield, ZapOff, Truck } from 'lucide-react';

export const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: <ZapOff className="w-7 h-7 text-emerald-600" />,
      title: "100% Zero Operating Cost",
      description: "Operates completely on ambient wind currents and thermal siphon buoyancy. Zero electricity bills, zero motor burnout risk, 100% pure green energy."
    },
    {
      icon: <Shield className="w-7 h-7 text-emerald-600" />,
      title: "Hindalco Aluminium & SS 304",
      description: "Manufactured with aerospace-grade Hindalco 8011 aluminium curved vanes, SS 304 top cowl, and dual precision HCH sealed ball bearings for 15+ years lifespan."
    },
    {
      icon: <Wind className="w-7 h-7 text-emerald-600" />,
      title: "24/7 Silent Air Exhaust",
      description: "Non-stop extraction of trapped process heat, humidity, welding smoke, chemical fumes, and airborne dust without generating any acoustic noise."
    },
    {
      icon: <Truck className="w-7 h-7 text-emerald-600" />,
      title: "Pan-India Delivery & Base Plates",
      description: "Custom-profiled FRP & Polycarbonate base plates matching all roofing brands (Tata Bluescope, Kirby, Asbestos, PEB) with ready-stock dispatch."
    }
  ];

  return (
    <section className="py-12 bg-white relative -mt-8 z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(feature.icon, {
                  className: "w-7 h-7 text-emerald-600 group-hover:text-white transition-colors"
                })}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
