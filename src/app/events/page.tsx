import React from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Calendar, MapPin, Trophy, ShieldCheck, Sparkles, Building2, Eye, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { QuoteButton } from '@/components/common/QuoteButton';

export const metadata: Metadata = constructMetadata({
  title: "Events & Exhibitions | Shreeji Sales Corporation - Simpovent™",
  description: "Explore Shreeji Sales Corporation's participation in premier industrial expos across India: IndoMach Hyderabad, IndoMach Jamshedpur, Industrial Engineering Expo Indore, Roof India Mumbai & Chennai, and National Inspiring Leaders Award.",
  canonicalUrl: "/events"
});

export default function EventsPage() {
  const events = [
    {
      id: "indomach-hyderabad-2024",
      status: "Past Participation",
      statusColor: "bg-slate-500/20 text-slate-300 border-slate-400/30",
      title: "IndoMach B2B Industrial Machinery & Engineering Exhibition",
      edition: "B2B Industrial Expo (Hyderabad)",
      dates: "21, 22, 23 June 2024",
      location: "Hitex Exhibition Centre, Hyderabad, Telangana",
      stall: "Stall No. B-43",
      image: "/images/events/event1.jpeg",
      description: "Showcased Simpovent™ zero-power wind turbo ventilators, motorized hybrid roof extractors, and custom FRP base plates to leading manufacturing industries, PEB contractors, and HVAC consultants from South India."
    },
    {
      id: "harbhajan-singh-award-2023",
      status: "National Honor",
      statusColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
      title: "Inspiring Leaders Awards 2023 (Felicitation by Harbhajan Singh)",
      edition: "Presented by Times Applaud",
      dates: "2nd September 2023",
      location: "The Orchid Hotel, Mumbai, Maharashtra",
      stall: "National Conclave & Trophy Presentation",
      image: "/images/awards/harbhajan-singh-award.jpg",
      description: "Director Bharat Gurjar was felicitated by legendary Indian cricketer Harbhajan Singh for Outstanding Contribution as Leading Manufacturer of Roof Ventilators in India."
    },
    {
      id: "indomach-jamshedpur-2023",
      status: "Past Participation",
      statusColor: "bg-slate-500/20 text-slate-300 border-slate-400/30",
      title: "IndoMach Industrial Machinery & Engineering Exhibition",
      edition: "Eastern India Machinery Expo (Jamshedpur)",
      dates: "02, 03, 04 February 2023",
      location: "Auto Cluster Exhibition Centre, Adityapur, Jamshedpur, Jharkhand",
      stall: "Stall No. BL-01",
      image: "/images/events/iee.jpeg",
      description: "Demonstrated heavy-duty thermal relief solutions and stormproof ventilation for steel fabrication sheds, heavy engineering plants, and automotive ancillary units in the industrial corridor of Jamshedpur."
    },
    {
      id: "iee-indore-2023",
      status: "Past Participation",
      statusColor: "bg-slate-500/20 text-slate-300 border-slate-400/30",
      title: "Industrial Engineering Expo (IEE) - 11th Edition",
      edition: "11th Edition Expo (Indore)",
      dates: "10, 11, 12, 13 February 2023",
      location: "Labh Ganga Exhibition Centre, Indore, Madhya Pradesh",
      stall: "Hall C, Stall No. 43",
      image: "/images/events/indomech.jpeg",
      description: "Exhibited live spinning turbine models, Hindalco 8011 aluminium rotor assemblies, and corrosion-resistant industrial ventilation for foundries, agro-processing units, and chemical plants in MP."
    },
    {
      id: "roof-india-mumbai-2019",
      status: "Past Participation",
      statusColor: "bg-slate-500/20 text-slate-300 border-slate-400/30",
      title: "ROOF INDIA EXHIBITION 2019 (Mumbai)",
      edition: "Asia's Most Definitive Expo for Roofing & Allied Products",
      dates: "25, 26, 27 April 2019",
      location: "Bombay Exhibition Centre (NESCO), Goregaon (East), Mumbai, India",
      stall: "Shreeji Sales Corporation Pavilion",
      image: "/images/events/2019-shreeji.jpg",
      description: "Live interactive stall showcasing complete roof ventilation packages with matching FRP/Polycarbonate corrugated sheets for Tata Bluescope, Kirby, and Jindal industrial roof profiles."
    },
    {
      id: "roof-india-chennai-2018",
      status: "Past Participation",
      statusColor: "bg-slate-500/20 text-slate-300 border-slate-400/30",
      title: "ROOF INDIA EXHIBITION 2018 (Chennai)",
      edition: "Asia's Most Definitive Expo for Roofing & Allied Products",
      dates: "7, 8, 9 June 2018",
      location: "Chennai Trade Centre, Nandambakkam, Chennai, Tamil Nadu",
      stall: "Shreeji Sales Pavilion",
      image: "/images/events/roofindia.jpg",
      description: "Conducted technical aerodynamic demonstrations for industrial architects, factory owners, and pre-engineered building (PEB) design consultants from South India."
    }
  ];

  const galleryImages = [
    { src: "/images/events/1.jpg", caption: "Live Roof Ventilator Demonstration & Visitor Consultation" },
    { src: "/images/events/2.jpg", caption: "Exhibition Stall Display with Stainless Steel & Aluminium Turbines" },
    { src: "/images/events/3.jpg", caption: "Customer Technical Discussion on Factory CFM Sizing" },
    { src: "/images/events/4.jpg", caption: "Interactive Demonstration of Dual Sealed Bearings & Rotor Cage" },
    { src: "/images/events/5.jpg", caption: "Engineering Team with Visitors at IndoMach Expo" },
    { src: "/images/events/6.jpg", caption: "Exhibition Floor Display of Simpovent Industrial Models" },
    { src: "/images/events/7.jpg", caption: "Display of Heavy Duty Base Plates & FRP Profiles" },
    { src: "/images/events/8.jpg", caption: "Visitor Inquiries & Product Consultation at Trade Fair" },
    { src: "/images/events/9.jpg", caption: "Rooftop Ventilation Demonstration Units" },
    { src: "/images/events/10.jpg", caption: "Technical Briefing on Zero Power Industrial Air Extraction" },
    { src: "/images/events/11.jpg", caption: "Industrial Expo Visitors Reviewing Simpovent Samples" },
    { src: "/images/events/12.jpg", caption: "Exhibition Pavilion Presentation at Roof India" }
  ];

  return (
    <div className="w-full" suppressHydrationWarning>
      <Breadcrumb items={[{ name: "Events & Exhibitions", url: "/events" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#061d16] via-[#0e382c] to-[#061d16] text-white py-16 md:py-20 px-4 text-center relative overflow-hidden" suppressHydrationWarning>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2ec4b6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-black uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>TRADE EXPOS, NATIONAL CONCLAVES & EXHIBITIONS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Events & Industrial Exhibitions
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A track record of successful participation in premier national trade fairs, industrial machinery expos, and roofing conclaves across Mumbai, Hyderabad, Indore, Jamshedpur, and Chennai.
          </p>
        </div>
      </section>

      {/* Main Events Timeline / Cards */}
      <section className="py-16 md:py-24 bg-slate-50" suppressHydrationWarning>
        <div className="max-w-7xl mx-auto px-4 space-y-12" suppressHydrationWarning>
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block">
              NATIONAL PARTICIPATION & RECOGNITION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
              Trade Shows & Expo Highlights
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Showcasing proven engineering, live spinning demonstrations, and interactive technical sessions for factory owners, PEB contractors, and MEP consultants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                suppressHydrationWarning
              >
                <div>
                  {/* Event Poster / Photo */}
                  <div className="aspect-[16/10] bg-slate-900 relative overflow-hidden">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-md border shadow ${evt.statusColor}`}>
                        {evt.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                      {evt.edition}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {evt.title}
                    </h3>

                    <div className="space-y-1.5 text-xs text-slate-600 border-y border-slate-100 py-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-semibold text-slate-800">{evt.dates}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{evt.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-800 font-bold">
                        <Building2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{evt.stall}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500">Shreeji Simpovent™</span>
                  <QuoteButton productName={`Inquiry for Model Displayed at: ${evt.title}`} className="px-3.5 py-1.5 text-xs font-bold" variant="primary">
                    Get Quotation
                  </QuoteButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Gallery Section */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200" suppressHydrationWarning>
        <div className="max-w-7xl mx-auto px-4 space-y-12" suppressHydrationWarning>
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Eye className="w-3.5 h-3.5 text-emerald-700" />
              <span>LIVE GLIMPSES & STALL GALLERY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
              Exhibition Photo Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Real photographs of our interactive exhibition pavilions, live demonstration turbine units, customer consultations, and product showcases.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                suppressHydrationWarning
              >
                <div className="aspect-square relative overflow-hidden bg-slate-900">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-[11px] text-white font-medium leading-snug">
                      {img.caption}
                    </span>
                  </div>
                </div>

                <div className="p-3 text-[11px] text-slate-700 font-semibold bg-white border-t border-slate-100 flex items-center justify-between">
                  <span className="line-clamp-1">{img.caption}</span>
                  <span className="text-[10px] text-emerald-600 font-bold shrink-0 ml-2">#{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-[#061d16] text-white" suppressHydrationWarning>
        <div className="max-w-7xl mx-auto px-4" suppressHydrationWarning>
          <div className="bg-gradient-to-r from-[#0e382c] via-[#155e4b] to-[#0e382c] p-8 md:p-12 rounded-3xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-300 block">
                VISIT OUR FACTORY OR SCHEDULE CONSULTATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Experience Simpovent™ Live in Action
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl">
                Schedule a factory visit at our Vasai manufacturing plant or request an on-site engineer consultation for your facility.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-3">
              <QuoteButton
                productName="Factory Consultation Request"
                className="px-6 py-3.5 text-xs sm:text-sm font-bold shadow-xl"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
