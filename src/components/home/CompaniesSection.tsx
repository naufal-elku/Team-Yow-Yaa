import React from "react";

export default function InfiniteScroll() {
  const logo = [
    "/logoCompany/Rectangle-19.png",
    "/logoCompany/Rectangle-20.png",
    "/logoCompany/Rectangle-21.png",
    "/logoCompany/Rectangle-22.png",
    "/logoCompany/Rectangle-23.png",
    "/logoCompany/Rectangle-24.png",
    "/logoCompany/Rectangle-25.png",
    "/logoCompany/Rectangle-26.png",
    "/logoCompany/Rectangle-27.png",
    "/logoCompany/Rectangle-29.png",
    "/logoCompany/Rectangle-30.png",
    "/logoCompany/Rectangle-31.png",
    "/logoCompany/Rectangle-32.png",
    "/logoCompany/Rectangle-33.png",
    "/logoCompany/Rectangle-34.png",
    "/logoCompany/Rectangle-35.png",
    "/logoCompany/Rectangle-36.png",
    "/logoCompany/Rectangle-37.png",
    "/logoCompany/Rectangle-38.png",
    "/logoCompany/Rectangle-39.png",
    "/logoCompany/Rectangle-40.png",
    "/logoCompany/Rectangle-41.png",
    "/logoCompany/Rectangle-42.png",
    "/logoCompany/Rectangle-43.png",
  ];

  return (
    <section className="flex flex-col gap-10 overflow-hidden px-5 pt-16 pb-12 lg:py-24 lg:px-[120px] text-center items-center">
      <p className="text-font-secondary mx-auto text-[14px] font-medium md:text-[16px] leading-5 w-[350px] lg:w-full lg:leading-6">
        Digunakan Oleh lebih dari 10.000+ perusahaan di Indonesia
      </p>

      <div className="w-full overflow-hidden">
        <div className="animate-slider flex max-w-none hover:[animation-play-state:paused]">
          <div className="flex shrink-0 items-center gap-4 md:gap-12 pr-4 md:pr-12">
            {logo.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`logo ${index}`}
                className="max-h-8 max-w-30 md:max-h-14 md:max-w-45 shrink-0 object-contain"
              />
            ))}
          </div>

          <div aria-hidden="true" className="flex shrink-0 items-center gap-4 md:gap-12 pr-4 md:pr-12">
            {logo.map((src, index) => (
              <img
                key={`dup-${index}`}
                src={src}
                alt={`logo ${index}`}
                className="max-h-8 max-w-30 md:max-h-14 md:max-w-45 shrink-0 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}