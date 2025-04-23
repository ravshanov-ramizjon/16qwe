'use client';

import { Suspense } from "react";
import Aside from "@/components/castom/Aside";
import { usePageTitle } from "@/context/PageTitleContext";
import { AddSheet } from "@/components/castom/AddSheet";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LayoutContent({ children }: { children: React.ReactNode }) {
	const { pageTitle } = usePageTitle();

	return (
		<>
			<Suspense fallback={<div>Loading Aside...</div>}>
				<Aside />
			</Suspense>
			<div className="w-[500px]">
				<center className="py-1 flex items-center justify-center text-white">
					<button className="cursor-pointer">{pageTitle}</button>
					<DropdownMenu>
						<DropdownMenuTrigger className="bg-black text-[#8d7b7b] hover:text-[#dadcde] hover:bg-black cursor-pointer inline-block rotate-90 ml-4 rounded-full border-1 border-gray-500 px-1">
							&gt;
						</DropdownMenuTrigger>
						<DropdownMenuContent className="bg-black text-white border-gray-500">
							<DropdownMenuItem>Для вас</DropdownMenuItem>
							<DropdownMenuItem>Подписки</DropdownMenuItem>
							<DropdownMenuItem>вам поставили "Нравится"</DropdownMenuItem>
							<DropdownMenuItem>Сохраненное</DropdownMenuItem>
							<DropdownMenuSeparator className="bg-gray-500" />
							<DropdownMenuItem>Создать новую ленту</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</center>
				<main className="max-w-[500px] w-full mx-auto bg-[#181818] h-[92vh] rounded-2xl overflow-y-auto hide-scrollbar">
					{children}
				</main>
			</div>
			<div className="text-white pt-90">
				<AddSheet />
			</div>
		</>
	);
}
