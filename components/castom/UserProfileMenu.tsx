'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton"; 
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { FaRegUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      isRegistered?: boolean; 
    };
  }
}

const UserProfileMenu = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSignOut = () => {
    signOut(  { callbackUrl: "/" });
  };

  const handleProfileClick = () => {
    if (session?.user) {
      router.push("/profile");
    } else {
      alert("Вы должны пройти регистрацию!");
    }
  };

  return (
    <div className="flex items-center">
      {status === "loading" ? (
        <Skeleton className="w-8 h-8 rounded-full animate-pulse" />
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            {session ? (
              <img
                src={session.user?.image || "/default-avatar.png"}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover cursor-pointer"
              />
            ) : (
              <FaRegUser className="w-8 h-8 text-gray-400 cursor-pointer" />
            )}
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-black text-white">
            {session ? (
              <>
                <DropdownMenuItem onClick={handleProfileClick}>
                  Профиль
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut} className="text-red-500">
                  Выйти
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem onClick={() => signIn()}>
                  Войти
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signIn()}>
                  Зарегистрироваться
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default UserProfileMenu;
