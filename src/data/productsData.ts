export interface ProductSpec { label: string; value: string; }

export interface ProductItem {
  id: string;
  slug: string;
  legacySlug: string;
  name: string;
  h1Title: string;
  metaTitle: string;
  metaDescription: string;
  focusKeywords: string[];
  category: "motorized-hybrid" | "industrial-exhaust" | "hvls-fans" | "wind-driven" | "accessories";
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string[];
  keyFeatures: string[];
  efficiencyHighlights: string[];
  workingTheory: string;
  applications: string[];
  specs: {
    throatDia: string;
    outerDia: string;
    fanDiameter?: string;
    motorType?: string;
    noiseLevel?: string;
    coverageArea?: string;
    voltageRating?: string;
    protectionGrade?: string;
    maxRpm?: string;
    topCoverSize?: string;
    topCoverThickness?: string;
    topCoverMoc?: string;
    bottomPlateWidth?: string;
    bottomPlateThickness?: string;
    bottomPlateMoc?: string;
    bladeMountingRingThickness?: string;
    bladeMountingRingMoc?: string;
    bearingSize?: string;
    bearingMake?: string;
    bottomRingWidth?: string;
    bottomRingMoc?: string;
    basePlateSize?: string;
    basePlateMoc?: string;
    shaftThickness?: string;
    shaftLength?: string;
    shaftMoc?: string;
    bladeLength?: string;
    bladeWidth?: string;
    bladeThickness?: string;
    bladeMoc?: string;
    bladeCount?: string;
    airflowCfm?: string;
    powerConsumption?: string;
  };
  image: string;
  galleryImages: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const productsData: ProductItem[] = [
  {
    "id": "motorised-roof-ventilator",
    "slug": "motorised-roof-ventilator",
    "legacySlug": "motorised-roof-ventilator.php",
    "name": "Motorized Roof Ventilator",
    "h1Title": "Motorized Roof Ventilator Manufacturer & Industrial Roof Extraction Systems",
    "metaTitle": "Motorized Roof Ventilator Manufacturer in India | Simpovent®",
    "metaDescription": "Simpovent® Motorized Roof Ventilator combining continuous wind-driven natural suction with high-torque electric motor assist for high-heat industrial factories.",
    "focusKeywords": [
      "motorized roof ventilator",
      "motorised roof ventilator",
      "motorized ventilator",
      "motorised ventilator",
      "motorized turbo ventilator",
      "roof mount exhaust fan",
      "roof exhaust fan",
      "roof extractor fan",
      "motorized roof air ventilator",
      "force ventilator",
      "power ventilator",
      "smoke extraction fan"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Motorized Hybrid Roof Ventilator",
    "shortDescription": "Heavy-duty dual-action motorized roof ventilator integrating aerodynamic wind turbine vanes with high-torque electric motor for guaranteed exhaust during high heat generation.",
    "fullDescription": [
      "The Simpovent® Motorized Roof Ventilator is engineered for severe industrial factory environments where process heat loads, welding fumes, or chemical vapors fluctuate dramatically throughout production shifts.",
      "Featuring a dual-operation hybrid design, this unit functions 100% powerless as a natural wind-driven ventilator during normal weather conditions, while the integrated high-efficiency copper-wound motor can be energized on-demand or via automatic thermal sensors during peak production cycles.",
      "Manufactured with aerospace-grade Hindalco Aluminium 8011 vanes, heavy-gauge Stainless Steel SS 304 framework, and IP55 weatherproof motor enclosure, ensuring maintenance-free, continuous smoke and fume extraction."
    ],
    "keyFeatures": [
      "Dual Hybrid Mode (Wind-Driven Zero Power + Electric Motorized Boost)",
      "High-Torque IP55 Weatherproof Copper-Wound Electric Motor",
      "Hindalco 8011 Aluminium Vanes with SS 304 Reinforcement",
      "Custom RPM Control with Thermal & Smoke Sensor Automation Compatibility",
      "100% Monsoon-Proof & Capillary Water Seepage Resistant Design",
      "Heavy-Duty FRP Matching Base Plate for Corrugated Roofing Sheets"
    ],
    "efficiencyHighlights": [
      "Provides up to 300% higher CFM air extraction during peak heat shifts",
      "Operates silently in passive mode with zero power consumption",
      "Drastically reduces rooftop heat pockets and stagnant hot air blankets",
      "Long-life dual sealed bearings rated for continuous industrial operation"
    ],
    "workingTheory": "Combines the natural thermal siphon effect and ambient wind velocity with forced motorized centrifugal suction. When the electric motor is engaged, the internal impellers generate high negative static pressure, forcefully drawing hot fumes, welding smoke, and stagnant warm air up through the throat and discharging it horizontally.",
    "applications": [
      "Steel Rolling Mills & Forging Plants",
      "Foundries & Heat Treatment Shops",
      "Chemical Processing & Paint Booths",
      "Automotive Assembly & Robotic Welding Lines",
      "Plastic Injection Moulding Plants",
      "Die Casting & Rubber Processing Units"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 28\" Inch (710 MM)",
      "outerDia": "32\" Inch (810 MM) / 36\" Inch (915 MM)",
      "motorType": "Class F Insulated IP55 Industrial Motor",
      "bladeMoc": "Hindalco Aluminium Alloy 8011 / SS 304",
      "topCoverMoc": "Stainless Steel SS 304 (5 MM Heavy Duty)",
      "bottomPlateMoc": "Galvanized Steel / SS 304",
      "bladeMountingRingMoc": "High-Tensile Galvanized Steel Ring",
      "bearingSize": "Dual Deep Groove Heavy Duty Bearings",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "UV-Stabilized Virgin FRP Matching Sheet",
      "airflowCfm": "3,500 CFM to 7,500 CFM (Active Motorized Mode)",
      "powerConsumption": "0.37 kW to 1.1 kW (Single / 3 Phase 415V)"
    },
    "image": "/images/products/motoized-roof-1.jpg",
    "galleryImages": [
      "/images/products/motorized-3.jpg",
      "/images/products/WhatsApp Image 2026-09-04 at 11.21.40 (1).jpeg",
      "/images/products/simpo-248-axial-flow.jpg"
    ],
    "faqs": [
      {
        "question": "How does a Motorized Roof Ventilator differ from a standard wind ventilator?",
        "answer": "A standard wind ventilator relies 100% on ambient breeze and thermal updrafts. A Motorized Roof Ventilator features an integrated electric motor and auxiliary impellers, giving you guaranteed, high-capacity forced exhaust even during zero-wind conditions or extreme furnace heat spikes."
      },
      {
        "question": "Can this motorized ventilator run continuously in passive wind mode?",
        "answer": "Yes. When the motor is turned off, the rotor cage continues to spin freely and silently via wind energy and thermal convection with zero electricity consumption."
      },
      {
        "question": "What roof sheet profiles can it be mounted on?",
        "answer": "We supply custom-moulded FRP base plates matching all industrial roofing profiles including Tata Bluescope, JSW Colour Roof, Kirby, Jindal, and Asbestos corrugated sheets."
      }
    ]
  },
  {
    "id": "motorised-ventilator",
    "slug": "motorised-ventilator",
    "legacySlug": "motorised-ventilator.php",
    "name": "Motorised Ventilator",
    "h1Title": "Motorised Ventilator - Industrial Forced Draft Roof Ventilation System",
    "metaTitle": "Motorised Ventilator Manufacturer & Supplier India | Simpovent®",
    "metaDescription": "Buy heavy-duty Motorised Ventilators from Simpovent®. Powered ventilation units for factories, warehouses, boiler rooms and high-temperature manufacturing plants.",
    "focusKeywords": [
      "motorised ventilator",
      "motorized ventilator",
      "motorized roof ventilator",
      "motorized turbo ventilator",
      "force ventilator",
      "power ventilator",
      "powar ventilator",
      "roof mount exhaust fan",
      "roof extractor fan",
      "smoke extraction"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Motorized Roof Ventilator",
    "shortDescription": "High-velocity motorised industrial roof ventilator designed for high-density heat evacuation, fume expulsion, and severe factory ventilation requirements.",
    "fullDescription": [
      "Simpovent® Motorised Ventilators represent the next generation of forced-air industrial roof extraction. Engineered to solve acute overheating problems in metal PEB factory sheds, these units guarantee uninterrupted ventilation regardless of exterior weather.",
      "The precision-balanced rotor cage is driven by a rugged, energy-efficient electric motor designed for 24/7 continuous operation in dusty, humid, and chemically aggressive industrial atmospheres.",
      "Equipped with corrosion-resistant aluminium turbine vanes and heavy-gauge mounting hardware, it ensures long-term operational reliability with minimal maintenance."
    ],
    "keyFeatures": [
      "Direct Drive Motorized Air Extraction Mechanism",
      "Aerodynamically Engineered 42-Curved Vane Rotor Cage",
      "Energy Efficient TEFC Class F Insulated Copper Motor",
      "Resistant to High Acidic, Alkaline, and Humid Environments",
      "Includes Bird Guard & Heavy Duty Base Flange",
      "Factory Dynamically Balanced for Vibration-Free Operation"
    ],
    "efficiencyHighlights": [
      "Eliminates trapped hot air layers under PEB factory ceilings",
      "Evacuates up to 6,800 CFM of hot air, moisture, and fumes",
      "Significantly improves indoor air quality (IAQ) and worker comfort",
      "Reduces structural thermal expansion stress on industrial roof sheets"
    ],
    "workingTheory": "The internal motorized impeller generates positive upward velocity and negative pressure below the roof deck, pulling hot thermal plumes directly from factory production lines and exhausting them through the weatherproof rotating cowl.",
    "applications": [
      "Furnace & Boiler Sheds",
      "Heavy Machine Fabrication Workshops",
      "Plastic Extrusion & Injection Facilities",
      "Chemical Processing Sheds",
      "Textile Processing & Dyeing Units",
      "Paper Mills & Corrugation Plants"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 28\" Inch (710 MM)",
      "outerDia": "30\" Inch (760 MM) / 36\" Inch (915 MM)",
      "motorType": "Class F High-Efficiency IP55 Induction Motor",
      "bladeMoc": "Hindalco 8011 Aluminium Vanes",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "Dual Sealed Heavy-Duty Deep Groove Bearings",
      "basePlateMoc": "Virgin UV-Resistant FRP Profile Matching Plate",
      "airflowCfm": "4,000 CFM to 6,800 CFM",
      "powerConsumption": "0.5 HP to 1.5 HP (230V / 415V 50Hz)"
    },
    "image": "/images/products/motorized-3.jpg",
    "galleryImages": [
      "/images/products/motoized-roof-1.jpg",
      "/images/products/WhatsApp Image 2026-09-04 at 11.21.40 (1).jpeg"
    ],
    "faqs": [
      {
        "question": "Can the motorized ventilator be connected to automatic sensors?",
        "answer": "Yes, our motorized ventilators can be easily integrated with temperature sensors, smoke detectors, or timer switches for automated on/off cycling."
      },
      {
        "question": "Is it completely waterproof during heavy monsoon rain?",
        "answer": "Yes, the precision aerodynamic curvature of the vanes combined with our custom FRP base plate and water deflector lip prevents any water ingress even during heavy gale-force monsoon storms."
      }
    ]
  },
  {
    "id": "motorized-turbo-ventilator",
    "slug": "motorized-turbo-ventilator",
    "legacySlug": "motorized-turbo-ventilator.php",
    "name": "Motorized Turbo Ventilator",
    "h1Title": "Motorized Turbo Ventilator Manufacturer in India | Simpovent®",
    "metaTitle": "Motorized Turbo Ventilator Manufacturer in Mumbai, Pune, India | Simpovent®",
    "metaDescription": "Simpovent® Motorized Turbo Ventilator provides ultra-high volumetric CFM exhaust for industrial factory sheds, PEB warehouses, and boiler rooms across India.",
    "focusKeywords": [
      "motorized turbo ventilator",
      "motorised turbo ventilator",
      "motorized roof ventilator",
      "motorised ventilator",
      "turbo air ventilator",
      "turbo vents",
      "roof mount exhaust fan",
      "force ventilator",
      "power ventilator",
      "roof extractor fan"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Motorized Turbo Ventilator",
    "shortDescription": "Industrial turbo ventilator equipped with internal electric motor assist for high-velocity thermal extraction and severe factory fume removal.",
    "fullDescription": [
      "The Simpovent® Motorized Turbo Ventilator is specifically designed for manufacturing facilities experiencing extreme heat generation where passive wind ventilators alone need additional powered extraction.",
      "Combining the advantages of our classic 42-blade aerodynamic aluminium turbo head with a precision-mounted direct-drive electric motor, this unit offers maximum flexibility and power.",
      "Manufactured with Hindalco 8011 aluminium vanes, stainless steel hardware, and precision sealed bearings, the unit is corrosion-proof, durable, and designed for decades of trouble-free performance."
    ],
    "keyFeatures": [
      "Dual Mechanism (Wind Turbine + Powered Booster)",
      "High Volumetric Air Displacement up to 7,200 CFM",
      "Hindalco 8011 Aluminium Vanes with SS 304 Reinforcement",
      "Precision Balanced for Ultra-Low Vibration & Noise",
      "Weatherproof IP55 Motor with Overload Protection",
      "Custom FRP Base Plate for Exact Roof Profile Fit"
    ],
    "efficiencyHighlights": [
      "Provides continuous positive extraction regardless of wind speed",
      "Drops ambient factory temperatures by 5°C to 10°C",
      "Removes toxic welding smoke, oil mist, and humidity rapidly",
      "Lowest lifecycle operating cost in the powered ventilation category"
    ],
    "workingTheory": "Thermal updrafts and ambient wind naturally rotate the exterior turbine vanes. When excessive heat or smoke triggers the motor, the internal booster fan creates a powerful localized vortex that rapidly expels stagnant hot air through the spinning cowl.",
    "applications": [
      "Robotic Welding & Fabrication Shops",
      "Foundries, Forging & Smelting Sheds",
      "Automotive Paint & Powder Coating Booths",
      "DG (Diesel Generator) & Compressor Rooms",
      "Plastic Extrusion & Injection Molding Plants"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 28\" Inch (710 MM)",
      "outerDia": "32\" Inch (810 MM)",
      "motorType": "Heavy Duty 4-Pole TEFC Induction Motor",
      "bladeMoc": "Hindalco Aluminium 8011 Alloy",
      "topCoverMoc": "SS 304 Stainless Steel (5 MM)",
      "bearingMake": "Dual Deep Groove Sealed Bearings",
      "basePlateMoc": "UV-Resistant FRP Profile Sheet",
      "airflowCfm": "4,200 CFM to 7,200 CFM",
      "powerConsumption": "0.5 HP to 1.0 HP (Single/3-Phase)"
    },
    "image": "/images/products/WhatsApp Image 2026-09-04 at 11.21.40 (1).jpeg",
    "galleryImages": [
      "/images/products/motoized-roof-1.jpg",
      "/images/products/motorized-3.jpg"
    ],
    "faqs": [
      {
        "question": "What is the warranty on the motorized turbo ventilator?",
        "answer": "We provide a 10-year structural warranty on the aluminium turbine rotor assembly and a standard 1-year replacement warranty on the electrical motor."
      }
    ]
  },
  {
    "id": "power-ventilator",
    "slug": "power-ventilator",
    "legacySlug": "power-ventilator.php",
    "name": "Power Ventilator",
    "h1Title": "Power Ventilator Manufacturer & Industrial Forced Air Systems",
    "metaTitle": "Power Ventilator Manufacturer in India | Simpovent®",
    "metaDescription": "Simpovent® Power Ventilator for heavy industrial roof air exhaust. High-CFM electric powered extraction system for steel mills, foundries, and factory sheds.",
    "focusKeywords": [
      "power ventilator",
      "powar ventilator",
      "force ventilator",
      "motorized roof ventilator",
      "motorised ventilator",
      "roof mount exhaust fan",
      "roof exhaust fan",
      "roof extractor fan",
      "industrial exhaust fan",
      "big exhaust fan",
      "smoke extraction"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Powered Roof Ventilator",
    "shortDescription": "High-capacity powered industrial roof ventilator engineered for forced evacuation of industrial thermal plumes, corrosive fumes, and stagnant factory air.",
    "fullDescription": [
      "The Simpovent® Power Ventilator (Power Roof Exhaust Unit) is built for industrial facilities requiring high-pressure, forced air evacuation through the roof.",
      "Engineered with a high-efficiency axial or centrifugal impeller powered by a heavy-duty continuous-duty motor, it guarantees rapid air exchanges across expansive factory floors.",
      "Housed in a rugged weatherproof aluminium/galvanized cowl with an aerodynamic rain cap, the Power Ventilator delivers uncompromising performance in severe industrial environments."
    ],
    "keyFeatures": [
      "Heavy-Duty Powered Air Extraction Engine",
      "Aerodynamic Weatherhood with Backdraft Damper",
      "High Air Volume Delivery up to 8,500 CFM",
      "Corrosion-Proof Aluminium & SS 304 Construction",
      "Low Acoustic Signature with Dynamically Balanced Impeller",
      "Direct Factory Dispatch from Vasai Manufacturing Unit"
    ],
    "efficiencyHighlights": [
      "Guarantees scheduled air changes per hour (ACH) to comply with factory safety norms",
      "Swiftly purges explosive dust, welding fumes, and paint overspray",
      "Maintains optimal working ambient temperatures for machine operators"
    ],
    "workingTheory": "A high-efficiency axial/mixed-flow impeller driven by an industrial electric motor forcefully expels trapped hot air upward through the roof cowl, creating a powerful draft that draws fresh cool ambient air into the facility from lower wall louvers.",
    "applications": [
      "Steel Fabrication Plants",
      "Chemical Processing & Storage Units",
      "Commercial Kitchen Exhaust Hoods",
      "Die Casting & Metal Stamping Plants",
      "Transformer & Switchgear Rooms"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 30\" Inch (760 MM)",
      "outerDia": "34\" Inch (860 MM)",
      "motorType": "High-Torque Class F TEFC Copper Motor",
      "bladeMoc": "High-Strength Cast Aluminium / SS 304",
      "topCoverMoc": "Heavy-Gauge Weatherproof Cowl",
      "basePlateMoc": "FRP / MS Powder Coated Base",
      "airflowCfm": "4,500 CFM to 8,500 CFM",
      "powerConsumption": "0.75 kW to 2.2 kW (415V 3-Phase)"
    },
    "image": "/images/products/motoized-roof-1.jpg",
    "galleryImages": [
      "/images/products/motorized-3.jpg",
      "/images/products/WhatsApp Image 2026-09-04 at 11.21.40 (1).jpeg"
    ],
    "faqs": [
      {
        "question": "Can this unit be mounted on inclined metal roofs?",
        "answer": "Yes, our custom-engineered FRP base plates are moulded to the exact pitch and profile of your PEB or asbestos roof, ensuring a vertical installation with zero leakages."
      }
    ]
  },
  {
    "id": "force-ventilator",
    "slug": "force-ventilator",
    "legacySlug": "force-ventilator.php",
    "name": "Force Ventilator",
    "h1Title": "Force Ventilator Manufacturer - High Pressure Industrial Roof Exhaust",
    "metaTitle": "Force Ventilator Manufacturer & Industrial Extraction Systems | Simpovent®",
    "metaDescription": "High-pressure Force Ventilator manufacturer in India. Simpovent® forced-draft roof extraction units for severe industrial heat and chemical fume evacuation.",
    "focusKeywords": [
      "force ventilator",
      "forced ventilator",
      "power ventilator",
      "powar ventilator",
      "motorized roof ventilator",
      "motorised ventilator",
      "roof mount exhaust fan",
      "roof extractor fan",
      "fume extractor",
      "smoke extraction",
      "big exhaust fan"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Forced Draft Ventilator",
    "shortDescription": "High-pressure forced-draft industrial roof ventilator engineered to overcome heavy system resistance and evacuate dense chemical fumes, smoke, and process heat.",
    "fullDescription": [
      "The Simpovent® Force Ventilator is engineered for specialized industrial facilities where standard gravity or wind-driven ventilators cannot overcome heavy static pressure or dense airborne particulate loads.",
      "Featuring high-pressure axial impeller blades paired with an industrial-grade TEFC motor, it creates a powerful directional draft that forces contaminants and superheated air out of the building envelope.",
      "Constructed with corrosion-proof alloys and sealed against harsh chemical vapors, it provides dependable forced exhaust across the most demanding manufacturing operations."
    ],
    "keyFeatures": [
      "High Static Pressure Air Evacuation Capability",
      "Aerodynamically Profiled High-CFM Impeller",
      "IP55 Ingress Protected Chemical-Resistant Motor",
      "Heavy Duty Weatherhood with Integrated Gravity Flaps",
      "Seamless Integration with Central Industrial Ducting or Direct Roof Mount",
      "ISO 9001:2015 Certified Manufacturing Quality"
    ],
    "efficiencyHighlights": [
      "Exhausts heavy smoke plumes before they diffuse across the shop floor",
      "Reduces workplace thermal fatigue and respiratory health risks",
      "Eliminates condensation of corrosive vapors on metal roof purlins"
    ],
    "workingTheory": "The motor-driven impeller creates strong negative suction at the factory roof level, pulling dense hot gases, smoke, and process steam through the throat and ejecting them with high velocity into the atmosphere.",
    "applications": [
      "Galvanizing & Electroplating Plants",
      "Chemical Synthesis & Reactor Sheds",
      "Industrial Rubber Curing Facilities",
      "Welding Bays & Plasma Cutting Workshops",
      "Foundry Pouring & Shakeout Areas"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 30\" Inch (760 MM)",
      "outerDia": "34\" Inch (860 MM)",
      "motorType": "Class F High-Efficiency IP55 Induction Motor",
      "bladeMoc": "Cast Aluminium / Stainless Steel SS 304",
      "topCoverMoc": "Heavy Duty Galvanized / FRP Cowl",
      "basePlateMoc": "Custom Heavy Duty FRP Base Plate",
      "airflowCfm": "5,000 CFM to 9,000 CFM",
      "powerConsumption": "1.0 HP to 3.0 HP (415V 50Hz 3-Phase)"
    },
    "image": "/images/products/motorized-3.jpg",
    "galleryImages": [
      "/images/products/motoized-roof-1.jpg",
      "/images/products/WhatsApp Image 2026-09-04 at 11.21.40 (1).jpeg"
    ],
    "faqs": [
      {
        "question": "Is the Force Ventilator suitable for corrosive chemical environments?",
        "answer": "Yes, we offer specialized chemical-resistant SS 316 and epoxy/FRP coated impeller options specifically engineered for acidic and alkaline vapor exhaust."
      }
    ]
  },
  {
    "id": "motorized-roof-air-ventilator",
    "slug": "motorized-roof-air-ventilator",
    "legacySlug": "motorized-roof-air-ventilator.php",
    "name": "Motorized Roof Air Ventilator",
    "h1Title": "Motorized Roof Air Ventilator Manufacturer & Industrial Supplier",
    "metaTitle": "Motorized Roof Air Ventilator Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Motorized Roof Air Ventilators combine continuous wind extraction with powered motor boost for guaranteed factory airflow and rapid smoke removal.",
    "focusKeywords": [
      "motorized roof air ventilator",
      "motorized roof ventilator",
      "motorised ventilator",
      "roof mount exhaust fan",
      "roof extractor fan",
      "roof air ventilator",
      "turbo air ventilator",
      "force ventilator",
      "power ventilator",
      "smoke extraction"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Motorized Roof Air Ventilator",
    "shortDescription": "Precision-engineered motorized roof air ventilator designed for large manufacturing plants needing both natural convection and high-capacity forced draft extraction.",
    "fullDescription": [
      "The Simpovent® Motorized Roof Air Ventilator offers the ultimate flexibility in industrial ventilation. It allows factory managers to benefit from zero-cost natural ventilation around the clock while having the power to activate high-velocity forced exhaust during intense production runs.",
      "Engineered with 42 Hindalco Aluminium vanes, high-grade dual sealed bearings, and an integrated heavy-duty motor, it represents the pinnacle of hybrid ventilation engineering.",
      "Its robust design withstands coastal salinity, high humidity, chemical fumes, and extreme monsoon weather without degradation."
    ],
    "keyFeatures": [
      "Seamless Hybrid Operation (Zero-Power Passive + Motorized Active)",
      "High Air Displacement Capacity up to 7,000 CFM",
      "Hindalco 8011 Aluminium Vanes with SS 304 Fasteners",
      "IP55 Weatherproof Copper Motor Enclosure",
      "Supplied with Custom Matched Industrial FRP Base Plates",
      "100% Maintenance-Free Sealed Bearing System"
    ],
    "efficiencyHighlights": [
      "Guarantees continuous ventilation even on dead calm, windless days",
      "Rapidly exhausts process heat, steam, and particulate haze",
      "Reduces factory ambient temperature by up to 8°C"
    ],
    "workingTheory": "During low-heat hours, ambient wind and thermal updrafts spin the rotor cage naturally with zero electricity. During high-heat production cycles, the electric motor is energized, spinning internal boost blades to force high-volume air extraction.",
    "applications": [
      "Engineering & Fabrication Facilities",
      "Warehouse & Logistics Hubs",
      "Food Processing & Sugar Mills",
      "Paper Mills & Corrugated Box Plants",
      "Automotive Service Centers & Workshops"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 28\" Inch (710 MM)",
      "outerDia": "32\" Inch (810 MM)",
      "motorType": "Class F TEFC Induction Motor (IP55)",
      "bladeMoc": "Hindalco 8011 High-Tensile Aluminium",
      "topCoverMoc": "SS 304 Stainless Steel (5 MM)",
      "bearingMake": "Dual Sealed Deep Groove Bearings",
      "basePlateMoc": "Virgin Resin FRP Matching Base Sheet",
      "airflowCfm": "3,800 CFM to 7,000 CFM",
      "powerConsumption": "0.5 HP to 1.5 HP (220V / 415V)"
    },
    "image": "/images/products/WhatsApp Image 2026-09-04 at 11.21.40 (1).jpeg",
    "galleryImages": [
      "/images/products/motoized-roof-1.jpg",
      "/images/products/motorized-3.jpg"
    ],
    "faqs": [
      {
        "question": "Can these units be installed on existing factory roofs without major alterations?",
        "answer": "Yes, our lightweight FRP base plates replace standard roof sheet panels directly, ensuring a clean retrofit without cutting main structural purlins."
      }
    ]
  },
  {
    "id": "heavy-duty-industrial-exhaust-fan",
    "slug": "heavy-duty-industrial-exhaust-fan",
    "legacySlug": "heavy-duty-industrial-exhaust-fan.php",
    "name": "Heavy Duty Industrial Exhaust Fan",
    "h1Title": "Heavy Duty Industrial Exhaust Fan Manufacturer & Supplier in India",
    "metaTitle": "Heavy Duty Industrial Exhaust Fan Manufacturer | Simpovent®",
    "metaDescription": "Simpovent® manufactures heavy duty industrial exhaust fans, wall mounted exhaust fans, cone fans and roof exhaust fans for high-heat factories across India.",
    "focusKeywords": [
      "heavy duty exhaust fan",
      "heavy duty industrial exhaust fan",
      "industrial exhaust fan",
      "industrial wall mounted exhaust fan",
      "wall mounted exhaust fan",
      "wall mount big exhaust fan",
      "big exhaust fan",
      "roof mount big exhaust fan",
      "roof mount exhaust fan",
      "roof exhaust fan",
      "roof extractor fan",
      "fume extractor",
      "smoke extraction",
      "exhaust fan"
    ],
    "category": "industrial-exhaust",
    "categoryLabel": "Heavy Duty Industrial Exhaust Fan",
    "shortDescription": "High-volume heavy-duty industrial exhaust fan engineered with dynamically balanced aerodynamic blades and a high-efficiency copper motor for rapid plant smoke and heat evacuation.",
    "fullDescription": [
      "Simpovent® Heavy Duty Industrial Exhaust Fans are built to deliver massive volumetric air displacement across large factory sheds, welding bays, boiler rooms, and PEB industrial warehouses.",
      "Equipped with aerodynamically contoured, dynamically balanced heavy-gauge aluminium/steel impellers and a heavy-duty copper-wound IP55 motor, these fans extract intense heat, airborne dust, welding fumes, and toxic chemical gases effortlessly.",
      "Designed for wall-mount or roof-mount industrial configurations, every unit undergoes rigorous vibration and dynamic balance testing at our Vasai manufacturing plant."
    ],
    "keyFeatures": [
      "High-Volume Air Displacement up to 18,000 CFM",
      "Dynamically Balanced Precision Aerodynamic Blades",
      "Heavy-Gauge Powder Coated Corrosion-Proof Steel Frame",
      "100% Copper-Wound High-Efficiency IP55 Induction Motor",
      "Optional Automatic Gravity Shutter & Safety Finger Guards",
      "Continuous 24/7 Heavy-Duty Industrial Duty Cycle"
    ],
    "efficiencyHighlights": [
      "Provides rapid air changes per hour (ACH) in severe heat zones",
      "Low acoustic noise signature with precision-balanced blades",
      "Dramatically reduces factory ambient temperature and smoke haze",
      "Significantly increases worker comfort, safety, and productivity"
    ],
    "workingTheory": "High-pitch aerodynamic impeller blades create a massive pressure differential, forcefully suctioning trapped industrial heat, welding fumes, and airborne particulate plumes from the interior and exhausting them outside.",
    "applications": [
      "Heavy Engineering & Fabrication Plants",
      "Welding, Cutting & Plasma Processing Bays",
      "Foundries, Forging & Heat Treatment Shops",
      "Commercial Warehouses & Logistics Hubs",
      "Chemical, Fertilizer & Paint Manufacturing Facilities",
      "Textile, Dyeing & Paper Manufacturing Mills"
    ],
    "specs": {
      "throatDia": "24\" (600mm) / 36\" (900mm) / 48\" (1200mm) / 54\" (1380mm)",
      "outerDia": "Up to 54\" (1380 MM)",
      "motorType": "100% Copper-Wound Class F IP55 TEFC Motor",
      "bladeMoc": "High-Tensile Stainless Steel / Aluminium / Heavy-Gauge MS",
      "bladeCount": "4 to 6 Aerodynamic Blades",
      "airflowCfm": "6,000 CFM to 28,000 CFM (High Volume Displacement)",
      "powerConsumption": "0.5 HP to 3.0 HP (Single Phase 230V / 3 Phase 415V)"
    },
    "image": "/images/products/roof-exhaust-fan-simpovent.jpg",
    "galleryImages": [
      "/images/products/simpo-248-axial-flow.jpg"
    ],
    "faqs": [
      {
        "question": "What sizes are available for the heavy duty industrial exhaust fan?",
        "answer": "We manufacture sizes from 18\" (450mm), 24\" (600mm), 36\" (900mm), 48\" (1200mm), up to 54\" (1380mm) with custom motor ratings based on your required CFM and room volume."
      },
      {
        "question": "Can it be supplied with automatic louvers/shutters?",
        "answer": "Yes, we provide automatic gravity backdraft louvers that open smoothly when the fan starts and close tightly when switched off to prevent dust, bird, and rain entry."
      }
    ]
  },
  {
    "id": "roof-extractor-fan",
    "slug": "roof-extractor-fan",
    "legacySlug": "roof-extractor-fan.php",
    "name": "Roof Extractor Fan",
    "h1Title": "Roof Extractor Fan Manufacturer - Industrial Powered Roof Extraction",
    "metaTitle": "Roof Extractor Fan Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Roof Extractor Fan for heavy industrial roof exhaust. High-capacity roof mount exhaust fans for PEB buildings, metal sheds, and factories.",
    "focusKeywords": [
      "roof extractor fan",
      "roof extractor",
      "roof mount exhaust fan",
      "roof exhaust fan",
      "roof mounted exhaust fan",
      "roof mount big exhaust fan",
      "industrial exhaust fan",
      "heavy duty exhaust fan",
      "big exhaust fan",
      "fume extractor",
      "smoke extraction"
    ],
    "category": "industrial-exhaust",
    "categoryLabel": "Industrial Roof Extractor Fan",
    "shortDescription": "High-capacity roof-mounted industrial extractor fan designed for high-volume smoke evacuation, hot gas expulsion, and continuous roof-level ventilation.",
    "fullDescription": [
      "The Simpovent® Roof Extractor Fan is designed for heavy industrial installations requiring vertical or horizontal high-velocity discharge directly through the factory roof.",
      "Featuring a heavy-gauge weatherproof cowl, aerodynamic axial/centrifugal impeller, and a Class F insulated copper motor, it efficiently eliminates high-temperature plumes before they spread across the workplace.",
      "Supplied with factory-matched UV-stabilized FRP base plates for zero-leakage integration with industrial corrugated sheet roofs."
    ],
    "keyFeatures": [
      "Direct High-Velocity Roof Air Extraction",
      "Weatherproof FRP / Galvanized Heavy Cowl Housing",
      "Dynamically Balanced High-CFM Impeller",
      "Class F IP55 Copper Wound Continuous Duty Motor",
      "Bird Guard Mesh & Backdraft Damper Flaps Included",
      "Zero-Leakage Integration with FRP Base Plates"
    ],
    "efficiencyHighlights": [
      "Directly captures and discharges rising thermal updrafts at the roof crest",
      "Prevents hazardous gas accumulation in PEB warehouse apex zones",
      "Low maintenance with sealed self-lubricating bearings"
    ],
    "workingTheory": "Hot buoyant air and process smoke naturally rise to the roof apex. The Roof Extractor Fan pulls this accumulated hot gas mass and forcefully ejects it into the atmosphere, creating a continuous convective cycle throughout the factory.",
    "applications": [
      "Industrial PEB Factory Sheds",
      "Boiler & Furnace Houses",
      "Foundries & Forging Shops",
      "Chemical Processing Plants",
      "Automotive Paint Booths",
      "Warehouses & Logistics Centers"
    ],
    "specs": {
      "throatDia": "24\" (600mm) / 30\" (750mm) / 36\" (900mm) / 48\" (1200mm)",
      "outerDia": "34\" to 56\" (860mm to 1420mm)",
      "motorType": "Class F IP55 Copper Motor",
      "bladeMoc": "Cast Aluminium / High-Grade Stainless Steel",
      "topCoverMoc": "UV-Resistant FRP / Galvanized Steel Weatherhood",
      "basePlateMoc": "Custom FRP Profile Matching Sheet",
      "airflowCfm": "5,500 CFM to 16,000 CFM",
      "powerConsumption": "0.75 kW to 3.7 kW (415V 3-Phase)"
    },
    "image": "/images/products/simpo-248-axial-flow.jpg",
    "galleryImages": [
      "/images/products/roof-exhaust-fan-simpovent.jpg"
    ],
    "faqs": [
      {
        "question": "How is the roof extractor fan protected against rain?",
        "answer": "The deep aerodynamic cowl and internal water deflector lip completely shield the fan throat from rain and wind-driven water, even during severe monsoon downpours."
      }
    ]
  },
  {
    "id": "hvls-fan",
    "slug": "hvls-fan",
    "legacySlug": "hvls-fan.php",
    "name": "SIMPOVENT® Industrial HVLS PMSM Fan",
    "h1Title": "Industrial HVLS PMSM Fan Manufacturer & Energy Efficient Large Ceiling Fans",
    "metaTitle": "Industrial HVLS PMSM Fan Manufacturer in India | Simpovent®",
    "metaDescription": "Simpovent® Industrial HVLS PMSM Fans (10ft to 24ft). Direct drive permanent magnet synchronous motor, up to 15,500 CMM airflow, ultra-quiet, zero maintenance.",
    "focusKeywords": [
      "hvls fan",
      "industrial hvls fan",
      "hvls pmsm fan",
      "industrial ceiling fan",
      "large industrial ceiling fan",
      "pmsm ceiling fan",
      "high volume low speed fan",
      "big exhaust fan",
      "warehouse large ceiling fan",
      "energy saving industrial fan",
      "direct drive hvls fan",
      "simpo-7.1a hvls fan"
    ],
    "category": "hvls-fans",
    "categoryLabel": "Industrial HVLS PMSM Fan",
    "shortDescription": "High Volume Low Speed (HVLS) direct-drive PMSM industrial ceiling fan (10ft to 24ft) delivering massive 15,500 CMM airflow with ultra-low power consumption and zero oil maintenance.",
    "fullDescription": [
      "SIMPOVENT® Industrial HVLS PMSM Fans represent the pinnacle of large-space industrial airflow technology. Powered by a direct-drive Permanent Magnet Synchronous Motor (PMSM) utilizing high-coercivity Neodymium (NdFeB) rare-earth magnets, these fans eliminate traditional gearboxes entirely.",
      "Unlike conventional gearbox-driven HVLS fans that require regular oil top-ups, suffer from oil leak risks, and generate gear mesh noise, SIMPOVENT® PMSM fans operate with zero maintenance, 20X longer motor lifespan, and whisper-quiet sound levels (38 dBA to 55 dBA).",
      "Equipped with aerospace-grade Aluminium-Magnesium Alloy 6063-T6 aerodynamic airfoil blades with winglet tips, our HVLS fans generate a massive columnar breeze that covers up to 1,600 square meters per fan, reducing perceived temperatures by 5°C to 8°C while consuming only 0.75 kW to 1.5 kW of electrical power."
    ],
    "keyFeatures": [
      "Direct Drive PMSM Motor with Rare-Earth Neodymium Magnets (Zero Gearbox, Zero Oil)",
      "Aerospace-Grade 6063-T6 Extruded Aluminium-Magnesium Airfoil Blades with Winglets",
      "Massive Air Volume Output up to 15,500 CMM (547,000 CFM)",
      "Whisper-Quiet Operation (38 dBA - 55 dBA) with Stepless Variable Frequency Inverter Drive",
      "Triple Safety Mechanism: High-Pressure Forged Hub, Anti-Drop Safety Ring, Double Safety Steel Wire Ropes",
      "Saves up to 50% Electrical Energy Compared to Traditional Gearbox HVLS Fans",
      "Full Range of Sizes: 10 Ft (3.0m), 12 Ft (3.7m), 16 Ft (4.8m), 18 Ft (5.5m), 20 Ft (6.0m), and 24 Ft (7.3m)"
    ],
    "efficiencyHighlights": [
      "Covers expansive factory floor areas from 400 m² up to 1,600 m² with a gentle, non-turbulent breeze",
      "Reduces effective temperature by 5°C - 8°C through natural convective evaporative cooling",
      "Consumes only ~1.2 kW at maximum 24ft size — replacing dozens of noisy high-power wall fans",
      "Eliminates workplace humidity, floor sweat, and moisture condensation on stored pallet goods",
      "Complies with international industrial safety standards with Grade 8.8/10.9 high-tensile hardware"
    ],
    "workingTheory": "The large-diameter aerodynamic airfoil blades rotate slowly at 0-60 RPM, displacing huge volumes of air downward in a cylindrical column. When this air column contacts the floor, it moves outward radially in a 360-degree horizontal jet until hitting walls or outer perimeter, establishing continuous total-volume convective air circulation throughout the building.",
    "applications": [
      "Large PEB Manufacturing Factories & Warehouses",
      "Automobile Manufacturing & Assembly Plants",
      "Logistics Hubs, Cargo Terminals & Distribution Centers",
      "Foundries, Forging & Heavy Engineering Workshops",
      "Commercial Exhibition Centers, Sports Arenas & Hangars",
      "Food & Beverage Processing Facilities (Zero Oil Leak Compliant)",
      "Textile Mills, Spinning Units & Garment Factories"
    ],
    "specs": {
      "throatDia": "10 Ft (3.0m) to 24 Ft (7.3m) Sweep",
      "outerDia": "24 Ft (7,300 MM Max)",
      "fanDiameter": "24ft (7.3m) / 20ft (6.0m) / 18ft (5.5m) / 16ft (4.8m) / 12ft (3.7m) / 10ft (3.0m)",
      "motorType": "Direct Drive Permanent Magnet Synchronous Motor (PMSM)",
      "noiseLevel": "38 dBA to 55 dBA (Ultra-Quiet)",
      "coverageArea": "Up to 1,600 m² (17,200 sq.ft) per fan",
      "voltageRating": "220V Single Phase / 380V-415V Three Phase (50/60 Hz)",
      "protectionGrade": "IP55 / Class F Insulation",
      "maxRpm": "0 to 60 RPM (Stepless Variable Speed Inverter Control)",
      "bladeMoc": "Extruded Aluminium-Magnesium Alloy 6063-T6 with Aerodynamic Winglets",
      "bladeCount": "5 to 6 High-Lift Airfoil Blades",
      "topCoverMoc": "High-Pressure Precision Forged Aluminium Alloy Hub",
      "shaftMoc": "High-Tensile Alloy Steel with Anti-Drop Ring & Safety Cable Lock",
      "airflowCfm": "15,500 CMM (547,000 CFM Max - Model SIMPO-7.1a)",
      "powerConsumption": "0.75 kW to 1.5 kW"
    },
    "image": "/images/products/hvls-fan.jpg",
    "galleryImages": [
      "/images/products/hvls-industrial-fan-ceiling.jpg",
      "/images/products/hvls-pmsm-fan-motor-hub.jpg",
      "/images/products/HVLS fan (3).jpeg",
      "/images/products/HVLS FAN (2).jpeg",
      "/images/products/hvls-fan-hub-closeup.jpg"
    ],
    "faqs": [
      {
        "question": "Why choose a PMSM HVLS fan over a traditional gearbox HVLS fan?",
        "answer": "PMSM (Permanent Magnet Synchronous Motor) fans use direct drive without any gears. This means zero gear oil changes, zero risk of oil leaking onto products/floors (essential for food/pharma), 20X longer motor life, 30-50% lower power consumption, and virtually noiseless operation (38-55 dBA vs 65+ dBA for gearbox fans)."
      },
      {
        "question": "What ceiling height is required for installing a 24ft HVLS fan?",
        "answer": "A minimum clear ceiling height of 4.5 meters (15 feet) to 6+ meters is ideal. The fan blades should hang at least 3.0 meters above the floor and 1.0 meter below the roof trusses for optimal air circulation."
      },
      {
        "question": "What safety features are included with SIMPOVENT® HVLS fans?",
        "answer": "Every SIMPOVENT® HVLS fan includes multiple redundant safety layers: high-pressure forged aluminium hub, 360-degree anti-drop safety ring, double high-tensile steel wire safety ropes directly anchored to roof beams, blade safety clips, and Grade 8.8/10.9 fasteners with Nyloc locknuts."
      },
      {
        "question": "What models are available in the SIMPOVENT® HVLS series?",
        "answer": "We offer models SIMPO-7.1a (24ft / 15500 CMM), SIMPO-7a (24ft / 13000 CMM), SIMPO-6a (20ft / 11500 CMM), SIMPO-5a (18ft / 11000 CMM), SIMPO-4a (16ft / 10000 CMM), SIMPO-3.7a (12ft / 5000 CMM), and SIMPO-3a (10ft / 4000 CMM)."
      }
    ]
  },
  {
    "id": "turbo-ventilator",
    "slug": "turbo-ventilator",
    "legacySlug": "turbo-ventilator.php",
    "name": "Turbo Ventilator",
    "h1Title": "Industrial Turbo Ventilator Manufacturer & Supplier in India",
    "metaTitle": "Turbo Ventilator Manufacturer in Vasai, Mumbai, Pune, India | Simpovent®",
    "metaDescription": "Simpovent® is a premier Turbo Ventilator manufacturer in Vasai, Mumbai, Pune, Maharashtra, Gujarat, Rajasthan & India. Zero power, noiseless, ISO 9001:2015 certified.",
    "focusKeywords": [
      "Turbo Ventilator",
      "turbo air ventilator",
      "turbo vents",
      "roof ventilator",
      "Turbo Ventilator manufacturer",
      "Turbo Ventilator in Mumbai",
      "Turbo Ventilator Pune",
      "Turbo Ventilator Vasai",
      "Industrial Turbo Ventilator India",
      "wind driven ventilator",
      "roof air ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "High-performance wind-driven roof turbo ventilator engineered with 42 Hindalco aluminium curved vanes and dual sealed bearings for 24/7 continuous silent ventilation.",
    "fullDescription": [
      "Simpovent® (manufactured by Shreeji Sales Corporation) is a pioneer in developing high-efficiency Turbo Ventilators designed for severe industrial factory sheds, commercial warehouses, and manufacturing plants across India.",
      "The Turbo Ventilator operates completely without electricity, utilizing the natural velocity energy of ambient breeze and thermal convection to continuously exhaust accumulated process heat, smoke, humidity, and toxic fumes.",
      "Manufactured using aerospace-grade Hindalco Aluminium 8011 vanes, heavy-gauge Stainless Steel SS 304 top covers, and precision dual HCH 6001 ZZ deep-groove sealed ball bearings, the Simpovent® Turbo Ventilator guarantees zero maintenance, total rain resistance, and maximum exhaust efficiency for over a decade."
    ],
    "keyFeatures": [
      "Zero Electricity & Zero Operating Costs (100% Wind & Thermal Driven)",
      "Aerodynamic 42-blade rotor cage for smooth spin even in light breeze (< 2 km/h)",
      "Hindalco 8011 Grade High-Tensile Aluminium construction",
      "Dual HCH 6001 ZZ sealed deep-groove ball bearings with high-temp grease",
      "Heavy-duty SS 304 top cowl and bottom ring for extreme corrosion resistance",
      "100% Weatherproof & Leakproof FRP / Polycarbonate base plate matching"
    ],
    "efficiencyHighlights": [
      "Ant-acid, anti-corrosive, and anti-erosion construction for chemical sheds",
      "Zero acoustic noise and zero carbon footprint",
      "Dramatically lowers shed temperature by 4°C to 8°C",
      "Accelerates worker productivity and prevents moisture condensation on stored goods"
    ],
    "workingTheory": "The Turbo Ventilator operates by converting wind energy into centrifugal force. Spinning aerodynamic vanes create a continuous low-pressure zone at the throat, drawing hot, buoyant air and fumes upwards through the roof. Stored flywheel kinetic energy ensures non-stop air extraction even during intermittent wind lulls.",
    "applications": [
      "Boiler & Furnace Rooms",
      "Foundries & Forging Plants",
      "Chemical & Pharmaceutical Processing Units",
      "Automobile Workshops & Assembly Plants",
      "Engineering & Fabrication Sheds",
      "DG (Diesel Generator) Sheds & Compressor Rooms",
      "Warehouses, Logistics Hubs & Go-Downs",
      "Paper, Textile, Sugar & Plastic Mills"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "topCoverSize": "510 MM",
      "topCoverThickness": "5 MM (Stainless Steel SS 304)",
      "topCoverMoc": "Stainless Steel SS 304",
      "bottomPlateWidth": "505 MM",
      "bottomPlateThickness": "5 MM (Galvanized Steel)",
      "bottomPlateMoc": "Galvanized Steel / SS",
      "bladeMountingRingThickness": "5 MM (Galvanized)",
      "bladeMountingRingMoc": "Galvanized Steel",
      "bearingSize": "Dual 6001 ZZ / 6001-2RS Deep Groove",
      "bearingMake": "HCH Precision Sealed",
      "bottomRingWidth": "100 MM",
      "bottomRingMoc": "Stainless Steel SS 304",
      "basePlateSize": "2.0M x 1.0M Matching Profile",
      "basePlateMoc": "FRP / Polycarbonate UV Stabilized",
      "shaftThickness": "12.7 MM High-Tensile Steel",
      "shaftLength": "270 MM Precision Machined",
      "shaftMoc": "Stainless Steel / EN8 Steel",
      "bladeLength": "505 MM Aerodynamically Curved",
      "bladeWidth": "75 MM Precision Formed",
      "bladeThickness": "0.5 MM High-Tensile Sheet",
      "bladeMoc": "Hindalco Aluminium 8011",
      "bladeCount": "42 Specially Curved Blades",
      "airflowCfm": "1,200 to 2,400 CFM (at 5-15 km/h wind speed)",
      "powerConsumption": "0 Watts (100% Free Natural Power)"
    },
    "image": "/images/products/WhatsApp Image 2026-09-09 at 4.28.51 PM.jpeg",
    "galleryImages": [
      "/images/products/WhatsApp Image 2026-09-09 at 4.29.26 PM.jpeg",
      "/images/products/WhatsApp Image 2026-09-09 at 4.31.55 PM.jpeg",
      "/images/products/wind-driven-ventilator-simpovent.jpg"
    ],
    "faqs": [
      {
        "question": "How does Simpovent® Turbo Ventilator work without electricity?",
        "answer": "Simpovent® Turbo Ventilators work on two physical principles: natural wind velocity turning the aerodynamic rotor cage to create centrifugal exhaust force, and the thermal siphon effect where lighter hot air and fumes naturally rise to the ceiling throat and get drawn out."
      },
      {
        "question": "Can rainwater enter through the spinning vanes during heavy monsoons?",
        "answer": "No. The 42 vanes are formed with precision reverse-curved water deflector lips. Centrifugal rotation forces any incoming droplets outward away from the throat, making it 100% leakproof even in heavy monsoon rains."
      },
      {
        "question": "What maintenance is required for Simpovent® Turbo Ventilators?",
        "answer": "Zero maintenance. Our dual sealed HCH deep-groove bearings are permanently lubricated with high-temperature synthetic grease and sealed against dust and moisture."
      }
    ]
  },
  {
    "id": "roof-air-ventilator",
    "slug": "roof-air-ventilator",
    "legacySlug": "roof-air-ventilator.php",
    "name": "Roof Air Ventilator",
    "h1Title": "Industrial Roof Air Ventilator Manufacturer in India",
    "metaTitle": "Roof Air Ventilator Manufacturer in Maharashtra, Gujarat, India | Simpovent®",
    "metaDescription": "Simpovent® Roof Air Ventilators provide 24/7 round-the-clock air change for manufacturing plants, PEB sheds, and warehouses without electricity.",
    "focusKeywords": [
      "Roof Air Ventilator",
      "roof ventilator",
      "roof air ventilator manufacturer",
      "industrial roof air ventilator",
      "factory roof air ventilator",
      "turbo air ventilator",
      "roof extractor"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Zero-power roof air ventilator engineered for optimal thermodynamic convection and maximum exhaust of hot industrial indoor air.",
    "fullDescription": [
      "The Simpovent® Roof Air Ventilator is engineered specifically for metal roofing sheds that suffer from severe heat buildup under direct sunlight.",
      "By continuously extracting the upper thermal layer of superheated air, it induces cool fresh ambient air through lower side wall louvers and windows.",
      "Constructed with Hindalco 8011 aluminium vanes and precision sealed bearings, it delivers high-performance ventilation without consuming any power."
    ],
    "keyFeatures": [
      "Zero Operational Cost - 100% Free Energy",
      "Hindalco 8011 Aluminium Vanes with SS 304 Reinforcement",
      "Dual 6001 ZZ Sealed Bearings for Smooth, Silent Rotation",
      "Custom FRP Base Plate Moulded for Precision Sheet Matching",
      "Weatherproof, Anti-Corrosion, and Anti-Rust Coating"
    ],
    "efficiencyHighlights": [
      "Reduces factory interior temperature by 4°C to 7°C",
      "Prevents condensation on metal roof purlins and truss structures",
      "Promotes clean indoor air quality and worker stamina"
    ],
    "workingTheory": "Thermal convection carries hot, humid air upward to the roof deck. The spinning vanes harness ambient breeze to draw this hot air outward continuously.",
    "applications": [
      "Industrial PEB Buildings",
      "Food & Beverage Packaging Units",
      "Warehouses & Distribution Facilities",
      "Automotive Service Centers",
      "Plastic & Rubber Processing Plants"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "topCoverMoc": "Stainless Steel SS 304 (5 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Profile Sheet",
      "airflowCfm": "1,200 to 2,400 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/WhatsApp Image 2026-09-09 at 4.31.55 PM.jpeg",
    "galleryImages": [
      "/images/products/WhatsApp Image 2026-09-09 at 4.33.00 PM.jpeg",
      "/images/products/roof-air-ventilators.jpg"
    ],
    "faqs": [
      {
        "question": "How many roof air ventilators are required for my factory shed?",
        "answer": "The number of ventilators depends on your shed volume (L x W x H in feet) and the required Air Changes per Hour (ACH) for your industry type. Use our online CFM Calculator or contact our engineering team."
      }
    ]
  },
  {
    "id": "turbo-air-ventilator",
    "slug": "turbo-air-ventilator",
    "legacySlug": "turbo-air-ventilator.php",
    "name": "Turbo Air Ventilator",
    "h1Title": "Industrial Turbo Air Ventilator Manufacturer in India",
    "metaTitle": "Turbo Air Ventilator Manufacturer & Supplier | Simpovent®",
    "metaDescription": "Buy high-efficiency Turbo Air Ventilators from Simpovent®. Eco-friendly, silent, wind-driven ventilators engineered for heavy industries.",
    "focusKeywords": [
      "Turbo Air Ventilator",
      "turbo vents",
      "turbo ventilator",
      "roof air ventilator",
      "turbo air ventilator price",
      "industrial turbo air ventilator",
      "roof ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Heavy-duty turbo air ventilator designed for maximum exhaust velocity in humid, dusty, or high-temperature industrial environments.",
    "fullDescription": [
      "The Simpovent® Turbo Air Ventilator combines advanced aerodynamic blade design with frictionless bearing rotation to maximize CFM air extraction.",
      "Manufactured with aircraft-grade Hindalco Aluminium 8011 vanes and a Stainless Steel SS 304 top cowl, it withstands aggressive chemical atmospheres and coastal salt air.",
      "Completely noiseless and maintenance-free, it provides an eco-friendly solution to industrial factory ventilation."
    ],
    "keyFeatures": [
      "Zero Electricity Operation",
      "42 Precision Curved Hindalco Aluminium Blades",
      "Dual HCH Sealed Bearings with High-Temperature Lubrication",
      "Resistant to Acids, Alkalis, and High Humidity",
      "100% Monsoon-Proof Rain Deflector Design"
    ],
    "efficiencyHighlights": [
      "Exhausts up to 2,400 CFM per 24\" unit in normal breeze",
      "Eliminates stale odors, toxic fumes, and suffocating heat",
      "No wiring, no motor burnout risk, zero carbon footprint"
    ],
    "workingTheory": "Natural wind spins the turbine cowl. Centrifugal force throws air outward from the vane tips, creating vacuum suction at the neck that continuously pulls interior air upward.",
    "applications": [
      "Chemical & Fertilizer Plants",
      "Paper & Pulp Mills",
      "Sugar & Textile Factories",
      "Heavy Machine Workshops",
      "Commercial Warehouses"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "topCoverMoc": "Stainless Steel SS 304",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP UV-Stabilized Sheet",
      "airflowCfm": "1,200 to 2,400 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/WhatsApp Image 2026-09-09 at 4.33.00 PM.jpeg",
    "galleryImages": [
      "/images/products/WhatsApp Image 2026-09-09 at 4.34.23 PM.jpeg",
      "/images/products/turbo-air-ventilators.jpg"
    ],
    "faqs": [
      {
        "question": "Can the Turbo Air Ventilator withstand cyclonic wind speeds?",
        "answer": "Yes, Simpovent® ventilators are aerodynamically balanced and structurally tested to withstand high wind speeds up to 140 km/h when anchored properly with our FRP base plates."
      }
    ]
  },
  {
    "id": "wind-driven-ventilator",
    "slug": "wind-driven-ventilator",
    "legacySlug": "wind-driven-ventilator.php",
    "name": "Wind Driven Ventilator",
    "h1Title": "Wind Driven Ventilator Manufacturer & Exporter in India",
    "metaTitle": "Wind Driven Ventilator Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Wind Driven Ventilators offer 100% eco-friendly, zero-electricity ventilation for factories, mills, and PEB sheds across India.",
    "focusKeywords": [
      "Wind Driven Ventilator",
      "wind operated ventilator",
      "wind driven roof ventilator",
      "wind turbine ventilator",
      "turbo ventilator",
      "roof ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Eco-friendly wind-driven industrial roof ventilator engineered for continuous passive ventilation of factory sheds and warehouses.",
    "fullDescription": [
      "Simpovent® Wind Driven Ventilators harness natural wind velocity to provide powerful, continuous exhaust ventilation for industrial buildings across India.",
      "Requiring zero electrical power, these ventilators eliminate running costs while maintaining a healthy, cool, and comfortable indoor environment for workers.",
      "Engineered with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings for lifetime maintenance-free performance."
    ],
    "keyFeatures": [
      "100% Wind & Thermal Convection Powered",
      "Zero Operating Expenses & Zero Carbon Emissions",
      "Aerodynamic Curved Blades for Maximum Suction",
      "Stainless Steel SS 304 Central Shaft & Hardware",
      "Custom FRP Base Plates for Leakproof Installation"
    ],
    "efficiencyHighlights": [
      "Reduces factory internal temperature by 4°C to 8°C",
      "Exhausts toxic fumes, stale air, and excessive moisture",
      "Increases productivity and worker safety"
    ],
    "workingTheory": "Utilizes the Bernoulli effect and thermal buoyancy. Wind flowing across the rotating vanes creates lower pressure inside the cowl, drawing warm indoor air through the throat.",
    "applications": [
      "PEB Industrial Buildings",
      "Manufacturing & Assembly Plants",
      "Logistics Warehouses & Godowns",
      "Textile & Garment Mills",
      "Boiler & Generator Rooms"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Dual Bearings",
      "basePlateMoc": "FRP Corrugated Matching Sheet",
      "airflowCfm": "1,200 to 2,400 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/WhatsApp Image 2026-09-09 at 4.34.23 PM.jpeg",
    "galleryImages": [
      "/images/products/WhatsApp Image 2026-09-09 at 4.28.51 PM.jpeg",
      "/images/products/wind-driven-ventilator-simpovent.jpg"
    ],
    "faqs": [
      {
        "question": "What is the lifespan of a Simpovent® Wind Driven Ventilator?",
        "answer": "Simpovent® Wind Driven Ventilators are engineered for a service life of over 15+ years under standard industrial conditions, backed by our 10-year structural warranty."
      }
    ]
  },
  {
    "id": "wind-operate-ventilator",
    "slug": "wind-operate-ventilator",
    "legacySlug": "wind-operate-ventilator.php",
    "name": "Wind Operate Ventilator",
    "h1Title": "Wind Operated Roof Ventilator Manufacturer in India",
    "metaTitle": "Wind Operate Ventilator Manufacturer | Simpovent®",
    "metaDescription": "Reliable Wind Operate Ventilators by Simpovent®. Eco-friendly industrial roof ventilators engineered with Hindalco aluminium and SS304.",
    "focusKeywords": [
      "Wind Operate Ventilator",
      "wind operated roof ventilator",
      "wind ventilator",
      "wind driven ventilator",
      "turbo ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Heavy-duty wind-operated roof ventilator engineered for smooth rotation in low-wind conditions and maximum air displacement.",
    "fullDescription": [
      "The Simpovent® Wind Operate Ventilator is designed to start rotating at extremely low breeze speeds (< 2 km/h), providing round-the-clock air evacuation.",
      "Engineered with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings, it delivers reliable passive exhaust for factories.",
      "Backed by an ISO 9001:2015 certified manufacturing process and a 10-year warranty."
    ],
    "keyFeatures": [
      "Ultra-low starting torque (< 2 km/h wind speed)",
      "Hindalco Aluminium 8011 Alloy Vanes",
      "Dual HCH Sealed Bearings with Synthetic Grease",
      "Corrosion-Resistant Hardware & SS 304 Fasteners",
      "Custom Profile FRP Base Plates Available"
    ],
    "efficiencyHighlights": [
      "Zero electricity costs for the entire lifespan of the equipment",
      "Prevents mold, humidity, and heat entrapment under the ceiling",
      "Completely silent operation with zero acoustic vibration"
    ],
    "workingTheory": "Natural wind rotating the turbine head creates negative pressure inside the throat, pulling hot, humid factory air out continuously.",
    "applications": [
      "Engineering & Metal Workshops",
      "Plastic Injection & Molding Units",
      "Sugar Mills & Distilleries",
      "Pharmaceutical Warehouses",
      "Commercial Sheds & Garages"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Base Plate",
      "airflowCfm": "1,200 to 2,400 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/WhatsApp Image 2026-09-09 at 4.29.26 PM.jpeg",
    "galleryImages": [
      "/images/products/WhatsApp Image 2026-09-09 at 4.30.15 PM.jpeg",
      "/images/products/wind-operate-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "Does it work when there is no wind outside?",
        "answer": "Yes. Even in dead calm conditions, the thermal siphon effect (hot air rising due to lower density) continues to pass through the throat and spin the rotor cage."
      }
    ]
  },
  {
    "id": "natural-air-ventilator",
    "slug": "natural-air-ventilator",
    "legacySlug": "natural-air-ventilator.php",
    "name": "Natural Air Ventilator",
    "h1Title": "Natural Air Ventilator Manufacturer in India | Simpovent®",
    "metaTitle": "Natural Air Ventilator Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Natural Air Ventilators deliver 100% natural, green, zero-electricity ventilation for factory buildings, PEB warehouses, and mills.",
    "focusKeywords": [
      "Natural Air Ventilator",
      "natural ventilation system",
      "zero power ventilator",
      "eco roof ventilator",
      "roof ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Zero-power natural air ventilator designed to harness thermal updrafts and natural breezes for optimal factory air exchange.",
    "fullDescription": [
      "The Simpovent® Natural Air Ventilator operates entirely on nature's power — combining wind kinetic energy with the thermal chimney effect.",
      "Crafted with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings, it ensures non-stop air exchange without electrical wiring.",
      "Proven across over 100,000 industrial installations throughout India."
    ],
    "keyFeatures": [
      "100% Green & Eco-Friendly Technology",
      "Zero Operational & Electrical Costs",
      "Hindalco 8011 Aluminium Construction",
      "Weatherproof & Leakproof Installation",
      "10-Year Structural & Rotor Cage Warranty"
    ],
    "efficiencyHighlights": [
      "Creates continuous air circulation across large manufacturing floors",
      "Reduces structural thermal stress on metal roof sheets",
      "Helps industrial facilities achieve green building (IGBC/LEED) credits"
    ],
    "workingTheory": "Thermal convection carries hot, buoyant air to the roof crest where the spinning aerodynamic vanes evacuate it into the ambient atmosphere.",
    "applications": [
      "Green Building & LEED Certified Plants",
      "Textile & Spinning Units",
      "Paper & Packaging Factories",
      "Agricultural Godowns & Grain Storage",
      "Commercial Warehouses"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP UV-Resistant Matching Sheet",
      "airflowCfm": "1,200 to 2,400 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/WhatsApp Image 2026-09-09 at 4.30.15 PM.jpeg",
    "galleryImages": [
      "/images/products/WhatsApp Image 2026-09-09 at 4.28.51 PM.jpeg",
      "/images/products/WhatsApp Image 2026-09-04 at 11.21.40.jpeg"
    ],
    "faqs": [
      {
        "question": "Can natural air ventilators help in LEED / IGBC green building certifications?",
        "answer": "Yes, because they operate with 0 Watts electricity and zero greenhouse gas emissions, they earn maximum points in energy conservation and natural ventilation categories."
      }
    ]
  },
  {
    "id": "roof-ventilator",
    "slug": "roof-ventilator",
    "legacySlug": "roof-ventilator.php",
    "name": "Roof Ventilator",
    "h1Title": "Industrial Roof Ventilator Manufacturer & Supplier in India",
    "metaTitle": "Roof Ventilator Manufacturer in Mumbai, Pune, India | Simpovent®",
    "metaDescription": "Simpovent® Roof Ventilator manufacturer in India. Premium zero-power wind ventilators for metal PEB sheds, factories, and warehouses.",
    "focusKeywords": [
      "Roof Ventilator",
      "roof ventilator manufacturer",
      "industrial roof ventilator",
      "factory roof ventilator",
      "turbo ventilator",
      "roof air ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Durable, high-efficiency industrial roof ventilator engineered with Hindalco aluminium vanes for long-term factory heat and fume extraction.",
    "fullDescription": [
      "The Simpovent® Roof Ventilator is the industry benchmark for passive factory roof ventilation in India.",
      "Engineered to withstand harsh monsoons, high ambient temperatures, and corrosive industrial atmospheres, it operates silently 24/7 without electricity.",
      "Manufactured with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings."
    ],
    "keyFeatures": [
      "No Electric Power Needed (Zero Running Cost)",
      "42 Aerodynamic Hindalco Aluminium Vanes",
      "Dual HCH Sealed Precision Bearings",
      "100% Weatherproof FRP Matching Base Plates",
      "10-Year Comprehensive Structural Warranty"
    ],
    "efficiencyHighlights": [
      "Lowers indoor temperature by 4°C to 8°C",
      "Exhausts trapped heat, moisture, and chemical vapors",
      "Requires zero lubrication or maintenance"
    ],
    "workingTheory": "Converts wind velocity into centrifugal force at the turbine head, creating strong suction at the throat to extract hot indoor air.",
    "applications": [
      "Foundries & Forging Shops",
      "Engineering & Fabrication Sheds",
      "Automotive Assembly Plants",
      "Chemical & Pharma Factories",
      "Warehouses & Godowns"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Profile Base Plate",
      "airflowCfm": "1,200 to 2,400 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/WhatsApp Image 2026-09-04 at 11.21.40.jpeg",
    "galleryImages": [
      "/images/products/WhatsApp Image 2026-09-04 at 11.21.41 (1).jpeg",
      "/images/products/roof-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "What makes Simpovent® roof ventilators superior to local alternatives?",
        "answer": "Simpovent® uses genuine Hindalco 8011 high-tensile aluminium, heavy-gauge SS 304 top covers, precision dual HCH sealed bearings, and UV-stabilized virgin FRP base plates, ensuring over 15+ years of trouble-free performance."
      }
    ]
  },
  {
    "id": "turbine-ventilator",
    "slug": "turbine-ventilator",
    "legacySlug": "turbine-ventilator.php",
    "name": "Turbine Ventilator",
    "h1Title": "Industrial Turbine Ventilator Manufacturer in India | Simpovent®",
    "metaTitle": "Turbine Ventilator Manufacturer & Supplier | Simpovent®",
    "metaDescription": "Simpovent® Turbine Ventilators provide continuous silent exhaust for industrial sheds without electricity. ISO 9001:2015 certified.",
    "focusKeywords": [
      "Turbine Ventilator",
      "industrial turbine ventilator",
      "roof turbine ventilator",
      "wind turbine ventilator",
      "turbo ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Precision-balanced rotating turbine ventilator for continuous, noiseless industrial factory ventilation.",
    "fullDescription": [
      "The Simpovent® Turbine Ventilator features a precision-formed aerodynamic rotor cage that spins smoothly under the slightest breeze.",
      "Manufactured with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings, it continuously evacuates heat and fumes.",
      "Ideal for manufacturing facilities seeking to improve workplace ergonomics and air circulation with zero power consumption."
    ],
    "keyFeatures": [
      "Zero Electricity Operation",
      "42 Precision Formed Aluminium Vanes",
      "Dual Sealed High-Grade Deep Groove Bearings",
      "Corrosion-Proof Aluminium & SS 304 Metallurgy",
      "10-Year Structural Warranty"
    ],
    "efficiencyHighlights": [
      "Non-stop 24/7 silent ventilation",
      "Reduces factory ambient temperature significantly",
      "Eliminates humidity and condensation on structural purlins"
    ],
    "workingTheory": "Natural wind and thermal buoyancy turn the turbine vanes, generating centrifugal suction that extracts hot air through the roof neck.",
    "applications": [
      "Steel & Metal Fabrication Mills",
      "Textile & Weaving Sheds",
      "Plastic & Rubber Processing Units",
      "Automobile Workshops",
      "Commercial Storage Godowns"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Sheet",
      "airflowCfm": "1,200 to 2,400 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/WhatsApp Image 2026-09-04 at 11.21.43 (1).jpeg",
    "galleryImages": [
      "/images/products/WhatsApp Image 2026-09-04 at 11.21.41 (1).jpeg",
      "/images/products/WhatsApp Image 2026-09-04 at 11.21.41 (2).jpeg"
    ],
    "faqs": [
      {
        "question": "How do turbine ventilators handle high humidity and rain?",
        "answer": "The curved vane geometry spins raindrops outward via centrifugal force, while the sealed bearings are protected by internal and external seals against humidity."
      }
    ]
  },
  {
    "id": "wind-turbine-ventilator",
    "slug": "wind-turbine-ventilator",
    "legacySlug": "wind-turbine-ventilator.php",
    "name": "Wind Turbine Ventilator",
    "h1Title": "Wind Turbine Ventilator Manufacturer in India | Simpovent®",
    "metaTitle": "Wind Turbine Ventilator Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Wind Turbine Ventilators deliver high-performance zero-power exhaust ventilation for metal roof industrial buildings across India.",
    "focusKeywords": [
      "Wind Turbine Ventilator",
      "wind turbine roof ventilator",
      "turbine ventilator",
      "turbo ventilator",
      "roof ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "High-capacity wind turbine ventilator engineered with 42 Hindalco aluminium curved vanes for maximum industrial thermal exhaust.",
    "fullDescription": [
      "The Simpovent® Wind Turbine Ventilator combines aerodynamic turbine design with heavy-duty construction for demanding factory environments.",
      "Spinning silently on dual sealed precision bearings, it converts natural wind energy into continuous exhaust suction without consuming any electricity.",
      "Backed by an ISO 9001:2015 certified manufacturing facility in Vasai, Maharashtra."
    ],
    "keyFeatures": [
      "100% Free Natural Power (0 Watts Electricity)",
      "42 Curved Hindalco 8011 Aluminium Vanes",
      "Stainless Steel SS 304 Top Cover & Center Shaft",
      "Dual Sealed HCH 6001 ZZ Ball Bearings",
      "Custom Profile FRP Base Plates Available"
    ],
    "efficiencyHighlights": [
      "Continuous silent thermal extraction around the clock",
      "Protects raw materials and finished goods from moisture damage",
      "Significantly improves worker comfort and productivity"
    ],
    "workingTheory": "Ambient wind drives the aerodynamic vanes, creating a low-pressure vortex that draws hot indoor air and smoke out through the roof.",
    "applications": [
      "Foundries & Forging Shops",
      "Engineering & Fabrication Sheds",
      "Chemical Processing Plants",
      "Warehouses & Distribution Hubs",
      "Plastic & Rubber Manufacturing Units"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Sheet",
      "airflowCfm": "1,200 to 2,400 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/WhatsApp Image 2026-09-04 at 11.21.41 (1).jpeg",
    "galleryImages": [
      "/images/products/WhatsApp Image 2026-09-04 at 11.21.41 (2).jpeg",
      "/images/products/wind-turbine-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "What is the delivery time for bulk orders across India?",
        "answer": "We maintain ready stock of standard 21\" and 24\" units and can dispatch large quantities within 24 to 48 hours directly from our Vasai factory."
      }
    ]
  },
  {
    "id": "powerless-ventilator",
    "slug": "powerless-ventilator",
    "legacySlug": "powerless-ventilator.php",
    "name": "Powerless Ventilator",
    "h1Title": "Powerless Ventilator Manufacturer & Industrial Roof Solutions",
    "metaTitle": "Powerless Ventilator Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Powerless Ventilators provide zero-electricity, 100% eco-friendly industrial roof ventilation for factory sheds, PEB buildings, and warehouses.",
    "focusKeywords": [
      "Powerless Ventilator",
      "powerless roof ventilator",
      "zero power ventilator",
      "wind ventilator",
      "turbo ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Zero-electricity industrial roof ventilator engineered to provide non-stop thermal exhaust without running costs or electrical wiring.",
    "fullDescription": [
      "The Simpovent® Powerless Ventilator is designed for industrial enterprises committed to energy conservation, environmental sustainability, and zero operating costs.",
      "Operating completely without electricity, it utilizes ambient wind velocity and thermal convection to continuously exhaust accumulated heat and fumes.",
      "Manufactured using aerospace-grade Hindalco Aluminium 8011 vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings."
    ],
    "keyFeatures": [
      "0 Watts Electricity Required (100% Zero Power)",
      "Aerodynamic 42-Vane Rotor Cage",
      "Hindalco 8011 Aluminium Construction",
      "Dual HCH Sealed Bearings with High-Temp Lubrication",
      "10-Year Comprehensive Structural Warranty"
    ],
    "efficiencyHighlights": [
      "Zero recurring electricity bills and zero carbon emissions",
      "Lowers factory indoor temperature by 4°C to 8°C",
      "Provides silent, vibration-free exhaust 24/7"
    ],
    "workingTheory": "Operates purely on ambient breeze and thermal updrafts. The spinning vanes create a continuous low-pressure zone at the throat to pull interior air upwards.",
    "applications": [
      "PEB Warehouses & Logistics Hubs",
      "Textile & Garment Mills",
      "Engineering & Fabrication Sheds",
      "Chemical & Pharmaceutical Units",
      "Agricultural Storage Facilities"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Profile Sheet",
      "airflowCfm": "1,200 to 2,400 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/WhatsApp Image 2026-09-04 at 11.21.41 (2).jpeg",
    "galleryImages": [
      "/images/products/WhatsApp Image 2026-09-04 at 11.21.41.jpeg",
      "/images/products/powerless-ventilators.jpg"
    ],
    "faqs": [
      {
        "question": "Can powerless ventilators be installed on existing factory roofs?",
        "answer": "Yes, our custom-moulded FRP base plates replace standard roof sheet profiles directly, allowing fast, seamless installation without roof restructuring."
      }
    ]
  },
  {
    "id": "eco-ventilator",
    "slug": "eco-ventilator",
    "legacySlug": "eco-ventilator.php",
    "name": "Eco Ventilator",
    "h1Title": "Eco Ventilator Manufacturer & Green Building Ventilation",
    "metaTitle": "Eco Ventilator Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Eco Ventilators provide sustainable, zero-carbon, zero-power industrial roof ventilation for eco-conscious factories and warehouses.",
    "focusKeywords": [
      "Eco Ventilator",
      "eco friendly roof ventilator",
      "green roof ventilator",
      "zero carbon ventilator",
      "turbo ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Sustainable, zero-carbon industrial roof ventilator engineered for green factories, PEB buildings, and LEED-certified facilities.",
    "fullDescription": [
      "The Simpovent® Eco Ventilator represents the ultimate in sustainable industrial roof ventilation.",
      "By eliminating all electrical power requirements, it helps manufacturing plants achieve their carbon neutrality and ESG sustainability targets.",
      "Engineered with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings for lifetime maintenance-free performance."
    ],
    "keyFeatures": [
      "100% Eco-Friendly & Zero Carbon Footprint",
      "Zero Operational Cost - 0 Watts Electricity",
      "Hindalco 8011 Grade High-Tensile Aluminium Vanes",
      "Dual HCH Sealed Precision Bearings",
      "10-Year Structural & Rotor Cage Warranty"
    ],
    "efficiencyHighlights": [
      "Earns valuable green building points for IGBC, GRIHA, and LEED certifications",
      "Dramatically lowers shed temperature and improves air circulation",
      "100% recyclable aluminium and stainless steel construction"
    ],
    "workingTheory": "Natural breeze drives the lightweight rotor cage, creating vacuum suction at the throat that exhausts hot, stale indoor air without electricity.",
    "applications": [
      "LEED & Green Certified Factories",
      "Food & Beverage Processing Sheds",
      "Pharmaceutical Manufacturing Plants",
      "Textile & Garment Facilities",
      "Logistics Warehouses & Godowns"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Profile Sheet",
      "airflowCfm": "1,200 to 2,400 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/WhatsApp Image 2026-09-04 at 11.21.41.jpeg",
    "galleryImages": [
      "/images/products/WhatsApp Image 2026-09-04 at 11.21.42 (1).jpeg",
      "/images/products/eco-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "How does the Eco Ventilator contribute to ESG compliance?",
        "answer": "By replacing energy-intensive powered exhaust fans with zero-power Simpovent® Eco Ventilators, factories reduce Scope 2 indirect carbon emissions significantly."
      }
    ]
  },
  {
    "id": "roof-extractor",
    "slug": "roof-extractor",
    "legacySlug": "roof-extractor.php",
    "name": "Roof Extractor",
    "h1Title": "Industrial Roof Extractor Manufacturer in India | Simpovent®",
    "metaTitle": "Roof Extractor Manufacturer & Industrial Ventilation | Simpovent®",
    "metaDescription": "Simpovent® Roof Extractors provide high-efficiency passive air exhaust for metal factory sheds, PEB buildings, and warehouses across India.",
    "focusKeywords": [
      "Roof Extractor",
      "roof extractor fan",
      "industrial roof extractor",
      "factory roof extractor",
      "roof exhaust",
      "turbo ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "High-efficiency passive industrial roof extractor designed to continuously exhaust accumulated heat, smoke, and moisture from factory sheds.",
    "fullDescription": [
      "The Simpovent® Roof Extractor is engineered for severe industrial factory environments where massive thermal buildup occurs under metal roof profiles.",
      "Operating completely without electricity, it utilizes ambient wind and thermal convection to evacuate hot air through the roof continuously.",
      "Manufactured with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings."
    ],
    "keyFeatures": [
      "Continuous Natural Thermal Extraction (Zero Electricity)",
      "42 Precision Curved Hindalco Aluminium Vanes",
      "Dual HCH Sealed Precision Bearings",
      "Custom FRP Base Plate for Exact Sheet Fit",
      "10-Year Comprehensive Structural Warranty"
    ],
    "efficiencyHighlights": [
      "Evacuates up to 2,400 CFM per unit in normal breeze",
      "Prevents condensation of corrosive moisture on metal purlins",
      "Reduces factory ambient temperature by 4°C to 8°C"
    ],
    "workingTheory": "Combines aerodynamic wind velocity with the thermal chimney effect to generate continuous vertical air extraction through the roof deck.",
    "applications": [
      "Foundries & Forging Shops",
      "Engineering & Fabrication Sheds",
      "Chemical Processing Units",
      "Warehouses & Distribution Hubs",
      "Automobile Assembly Plants"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Profile Sheet",
      "airflowCfm": "1,200 to 2,400 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/WhatsApp Image 2026-09-04 at 11.21.42 (1).jpeg",
    "galleryImages": [
      "/images/products/WhatsApp Image 2026-09-04 at 11.21.42 (3).jpeg",
      "/images/products/turbo-ventilator-2.jpg"
    ],
    "faqs": [
      {
        "question": "Is the Roof Extractor resistant to chemical corrosion?",
        "answer": "Yes, Hindalco 8011 aluminium and SS 304 hardware provide excellent resistance against chemical fumes, acid vapors, and coastal salt air."
      }
    ]
  },
  {
    "id": "wind-ventilator",
    "slug": "wind-ventilator",
    "legacySlug": "wind-ventilator.php",
    "name": "Wind Ventilator",
    "h1Title": "Wind Ventilator Manufacturer in India | Simpovent®",
    "metaTitle": "Wind Ventilator Manufacturer & Supplier India | Simpovent®",
    "metaDescription": "Simpovent® Wind Ventilators provide 100% free, zero-electricity natural ventilation for factories, mills, and warehouses across India.",
    "focusKeywords": [
      "Wind Ventilator",
      "wind roof ventilator",
      "wind driven ventilator",
      "industrial wind ventilator",
      "turbo ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Zero-power wind-driven roof ventilator engineered with Hindalco aluminium vanes for reliable, continuous industrial ventilation.",
    "fullDescription": [
      "The Simpovent® Wind Ventilator is a reliable, cost-effective solution for industrial ventilation across India.",
      "Requiring zero electrical power, it harnesses natural wind breezes to evacuate trapped process heat, humidity, and fumes from factory sheds.",
      "Manufactured with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings."
    ],
    "keyFeatures": [
      "Zero Operating Costs (100% Wind & Thermal Powered)",
      "Hindalco 8011 Aluminium Vanes with SS 304 Fasteners",
      "Dual HCH Sealed Precision Bearings",
      "100% Weatherproof & Leakproof FRP Matching Base",
      "10-Year Structural & Rotor Cage Warranty"
    ],
    "efficiencyHighlights": [
      "Reduces factory interior temperature by 4°C to 8°C",
      "Operates silently 24/7 without vibrations or motor hum",
      "Completely maintenance-free sealed bearing assembly"
    ],
    "workingTheory": "Natural wind spinning the aerodynamic vanes creates negative pressure inside the cowl, drawing warm indoor air through the throat.",
    "applications": [
      "PEB Industrial Buildings",
      "Manufacturing & Assembly Plants",
      "Warehouses & Godowns",
      "Textile & Garment Mills",
      "Boiler & Generator Rooms"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Profile Sheet",
      "airflowCfm": "1,200 to 2,400 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/wind-driven-ventilator-simpovent.jpg",
    "galleryImages": [
      "/images/products/WhatsApp Image 2026-09-09 at 4.28.51 PM.jpeg",
      "/images/products/WhatsApp Image 2026-09-04 at 12.34.45 (3).jpeg",
      "/images/products/turbo-ventilator-3.jpg"
    ],
    "faqs": [
      {
        "question": "How do I get a quotation for Simpovent® Wind Ventilators?",
        "answer": "Click the 'Enquire Now' or 'Get Quotation' button on this page, or contact our sales team on WhatsApp (+91 72628 60283) with your shed dimensions for an instant factory-direct quote."
      }
    ]
  }
];
