export interface CityRegion {
  name: string;
  state: string;
  industrialHubs: string[];
  isPrimary?: boolean;
}

export const citiesData: CityRegion[] = [
  {
    name: "Vasai & Palghar",
    state: "Maharashtra",
    industrialHubs: ["Takdir Industrial Estate", "Waliv", "Gokhiware", "Pelhar", "Kaman", "Satpati", "Boisar MIDC", "Tarapur MIDC"],
    isPrimary: true
  },
  {
    name: "Mumbai & Thane",
    state: "Maharashtra",
    industrialHubs: ["Andheri MIDC", "Kanjurmarg", "Bhandup", "Thane-Belapur Road", "Wagle Estate", "Taloja MIDC", "TTC Industrial Area", "Turbhe", "Rabale"],
    isPrimary: true
  },
  {
    name: "Pune",
    state: "Maharashtra",
    industrialHubs: ["Chakan MIDC", "Bhosari MIDC", "Pimpri-Chinchwad", "Talegaon", "Ranjangaon MIDC", "Hadapsar", "Khed City", "Sanaswadi", "Shirwal"],
    isPrimary: true
  },
  {
    name: "Ahmedabad",
    state: "Gujarat",
    industrialHubs: ["Vatva GIDC", "Naroda GIDC", "Odhav GIDC", "Sanand GIDC", "Changodar", "Bakrol", "Kathwada GIDC", "Chhatral"],
    isPrimary: true
  },
  {
    name: "Surat",
    state: "Gujarat",
    industrialHubs: ["Sachin GIDC", "Pandesara GIDC", "Hazira Industrial Belt", "Katargam", "Ankleshwar GIDC", "Kim GIDC"],
    isPrimary: true
  },
  {
    name: "Vadodara",
    state: "Gujarat",
    industrialHubs: ["Makarpura GIDC", "Nandesari GIDC", "Savli GIDC", "Halol Industrial Zone", "Waghodia GIDC", "Por GIDC"],
    isPrimary: true
  },
  {
    name: "Vapi & Silvassa",
    state: "Gujarat & UT",
    industrialHubs: ["Vapi GIDC", "Sarigam GIDC", "Umbergaon GIDC", "Piparia", "Khadoli", "Amli Industrial Area"],
    isPrimary: true
  },
  {
    name: "Jaipur & Rajasthan",
    state: "Rajasthan",
    industrialHubs: ["Vishwakarma Industrial Area (VKIA)", "Sitapura Industrial Area", "Mansarovar", "Bhiwadi RIICO", "Neemrana", "Kishangarh"],
    isPrimary: true
  },
  {
    name: "Delhi NCR",
    state: "Delhi / Haryana / UP",
    industrialHubs: ["Gurgaon Manesar IMT", "Faridabad Industrial Area", "Noida Phase 2", "Greater Noida Ecotech", "Okhla Industrial Area", "Bawana"],
    isPrimary: true
  },
  {
    name: "Coimbatore & Chennai",
    state: "Tamil Nadu",
    industrialHubs: ["SIDCO Coimbatore", "Peelamedu", "Sriperumbudur SIPCOT", "Oragadam", "Ambattur Industrial Estate", "Guindy"],
    isPrimary: true
  },
  {
    name: "Bengaluru",
    state: "Karnataka",
    industrialHubs: ["Peenya Industrial Area", "Bommasandra", "Electronic City Phase 2", "Whitefield EPIP", "Dobbaspet Industrial Area", "Bidadi"],
    isPrimary: true
  },
  {
    name: "Hyderabad",
    state: "Telangana",
    industrialHubs: ["Balanagar", "Jeedimetla", "Patancheru", "Kattedan", "Pashamylaram", "Cherlapally IDA"],
    isPrimary: true
  },
  {
    name: "Kolkata",
    state: "West Bengal",
    industrialHubs: ["Howrah Industrial Belt", "Taratala", "Kalyani", "Dankuni", "Haldia Industrial Complex", "Durgapur"],
    isPrimary: true
  },
  {
    name: "Nagpur & Central India",
    state: "Maharashtra",
    industrialHubs: ["Butibori MIDC", "Hingna MIDC", "Kalmeshwar", "Wardha Industrial Area"],
    isPrimary: false
  },
  {
    name: "Indore & Bhopal",
    state: "Madhya Pradesh",
    industrialHubs: ["Pithampur Industrial Area", "Sanwer Road Industrial Area", "Govindpura Industrial Area", "Mandideep"],
    isPrimary: false
  }
];
