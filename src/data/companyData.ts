export interface CompanyInfo {
  name: string;
  brand: string;
  tagline: string;
  incorporated: number;
  certification: string;
  phones: string[];
  primaryPhone: string;
  whatsapp: string;
  emails: string[];
  primaryEmail: string;
  website: string;
  address: {
    street: string;
    estate: string;
    area: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  workingHours: string;
  socials: {
    facebook: string;
    twitter: string;
    linkedin: string;
    youtube: string;
  };
  highlights: {
    stat: string;
    label: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "Shreeji Sales Corporation",
  brand: "Simpovent",
  tagline: "India's Leading Manufacturer of Wind-Driven & Industrial Roof Ventilators",
  incorporated: 2005,
  certification: "AN ISO 9001:2015 CERTIFIED COMPANY",
  phones: [
    "+91 93202 93021",
    "+91 72628 60283",
    "+91 90286 88880"
  ],
  primaryPhone: "+91 93202 93021",
  whatsapp: "917262860283",
  emails: [
    "info@shreejiwindventilator.com",
    "sales@shreejiwindventilator.com",
    "shreejisalescorp@gmail.com"
  ],
  primaryEmail: "info@shreejiwindventilator.com",
  website: "https://shreejiwindventilator.com",
  address: {
    street: "Ground Flr, Building No-1, Gala No:- 11",
    estate: "Takdir Industrial Estate",
    area: "Vasai East",
    landmark: "Opposite Fiza Restaurant",
    city: "Vasai Virar",
    district: "Palghar",
    state: "Maharashtra",
    pincode: "401208",
    country: "India",
    full: "Ground Flr, Building No-1, Gala No:- 11, Takdir Industrial Estate, Vasai East, Opposite Fiza Restaurant, Vasai Virar, Palghar, Maharashtra - 401208, India"
  },
  geo: {
    latitude: 19.3942109,
    longitude: 72.8611753
  },
  workingHours: "Monday to Saturday: 8:30 AM - 7:30 PM | Sunday: On Call Emergency Support",
  socials: {
    facebook: "https://www.facebook.com/Shreeji-Sales-Corporation-2029955770594049/",
    twitter: "https://twitter.com/BharatG98375368",
    linkedin: "https://www.linkedin.com/company/shreeji-sales-corporation",
    youtube: "https://www.youtube.com/@ShreejiWindVentilator"
  },
  highlights: [
    { stat: "20+", label: "Years of Engineering Excellence" },
    { stat: "100,000+", label: "Ventilators Installed Nationwide" },
    { stat: "100%", label: "Zero Electricity Wind-Driven Tech" },
    { stat: "10 Years", label: "Structural Warranty Support" }
  ]
};
