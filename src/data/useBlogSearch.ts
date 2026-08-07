"use client";
import { useState, useMemo } from "react";

export interface BlogPost {
    id:  string;
    date: string;
    title: string;
    description: string;
    image: string;
    slug: string;
}

export const useBlogSearch = (posts: BlogPost[]) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return posts;

        return posts.filter(
            (post) =>
                post.title.toLowerCase().includes(query) ||
                post.description.toLowerCase().includes(query) ||
                post.date.toLowerCase().includes(query)
        );
    }, [posts, searchQuery]);

    return {
        searchQuery,
        setSearchQuery,
        filteredPosts,
    }
}