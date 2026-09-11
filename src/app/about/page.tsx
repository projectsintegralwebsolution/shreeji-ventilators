import React from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ShieldCheck, Award, Factory, Users, CheckCircle2, Sparkles, Trophy, Video, MapPin, Building2, Package, Wrench, ArrowRight } from 'lucide-react';
import { companyData } from '@/data/companyData';
import { constructMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { QuoteButton } from '@/components/common/QuoteButton';
import { AwardVideoSection } from '@/components/home/AwardVideoSection';
import { WatermarkedImage } from '@/components/common/WatermarkedImage';

export const metadata: Metadata = constructMetadata({
  title: "About Us | Shreeji Sales Corporation - Simpovent®",
  description: "Learn about Shreeji Sales Corporation, founded in 2005. ISO 9001:2015 certified manufacturer of Simpovent wind turbo roof ventilators, factory plant tour in Vasai, and leadership by Bharat Gurjar.",
  canonicalUrl: "/about"
});

export default function AboutPage() {
  const factoryShowcases = [
    {
      title: "Hydraulic Press & Precision Blade Stamping",
      category: "Manufacturing Floor",
      image: "/images/factory/factory-floor-presses.jpg",
      description: "Heavy-duty hydraulic power press machinery stamping aerodynamically curved vanes from Hindalco 8011 aluminium coils with rolled edges for structural rigidity."
    },
    {
      title: "Main Assembly & Component Fabrication",
      category: "Production Line",
      image: "/images/factory/factory-manufacturing-line.jpg",
      description: "Dedicated fabrication bay for central stainless steel shafts, dual sealed bearing brackets, and spider ring assemblies."
    },
    {
      title: "Export Quality Inspection & Packaging",
      category: "Quality Assurance",
      image: "/images/factory/factory-packaging-dispatch.jpg",
      description: "Rigorous dynamic balance testing and secure packaging in Simpovent® branded export-grade corrugated boxes and wooden crates."
    },
    {
      title: "Warehouse & Finished Goods Inventory",
      category: "Ready Stock Storage",
      image: "/images/factory/warehouse-inventory-stock.jpg",
      description: "Massive inventory of 21-inch and 24-inch wind ventilators and matching corrugated FRP base plates ready for immediate nationwide dispatch."
    },
    {
      title: "Mezzanine Raw Material & Parts Storage",
      category: "Supply Chain",
      image: "/images/factory/factory-assembly-mezzanine.jpg",
      description: "Extensive buffer stock of stainless steel bearings, aluminium top caps, fasteners, and heavy industrial fan components."
    },
    {
      title: "Corporate Reception & Client Briefing Lounge",
      category: "Headquarters",
      image: "/images/office/reception-lobby.jpg",
      description: "Modern corporate reception with 3D Simpovent branding welcoming industrial clients, architects, and MEP consultants."
    }
  ];

  return (
    <div className="w-full" suppressHydrationWarning>
      <Breadcrumb items={[{ name: "About Us", url: "/about" }]} />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#061d16] via-[#0e382c] to-[#061d16] text-white py-16 md:py-20 px-4 text-center relative overflow-hidden" suppressHydrationWarning>
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Factory className="w-3.5 h-3.5 text-emerald-400" /> Established in 2005 • Vasai East, Palghar, Maharashtra
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            About Shreeji Sales Corporation
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            India's foremost ISO 9001:2015 certified manufacturer, exporter, and supplier of <strong>Simpovent®</strong> industrial wind-driven roof turbo ventilators, motorized hybrid extractors, and heavy-duty industrial exhaust systems.
          </p>
        </div>
      </section>

      {/* Heritage & Introduction Section */}
      <section className="py-16 md:py-24 bg-white" suppressHydrationWarning>
        <div className="max-w-7xl mx-auto px-4 space-y-16" suppressHydrationWarning>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block">
                OUR HERITAGE & MANUFACTURING COMMITMENT
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Engineering Precision Natural Ventilation for Over Two Decades
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Founded in 2005 in Vasai (East), Palghar, Maharashtra, <strong>Shreeji Sales Corporation</strong> has grown into one of India's most trusted manufacturers and exporters of industrial wind-driven roof turbo ventilators under our registered brand <strong>Simpovent®</strong>.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Equipped with heavy-duty metal spinning lathes, hydraulic power presses, precision CNC forming machinery, and dynamic balancing test rigs, our Vasai factory manufactures ventilators adhering strictly to Indian Standards (IS) and international ASHRAE HVAC principles.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-800 block">20+</span>
                  <span className="text-[11px] text-emerald-900 font-semibold">Years Manufacturing Experience</span>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-800 block">2,500+</span>
                  <span className="text-[11px] text-emerald-900 font-semibold">Industrial Plants Powered</span>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-800 block">100%</span>
                  <span className="text-[11px] text-emerald-900 font-semibold">Zero-Power Green Energy</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Real Reception Area */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <WatermarkedImage
                src="/images/office/reception-lobby.jpg"
                alt="Shreeji Sales Corporation Corporate Reception"
                aspectRatio="aspect-[4/3]"
                watermarkText="Shreeji Sales Corporation • Corporate Office"
                watermarkPosition="bottom-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Executive Management Spotlight */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200" suppressHydrationWarning>
        <div className="max-w-7xl mx-auto px-4" suppressHydrationWarning>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Director Photo */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-xl border border-emerald-900/20">
              <WatermarkedImage
                src="/images/office/director-bharat-gurjar.jpg"
                alt="Mr. Bharat Gurjar - Director of Shreeji Sales Corporation"
                aspectRatio="aspect-[16/10]"
                watermarkText="Mr. Bharat Gurjar • Director"
                watermarkPosition="bottom-right"
              />
            </div>

            {/* Director Vision */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5 text-emerald-700" />
                <span>EXECUTIVE LEADERSHIP & VISION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                A Message from Director Bharat Gurjar
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic border-l-4 border-emerald-600 pl-4 py-1">
                "Our mission at Shreeji Sales Corporation has always been clear — to deliver 100% dependable, maintenance-free, and energy-saving ventilation systems engineered specifically for harsh Indian manufacturing environments. Every Simpovent® unit is a promise of quality, performance, and durability."
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Under Mr. Gurjar's visionary leadership, Shreeji Sales Corporation was felicitated at the <strong>Inspiring Leaders Awards 2023</strong> in Mumbai by legendary cricketer <strong>Harbhajan Singh</strong> for Outstanding Contribution in Leading Manufacturer of Roof Ventilators in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Infrastructure & Plant Tour Gallery */}
      <section className="py-16 md:py-24 bg-white" suppressHydrationWarning>
        <div className="max-w-7xl mx-auto px-4 space-y-12" suppressHydrationWarning>
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>AUTHENTIC INFRASTRUCTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
              Inside Our Vasai Manufacturing Plant
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Glimpses of our state-of-the-art power press lines, precision assembly bays, packaging department, and extensive inventory warehouse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {factoryShowcases.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                suppressHydrationWarning
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/80 text-emerald-300 backdrop-blur-md border border-white/20">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                  <span>Simpovent® ISO 9001:2015</span>
                  <span>Photo #{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Operations Team */}
      <section className="py-16 bg-slate-50 border-t border-slate-200" suppressHydrationWarning>
        <div className="max-w-7xl mx-auto px-4" suppressHydrationWarning>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block">
                CUSTOMER SUPPORT & LOGISTICS TEAM
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Dedicated Technical Support & Fast Order Execution
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our back-office engineering and sales coordination team works continuously to assist factory owners, PEB contractors, and HVAC consultants with air volume calculations, custom FRP roof plate profiling, freight logistics, and on-time dispatches.
              </p>
              <div className="pt-2">
                <QuoteButton productName="Direct Inquiry from About Us Page" className="px-6 py-3 text-xs sm:text-sm font-bold shadow-md" variant="primary">
                  Speak with Our Technical Team
                </QuoteButton>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <WatermarkedImage
                src="/images/office/operations-team.jpg"
                alt="Shreeji Sales Corporation Operations and Sales Support Team"
                aspectRatio="aspect-[16/10]"
                watermarkText="Shreeji Operations Desk"
                watermarkPosition="bottom-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Harbhajan Singh Award & Working Video Section */}
      <AwardVideoSection />
    </div>
  );
}
