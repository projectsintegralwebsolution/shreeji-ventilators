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
  category: "wind-driven" | "motorized-hybrid" | "industrial-exhaust" | "accessories";
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
    "id": "turbo-ventilator",
    "slug": "turbo-ventilator",
    "legacySlug": "turbo-ventilator.php",
    "name": "Turbo Ventilator",
    "h1Title": "Industrial Turbo Ventilator Manufacturer & Supplier in India",
    "metaTitle": "Turbo Ventilator Manufacturer in Vasai, Mumbai, Pune, India | Shreeji",
    "metaDescription": "Shreeji Sales Corporation is a premier Turbo Ventilator manufacturer in Vasai, Mumbai, Pune, Maharashtra, Gujarat, Rajasthan & India. Zero power, noiseless, ISO 9001:2015 certified.",
    "focusKeywords": [
      "Turbo Ventilator",
      "Turbo Ventilator manufacturer",
      "Turbo Ventilator in Mumbai",
      "Turbo Ventilator Pune",
      "Turbo Ventilator Vasai",
      "Industrial Turbo Ventilator India"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "High-performance wind-driven roof turbo ventilator engineered with 42 Hindalco aluminium curved vanes and dual sealed bearings for 24/7 continuous silent ventilation.",
    "fullDescription": [
      "Shreeji Sales Corporation (Simpovent) is a pioneer in developing high-efficiency Turbo Ventilators designed for severe industrial factory sheds, commercial warehouses, and manufacturing plants across India.",
      "The Turbo Ventilator operates completely without electricity, utilizing the natural velocity energy of ambient breeze and thermal convection to continuously exhaust accumulated process heat, smoke, humidity, and toxic fumes.",
      "Manufactured using aerospace-grade Hindalco Aluminium 8011 vanes, heavy-gauge Stainless Steel SS 304 top covers, and precision dual HCH 6001 ZZ deep-groove sealed ball bearings, the Shreeji Turbo Ventilator guarantees zero maintenance, total rain resistance, and maximum exhaust efficiency for over a decade."
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
      "basePlateSize": "1650 MM x 1100 MM (Custom matching roof corrugation)",
      "basePlateMoc": "Heavy Duty FRP (Fiberglass Reinforced Plastic) / Polycarbonate",
      "shaftThickness": "125 MM",
      "shaftLength": "280 MM",
      "shaftMoc": "EN-8 Mild Steel / Stainless Steel",
      "bladeLength": "430 MM",
      "bladeWidth": "70 MM",
      "bladeThickness": "0.5 MM to 0.7 MM",
      "bladeMoc": "Hindalco Make Aluminium (Grade 8011)",
      "bladeCount": "42 Nos. Curved Aerodynamic Vanes",
      "airflowCfm": "1,850 - 3,200 CFM (depending on wind velocity 5-15 km/h)",
      "powerConsumption": "0 Watts (100% Wind & Thermal Driven)"
    },
    "image": "/images/products/turbo-ventilator.jpg",
    "galleryImages": [
      "/images/products/turbo-ventilator.jpg",
      "/images/products/roof-ventilator.jpg",
      "/images/products/frp-base-plate.jpg"
    ],
    "faqs": [
      {
        "question": "How does the Shreeji Turbo Ventilator function during heavy monsoons?",
        "answer": "Our Turbo Ventilators feature curved aerodynamic vanes with capillary water deflectors. Rainwater slides along the outer rim and is cast off centrifugally without entering the throat, ensuring 100% leakproof protection."
      },
      {
        "question": "What is the expected operational lifespan of this Turbo Ventilator?",
        "answer": "Constructed with Hindalco Aluminium and SS 304 components with sealed HCH bearings, our Turbo Ventilators have an operational lifespan of 15+ years with zero maintenance."
      }
    ]
  },
  {
    "id": "heavy-duty-industrial-exhaust-fan",
    "slug": "heavy-duty-industrial-exhaust-fan",
    "legacySlug": "heavy-duty-industrial-exhaust-fan.php",
    "name": "Heavy Duty Industrial Exhaust Fan",
    "h1Title": "Heavy Duty Industrial Exhaust Fan Manufacturer in India",
    "metaTitle": "Heavy Duty Industrial Exhaust Fan Manufacturer & Supplier India | Shreeji",
    "metaDescription": "Heavy Duty Industrial Exhaust Fan manufacturer in India for factories, warehouses, foundries & chemical plants. High CFM, roof/wall mountable, heavy duty motor.",
    "focusKeywords": [
      "Heavy Duty Industrial Exhaust Fan",
      "Industrial Exhaust Fan Manufacturer in India",
      "Factory Exhaust Fan",
      "Roof Exhaust Fan",
      "Wall Mounted Industrial Exhaust Fan"
    ],
    "category": "industrial-exhaust",
    "categoryLabel": "Heavy Duty Powered Exhaust Fan",
    "shortDescription": "Industrial-grade powered exhaust fan system engineered for high-heat, dense smoke, toxic chemical fumes, and heavy airborne dust extraction in factories.",
    "fullDescription": [
      "A Heavy Duty Industrial Exhaust Fan is specifically engineered for demanding factory environments, steel plants, chemical processing units, and large warehouse facilities where passive natural ventilation must be augmented by powerful mechanical air displacement.",
      "By continuously extracting massive volumes of stale, contaminated, and superheated air, the fan prevents heat pockets, evacuates hazardous fumes, and maintains healthy workplace air quality in compliance with industrial safety regulations.",
      "Shreeji Simpovent builds heavy duty industrial exhaust fans equipped with IP55/IP65 cast-iron motors, aerofoil aluminium/SS impellers, and heavy-gauge aerodynamic housing suitable for both roof-mounted cowls and external wall installations."
    ],
    "keyFeatures": [
      "High Airflow Volume (Up to 18,000 CFM per unit)",
      "Continuous Duty Class 'F' / 'H' insulated industrial motors",
      "Precision dynamically balanced aerofoil blades for minimal vibration",
      "Available in 18\", 24\", 30\", 36\", 48\", and 54\" blade diameters",
      "Dual mounting versatility: Roof-mounted cowl with FRP base or wall-mount louver frame",
      "Corrosion-resistant powder coating & stainless steel hardware"
    ],
    "efficiencyHighlights": [
      "Rapidly eliminates intense heat buildup from melting furnaces and boilers",
      "Discharges toxic welding fumes, solvent vapors, and paint booth overspray",
      "Low specific power consumption (kWh/CFM)",
      "Thermal overload and phase-failure protection integration"
    ],
    "workingTheory": "The heavy duty industrial exhaust fan utilizes an aerodynamically optimized axial or centrifugal impeller driven by an industrial electric motor. As the high-torque impeller rotates, it creates high static pressure that forces stale air out through exhaust dampers while inducing fresh air through building louvers.",
    "applications": [
      "Steel Foundries, Smelting & Forging Plants",
      "Welding, Cutting & CNC Machining Workshops",
      "Chemical, Dye & Fertilizer Plants",
      "Paint Booths & Powder Coating Facilities",
      "Boiler Houses & Thermal Power Enclosures",
      "Heavy Machinery & Automotive Manufacturing",
      "Large Logistics Warehouses with Heavy Heat Loads"
    ],
    "specs": {
      "throatDia": "24\" (600mm) / 36\" (900mm) / 48\" (1200mm) / 54\" (1370mm)",
      "outerDia": "32\" to 58\" frame",
      "bearingSize": "Heavy Duty Pillow Block / Sealed Ball Bearings",
      "bearingMake": "SKF / HCH / NBC",
      "shaftMoc": "High Tensile Carbon Steel EN-9",
      "bladeMoc": "Die-Cast Aerofoil Aluminium / Galvanized Steel / SS 304",
      "bladeCount": "3 to 6 Aerofoil Blades",
      "airflowCfm": "4,500 CFM to 22,000 CFM",
      "powerConsumption": "0.5 HP to 5.0 HP (415V 3-Phase / 230V 1-Phase)"
    },
    "image": "/images/products/heavy-duty-industrial-exhaust-fan.jpg",
    "galleryImages": [
      "/images/products/heavy-duty-industrial-exhaust-fan.jpg",
      "/images/products/exhaust-installation-1.jpg"
    ],
    "faqs": [
      {
        "question": "Can this exhaust fan be mounted on both roof and wall?",
        "answer": "Yes. For roof installations, we provide matching FRP adapter base curbs and weather cowls. For wall installations, we provide heavy-gauge steel wall mounting frames with gravity backdraft shutters."
      },
      {
        "question": "Is the motor flame-proof for hazardous chemical sheds?",
        "answer": "Yes, we offer both standard TEFC (Totally Enclosed Fan Cooled) IP55 motors and certified Flameproof / Explosion-Proof (FLP) motors for Zone 1 and Zone 2 hazardous areas."
      }
    ]
  },
  {
    "id": "roof-air-ventilator",
    "slug": "roof-air-ventilator",
    "legacySlug": "roof-air-ventilator.php",
    "name": "Roof Air Ventilator",
    "h1Title": "Industrial Roof Air Ventilator Manufacturer in India",
    "metaTitle": "Roof Air Ventilator Manufacturer in Vasai, Mumbai, Pune | Shreeji",
    "metaDescription": "Top Roof Air Ventilator manufacturer & supplier in Maharashtra, Gujarat, Rajasthan & India. Zero power, Hindalco aluminium, 10-year warranty, ISO 9001:2015.",
    "focusKeywords": [
      "Roof Air Ventilator",
      "Roof Air Ventilator manufacturer",
      "Industrial Roof Air Ventilator",
      "Roof Air Ventilator in Mumbai",
      "Roof Air Ventilator Pune"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Premium industrial roof air ventilator providing continuous natural air changes without electricity. Engineered for PEB sheds and warehouses.",
    "fullDescription": [
      "Shreeji Simpovent Roof Air Ventilators are engineered to provide maximum air displacement across industrial sheds, PEB buildings, and commercial establishments.",
      "Installed directly on roof crests or corrugated slopes, the Roof Air Ventilator draws rising warm air and replaces it with refreshing ambient air, creating natural cross-ventilation.",
      "Fabricated using high-grade Hindalco Aluminium and rust-proof stainless steel fittings, our roof air ventilators deliver unmatched durability across coastal and industrial environments."
    ],
    "keyFeatures": [
      "Natural 24-hour continuous ventilation with zero energy cost",
      "Lightweight, balanced rotor design spins at minimal wind speed",
      "Heavy gauge aluminium vanes with rolled edges for structural rigidity",
      "Hermetically sealed dual ball bearings protected against dust and moisture",
      "Weather-sealed FRP base plate matching all metal sheet profiles"
    ],
    "efficiencyHighlights": [
      "Reduces structural thermal stress on roof sheets",
      "Improves breathable oxygen levels across workshop floor",
      "Prevents rust and corrosion of metal machinery"
    ],
    "workingTheory": "Harnesses natural thermal siphon and wind draft across the roof apex to induce rapid centrifugal exhaust suction.",
    "applications": [
      "Warehouses",
      "Foundries",
      "Packaging Units",
      "Workshops",
      "Boiler Sheds",
      "Textile Mills"
    ],
    "specs": {
      "throatDia": "21\" (530 MM) / 24\" (610 MM)",
      "outerDia": "28\" / 30\"",
      "bladeMoc": "Hindalco Aluminium (Grade 8011)",
      "bearingMake": "HCH Sealed Ball Bearings 6001 ZZ",
      "bladeCount": "36 to 42 Blades",
      "airflowCfm": "1,800 - 3,100 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/roof-air-ventilator.jpg",
    "galleryImages": [
      "/images/products/roof-air-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "How is the Roof Air Ventilator fixed to metal roofing?",
        "answer": "It is mounted on a custom FRP/Polycarbonate base plate that matches your roof's profile (Trapezoidal, Tata Bluescope, Kirby, Asbestos) and fastened with self-drilling stainless steel screws and silicone sealant."
      }
    ]
  },
  {
    "id": "turbo-air-ventilator",
    "slug": "turbo-air-ventilator",
    "legacySlug": "turbo-air-ventilator.php",
    "name": "Turbo Air Ventilator",
    "h1Title": "Simpovent Turbo Air Ventilator Manufacturer in India",
    "metaTitle": "Turbo Air Ventilator Manufacturer in Maharashtra, Gujarat, India | Shreeji",
    "metaDescription": "Manufacturer of Turbo Air Ventilator under Simpovent brand. 100% noiseless, maintenance-free, wind-driven technology for industrial sheds.",
    "focusKeywords": [
      "Turbo Air Ventilator",
      "Turbo Air Ventilator Manufacturer",
      "Turbo Air Ventilator Suppliers",
      "Simpovent Turbovent Air Ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Simpovent Turbo Air Ventilator designed with precision aerodynamic vanes for maximum CFM extraction in high-temperature industrial environments.",
    "fullDescription": [
      "The Simpovent Turbo Air Ventilator by Shreeji Sales Corporation is acclaimed across India for exceptional durability, silent operation, and high exhaust capacity.",
      "Engineered specifically for extreme Indian summer temperatures and monsoon conditions, it maintains continuous indoor air circulation, preventing heat stress for factory workers."
    ],
    "keyFeatures": [
      "High durability Hindalco Aluminium construction",
      "Noiseless operation with precision-balanced central shaft",
      "Zero operating and maintenance expenses",
      "Seamless integration with PEB and industrial roofing"
    ],
    "efficiencyHighlights": [
      "100% Green Energy",
      "Lowers indoor ambient temperature",
      "Quick return on investment"
    ],
    "workingTheory": "Centrifugal vane rotation draws high volumes of hot air and moisture upwards and exhausts them into the atmosphere.",
    "applications": [
      "Industrial Plants",
      "Sugar Factories",
      "Plastic Moulding",
      "Warehouses",
      "Power Plants"
    ],
    "specs": {
      "throatDia": "24\" (610 MM)",
      "outerDia": "30\" (760 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "bearingMake": "HCH 6001 ZZ",
      "bladeCount": "42 Nos.",
      "airflowCfm": "2,000 - 3,200 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/turbo-air-ventilator.jpg",
    "galleryImages": [
      "/images/products/turbo-air-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "Why choose Simpovent Turbo Air Ventilators?",
        "answer": "Simpovent is an established brand since 2005 with over 100,000 units installed across top industrial conglomerates in India, backed by ISO 9001:2015 quality standards."
      }
    ]
  },
  {
    "id": "wind-driven-ventilator",
    "slug": "wind-driven-ventilator",
    "legacySlug": "wind-driven-ventilator.php",
    "name": "Wind Driven Ventilator",
    "h1Title": "Wind Driven Ventilator Manufacturer & Exporter in India",
    "metaTitle": "Wind Driven Ventilator Manufacturer in India | Shreeji Sales Corporation",
    "metaDescription": "Heavy-duty Wind Driven Ventilator manufacturer in Vasai, Mumbai, Pune, India. 100% wind powered, zero electricity, 42 aerodynamic vanes, ISO certified.",
    "focusKeywords": [
      "Wind Driven Ventilator",
      "Wind Driven Ventilator manufacturer",
      "Wind Driven Roof Ventilator",
      "Wind Driven Ventilators in India"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Ecological wind-driven ventilator that utilizes natural wind energy to generate continuous positive air changes inside industrial sheds.",
    "fullDescription": [
      "Our Wind Driven Ventilators harness the kinetic energy of external wind currents to spin the turbine rotor cage, creating continuous negative air pressure at the base.",
      "This negative pressure extracts stagnant hot air, chemical fumes, and airborne dust particles, replacing them with clean fresh outdoor air."
    ],
    "keyFeatures": [
      "Spins smoothly in winds as low as 1.5 km/h",
      "Corrosion-resistant aluminium and stainless steel construction",
      "Zero wiring, zero motors, zero operational expense",
      "Compatible with all industrial roofing profiles"
    ],
    "efficiencyHighlights": [
      "Zero power required",
      "Non-stop 24/7 ventilation",
      "Reduces factory heat stress"
    ],
    "workingTheory": "Kinetic wind energy drives the curved aerodynamic vanes, generating centrifugal suction that evacuates warm indoor air.",
    "applications": [
      "Chemical Plants",
      "Engineering Workshops",
      "Warehouses",
      "Garment Factories",
      "Foundries"
    ],
    "specs": {
      "throatDia": "21\" / 24\"",
      "outerDia": "28\" / 30\"",
      "bladeMoc": "Hindalco Aluminium",
      "bearingMake": "Dual Sealed Ball Bearings",
      "bladeCount": "42 Vanes",
      "airflowCfm": "1,900 - 3,200 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/wind-driven-ventilator.jpg",
    "galleryImages": [
      "/images/products/wind-driven-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "Does it work when there is no wind?",
        "answer": "Yes. Even in dead calm conditions, thermal convection (hot air rising) causes the ventilator to spin naturally via the stack effect, maintaining continuous ventilation."
      }
    ]
  },
  {
    "id": "wind-operate-ventilator",
    "slug": "wind-operate-ventilator",
    "legacySlug": "wind-operate-ventilator.php",
    "name": "Wind Operate Ventilator",
    "h1Title": "Wind Operated Ventilator Manufacturer in Maharashtra, India",
    "metaTitle": "Wind Operate Ventilator Manufacturer in Mumbai, Pune, India | Shreeji",
    "metaDescription": "Leading Wind Operate Ventilator manufacturer in India. Premium aluminium blades, dual sealed bearings, zero maintenance, best prices for industrial sheds.",
    "focusKeywords": [
      "Wind Operate Ventilator",
      "Wind Operated Ventilator",
      "Wind Operate Roof Ventilator",
      "Wind Operated Turbo Ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Self-rotating wind operated ventilator that converts natural breeze into powerful upward suction for industrial air cleaning.",
    "fullDescription": [
      "Shreeji Wind Operate Ventilators are designed for heavy-duty industrial ventilation where reliable air extraction is necessary without ongoing power bills.",
      "The precision-balanced rotor head rotates effortlessly, delivering consistent air exhaustion and a cooler workplace."
    ],
    "keyFeatures": [
      "Self-lubricated dual ball bearing assembly",
      "Anti-acid and anti-corrosion materials",
      "High rotational balance preventing roof vibrations",
      "Easy installation on PEB and asbestos sheds"
    ],
    "efficiencyHighlights": [
      "100% Natural operation",
      "Reduces factory energy footprint",
      "Storm-tested design"
    ],
    "workingTheory": "Thermal expansion and external air currents work in tandem to spin the turbine head and exhaust air.",
    "applications": [
      "Industrial Workshops",
      "Go-downs",
      "Power Houses",
      "Assembly Lines"
    ],
    "specs": {
      "throatDia": "24\" (610 MM)",
      "outerDia": "30\" (760 MM)",
      "bladeMoc": "Aluminium 8011",
      "bearingMake": "HCH 6001 ZZ",
      "bladeCount": "42 Nos.",
      "airflowCfm": "2,000 - 3,200 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/wind-operate-ventilator.jpg",
    "galleryImages": [
      "/images/products/wind-operate-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "How long does installation take?",
        "answer": "A standard industrial installation of 10-30 units typically takes just 1 to 2 days without interrupting factory production."
      }
    ]
  },
  {
    "id": "natural-air-ventilator",
    "slug": "natural-air-ventilator",
    "legacySlug": "natural-air-ventilator.php",
    "name": "Natural Air Ventilator",
    "h1Title": "Natural Air Ventilator Manufacturer in India",
    "metaTitle": "Natural Air Ventilator Manufacturer in Mumbai, Pune, India | Shreeji",
    "metaDescription": "Natural Air Ventilator manufacturer in India. 100% natural, green-building compliant, zero power, aluminium construction by Shreeji Sales Corporation.",
    "focusKeywords": [
      "Natural Air Ventilator",
      "Natural Air Roof Ventilator",
      "Natural Ventilation System India",
      "Natural Air Ventilator manufacturer"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Zero-energy natural air ventilator designed to harness natural thermal stack dynamics and wind currents for green building ventilation.",
    "fullDescription": [
      "The Natural Air Ventilator by Shreeji Simpovent is the ideal solution for modern eco-friendly green buildings, LEED-certified industrial parks, and sustainable warehouses.",
      "By eliminating the need for electrical exhaust systems, it drastically slashes electricity consumption while maintaining optimal indoor air quality."
    ],
    "keyFeatures": [
      "LEED Green Building point compliant",
      "100% Recyclable Hindalco aluminium and SS materials",
      "Zero carbon emissions during operation",
      "Weatherproof seal with custom FRP base plates"
    ],
    "efficiencyHighlights": [
      "100% Eco-friendly",
      "Reduces warehouse humidity",
      "Prevents condensation on inventory"
    ],
    "workingTheory": "Operates using natural buoyancy (hot air rising) and external air movement over aerodynamic rotor vanes.",
    "applications": [
      "Green Logistics Parks",
      "Warehouses",
      "Agricultural Sheds",
      "Manufacturing Units"
    ],
    "specs": {
      "throatDia": "21\" / 24\"",
      "outerDia": "28\" / 30\"",
      "bladeMoc": "Aluminium",
      "bearingMake": "HCH Sealed Bearings",
      "bladeCount": "42 Vanes",
      "airflowCfm": "1,800 - 3,000 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/natural-air-ventilator.jpg",
    "galleryImages": [
      "/images/products/natural-air-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "Is it suitable for green building certifications?",
        "answer": "Yes, our natural air ventilators qualify for energy efficiency and sustainable design credits in IGBC, GRIHA, and LEED green building rating systems."
      }
    ]
  },
  {
    "id": "roof-ventilator",
    "slug": "roof-ventilator",
    "legacySlug": "roof-ventilator.php",
    "name": "Roof Ventilator",
    "h1Title": "Industrial Roof Ventilator Manufacturer & Supplier",
    "metaTitle": "Industrial Roof Ventilator Manufacturer in Mumbai, Pune, India | Shreeji",
    "metaDescription": "Manufacturer of high quality industrial Roof Ventilators in India. Custom FRP base plates, aluminium vanes, 10-year warranty, ISO 9001:2015 certified.",
    "focusKeywords": [
      "Roof Ventilator",
      "Industrial Roof Ventilator",
      "Roof Ventilator manufacturer",
      "Roof Ventilator suppliers in India"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Heavy-duty industrial roof ventilator providing reliable, silent air exhaustion for PEB sheds, factory roofs, and industrial buildings.",
    "fullDescription": [
      "Shreeji Roof Ventilators are engineered to withstand the harshest industrial and coastal atmospheric conditions while providing relentless ventilation.",
      "Supplied with custom-molded base plates matching any roof sheet profile, installation is quick, clean, and 100% leakproof."
    ],
    "keyFeatures": [
      "Rigid stainless steel and aluminium architecture",
      "Custom FRP base plates matching all roofing brands",
      "Smooth rotational balance with zero vibration",
      "Resistant to UV rays, acid vapors, and heavy rain"
    ],
    "efficiencyHighlights": [
      "Zero electricity",
      "Zero maintenance",
      "Long 15+ year operational life"
    ],
    "workingTheory": "Thermal convection and wind pressure combine to rotate the turbine head and pull out hot air.",
    "applications": [
      "Industrial Roofs",
      "Metal Buildings",
      "Cement Plants",
      "Warehouses"
    ],
    "specs": {
      "throatDia": "24\" (610 MM)",
      "outerDia": "30\" (760 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
      "bearingMake": "HCH 6001 ZZ",
      "bladeCount": "42 Nos.",
      "airflowCfm": "2,000 - 3,200 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/roof-ventilator.jpg",
    "galleryImages": [
      "/images/products/roof-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "Can it be installed on existing older sheds?",
        "answer": "Yes, our technicians or your local fabricators can easily install it on existing roofs by cutting a circular hole and securing our custom profile base plate."
      }
    ]
  },
  {
    "id": "turbine-ventilator",
    "slug": "turbine-ventilator",
    "legacySlug": "turbine-ventilator.php",
    "name": "Turbine Ventilator",
    "h1Title": "Industrial Turbine Ventilator Manufacturer in India",
    "metaTitle": "Turbine Ventilator Manufacturer in Maharashtra, Gujarat, India | Shreeji",
    "metaDescription": "Manufacturer of high performance Turbine Ventilator for factories & warehouses. 100% wind driven, noiseless, ISO 9001:2015 certified by Shreeji Sales Corporation.",
    "focusKeywords": [
      "Turbine Ventilator",
      "Turbine Ventilator manufacturer",
      "Industrial Turbine Ventilator",
      "Turbine Ventilation System India"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "High-velocity rotating turbine ventilator providing continuous extraction of heat, smoke, and moisture using wind energy.",
    "fullDescription": [
      "The Shreeji Turbine Ventilator operates by utilizing the velocity energy of wind to induce air flow through centrifugal action.",
      "The spinning vanes create a low-pressure area inside the turbine throat, which continuously pulls hot air out of the building."
    ],
    "keyFeatures": [
      "Precision-formed curved vanes for maximum torque",
      "Stainless steel central shaft and upper/lower bearing housings",
      "Noiseless, maintenance-free operation",
      "Available in 21\" and 24\" throat sizes"
    ],
    "efficiencyHighlights": [
      "Zero power needed",
      "Prevents heat entrapment",
      "Improves worker comfort"
    ],
    "workingTheory": "Velocity energy of wind induces centrifugal rotation, expelling air outward and drawing replacement air upwards.",
    "applications": [
      "Boiler Rooms",
      "Foundries",
      "Warehouses",
      "Industrial Sheds"
    ],
    "specs": {
      "throatDia": "24\" (610 MM)",
      "outerDia": "30\" (760 MM)",
      "bladeMoc": "Hindalco Aluminium",
      "bearingMake": "HCH Sealed Bearings",
      "bladeCount": "42 Vanes",
      "airflowCfm": "2,000 - 3,200 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/turbine-ventilator.jpg",
    "galleryImages": [
      "/images/products/turbine-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "Does the turbine ventilator require periodic oiling?",
        "answer": "No. The bearings are sealed and pre-lubricated with high-grade synthetic grease, eliminating any need for oiling or greasing."
      }
    ]
  },
  {
    "id": "wind-turbine-ventilator",
    "slug": "wind-turbine-ventilator",
    "legacySlug": "wind-turbine-ventilator.php",
    "name": "Wind Turbine Ventilator",
    "h1Title": "Wind Turbine Ventilator Manufacturer & Exporter",
    "metaTitle": "Wind Turbine Ventilator Manufacturer in Mumbai, Pune, India | Shreeji",
    "metaDescription": "Manufacturer of Wind Turbine Ventilators in India. High extraction capacity, 42 aluminium vanes, stainless steel top, ISO 9001:2015 certified.",
    "focusKeywords": [
      "Wind Turbine Ventilator",
      "Wind Turbine Roof Ventilator",
      "Wind Turbine Ventilator manufacturer",
      "Wind Turbine Ventilators in India"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Aerodynamically superior wind turbine ventilator engineered for aggressive industrial ventilation requirements without electricity.",
    "fullDescription": [
      "The Wind Turbine Ventilator combines the principles of wind turbine aerodynamics with thermal exhaust dynamics.",
      "Engineered with a robust rotor cage that stores rotational kinetic energy, it continues spinning and extracting air even when the wind momentarily drops."
    ],
    "keyFeatures": [
      "Flywheel rotor effect for continuous rotation",
      "Heavy-duty SS 304 top plate and bottom support ring",
      "High corrosion resistance in industrial environments",
      "10-year structural warranty"
    ],
    "efficiencyHighlights": [
      "Zero operating cost",
      "Continuous round-the-clock air changes",
      "Increases productivity"
    ],
    "workingTheory": "Aerodynamic vanes capture wind from any direction, spinning the rotor head and expelling stale air centrifugally.",
    "applications": [
      "Chemical Plants",
      "Textile Mills",
      "Warehouses",
      "Workshops"
    ],
    "specs": {
      "throatDia": "24\" (610 MM)",
      "outerDia": "30\" (760 MM)",
      "bladeMoc": "Hindalco Aluminium",
      "bearingMake": "HCH 6001 ZZ",
      "bladeCount": "42 Nos.",
      "airflowCfm": "2,000 - 3,200 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/wind-turbine-ventilator.jpg",
    "galleryImages": [
      "/images/products/wind-turbine-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "Can it handle corrosive acidic fumes?",
        "answer": "Yes, for acidic chemical environments we offer specialized SS 304 / SS 316 grade ventilators that resist chemical corrosion."
      }
    ]
  },
  {
    "id": "powerless-ventilator",
    "slug": "powerless-ventilator",
    "legacySlug": "powerless-ventilator.php",
    "name": "Powerless Ventilator",
    "h1Title": "Powerless Ventilator Manufacturer in India",
    "metaTitle": "Powerless Ventilator Manufacturer in Mumbai, Pune, India | Shreeji",
    "metaDescription": "Zero power Powerless Ventilator manufacturer in India. 100% natural, saves electricity, reduces shed temperature, ISO 9001:2015 certified.",
    "focusKeywords": [
      "Powerless Ventilator",
      "Powerless Roof Ventilator",
      "Powerless Air Ventilator",
      "Powerless Ventilator manufacturer India"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Zero-electricity powerless roof ventilator designed to save huge power bills while providing superior factory ventilation.",
    "fullDescription": [
      "Powerless Ventilators provide an eco-friendly and cost-effective alternative to power-hungry exhaust fans.",
      "Operating 100% on natural wind and thermal drafts, they require zero electrical wiring, zero motor maintenance, and zero electricity costs."
    ],
    "keyFeatures": [
      "0 kWh power consumption = 100% electricity savings",
      "Spins smoothly 24 hours a day, 365 days a year",
      "Maintenance-free sealed bearing system",
      "Sturdy aluminium and stainless steel construction"
    ],
    "efficiencyHighlights": [
      "Saves thousands of rupees on monthly electric bills",
      "Zero carbon footprint",
      "Silent operation"
    ],
    "workingTheory": "Thermal convection and wind velocity drive the turbine without any mechanical motor or power source.",
    "applications": [
      "Industrial Sheds",
      "Warehouses",
      "Agricultural Buildings",
      "Boiler Sheds"
    ],
    "specs": {
      "throatDia": "21\" / 24\"",
      "outerDia": "28\" / 30\"",
      "bladeMoc": "Hindalco Aluminium 8011",
      "bearingMake": "HCH 6001 ZZ",
      "bladeCount": "42 Nos.",
      "airflowCfm": "1,800 - 3,200 CFM",
      "powerConsumption": "0 Watts (Zero Electricity)"
    },
    "image": "/images/products/powerless-ventilator.jpg",
    "galleryImages": [
      "/images/products/powerless-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "How much electricity cost can I save?",
        "answer": "Replacing ten 1 HP electric exhaust fans with ten powerless ventilators saves approximately 18,000+ units of electricity per year, paying for the installation within months."
      }
    ]
  },
  {
    "id": "eco-ventilator",
    "slug": "eco-ventilator",
    "legacySlug": "eco-ventilator.php",
    "name": "Eco Ventilator",
    "h1Title": "Eco Ventilator Manufacturer in Maharashtra, India",
    "metaTitle": "Eco Ventilator Manufacturer in Mumbai, Pune, India | Shreeji",
    "metaDescription": "Eco Ventilator manufacturer in India. Green building friendly, 100% sustainable, zero emissions, ISO 9001:2015 certified by Shreeji Sales Corporation.",
    "focusKeywords": [
      "Eco Ventilator",
      "Eco Friendly Roof Ventilator",
      "Eco Ventilator manufacturer",
      "Eco Ventilator suppliers India"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Sustainable eco ventilator designed to reduce carbon footprint and provide clean, healthy indoor factory ventilation.",
    "fullDescription": [
      "The Eco Ventilator is built to support global decarbonization goals and green industrial standards.",
      "Manufactured from high-grade recyclable aluminium, it exhausts heat and fumes cleanly and naturally."
    ],
    "keyFeatures": [
      "100% Recyclable sustainable materials",
      "Zero energy consumption and zero operational emissions",
      "Improves indoor air quality and worker wellness",
      "Weatherproof FRP base plate matching"
    ],
    "efficiencyHighlights": [
      "Carbon neutral",
      "Qualifies for green industrial incentives",
      "Maintenance free"
    ],
    "workingTheory": "Natural aerodynamic rotation driven by atmospheric wind currents.",
    "applications": [
      "Sustainable Factories",
      "Green Warehouses",
      "Commercial Sheds"
    ],
    "specs": {
      "throatDia": "24\" (610 MM)",
      "outerDia": "30\" (760 MM)",
      "bladeMoc": "Hindalco Aluminium",
      "bearingMake": "HCH 6001 ZZ",
      "bladeCount": "42 Nos.",
      "airflowCfm": "2,000 - 3,200 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/eco-ventilator.jpg",
    "galleryImages": [
      "/images/products/eco-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "Is the Eco Ventilator compliant with environmental norms?",
        "answer": "Yes, it conforms to green building guidelines and local pollution control board natural ventilation recommendations."
      }
    ]
  },
  {
    "id": "roof-extractor",
    "slug": "roof-extractor",
    "legacySlug": "roof-extractor.php",
    "name": "Roof Extractor",
    "h1Title": "Industrial Roof Extractor Manufacturer in India",
    "metaTitle": "Roof Extractor Manufacturer in Mumbai, Pune, India | Shreeji",
    "metaDescription": "Manufacturer of Roof Extractors in India for industrial factories, boiler houses & warehouses. High extraction capacity, robust design, ISO certified.",
    "focusKeywords": [
      "Roof Extractor",
      "Industrial Roof Extractor",
      "Roof Extractor manufacturer",
      "Roof Air Extractor India"
    ],
    "category": "wind-driven",
    "categoryLabel": "Industrial Air Extractor",
    "shortDescription": "Industrial roof extractor designed to rapidly pull out high-temperature air, gases, and fumes from enclosed factory sheds.",
    "fullDescription": [
      "Shreeji Roof Extractors are designed for facilities with high heat loads such as casting sheds, boiler rooms, and chemical synthesis units.",
      "They extract stale air from the roof apex where heat naturally accumulates, preventing heat recirculation."
    ],
    "keyFeatures": [
      "High extraction rate for superheated air",
      "Aerodynamic curved blades with low rotational friction",
      "Corrosion-resistant aluminium and stainless steel",
      "Robust base plate designed for harsh weather"
    ],
    "efficiencyHighlights": [
      "Rapid heat removal",
      "Zero operating costs",
      "Stops condensation"
    ],
    "workingTheory": "Centrifugal extractor vanes force out hot air while ambient wind maintains continuous spin.",
    "applications": [
      "Boiler Rooms",
      "Foundries",
      "Heat Treatment Plants",
      "Warehouses"
    ],
    "specs": {
      "throatDia": "24\" (610 MM)",
      "outerDia": "30\" (760 MM)",
      "bladeMoc": "Hindalco Aluminium",
      "bearingMake": "HCH Sealed Bearings",
      "bladeCount": "42 Nos.",
      "airflowCfm": "2,100 - 3,200 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/roof-extractor.jpg",
    "galleryImages": [
      "/images/products/roof-extractor.jpg"
    ],
    "faqs": [
      {
        "question": "What is the difference between a roof ventilator and a roof extractor?",
        "answer": "Both perform air exhaustion; 'Roof Extractor' specifically emphasizes high-volume extraction of process heat, smoke, and fumes from industrial roof tops."
      }
    ]
  },
  {
    "id": "wind-ventilator",
    "slug": "wind-ventilator",
    "legacySlug": "wind-ventilator.php",
    "name": "Wind Ventilator",
    "h1Title": "Wind Ventilator Manufacturer & Supplier in India",
    "metaTitle": "Wind Ventilator Manufacturer in Mumbai, Pune, India | Shreeji",
    "metaDescription": "High quality Wind Ventilator manufacturer in India. Hindalco aluminium blades, stainless steel top, zero power, 10-year warranty by Shreeji Sales Corporation.",
    "focusKeywords": [
      "Wind Ventilator",
      "Industrial Wind Ventilator",
      "Wind Ventilator manufacturer",
      "Wind Ventilator suppliers in Mumbai"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Reliable wind ventilator delivering year-round fresh air circulation and thermal relief for industrial workspaces without power.",
    "fullDescription": [
      "Our Wind Ventilator is a proven industrial ventilation workhorse installed on thousands of factory roofs across India.",
      "It improves working conditions, boosts worker alertness and productivity, and preserves raw materials and inventory."
    ],
    "keyFeatures": [
      "Continuous air renewal all year round",
      "Zero noise and zero vibration",
      "Low maintenance sealed bearings",
      "Custom FRP matching base plate"
    ],
    "efficiencyHighlights": [
      "100% Wind operated",
      "Energy saver for a better tomorrow",
      "No electrical hazards"
    ],
    "workingTheory": "External wind breezes spin the rotor cage, driving out warm stale air through centrifugal suction.",
    "applications": [
      "Workshops",
      "Warehouses",
      "Chemical Plants",
      "Textile Mills"
    ],
    "specs": {
      "throatDia": "21\" / 24\"",
      "outerDia": "28\" / 30\"",
      "bladeMoc": "Aluminium 8011",
      "bearingMake": "HCH 6001 ZZ",
      "bladeCount": "42 Nos.",
      "airflowCfm": "1,900 - 3,200 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/wind-ventilator.jpg",
    "galleryImages": [
      "/images/products/wind-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "Can it be installed on PEB structure roofs?",
        "answer": "Yes, our FRP base plates are custom-molded to match all standard PEB metal sheet corrugations perfectly."
      }
    ]
  },
  {
    "id": "motorized-turbo-ventilator",
    "slug": "motorized-turbo-ventilator",
    "legacySlug": "motorized-turbo-ventilator.php",
    "name": "Motorized Turbo Ventilator",
    "h1Title": "Motorized Turbo Ventilator Manufacturer in India",
    "metaTitle": "Motorized Turbo Ventilator Manufacturer | Hybrid Roof Ventilator | Shreeji",
    "metaDescription": "Motorized Turbo Ventilator manufacturer in India. Hybrid dual-drive system: wind driven + electric motor for guaranteed exhaust during zero wind or heavy smoke.",
    "focusKeywords": [
      "Motorized Turbo Ventilator",
      "Hybrid Turbo Ventilator",
      "Motorized Roof Air Ventilator",
      "Motorized Turbo Ventilator manufacturer"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Hybrid Powered & Wind Ventilator",
    "shortDescription": "Hybrid dual-drive motorized turbo ventilator combining free wind power with auxiliary electric motor drive for guaranteed CFM extraction.",
    "fullDescription": [
      "The Motorized Turbo Ventilator represents the next generation of industrial ventilation technology.",
      "It operates as a 100% free wind-driven ventilator under normal conditions, but features an integrated, energy-efficient electric motor that activates during peak heat spikes, dense smoke emissions, or dead calm wind conditions to force high-velocity air exhaust."
    ],
    "keyFeatures": [
      "Dual-Drive Hybrid System (Wind + Electric Motor)",
      "High CFM forced air displacement when powered on",
      "Operates freely on natural wind when power is off",
      "Automatic sensor or manual switch control options",
      "Heavy duty FRP weather cowl and mounting base"
    ],
    "efficiencyHighlights": [
      "Combines green energy savings with on-demand high capacity extraction",
      "Guaranteed air changes per hour (ACPH) regardless of outdoor weather",
      "Flame-proof motor options available for chemical plants"
    ],
    "workingTheory": "Wind rotates the outer vanes naturally; when motorized mode is triggered, an internal axial drive spins the rotor head at higher RPM for rapid exhaust.",
    "applications": [
      "Heavy Smoke Welding Shops",
      "Chemical Reaction Vessels",
      "Foundries",
      "High Heat Processing Plants"
    ],
    "specs": {
      "throatDia": "24\" (610 MM) / 30\" (760 MM)",
      "outerDia": "32\" / 38\"",
      "bearingMake": "Heavy Duty Sealed Bearings",
      "bladeMoc": "Aluminium / SS 304",
      "bladeCount": "42 Nos. External Vanes + Internal Impeller",
      "airflowCfm": "3,500 - 6,500 CFM (Motorized mode)",
      "powerConsumption": "0.25 kW to 0.75 kW (when motor active)"
    },
    "image": "/images/products/motorized-turbo-ventilator.jpg",
    "galleryImages": [
      "/images/products/motorized-turbo-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "Does the motor consume power when the wind is blowing?",
        "answer": "No. You can leave the motor switched off during normal wind conditions, allowing it to run completely free on natural wind power."
      }
    ]
  },
  {
    "id": "power-ventilator",
    "slug": "power-ventilator",
    "legacySlug": "power-ventilator.php",
    "name": "Power Ventilator",
    "h1Title": "Industrial Power Ventilator Manufacturer in India",
    "metaTitle": "Industrial Power Ventilator Manufacturer in Mumbai, Pune, India | Shreeji",
    "metaDescription": "Heavy duty industrial Power Ventilator manufacturer in India. Electrically driven high CFM roof exhauster for severe industrial heat & fume extraction.",
    "focusKeywords": [
      "Power Ventilator",
      "Industrial Power Ventilator",
      "Power Roof Ventilator",
      "Power Ventilator manufacturer India"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Powered Industrial Ventilator",
    "shortDescription": "Electrically powered high-capacity roof ventilator engineered for aggressive industrial smoke, dust, and heat evacuation.",
    "fullDescription": [
      "The Shreeji Power Ventilator is designed for industrial plants where natural ventilation alone cannot overcome extreme process heat or toxic fume density.",
      "Featuring high-efficiency electric motors and dynamically balanced impellers, it creates high static pressure to evacuate air swiftly through roof openings."
    ],
    "keyFeatures": [
      "High static pressure air displacement",
      "IP55/IP65 protected motor with Class F insulation",
      "Aerodynamic weather cowl prevents rain ingress",
      "Heavy duty FRP base and steel supporting structure"
    ],
    "efficiencyHighlights": [
      "Guaranteed volumetric air removal",
      "Continuous duty operation",
      "Low noise profile"
    ],
    "workingTheory": "Motorized axial impeller creates strong suction that pulls air from floor level and discharges it above the roof line.",
    "applications": [
      "Foundries",
      "Heat Treatment Plants",
      "Welding Shops",
      "Chemical Facilities"
    ],
    "specs": {
      "throatDia": "24\" / 30\" / 36\"",
      "outerDia": "32\" to 44\"",
      "bladeMoc": "Aluminium / Galvanized Steel / FRP",
      "bearingMake": "Precision Ball Bearings",
      "airflowCfm": "4,000 - 12,000 CFM",
      "powerConsumption": "0.5 HP to 3.0 HP (415V 3-Phase)"
    },
    "image": "/images/products/power-ventilator.jpg",
    "galleryImages": [
      "/images/products/power-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "Can it be connected to automated temperature controllers?",
        "answer": "Yes, our power ventilators can be integrated with temperature sensors or VFDs for automatic on/off operation based on shed temperature."
      }
    ]
  },
  {
    "id": "force-ventilator",
    "slug": "force-ventilator",
    "legacySlug": "force-ventilator.php",
    "name": "Force Ventilator",
    "h1Title": "Industrial Force Ventilator Manufacturer in India",
    "metaTitle": "Industrial Force Ventilator Manufacturer | Forced Draft Roof Fan | Shreeji",
    "metaDescription": "Manufacturer of Force Ventilators in India for heavy industrial sheds. High velocity forced air exhaust, robust build, ISO certified.",
    "focusKeywords": [
      "Force Ventilator",
      "Forced Draft Ventilator",
      "Industrial Force Ventilator",
      "Force Ventilator manufacturer"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Powered Industrial Ventilator",
    "shortDescription": "High-velocity forced draft ventilator engineered for rapid expulsion of heavy smoke, volatile organic compounds, and superheated air.",
    "fullDescription": [
      "Shreeji Force Ventilators provide forced mechanical draft ventilation for severe industrial environments.",
      "Engineered to move large volumes of air against high resistance, it purges stale air from the deepest corners of the plant."
    ],
    "keyFeatures": [
      "Forced-draft high-velocity air exhaust",
      "Sturdy vibration-free frame and casing",
      "Corrosion-resistant protective coating",
      "Available with variable speed controls"
    ],
    "efficiencyHighlights": [
      "Rapid air clearing during production spikes",
      "Protects worker respiratory health",
      "Continuous duty"
    ],
    "workingTheory": "High-torque motorized impellers force air upwards and discharge it through aerodynamic exhaust cowls.",
    "applications": [
      "Smelting Plants",
      "Chemical Refineries",
      "Forging Workshops",
      "Automotive Paint Shops"
    ],
    "specs": {
      "throatDia": "24\" / 30\" / 36\"",
      "outerDia": "32\" to 46\"",
      "bladeMoc": "Die-cast Aluminium / SS",
      "bearingMake": "Heavy Duty Bearings",
      "airflowCfm": "5,000 - 14,000 CFM",
      "powerConsumption": "1.0 HP to 5.0 HP"
    },
    "image": "/images/products/force-ventilator.jpg",
    "galleryImages": [
      "/images/products/force-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "What maintenance is required for force ventilators?",
        "answer": "Routine checks involve checking motor terminal connections and periodic inspection of the impeller every 6 to 12 months."
      }
    ]
  },
  {
    "id": "motorised-ventilator",
    "slug": "motorised-ventilator",
    "legacySlug": "motorised-ventilator.php",
    "name": "Motorized Ventilator",
    "h1Title": "Industrial Motorized Ventilator Manufacturer in India",
    "metaTitle": "Motorized Ventilator Manufacturer in Mumbai, Pune, India | Shreeji",
    "metaDescription": "Motorized Ventilator manufacturer in India. Electrically driven, high efficiency, roof and wall mounting options, ISO 9001:2015 certified.",
    "focusKeywords": [
      "Motorized Ventilator",
      "Motorised Ventilator",
      "Motorized Roof Air Ventilator",
      "Motorized Ventilator manufacturer India"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Powered Industrial Ventilator",
    "shortDescription": "Electric motorized industrial ventilator providing controlled, high-capacity air displacement for industrial sheds.",
    "fullDescription": [
      "Our Motorized Ventilators are designed for reliable, switch-controlled air extraction in production plants and warehouses.",
      "Equipped with premium quality industrial motors and precision impellers, they ensure consistent air renewal."
    ],
    "keyFeatures": [
      "High reliability industrial motor",
      "Low power consumption per CFM",
      "Weather-sealed cowl with bird screen",
      "Quick mounting with custom base plates"
    ],
    "efficiencyHighlights": [
      "Controlled ventilation on demand",
      "Low acoustic footprint",
      "High static pressure"
    ],
    "workingTheory": "Electric motor rotates the aerodynamic impeller to force air out of the building.",
    "applications": [
      "Packaging Units",
      "Electronics Assembly",
      "Textile Mills",
      "Food Processing"
    ],
    "specs": {
      "throatDia": "24\" (600 MM) / 30\" (750 MM)",
      "outerDia": "32\" / 38\"",
      "bladeMoc": "Aluminium / Galvanized Steel",
      "bearingMake": "Sealed Ball Bearings",
      "airflowCfm": "3,800 - 7,500 CFM",
      "powerConsumption": "0.37 kW to 1.5 kW"
    },
    "image": "/images/products/motorised-ventilator.jpg",
    "galleryImages": [
      "/images/products/motorised-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "Is single-phase power supply supported?",
        "answer": "Yes, we provide both 230V single-phase and 415V three-phase motor options based on your facility's electrical infrastructure."
      }
    ]
  },
  {
    "id": "motorised-roof-ventilator",
    "slug": "motorised-roof-ventilator",
    "legacySlug": "motorised-roof-ventilator.php",
    "name": "Motorized Roof Ventilator",
    "h1Title": "Motorized Roof Ventilator Manufacturer & Supplier",
    "metaTitle": "Motorized Roof Ventilator Manufacturer in Mumbai, Pune, India | Shreeji",
    "metaDescription": "Manufacturer of Motorized Roof Ventilators in India. Roof mounted powered fan unit with weather cowl and FRP base plate by Shreeji Sales Corporation.",
    "focusKeywords": [
      "Motorized Roof Ventilator",
      "Motorised Roof Ventilator",
      "Powered Roof Ventilator",
      "Motorized Roof Fan India"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Powered Roof Ventilator",
    "shortDescription": "Roof-mounted motorized ventilator unit designed to exhaust hot air and process emissions directly from the roof crest.",
    "fullDescription": [
      "The Motorized Roof Ventilator is mounted directly onto the roof slope or ridge using an engineered FRP adapter curb.",
      "It discharges warm, buoyant air into the atmosphere while preventing rain and weather backdraft."
    ],
    "keyFeatures": [
      "Direct roof mounting with customized profile FRP base",
      "Weatherproof FRP discharge cowl",
      "Direct-drive motor for minimal maintenance",
      "Optional gravity dampers to prevent air backdraft"
    ],
    "efficiencyHighlights": [
      "Extracts heat at highest point in the shed",
      "Prevents heat blanket formation",
      "High airflow"
    ],
    "workingTheory": "Motor-driven axial fan extracts rising hot air from the roof level and discharges it horizontally or vertically.",
    "applications": [
      "Large Warehouses",
      "Fabrication Sheds",
      "Power Generation Units",
      "Chemical Plants"
    ],
    "specs": {
      "throatDia": "24\" / 30\" / 36\"",
      "outerDia": "34\" to 46\"",
      "bladeMoc": "Aluminium Aerofoil",
      "bearingMake": "SKF / HCH",
      "airflowCfm": "4,200 - 10,500 CFM",
      "powerConsumption": "0.5 HP to 2.0 HP"
    },
    "image": "/images/products/motorised-roof-ventilator.jpg",
    "galleryImages": [
      "/images/products/motorised-roof-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "Does it come with a bird protection screen?",
        "answer": "Yes, all our motorized roof ventilators include stainless steel bird and pest mesh screens standard."
      }
    ]
  },
  {
    "id": "roof-extractor-fan",
    "slug": "roof-extractor-fan",
    "legacySlug": "roof-extractor-fan.php",
    "name": "Roof Extractor Fan",
    "h1Title": "Industrial Roof Extractor Fan Manufacturer in India",
    "metaTitle": "Roof Extractor Fan Manufacturer in Mumbai, Pune, India | Shreeji",
    "metaDescription": "Manufacturer of Industrial Roof Extractor Fans in India. Heavy duty motor, aerofoil blades, FRP weather cowl, ISO 9001:2015 certified.",
    "focusKeywords": [
      "Roof Extractor Fan",
      "Industrial Roof Extractor Fan",
      "Roof Extraction Fan",
      "Roof Extractor Fan manufacturer"
    ],
    "category": "industrial-exhaust",
    "categoryLabel": "Powered Roof Exhaust Fan",
    "shortDescription": "Heavy-duty powered roof extractor fan with aerodynamic cowl for high-volume smoke, steam, and heat evacuation.",
    "fullDescription": [
      "Shreeji Roof Extractor Fans are engineered to handle dense smoke, humid steam, and corrosive fumes from industrial manufacturing lines.",
      "The heavy-duty motor and dynamically balanced fan assembly ensure smooth, continuous extraction under demanding conditions."
    ],
    "keyFeatures": [
      "Aerodynamically contoured FRP exhaust cowl",
      "High-efficiency cast iron motor",
      "Corrosion-resistant impeller materials",
      "Custom roof curb mounting"
    ],
    "efficiencyHighlights": [
      "Rapid smoke clearance",
      "High volumetric efficiency",
      "Weatherproof design"
    ],
    "workingTheory": "Powered impeller induces strong negative suction at the roof level, expelling fumes high into the atmospheric airstream.",
    "applications": [
      "Textile Dyeing Sheds",
      "Chemical Reactors",
      "Foundries",
      "Rubber & Plastic Curing"
    ],
    "specs": {
      "throatDia": "24\" / 30\" / 36\" / 48\"",
      "outerDia": "36\" to 56\"",
      "bladeMoc": "FRP / Aluminium / SS 304",
      "bearingMake": "Heavy Duty Bearings",
      "airflowCfm": "5,000 - 16,000 CFM",
      "powerConsumption": "1.0 HP to 5.0 HP"
    },
    "image": "/images/products/roof-extractor-fan.jpg",
    "galleryImages": [
      "/images/products/roof-extractor-fan.jpg"
    ],
    "faqs": [
      {
        "question": "Can it handle humid steam from dyeing and textile processes?",
        "answer": "Yes, with our FRP impeller and stainless steel shaft configuration, the fan is 100% immune to rust and steam corrosion."
      }
    ]
  },
  {
    "id": "motorized-roof-air-ventilator",
    "slug": "motorized-roof-air-ventilator",
    "legacySlug": "motorized-roof-air-ventilator.php",
    "name": "Motorized Roof Air Ventilator",
    "h1Title": "Motorized Roof Air Ventilator Manufacturer in India",
    "metaTitle": "Motorized Roof Air Ventilator Manufacturer in Mumbai, Pune, India | Shreeji",
    "metaDescription": "Manufacturer of Motorized Roof Air Ventilators in India. High extraction capacity, dual hybrid operation, robust FRP base, ISO certified by Shreeji.",
    "focusKeywords": [
      "Motorized Roof Air Ventilator",
      "Motorized Roof Air Ventilator manufacturer",
      "Motorized Air Ventilator India",
      "Hybrid Roof Air Ventilator"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Hybrid Powered & Wind Ventilator",
    "shortDescription": "High-performance motorized roof air ventilator designed for maximum air exchange in large industrial sheds and manufacturing facilities.",
    "fullDescription": [
      "The Motorized Roof Air Ventilator represents the peak of industrial ventilation engineering, combining high-volume natural extraction with auxiliary electric power.",
      "Installed on factory roofs across India, it provides reliable air circulation during both windy and calm weather conditions."
    ],
    "keyFeatures": [
      "High CFM air extraction capacity",
      "Operates naturally on wind and powers up on demand",
      "Heavy gauge aluminium and stainless steel components",
      "Weather-sealed FRP base plate matching all roof profiles"
    ],
    "efficiencyHighlights": [
      "Guaranteed air turnover",
      "Saves energy compared to standard exhaust systems",
      "10-year structural warranty"
    ],
    "workingTheory": "Hybrid motor and wind-driven rotor combine to guarantee air extraction under all environmental conditions.",
    "applications": [
      "Manufacturing Facilities",
      "Steel Plants",
      "Warehouses",
      "Food Processing"
    ],
    "specs": {
      "throatDia": "24\" (610 MM) / 30\" (760 MM)",
      "outerDia": "32\" / 38\"",
      "bladeMoc": "Hindalco Aluminium & SS 304",
      "bearingMake": "HCH Sealed Bearings",
      "bladeCount": "42 Nos. External Vanes",
      "airflowCfm": "3,500 - 7,000 CFM",
      "powerConsumption": "0.25 HP to 1.0 HP (when motorized)"
    },
    "image": "/images/products/motorized-roof-air-ventilator.jpg",
    "galleryImages": [
      "/images/products/motorized-roof-air-ventilator.jpg"
    ],
    "faqs": [
      {
        "question": "What is the warranty period for the Motorized Roof Air Ventilator?",
        "answer": "The ventilator structure carries a 10-Year warranty, and the industrial motor carries a 1-Year standard manufacturer replacement warranty."
      }
    ]
  }
];
