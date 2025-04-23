'use client';

import Post from "@/components/castom/Post";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";


export default function Home() {
	const { data: session, status } = useSession();
	return (
		<div>
			{status === "loading" ? (
				<Skeleton className="w-full h-20 rounded-full animate-pulse" />
			) : (
				<>
					<form action="" className="flex justify-between items-center gap-2 px-2 py-4">
						<Image
							src={session?.user?.image || "/default-avatar.png"}
							alt={session?.user?.name || "Ghoste"}
							width={50}
							height={50}
							className="rounded-full object-cover w-8 h-8"
						/>
						{/* <img src="/navigation/profile.svg" alt="" /> */}
						<Input type="text" className="border-none" placeholder="Что нового?" />
						<Button className="p-1 border border-[#383939]">Опубликовать</Button>
						<hr />
					</form>
					<div className="flex flex-col items-start">
						<Post />
					</div>
				</>
			)}
		</div>
	);
}
