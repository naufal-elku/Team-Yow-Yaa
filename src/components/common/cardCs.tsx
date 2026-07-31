import React, { useState } from "react";

interface cardCs {
    children: React.ReactNode;
    className ?: string;
}

export default function cardCs({children, className}: cardCs) {
  return (
    <section className="w-full px-6 mt-\[80px\]">
        <div className={`w-full max-w-\[1200px\] py-\[40px\] mx-auto my-\[40px\] bg-foreground rounded-\[16px\] text-center ${className}`}>
            {children}
        </div>
    </section>
  );
}
