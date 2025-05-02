// app/components/castom/Post.tsx
import { FaComment, FaHeart, FaShare } from "react-icons/fa";
import Image from "next/image";

const fakeAvatars = [
  "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?crop=faces&fit=crop&w=100&h=100",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=100&h=100",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&w=100&h=100",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=faces&fit=crop&w=100&h=100",
];

interface PostProps {
  posts: {
    id: string;
    author?: {
      name?: string;
    };
    content: string;
  }[];
}

export default function Post({ posts }: PostProps) {
  return (
    <div className="flex flex-col gap-6 p-4">
      {posts.map((post, index) => {
        const avatar = fakeAvatars[index % fakeAvatars.length];
        return (
          <div key={post.id} className="flex flex-col gap-4 border-b border-gray-700 pb-4">
            <div className="flex gap-4 items-center">
              <Image
                src={avatar}
                alt={post.author?.name || "User Avatar"}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />

              <div className="flex flex-col">
                <h2 className="text-sm text-white font-semibold">
                  {post.author?.name || "Неизвестный пользователь"}
                </h2>
                <p className="text-sm text-white">{post.content}</p>
              </div>
            </div>

            <div className="flex gap-4 text-white mt-2">
              <button className="cursor-pointer"><FaHeart /></button>
              <button className="cursor-pointer"><FaComment /></button>
              <button className="cursor-pointer"><FaShare /></button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
