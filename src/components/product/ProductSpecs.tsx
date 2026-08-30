import React from 'react';
import { ProductItem } from '@/data/productsData';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

interface ProductSpecsProps {
  product: ProductItem;
}

export const ProductSpecs: React.FC<ProductSpecsProps> = ({ product }) => {
  const specEntries = Object.entries(product.specs).filter(([_, val]) => Boolean(val));

  const specLabels: Record<string, string> = {
    throatDia: "Throat Diameter (Neck Size)",
    outerDia: "Outer Diameter (Rotor Dia)",
    topCoverSize: "Top Cover Size",
    topCoverThickness: "Top Cover Thickness",
    topCoverMoc: "Top Cover Material (MOC)",
    bottomPlateWidth: "Bottom Plate Width",
    bottomPlateThickness: "Bottom Plate Thickness",
    bottomPlateMoc: "Bottom Plate MOC",
    bladeMountingRingThickness: "Blade Ring Thickness",
    bladeMountingRingMoc: "Blade Ring MOC",
    bearingSize: "Bearing Model & Size",
    bearingMake: "Bearing Make & Type",
    bottomRingWidth: "Bottom Ring Width",
    bottomRingMoc: "Bottom Ring MOC",
    basePlateSize: "Base Plate Dimension",
    basePlateMoc: "Base Plate Material (MOC)",
    shaftThickness: "Central Shaft Thickness",
    shaftLength: "Central Shaft Length",
    shaftMoc: "Central Shaft MOC",
    bladeLength: "Blade Length",
    bladeWidth: "Blade Width",
    bladeThickness: "Blade Sheet Thickness",
    bladeMoc: "Blade Metallurgy (MOC)",
    bladeCount: "Total Blade / Vane Count",
    airflowCfm: "Volumetric Airflow (CFM)",
    powerConsumption: "Electrical Power Required"
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-3">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
          TECHNICAL SPECIFICATIONS
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-slate-900">
          Engineering Parameters & Metallurgy
        </h3>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
        <table className="w-full text-left border-collapse text-xs md:text-sm">
          <tbody className="divide-y divide-slate-100">
            {specEntries.map(([key, val], idx) => (
              <tr key={key} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                <td className="p-3.5 font-bold text-slate-700 w-1/2">
                  {specLabels[key] || key}
                </td>
                <td className="p-3.5 text-slate-900 font-semibold w-1/2">
                  {val}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Primary Highlights Checklist */}
      <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-100 space-y-2">
        <h4 className="font-bold text-sm text-[#0e382c] flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          Primary Operational Features
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
          {product.keyFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
