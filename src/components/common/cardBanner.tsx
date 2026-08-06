import React from "react";

interface cardBanner {
  children: React.ReactNode;
  className?: string;
}

export default function cardBanner({ children, className = "" }: cardBanner) {
  return (
    <section className="w-full px-4 lg:px-6">
      <div
        className={`from-background to-foreground mx-auto w-full max-w-348 rounded-2xl bg-linear-to-t px-6 pt-6 text-center lg:px-[96px] lg:pt-24 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
