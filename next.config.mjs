/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config) => {
    return config;
  },
  async redirects() {
    return [
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/aboutus.php', destination: '/about', permanent: true },
      { source: '/about.php', destination: '/about', permanent: true },
      { source: '/contactus.php', destination: '/contact', permanent: true },
      { source: '/contact.php', destination: '/contact', permanent: true },
      { source: '/certificate.php', destination: '/certificate', permanent: true },
      { source: '/events.php', destination: '/events', permanent: true },
      { source: '/privacy-policy.php', destination: '/privacy-policy', permanent: true },
      // Keyword product .php legacy 301 redirects to clean SEO routes
      { source: '/heavy-duty-industrial-exhaust-fan.php', destination: '/heavy-duty-industrial-exhaust-fan', permanent: true },
      { source: '/roof-air-ventilator.php', destination: '/roof-air-ventilator', permanent: true },
      { source: '/turbo-air-ventilator.php', destination: '/turbo-air-ventilator', permanent: true },
      { source: '/wind-driven-ventilator.php', destination: '/wind-driven-ventilator', permanent: true },
      { source: '/wind-operate-ventilator.php', destination: '/wind-operate-ventilator', permanent: true },
      { source: '/natural-air-ventilator.php', destination: '/natural-air-ventilator', permanent: true },
      { source: '/roof-ventilator.php', destination: '/roof-ventilator', permanent: true },
      { source: '/turbine-ventilator.php', destination: '/turbine-ventilator', permanent: true },
      { source: '/wind-turbine-ventilator.php', destination: '/wind-turbine-ventilator', permanent: true },
      { source: '/powerless-ventilator.php', destination: '/powerless-ventilator', permanent: true },
      { source: '/eco-ventilator.php', destination: '/eco-ventilator', permanent: true },
      { source: '/roof-extractor.php', destination: '/roof-extractor', permanent: true },
      { source: '/turbo-ventilator.php', destination: '/turbo-ventilator', permanent: true },
      { source: '/wind-ventilator.php', destination: '/wind-ventilator', permanent: true },
      { source: '/motorized-turbo-ventilator.php', destination: '/motorized-turbo-ventilator', permanent: true },
      { source: '/power-ventilator.php', destination: '/power-ventilator', permanent: true },
      { source: '/force-ventilator.php', destination: '/force-ventilator', permanent: true },
      { source: '/motorised-ventilator.php', destination: '/motorised-ventilator', permanent: true },
      { source: '/motorised-roof-ventilator.php', destination: '/motorised-roof-ventilator', permanent: true },
      { source: '/roof-extractor-fan.php', destination: '/roof-extractor-fan', permanent: true },
      { source: '/motorized-roof-air-ventilator.php', destination: '/motorized-roof-air-ventilator', permanent: true }
    ];
  }
};

export default nextConfig;
