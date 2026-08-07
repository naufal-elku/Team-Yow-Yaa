import React from "react";
import { BlogPost } from "@/data/blog";
import Arrow from "@/picture/Arrow.png"

interface BlogCardProps {
    post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <div className="flex flex-col w-full max-w-[384px] h-134 gap-12 cursor-pointer mx-auto">
            <img src={post.image} alt={post.title || "Blog thumbnail"} className="w-full object-cover rounded-xl aspect-[16/9] overflow-hidden" />
            <div className="flex flex-col w-full h-auto rounded-xl gap-4 hover:translate-x-2 hover:shadow-lg transition-all py-[12px] hover:px-[12px] duration-600 ease-in-out will-change-transform cursor-pointer transition: all 0.3s ease">
                <div className="flex flex-col w-full gap-2 ">
                    <span className="w-full text-[14px] leading-5 font-semibold text-[#5D6F80]">{post.date}</span>
                    <h2 className="w-full line-clamp-3 font-semibold text-[24px] leading-8 text-font-primary">{post.title}</h2>
                    <p className="w-full line-clamp-3 font-normal text-[16px] leading-6 text-font-secondary">{post.description}</p>
                </div>


                    <div className="flex w-full gap-1.5">
                        <a

                            href={`/blog/${post.slug}`}

                            className="inline-flex items-center gap-1.5 text-[14px] leading-5 font-semibold text-primary whitespace-nowrap w-fit cursor-pointer"

                        >
                            <span>Baca selengkapnya</span>
                            <img
                                src={Arrow.src}
                                alt=""
                                className="w-4.5 h-4.5 "
                            />
                        </a>

                </div>
            </div>
        </div>
    );
}