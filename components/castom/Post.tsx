import Image from "next/image";
import { FaComment, FaHeart, FaShare } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";

const fakePosts = [
  {
    id: 1,
    username: "ramiz_dev",
    content: "Только что закончил новый проект на Next.js! 🚀",
    avatar: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?crop=faces&fit=crop&w=100&h=100",
  },
  {
    id: 2,
    username: "julia_art",
    content: "Нарисовала сегодня шедевр! 🎨 Заходите смотреть!",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=100&h=100",
  },
  {
    id: 3,
    username: "code_master",
    content: "Работаю над open-source проектом для IT-сообщества. ✍️",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&w=100&h=100",
  },
  {
    id: 4,
    username: "travel_guru",
    content: "Только что вернулся с Бали! 🏝️ Фото в профиле!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=faces&fit=crop&w=100&h=100",
  },
];

export default function Post() {
  const isLoading = false; // Можешь поставить true чтобы увидеть скелетоны

  return (
    <div className="flex flex-col gap-6 p-4">
      {fakePosts.map((post) => (
        <div key={post.id} className="flex flex-col gap-4 border-b border-gray-700 pb-4">
          <div className="flex gap-4 items-center">
            {isLoading ? (
              <Skeleton className="w-12 h-12 rounded-full" />
            ) : (
              <Image
                src={post.avatar}
                alt={post.username}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            )}

            <div className="flex flex-col">
              {isLoading ? (
                <>
                  <Skeleton className="w-24 h-4 mb-2" />
                  <Skeleton className="w-32 h-4" />
                </>
              ) : (
                <>
                  <h2 className="text-sm text-white font-semibold">{post.username}</h2>
                  <p className="text-sm text-white">{post.content}</p>
                </>
              )}
            </div>
          </div>

          <div className="flex gap-4 text-white mt-2">
            {isLoading ? (
              <>
                <Skeleton className="w-6 h-6 rounded-full" />
                <Skeleton className="w-6 h-6 rounded-full" />
                <Skeleton className="w-6 h-6 rounded-full" />
              </>
            ) : (
              <>
                <button className="cursor-pointer"><FaHeart /></button>
                <button className="cursor-pointer"><FaComment /></button>
                <button className="cursor-pointer"><FaShare /></button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
