import React from 'react'
import { ReasonType } from '@/types/ReasonType';

interface ReasonTypeProps {
    reason: ReasonType;
}

export const ReasonCard = ({reason}: ReasonTypeProps) => {
  return (
        <div className="bg-background flex flex-col gap-6 rounded-xl lg:p-4 py-[17px] text-center transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:max-w-[384px]">
          <img
            src={reason.Icon}
            alt={reason.Title}
            className="mx-auto h-auto w-12"
          />
          <div className="flex flex-col gap-2 text-center">
            <p className="text-font-primary text-[20px] font-medium leading-[28px] lg:leading-[30px]">
              {reason.Title}
            </p>
            <p className="text-font-secondary text-[16px] font-normal leading-[24px] w-[318px]">
              {reason.Text}
            </p>
          </div>
        </div>
  )
}  
