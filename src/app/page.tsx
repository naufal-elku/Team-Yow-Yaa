import Image from "next/image";
import Hero from "@/components/home/hero";
import InfiniteScroll from "@/components/home/infiniteScroll";
import OurStrengths from "@/components/home/ourStrengths";
import ButtonDemo from "@/components/home/buttonDemo";

export default function Home() {
  return (
    <>
      <Hero />
      <InfiniteScroll />
      <OurStrengths />
      <ButtonDemo />
    </>
  );
}
