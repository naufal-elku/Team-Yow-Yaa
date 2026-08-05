import React from "react";
import { BlogPost } from "@/data/blog";
import Arrow from "@/picture/Arrow.png"

interface BlogCardProps {
    post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <div className="group flex flex-col w-full max-w-[384px] h-[536px] gap-6 cursor-pointer">
            <img src={post.image} alt={post.title || "Blog thumbnail"} className="w-full object-cover rounded-[12px] h-[256px] overflow-hidden" />
            <div className="flex flex-col w-full h-auto gap-4">
                <div className="flex flex-col w-full gap-2 ">
                    <span className="w-full text-[14px] leading-[20px] font-semibold text-[#5D6F80]">{post.date}</span>
                    <h2 className="w-full line-clamp-3 font-semibold text-[24px] leading-[32px] text-[#252B2B]">{post.title}</h2>
                    <p className="w-full line-clamp-3 font-normal text-[16px] leading-[24px] text-[#535658]">{post.description}</p>
                </div>


                <div className="flex w-full gap-[6px]">
                    <a
                        href={`${post.slug}`}
                        className="w-[130px] text-[14px] leading-[20px] items-center text-[#057CE4] text-sm"
                    >
                        Baca selengkapnya
                    </a>
                    <img src={Arrow.src} alt="" className="w-[18px] h-[18px]" />
                </div>
            </div>
        </div>
    );
}