import React from "react";

export default function infiniteScroll() {
  const logo = [
    "/logoCompany/Rectangle 19.png",
    "/logoCompany/Rectangle 20.png",
    "/logoCompany/Rectangle 21.png",
    "/logoCompany/Rectangle 22.png",
    "/logoCompany/Rectangle 23.png",
    "/logoCompany/Rectangle 24.png",
    "/logoCompany/Rectangle 25.png",
    "/logoCompany/Rectangle 26.png",
    "/logoCompany/Rectangle 27.png",
    "/logoCompany/Rectangle 28.png",
    "/logoCompany/Rectangle 29.png",
    "/logoCompany/Rectangle 30.png",
    "/logoCompany/Rectangle 31.png",
    "/logoCompany/Rectangle 32.png",
    "/logoCompany/Rectangle 33.png",
    "/logoCompany/Rectangle 34.png",
    "/logoCompany/Rectangle 35.png",
    "/logoCompany/Rectangle 36.png",
    "/logoCompany/Rectangle 37.png",
    "/logoCompany/Rectangle 38.png",
    "/logoCompany/Rectangle 39.png",
    "/logoCompany/Rectangle 40.png",
    "/logoCompany/Rectangle 41.png",
    "/logoCompany/Rectangle 42.png",
    "/logoCompany/Rectangle 43.png",
  ];

  return (
    <section className="overflow-hidden max-w-[350px] md:max-w-[1200px] pt-[64px] pb-[48px] md:py-[96px] mx-auto flex flex-col gap-[40px] t-0">
      <p className="text-font-primary text-[14px] md:text-[16px] font-medium mx-auto">Digunakan Oleh lebih dari 10.000+ bisnis di Indonesia</p>

      <div className="overflow-hidden marquee-mask">
        <div className="animate-slider hover:[animation-play-state:paused]">
        <div className="flex gap-[16px] md:gap-[48px] shrink-0">
          {logo.map((src, index) => (
            <img 
              key={index}
              src={src}
              alt={`logo ${index}`}
              className="md:max-w-[180px] max-w-[120px] max-h-[32px] md:max-h-[56px]"
            />
          ))}
        </div>

        <div aria-hidden="true" className="flex gap-[16px] md:gap-[48px] shrink-0">
          {logo.map((src, index) => (
            <img
              key={`dup-${index}`}
              src={src} 
              alt={`logo ${index}`}
              className="md:max-w-[180px] max-w-[120px] max-h-[32px] md:max-h-[56px]"
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
