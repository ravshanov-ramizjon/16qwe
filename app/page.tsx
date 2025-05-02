// app/page.tsx
'use client';

import Post from "@/components/castom/Post";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Home() {
  const { data: session, status } = useSession();

  const response = await fetch("http://localhost:3000/api/posts");
  const posts = await response.json();

  return (
    <div>
      {status === "loading" ? (
        <Skeleton className="w-full h-20 rounded-full animate-pulse" />
      ) : (
        <>
          <form action="" className="flex justify-between items-center gap-2 px-2 py-4">
            <Image
              src={session?.user?.image || "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?crop=faces&fit=crop&w=100&h=100"}
              alt={session?.user?.name || "Ghoste"}
              width={50}
              height={50}
              className="rounded-full object-cover w-8 h-8"
            />
            <Input type="text" className="border-none text-white" placeholder="Что нового?" />
            <Button className="p-1 border border-[#383939]">Опубликовать</Button>
            <hr />
          </form>

          <div className="flex flex-col items-start">
            <Post posts={posts} />
          </div>
        </>
      )}
    </div>
  );
}
