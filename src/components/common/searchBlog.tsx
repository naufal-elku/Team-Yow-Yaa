import React from "react";
import search from "@/picture/search.png"

export default function SearchBlog() {
    return (
        <div className="flex items-center w-full max-w-[439px] h-[44px] gap-2 mx-auto h-auto mt-8">
            <div className="relative flex items-center flex-1 h-full">
                <img
                    src={search.src}
                    alt="search icon"
                    className="absolute left-3.5 w-5 h-5 object-contain pointer-events-none text-[#5D6F80]"
                />
                <input
                    type="text"
                    placeholder="Cari Blog..."
                    className="w-full h-full font-normal text-[16px] placeholder-[#B6B6B6] bg-background rounded-lg pl-11 py-2.5 gap-2 border border-border-btn focus:outline-none focus:border-[#007AFF] transition-colors"
                />
            </div>
            <button className="h-[44px] w-[88px] px-[18px] py-[10px] rounded-[8px] flex items-center justify-center gap-2 bg-blue-600 text-white text-base font-medium hover:bg-blue-700 transition-colors">
                Cari
            </button>
        </div>
    )
}