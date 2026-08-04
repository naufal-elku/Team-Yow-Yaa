import React, { useState } from "react";

interface cardCs {
  children: React.ReactNode;
  className?: string;
}

export default function cardCs({ children, className }: cardCs) {
  return (
    <section className="mt-20 w-full px-6">
      <div
        className={`bg-foreground mx-auto my-10 w-full max-w-300 rounded-2xl py-10 text-center ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
