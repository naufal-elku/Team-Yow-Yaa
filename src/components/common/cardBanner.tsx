import React from "react";

interface cardBanner {
    children: React.ReactNode;
    className ?: string;
}

export default function cardBanner({children, className = ""}: cardBanner) {
   return (
     <section className="w-full px-6">
      <div className={`mx-auto w-full text-center max-w-[1392px] py-[96px] px-6 bg-gradient-to-t from-background to-foreground rounded-[16px] ${className}`}>
        {children}
      </div>
    </section>
   );
}