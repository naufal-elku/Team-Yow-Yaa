import React from "react";
import minus from "@/picture/minus.png";
import check from "@/picture/check.png";
import { PricingPlan } from "@/data/pricing";

interface PricingCardProps {
    plan: PricingPlan;
}

export const PricingCard = ({ plan }: PricingCardProps) => {
    return (
        <div className='w-full flex flex-col max-w-[384px] mx-auto rounded-xl bg-background border border-border-btn hover:shadow-xl transition-all duration-300 cursor-pointer '>

            <div className='flex flex-col pt-10 px-8 gap-4 '>
                <div className='flex flex-wrap gap-2 w-full items-center'>
                    <img src={plan.badgeIcon} alt={plan.badge} className='w-9 h-9' />
                    <h2 className='leading-7.5 font-semibold text-[20px] text-font-primary'>
                        {plan.badge}
                    </h2>

                    <div className='w-full flex items-baseline gap-1 mt-2'>
                        <h3 className='font-bold text-[36px] leading-11 tracking-[-0.02em] text-[#143B5E]'>
                            {plan.price}
                        </h3>
                        <span className='text-[16px] leading-6 font-normal text-[#586166] '>
                            {plan.period}
                        </span>
                    </div>

                    <div className='flex flex-col w-full gap-3  mt-4'>
                        <button className='w-full flex items-center justify-center py-3 px-5 rounded-lg border border-primary bg-[#F6FBFF] gap-2 hover:bg-blue-100 transition-colors'>
                            <span className='font-semibold text-[16px] text-primary leading-6'>
                                {plan.buttonText}
                            </span>
                        </button>
                    </div>

                    <div className='flex flex-col w-full pt-8 pb-10 gap-6'>
                        <div className='flex flex-col w-full gap-4'>
                            {plan.features.map((feature, index) => (
                                <div key={index} className='flex w-full gap-3'>
                                    <img 
                                    src={feature.isAvailable ? check.src : minus.src} 
                                    alt="" 
                                    className='w-6 h-6 shrink-0'
                                    />
                                    <span 
                                    className={`font-normal text-[16px] leading-6 
                                        ${feature.isAvailable
                                            ? "text-font-secondary"
                                            : "line-through text-[#B6B6B6]"
                                        }`}
                                    >
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}