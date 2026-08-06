import React from "react";
import { BLOG_POSTS } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_CONTENTS } from "@/data/content";
import { BlogCard } from "@/components/common/BlogCard";

interface DetailBlogProps {
  params: Promise<{ slug: string }>;
}

export default async function DetailBlogPage({ params }: DetailBlogProps) {
  const { slug } = await params;

  const post = BLOG_POSTS.find(
    (item) => item.slug === slug || item.id === slug
  );

  if (!post) {
    notFound();
  }

  const articleContent = BLOG_CONTENTS[post.slug] || {
    tableOfContents: [],
    content: [post.description],
  };

  const related = BLOG_POSTS.filter((item) => item.id !== post.id).slice(0, 3);

  return (
    <div className="w-full bg-background text-font-primary">
      <div className="max-w-[1440px] mx-auto px-6 py-10">
        
        {/* BARIS UTAMA (BREADCRUMB & DAFTAR ISI DALAM SATU GRID SEJAJAR) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* SIDEBAR KIRI (3 Kolom) */}
          <aside className="lg:col-span-3 flex flex-col gap-10">
            {/* Daftar Isi Header & List */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[16px] text-[#252B2B]">
                Daftar Isi
              </h3>
              <ul className="flex flex-col text-[14px] leading-relaxed border-l-2 border-[#E4E7EC]">
                {articleContent.tableOfContents && articleContent.tableOfContents.length > 0 ? (
                  articleContent.tableOfContents.map((toc, index) => (
                    <li
                      key={index}
                      className={`pl-4 py-1.5 cursor-pointer transition-all ${
                        index === 0
                          ? "border-l-2 border-[#252B2B] -ml-[2px] font-semibold text-[#252B2B] bg-[#F8FAFC]"
                          : "text-[#535658] hover:text-[#057CE4]"
                      }`}
                    >
                      {toc}
                    </li>
                  ))
                ) : (
                  <li className="pl-4 py-1.5 border-l-2 border-[#252B2B] -ml-[2px] font-semibold text-[#252B2B] bg-[#F8FAFC]">
                    Pendahuluan
                  </li>
                )}
              </ul>
            </div>

            {/* Share Buttons */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-[18px] leading-[28px]">
                Bagikan
              </h3>
              <div className="flex items-center gap-[12px]">
                <button className="w-12 h-12 rounded-full bg-[#3B5166] text-white flex items-center justify-center text-xs hover:opacity-90">🔗</button>
                <button className="w-12 h-12 rounded-full bg-[#3B5166] text-white flex items-center justify-center text-xs hover:opacity-90">💬</button>
                <button className="w-12 h-12 rounded-full bg-[#3B5166] text-white flex items-center justify-center text-xs hover:opacity-90">📷</button>
                <button className="w-12 h-12 rounded-full bg-[#3B5166] text-white flex items-center justify-center text-xs hover:opacity-90">𝕏</button>
                <button className="w-12 h-12 rounded-full bg-[#3B5166] text-white flex items-center justify-center text-xs hover:opacity-90">f</button>
              </div>
            </div>
          </aside>

          {/* KONTEN KANAN (9 Kolom) */}
          <main className="lg:col-span-9 flex flex-col gap-6">
            
            {/* Breadcrumb Navigation - Sejajar Horisontal dengan Header Daftar Isi */}
            <nav className="text-[14px] text-[#5D6F80] flex items-center gap-2">
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <span>&gt;</span>
              <span className="text-[#5D6F80] font-normal truncate max-w-[400px]">
                {post.title}
              </span>
            </nav>

            <h1 className="text-[36px] font-semibold leading-[44px] text-font-primary">
              {post.title}
            </h1>

            <div className="flex items-center gap-2 text-[14px] text-font-secondary">
              <span>📅</span>
              <span>{post.date}</span>
            </div>

            {/* Banner Gambar */}
            <div className="w-full h-[400px] rounded-[16px] overflow-hidden my-2">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Body Teks Paragraf */}
            <article className="flex flex-col gap-4 text-[#535658] text-[16px] leading-[26px]">
              {articleContent.content?.map((paragraph, index) => (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </article>
          </main>
        </div>

        {/* SEKSI BLOG TERBARU */}
        <section className="mt-20 pt-12 border-t border-[#E4E7EC]">
          <h2 className="text-[32px] font-semibold text-font-primary mb-8">
            Blog Terbaru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((item) => (
              <BlogCard key={item.id} post={item} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}