import React from 'react';
import { Wind, ArrowUp, Zap, ShieldCheck, ThermometerSnowflake, Flame } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
            PHYSICS & WORKING PRINCIPLE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            How Does a Wind Turbine Ventilator Work?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            The scientific combination of natural centrifugal force and thermal buoyancy that creates continuous air change without electricity.
          </p>
        </div>

        {/* 3 Step Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 shadow-sm relative">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center mb-5 shadow-lg shadow-emerald-700/20">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" />
              Thermal Convection (Stack Effect)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Industrial activities, machines, and roof heat warm the air inside the factory. Hot air naturally becomes lighter and ascends towards the roof crest, creating an upward convective chimney draft.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 shadow-sm relative">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center mb-5 shadow-lg shadow-emerald-700/20">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Wind className="w-4 h-4 text-emerald-600" />
              Centrifugal Suction Vanes
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ambient breeze passing over the 42 curved Hindalco aluminium vanes induces rapid centrifugal rotation. The spinning vanes generate a continuous low-pressure zone at the throat, pulling rising air up.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 shadow-sm relative">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center mb-5 shadow-lg shadow-emerald-700/20">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <ThermometerSnowflake className="w-4 h-4 text-blue-600" />
              Fresh Replacement Air Induction
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              As hot air and smoke are expelled outdoors, fresh, cool air is drawn in from lower wall louvers and windows, creating a non-stop circulation cycle that lowers shed temperature by 4°C to 8°C.
            </p>
          </div>
        </div>

        {/* Technical Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0e382c] to-[#155e4b] rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Flywheel Rotor Kinetic Advantage
            </div>
            <h4 className="text-xl md:text-2xl font-bold">
              Continuous Rotation Even During Intermittent Wind Lulls
            </h4>
            <p className="text-xs md:text-sm text-emerald-100/80 max-w-2xl">
              Our precision-balanced central shaft and dual HCH 6001 ZZ ball bearings store kinetic energy, keeping the rotor cage rotating smoothly without abrupt halts.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="https://wa.me/917262860283?text=Hello%20Shreeji,%20I%20want%20to%20know%20more%20about%20your%20wind%20ventilator%20specifications"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-slate-900 hover:bg-emerald-50 font-bold text-xs md:text-sm rounded-xl shadow-md transition-all inline-block"
            >
              Ask Our Engineers on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
