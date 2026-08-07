import Image from "next/image";
import Hero from "@/components/home/HeroSection";
import InfiniteScroll from "@/components/home/CompaniesSection";
import Reason from "@/components/home/ReasonSection";
import ButtonDemo from "@/components/home/CTASection";
import Faq from "@/components/home/FAQPage";
import ProductStatistics from "@/components/home/ProductStatistics";
import CTA2Section from "@/components/home/CTA2Section";
import PricePage from "@/components/home/Price";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <InfiniteScroll />
      <Reason />
      <ButtonDemo />
      <PricePage />
      <Testimonials />
      <ProductStatistics />
      <Faq />
      <CTA2Section />
    </>
  );
}
