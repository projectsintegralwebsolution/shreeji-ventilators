import React from 'react';
import { HeroSlider } from '@/components/home/HeroSlider';
import { FeatureCards } from '@/components/home/FeatureCards';
import { AboutIntro } from '@/components/home/AboutIntro';
import { AwardVideoSection } from '@/components/home/AwardVideoSection';
import { CFMCalculator } from '@/components/home/CFMCalculator';
import { HowItWorks } from '@/components/home/HowItWorks';
import { ProductGrid } from '@/components/home/ProductGrid';
import { TechSpecsComparison } from '@/components/home/TechSpecsComparison';
import { IndustryApplications } from '@/components/home/IndustryApplications';
import { ClientLogos } from '@/components/home/ClientLogos';
import { Testimonials } from '@/components/home/Testimonials';
import { CertificationsSection } from '@/components/home/CertificationsSection';
import { FAQAccordion } from '@/components/home/FAQAccordion';

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSlider />
      <FeatureCards />
      <AboutIntro />
      <AwardVideoSection />
      <CFMCalculator />
      <ProductGrid />
      <HowItWorks />
      <TechSpecsComparison />
      <IndustryApplications />
      <ClientLogos />
      <Testimonials />
      <CertificationsSection />
      <FAQAccordion />
    </div>
  );
}
