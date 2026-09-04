import { Hero } from "@/components/home/Hero";
import { ServicesSummary } from "@/components/home/ServicesSummary";
import { WhyJSTech } from "@/components/home/WhyJSTech";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ClientLogos } from "@/components/home/ClientLogos";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ServicesSummary />
      <WhyJSTech />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
