export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  comment: string;
  projectDetails: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    name: "Rajesh Sharma",
    role: "Plant Operations Head",
    company: "Apex Engineering & Forgings",
    location: "Chakan MIDC, Pune",
    rating: 5,
    comment: "We installed 32 units of Shreeji 24\" Turbo Ventilators in our forging shed. The indoor temperature dropped by nearly 6°C, and worker fatigue during afternoon shifts decreased significantly. Zero electricity cost has saved us over ₹3.5 Lakhs annually!",
    projectDetails: "32 Units of 24\" Hindalco Aluminium Turbo Ventilators with FRP Base Plates"
  },
  {
    name: "Kirit Patel",
    role: "Managing Director",
    company: "Gujarat Polymers & Chemicals Ltd",
    location: "Vatva GIDC, Ahmedabad",
    rating: 5,
    comment: "Chemical fumes and heavy humidity were major issues in our compounding plant. Shreeji Sales Corporation provided custom SS 304 Turbo Ventilators that completely solved our air stagnation without any corrosion. Superb quality and on-time dispatch.",
    projectDetails: "24 Units of 24\" Stainless Steel SS 304 Ventilators"
  },
  {
    name: "Sunil Deshmukh",
    role: "General Manager - Infrastructure",
    company: "Mahindra Logistics Hub",
    location: "Bhiwandi, Thane",
    rating: 5,
    comment: "Managing condensation and heat across a 150,000 sq ft logistics warehouse was critical for preserving FMCG cartons. Shreeji's team calculated our exact CFM requirements and installed 60 wind ventilators in just 3 days. Highly recommended manufacturer!",
    projectDetails: "60 Units of 24\" Turbo Air Ventilators on Trapezoidal Metal Roof"
  },
  {
    name: "Anand Verma",
    role: "Chief Engineer",
    company: "Jaipur Textile & Garment Park",
    location: "Sitapura Industrial Area, Jaipur",
    rating: 5,
    comment: "The Simpovent ventilators spin non-stop even in the lightest Rajasthan breeze. The quality of Hindalco aluminium and smooth HCH bearings is evident. We haven't had a single issue in 6 years of continuous operation.",
    projectDetails: "45 Units of Natural Air Ventilators"
  }
];
