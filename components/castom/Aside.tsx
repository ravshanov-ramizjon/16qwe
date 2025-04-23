'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TbBrandThreads } from 'react-icons/tb';
import { GoHomeFill } from 'react-icons/go';
import { FaSearch, FaRegHeart } from 'react-icons/fa';
import { MdOutlinePushPin } from 'react-icons/md';
import { RiListSettingsFill } from 'react-icons/ri';
import { usePageTitle } from '@/context/PageTitleContext';
import UserProfileMenu from './UserProfileMenu'; // Новый компонент для управления профилем
import Modal from './modal';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import ThemeSwitcher from './ThemeSwitcher';

export default function Aside() {
	const pathname = usePathname();
	const { setPageTitle } = usePageTitle();

	const handleNavClick = (title: string) => {
		setPageTitle(title);
	};

	const isActive = (path: string) => pathname === path;

	const handleClickSettings = (e: React.MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
	};

	return (
		<aside className="flex flex-col justify-between items-center h-screen w-fit px-4 py-6">
			<Link href="/">
				<TbBrandThreads color="white" size={34} />
			</Link>
			<nav>
				<ul className="flex flex-col items-center gap-4 text-[#8d7b7b]">
					<li onClick={() => handleNavClick('Для вас')}>
						<Link href="/">
							<GoHomeFill color={isActive("/") ? "white" : "#8d7b7b"} className="hover:bg-[#171717] p-1 w-15 h-10 rounded-lg" />
						</Link>
					</li>
					<li onClick={() => handleNavClick('Поиск')}>
						<Link href="/search">
							<FaSearch color={isActive("/search") ? "white" : "#8d7b7b"} className="hover:bg-[#171717] p-2 w-15 h-10 rounded-lg" />
						</Link>
					</li>
					<li className="cursor-pointer">
						<Modal />
					</li>
					<li onClick={() => handleNavClick('Действия')}>
						<Link href="/activity">
							<FaRegHeart color={isActive("/activity") ? "white" : "#8d7b7b"} className="hover:bg-[#171717] p-2 w-15 h-10 rounded-lg" />
						</Link>
					</li>
					<li>
						<UserProfileMenu />
					</li>
				</ul>
			</nav>

			<div className="flex items-center flex-col gap-4">
				<DropdownMenu>
					<DropdownMenuTrigger className="text-[#8d7b7b] hover:text-[#dadcde] hover:bg-black cursor-pointer">
						<MdOutlinePushPin size={25} />
					</DropdownMenuTrigger>
					<DropdownMenuContent className="bg-black text-white">
						<DropdownMenuItem>Для вас</DropdownMenuItem>
						<DropdownMenuItem>Подписки</DropdownMenuItem>
						<DropdownMenuItem>вам поставили "Нравится"</DropdownMenuItem>
						<DropdownMenuItem>Сохраненное</DropdownMenuItem>
						<DropdownMenuItem>Поиск</DropdownMenuItem>
						<DropdownMenuItem>Действия</DropdownMenuItem>
						<DropdownMenuItem>Профиль</DropdownMenuItem>
						<DropdownMenuItem>Статистика</DropdownMenuItem>
						<DropdownMenuItem>Пользовательские ленты</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<DropdownMenu>
					<DropdownMenuTrigger onClick={handleClickSettings} className="text-[#8d7b7b] hover:text-[#dadcde] hover:bg-black cursor-pointer">
						<RiListSettingsFill size={25} />
					</DropdownMenuTrigger>
					<DropdownMenuContent className="bg-black text-white border-gray-500">
						<DropdownMenuItem onClick={handleClickSettings}><ThemeSwitcher /></DropdownMenuItem>
						<DropdownMenuItem>Настройки</DropdownMenuItem>
						<DropdownMenuSeparator className="bg-gray-500" />
						<DropdownMenuItem>Сообщить о проблеме</DropdownMenuItem>
						<DropdownMenuItem className="text-red-500">Выйти</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</aside>
	);
}
