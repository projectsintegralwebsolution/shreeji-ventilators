import React from 'react';
import { Flame, Factory, Warehouse, FlaskConical, Car, Package, Shirt, Building2 } from 'lucide-react';

export const IndustryApplications: React.FC = () => {
  const industries = [
    {
      icon: <Flame className="w-6 h-6 text-amber-600" />,
      name: "Boilers, Furnaces & DG Sheds",
      desc: "Evacuates intense heat blankets, engine radiator heat, and flue gases without electricity."
    },
    {
      icon: <Factory className="w-6 h-6 text-emerald-600" />,
      name: "Foundries & Forging Plants",
      desc: "Rapid extraction of heavy welding smoke, casting fumes, and molten metal heat."
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-blue-600" />,
      name: "Chemical & Pharma Units",
      desc: "Corrosion-resistant SS 304 vanes discharge volatile organic compounds and acidic vapors."
    },
    {
      icon: <Warehouse className="w-6 h-6 text-indigo-600" />,
      name: "Warehouses & Logistics Hubs",
      desc: "Prevents moisture condensation, protects corrugated carton packaging, and lowers ceiling heat."
    },
    {
      icon: <Car className="w-6 h-6 text-red-600" />,
      name: "Automotive & Heavy Engineering",
      desc: "Continuous cross-ventilation across large-span assembly lines and CNC machine shops."
    },
    {
      icon: <Shirt className="w-6 h-6 text-pink-600" />,
      name: "Textile & Dyeing Mills",
      desc: "Clears humid steam, airborne lint, and chemical processing fumes to maintain worker comfort."
    },
    {
      icon: <Package className="w-6 h-6 text-orange-600" />,
      name: "Food Processing & Packaging",
      desc: "Hygienic, oil-free, dustproof air changes in compliance with safety standards."
    },
    {
      icon: <Building2 className="w-6 h-6 text-teal-600" />,
      name: "PEB Metal Buildings & Go-Downs",
      desc: "Custom-fitted base plates matching all Tata Bluescope, Kirby, and Jindal metal sheets."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
            VERSATILE APPLICATION AREAS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Engineered for Demanding Industrial Environments
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Providing reliable, zero-power thermal relief and air exhaustion across core manufacturing sectors nationwide.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                {ind.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                {ind.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
