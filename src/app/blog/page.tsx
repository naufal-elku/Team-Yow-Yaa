import React from "react";
import CardBanner from "@/components/common/cardBanner";
import SearchBlog from "@/components/common/searchBlog";
import { BLOG_POSTS } from "@/data/blog";
import { BlogCard } from "@/components/common/BlogCard";


export default function BlogPage() {
  return (
    <div>
      <CardBanner>
        <div className="flex flex-col items-center justify-center w-full max-w-198 mx-auto gap-4 text-center ">
          <h1 className="text-[36px] font-semibold tracking-tight leading-snug text-font-primary">
            Blog & Insight Presensi.co.id
          </h1>
          <p className="text-[20px] leading-7.5 font-normal text-font-secondary  text-center">
            Temukan berbagai artikel informatif, tips manajemen karyawan, hingga update teknologi HR yang relevan bagi perkembangan bisnis Anda.
          </p>
          <SearchBlog />
        </div>
      </CardBanner>

      <section className="flex flex-col justify-center w-full max-w-360 mx-auto px-6 gap-20 pt-10 pb-14 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-6 w-full max-w-300 mx-auto px-4">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
        </div>
      </section>
    </div>
  );
}