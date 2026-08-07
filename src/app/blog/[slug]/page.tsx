import React from "react";
import { BLOG_POSTS } from "@/data/blog";
import { notFound } from "next/navigation";
import { CalendarRange, Link2 } from 'lucide-react';
import Link from "next/link";
import { BLOG_CONTENTS } from "@/data/content";
import { BlogCard } from "@/components/common/BlogCard";
import { Whatsapp, Instagram, X, Facebook } from "@/components/icon/sosmed";

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
      <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[120px] py-10">
        
     
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
      
          <aside className="lg:col-span-3 flex flex-col gap-10 w-full max-w-[383px]">
  
                <div className="flex flex-col gap-[24px] w-full">
                 
                  <div className="relative pb-3 border-b border-[#E4E7EC]">
                    <h3 className="font-semibold text-[16px] text-[#252B2B]">
                      Daftar Isi
                    </h3>
                 
                    <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-[#252B2B]" />
                  </div>

                 
                  <ul className="flex flex-col gap-1 text-[16px] leading-[24px] font-n">
                    {articleContent.tableOfContents && articleContent.tableOfContents.length > 0 ? (
                      articleContent.tableOfContents.map((toc, index) => (
                        <li
                          key={index}
                          className={`px-4 py-2.5 rounded-lg cursor-pointer transition-all ${
                            index === 0
                              ? "font-semibold text-[#252B2B] bg-[#F8FAFC]"
                              : "text-[#535658] hover:text-[#057CE4]"
                          }`}
                        >
                          {toc}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2.5 rounded-lg font-semibold text-[#252B2B] bg-[#F8FAFC]">
                        Pendahuluan
                      </li>
                    )}
                  </ul>
                </div>

              <div className="flex flex-col gap-3 w-full">
                <h3 className="font-semibold text-[18px] leading-[28px] text-[#252B2B]">
                  Bagikan
                </h3>
                <div className="flex items-center gap-[12px]">
                  <button className="w-12 h-12 rounded-full bg-blog text-background flex items-center justify-center shrink-0 hover:opacity-90">
                    <Link2 />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-blog text-white flex items-center justify-center shrink-0 hover:opacity-90">
                    <Whatsapp />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-blog text-white flex items-center justify-center shrink-0 hover:opacity-90">
                    <Instagram />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-blog text-white flex items-center justify-center shrink-0 hover:opacity-90">
                    <X />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-blog text-white flex items-center justify-center shrink-0 hover:opacity-90">
                    <Facebook />
                  </button>
                </div>
              </div>
          </aside>

          <main className="w-full lg:w-[793px] min-h-[1701px] flex flex-col gap-[24px] opacity-100 rotate-0 shrink-0">
            
            {/* Breadcrumb Navigation */}
            <nav className="text-[14px] text-[#5D6F80] flex items-center gap-2">
              <Link href="/blog" className="hover:underline shrink-0">
                Blog
              </Link>
              <span>&gt;</span>
              <span className="text-[#5D6F80] font-normal truncate max-w-[400px]">
                {post.title}
              </span>
            </nav>

            {/* Judul Utama Artikel */}
            <h1 className="text-[36px] font-semibold leading-[44px] tracking-[-0.02em] text-font-primary">
              {post.title}
            </h1>

            {/* Tanggal Rilis */}
            <div className="flex items-center gap-2 text-[16px] text-font-secondary">
              <span><CalendarRange className="w-5 h-5"/></span>
              <span>{post.date}</span>
            </div>

            {/* Banner Gambar Utama */}
            <div className="w-full h-[529px] rounded-[12px] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Body Teks Paragraf */}
            <article className="w-full flex flex-col gap-4 text-[#535658] text-[16px] leading-[24px] font-normal">
              {articleContent.content?.map((paragraph, index) => (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </article>

          </main>
        </div>

        <section className="mt-20">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-font-primary mb-8">
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