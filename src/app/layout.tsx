import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingBtn } from "@/components/common/WhatsAppFloatingBtn";
import { JsonLd } from "@/components/common/JsonLd";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "Shreeji Sales Corporation | Industrial Wind Ventilator & Turbo Ventilator Manufacturer",
    template: "%s | Shreeji Sales Corporation (Simpovent)"
  },
  description: "Leading ISO 9001:2015 certified manufacturer of Wind Driven Turbo Roof Ventilators, Industrial Exhaust Fans, and Natural Air Ventilation Systems in Vasai, Mumbai, Pune, Maharashtra, Gujarat, Rajasthan & India.",
  keywords: [
    "Shreeji Sales Corporation",
    "Simpovent",
    "Wind Ventilator Manufacturer India",
    "Turbo Air Ventilator Mumbai",
    "Roof Ventilator Pune",
    "Industrial Exhaust Fan",
    "Powerless Roof Ventilator",
    "Motorized Roof Air Ventilator"
  ],
  authors: [{ name: "Shreeji Sales Corporation", url: "https://shreejiwindventilator.com" }],
  creator: "Shreeji Sales Corporation",
  metadataBase: new URL("https://shreejiwindventilator.com"),
  alternates: {
    canonical: "https://shreejiwindventilator.com"
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon.png", type: "image/png" }
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/images/favicon.png", type: "image/png" }
    ]
  },
  openGraph: {
    title: "Shreeji Sales Corporation | Industrial Wind Ventilator & Turbo Ventilator Manufacturer",
    description: "ISO 9001:2015 certified manufacturer of Wind Driven Turbo Roof Ventilators and Industrial Exhaust Fans in India. Zero power, noiseless, 10-year warranty.",
    url: "https://shreejiwindventilator.com",
    siteName: "Shreeji Sales Corporation",
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <JsonLd data={[getOrganizationSchema(), getLocalBusinessSchema()]} />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-white text-slate-900" suppressHydrationWarning>
        <Header />
        <main className="flex-1" suppressHydrationWarning>
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingBtn />
      </body>
    </html>
  );
}
