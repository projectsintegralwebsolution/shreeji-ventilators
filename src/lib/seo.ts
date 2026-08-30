import { companyData } from "@/data/companyData";
import type { Metadata } from "next";

export interface GenerateMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = "/images/og-ventilator.jpg",
  noIndex = false
}: GenerateMetadataProps): Metadata {
  const fullTitle = `${title} | ${companyData.name} (${companyData.brand})`;
  const url = canonicalUrl ? `${companyData.website}${canonicalUrl}` : companyData.website;

  const defaultKeywords = [
    "Shreeji Sales Corporation",
    "Simpovent",
    "Wind Ventilator Manufacturer India",
    "Turbo Air Ventilator Vasai",
    "Roof Ventilator Mumbai",
    "Industrial Exhaust Fan Pune",
    "Natural Air Ventilator Maharashtra",
    "ISO 9001:2015 Ventilators"
  ];

  const mergedKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  return {
    title: fullTitle,
    description,
    keywords: mergedKeywords,
    authors: [{ name: companyData.name, url: companyData.website }],
    creator: companyData.name,
    publisher: companyData.name,
    metadataBase: new URL(companyData.website),
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: companyData.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@BharatG98375368"
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    }
  };
}

// Schema.org Generators
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${companyData.website}/#organization`,
    name: companyData.name,
    legalName: companyData.name,
    alternateName: ["Simpovent", "Shreeji Wind Ventilator"],
    url: companyData.website,
    logo: `${companyData.website}/images/logo.png`,
    foundingDate: "2005",
    description: "Leading ISO 9001:2015 certified manufacturer, supplier, and exporter of Wind Driven Turbo Roof Ventilators, Industrial Exhaust Fans, and Natural Air Ventilation Systems in India.",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.address.street + ", " + companyData.address.estate,
      addressLocality: companyData.address.area + ", " + companyData.address.city,
      addressRegion: companyData.address.state,
      postalCode: companyData.address.pincode,
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: companyData.geo.latitude,
      longitude: companyData.geo.longitude
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: companyData.primaryPhone,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Gujarati", "Marathi"]
      }
    ],
    sameAs: [
      companyData.socials.facebook,
      companyData.socials.twitter,
      companyData.socials.linkedin,
      companyData.socials.youtube
    ]
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${companyData.website}/#localbusiness`,
    name: companyData.name,
    image: `${companyData.website}/images/factory.jpg`,
    telephone: companyData.primaryPhone,
    email: companyData.primaryEmail,
    url: companyData.website,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.address.street + ", " + companyData.address.estate,
      addressLocality: companyData.address.area + ", " + companyData.address.city,
      addressRegion: companyData.address.state,
      postalCode: companyData.address.pincode,
      addressCountry: "IN"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:30",
        closes: "19:30"
      }
    ]
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${companyData.website}${item.url}`
    }))
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function getProductSchema(product: {
  name: string;
  description: string;
  image: string;
  sku: string;
  category: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image.startsWith("http") ? product.image : `${companyData.website}${product.image}`,
    description: product.description,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: companyData.brand
    },
    manufacturer: {
      "@type": "Organization",
      name: companyData.name
    },
    offers: {
      "@type": "Offer",
      url: product.url.startsWith("http") ? product.url : `${companyData.website}${product.url}`,
      priceCurrency: "INR",
      price: "1950",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: companyData.name
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "148"
    }
  };
}
