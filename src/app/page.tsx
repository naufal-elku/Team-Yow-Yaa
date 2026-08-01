import Image from "next/image";
import Hero from "@/components/home/hero";
import InfiniteScroll from "@/components/home/infiniteScroll";

export default function Home() {
  return (
    <>
      <Hero />
      <InfiniteScroll />
    </>
  );
}
