// src/components/mentors/MentorsBlogClient.tsx
"use client";

import { useGetPosts } from "@/hooks/services-hooks";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FeaturedPost } from "./FeaturedPost";
import Pagination from "./Paagination";
import { BlogCard } from "./BlogCard";

export default function MentorsBlogClient() {
  const searchParams = useSearchParams();
  const { data: posts, isLoading } = useGetPosts();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const sp = searchParams.get("pageNumber");
    const pn = sp ? parseInt(sp, 10) : 1;
    if (!isNaN(pn)) {
      setCurrentPage(pn);
    }
  }, [searchParams]);

  if (isLoading) return <div>Loading...</div>;
  if(posts?.docs?.length == 0) return <div>No posts added yet </div>

  return (
    <section>
      {posts?.docs.map((post: any) => (
        <FeaturedPost key={post.id} post={post} />
      ))}

      <div className="h-25" />

      {posts?.docs.map((post: any) => <BlogCard key={post.id} post={post} />)}

      {posts?.docs?.length > 1 && (
        <Pagination
          pageNumber={currentPage}
          pages={posts?.totalPages}
          route={"/mentors-blog"}
        />
      )}
    </section>
  );
}
