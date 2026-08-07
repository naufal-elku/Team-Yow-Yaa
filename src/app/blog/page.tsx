"use client";
import React from "react";
import CardBanner from "@/components/common/cardBanner";
import { BLOG_POSTS, BlogPost } from "@/data/blog";
import { BlogCard } from "@/components/common/BlogCard";
import { SearchBar } from "@/components/common/searchBar";
import { useBlogSearch } from "@/data/useBlogSearch";

export default function BlogPage() {
  const { searchQuery, setSearchQuery, filteredPosts } = useBlogSearch(BLOG_POSTS);

  return (
    <div>
      <CardBanner className='lg:pb-[96px]'>
        <div className="flex flex-col items-center justify-center w-full max-w-198 mx-auto gap-4 text-center ">
          <h1 className="text-[36px] font-semibold tracking-tight leading-snug text-font-primary">
            Blog & Insight Presensi.co.id
          </h1>
          <p className="text-[20px] leading-7.5 font-normal text-font-secondary  text-center">
            Temukan berbagai artikel informatif, tips manajemen karyawan, hingga update teknologi HR yang relevan bagi perkembangan bisnis Anda.
          </p>
          <div className="w-full">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>
      </CardBanner>

      <section className="flex flex-col justify-center w-full mx-auto px-[20px] gap-20 pt-10  lg:px-[120px] lg:pt-[40px] lg:pb-[56px]">
        <div className="w-full flex flex-col gap-[40px] lg:gap-[48px] mx-auto max-w-[1200px] mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

          ) : (

            <div className="text-center py-16">
              <p className="text-[18px] font-medium text-gray-600">
                Artikel dengan kata kunci &quot;<span className="text-[#057CE4]">{searchQuery}</span>&quot; tidak ditemukan.
              </p>
            </div>

          )}

          <button className="bg-background rounded-[8px] px-[18px] py-[10px] border border-foreground text-font-secondary font-semibold text-[16px] leading-[24px] w-fit mx-auto">
              Muat lebih banyak
          </button>
        </div>
      </section>
    </div>
  );
}