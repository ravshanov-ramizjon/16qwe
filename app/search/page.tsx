'use client'
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiAbacus } from "react-icons/bi";
import { FaRegUser, FaSearch } from "react-icons/fa";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { RotateCcw, RotateCw } from "lucide-react";

interface ProfileData {
	name: string;
	username: string;
	tagline: string;
	achievements: string[];
	followers: string;
	avatar: string;
}

interface PageProps { }

const Page: React.FC<PageProps> = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const [imageError, setImageError] = useState<boolean>(false);
	const [profileData, setProfileData] = useState<ProfileData | null>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleImageError = () => {
		setImageError(true);
	};

	useEffect(() => {
		setTimeout(() => {
			setProfileData({
				name: "Kylie Jenner",
				username: "kyliejenner",
				tagline: "Founder of Kylie Cosmetics | Entrepreneur | Mom |",
				achievements: [
					"Forbes Billionaire 2020",
					"Founder of Kylie Cosmetics",
					"Youngest self-made billionaire",
					"Instagram Queen with over 250M followers",
					"Star of Keeping Up With The Kardashians",
				],
				followers: "250M+",
				avatar: "/",
			},);
		}, 1000);
	}, []);

	return (
		<div>
			<div className="flex justify-center relative">
				<Input
					className="m-5 pl-10 text-white border-[#383939]"
					placeholder="Search..."
					value={inputValue}
					onChange={handleInputChange}
				/>
				{!inputValue && (
					<FaSearch className="absolute left-8 top-1/2 transform -translate-y-1/2 text-[#383939]" />
				)}
				<DropdownMenu>
					<DropdownMenuTrigger className="absolute right-6 top-6 text-[#383939] raunded-full hover:bg-[#383939] cursor-pointer">
						<BiAbacus size={25} />
					</DropdownMenuTrigger>
					<DropdownMenuContent className="bg-black text-white border-[#383939]">
						<DropdownMenuItem className="flex justify-between">После <RotateCw className="text-sistem " /></DropdownMenuItem>
						<DropdownMenuItem className="flex justify-between">До <RotateCcw className="text-sistem" /></DropdownMenuItem>
						<DropdownMenuSeparator className="bg-[#383939]" />
						<DropdownMenuItem className="flex justify-between">Из профиля... <FaRegUser className="text-sistem" /></DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			<div className="text-white ml-5">
				<p>Рекомендуемые подписки</p>
				<div className="flex">
					<div className="w-12 h-12 rounded-full">
						{imageError ? (
							<Skeleton className="w-10 h-10 rounded-full" />
						) : (
							<Image
								src={profileData?.avatar || "/profile/avatar"}
								alt="profile logo"
								width={40}
								height={40}
								className="w-10 h-10 rounded-full"
								onError={handleImageError}
							/>
						)}
					</div>

					<div className="flex justify-between">
						<div>
							<div className="text-white">
								{profileData ? (
									<>
										<h2 className="text-[12px] font-semibold">{profileData.name}</h2>
										<p className="text-[12px] text-[#8d7b7b]">@{profileData.username}</p>
										<p className="mt-1 text-[12px]">{profileData.tagline}</p>
									</>
								) : (
									<Skeleton className="w-32 h-6 mb-2" />
								)}
							</div>

							<div className="mt-1">
								<ul className="list-disc pl-3">
									{profileData ? (
										profileData.achievements.map((achievement, index) => (
											<li className="text-[10px]" key={index}>{achievement}</li>
										))
									) : (
										<>
											<Skeleton className="w-60 h-4 mb-2" />
											<Skeleton className="w-60 h-4 mb-2" />
											<Skeleton className="w-60 h-4 mb-2" />
										</>
									)}
								</ul>
							</div>

							<div className="mt-4">
								{profileData ? (
									<>
										<p className="text-[10px] font-medium text-[#8d7b7b]">{profileData.followers} подписчиков</p>
									</>
								) : (
									<Skeleton className="w-40 h-6" />
								)}
							</div>
						</div>
						<div>
							<Button className="border border-gray-500 cursor-pointer">Подписаться</Button>
						</div>
					</div>
				</div>
				<hr className="w-105 ml-12" />
			</div>
		</div>
	);
};

export default Page;
