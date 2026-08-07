import React, { useState } from "react";

interface cardCs {
  children: React.ReactNode;
  className?: string;
}

export default function cardCs({ children, className }: cardCs) {
  return (
    <section className="">
      <div
        className={`bg-foreground mx-auto w-full max-w-300 rounded-2xl px-[32px] py-[40px] text-center ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
