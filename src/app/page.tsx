import { Metadata } from "next";
import Hero from "@/app/components/Hero";
import Brands from "@/app/components/Brands";
import Feature from "@/app/components/Features";
import About from "@/app/components/About";
import FeaturesTab from "@/app/components/FeaturesTab";
import FunFact from "@/app/components/FunFact";
import Integration from "@/app/components/Integration";
import CTA from "@/app/components/CTA";
import FAQ from "@/app/components/FAQ";
import Pricing from "@/app/components/Pricing";
import Contact from "@/app/components/Contact";
import Blog from "@/app/components/Blog";
import Testimonial from "@/app/components/Testimonial";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}
