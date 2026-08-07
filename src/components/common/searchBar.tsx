import React from "react";
import search from "@/picture/search.png"
import { Search } from "lucide-react";
import { BlogPost } from "@/data/blog";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const SearchBar = ({
    value,
    onChange,
    placeholder = "Cari Blog...",
}: SearchBarProps) => {
    return (
        <div className="flex items-center w-full max-w-[439px] gap-2 mx-auto h-auto mt-3">
            <div className="relative flex items-center flex-1 h-full">
                <img
                    src={search.src}
                    alt="search icon"
                    className="absolute left-3.5 w-5 h-5 object-contain pointer-events-none text-[#5D6F80]"
                />
                <input
                    type="text"
                    placeholder="Cari Blog..."
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full h-full font-normal text-[16px] placeholder-[#B6B6B6] bg-background rounded-lg pl-11 py-2.5 gap-2 border border-border-btn focus:outline-none focus:border-[#007AFF] transition-colors"
                />
            </div>
            <button type="button" className="h-11 w-22 px-4.5 py-2.5 rounded-[8px] flex items-center justify-center gap-2 bg-blue-600 text-white text-base font-medium hover:bg-blue-700 transition-colors">
                Cari
            </button>
        </div>
    )
}