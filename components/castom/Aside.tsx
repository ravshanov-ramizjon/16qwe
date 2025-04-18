import Link from "next/link";
import Image from "next/image";
import { TbBrandThreads } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { FaRegHeart, FaRegUser, FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { Button } from "../ui/button";
import { MdOutlinePushPin } from "react-icons/md";
import { RiListSettingsFill } from "react-icons/ri";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export default function Aside() {
    return (
        <>
            <aside className="flex flex-col justify-between items-center h-screen w-fit px-4 py-6">
                <Link href="/">
                    <TbBrandThreads color="white" size={34} />
                </Link>
                <nav>
                    <ul className="flex flex-col items-center gap-6 text-[#8d7b7b] ">
                        <li>
                            <Link href="/">
                                <GoHomeFill color="white" size={30} />
                            </Link>
                        </li>
                        <li>
                            <Link href="/search">
                                <FaSearch size={25} />
                            </Link>
                        </li>
                        <li className="cursor-pointer"><IoMdAdd size={15} className="bg-[#171717] w-15 h-10 rounded-lg" /></li>
                        <li>
                            <Link href="/activity">
                                <FaRegHeart size={25} />
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile">
                                <FaRegUser size={25} />
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center flex-col gap-4">
                    <button className="text-[#6B6B6B] cursor-pointer"></button>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-black text-[#dadcde] hover:bg-black cursor-pointer">
                                    <MdOutlinePushPin size={25} />
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-[#181818] text-white border-none">
                                    <NavigationMenuLink className="cursor-pointer">Профиль</NavigationMenuLink>
                                    <NavigationMenuLink className="cursor-pointer">Настройки</NavigationMenuLink>
                                    <NavigationMenuLink className="cursor-pointer">Сообщить о проблеме</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-black text-[#dadcde] hover:bg-black cursor-pointer">
                                    <RiListSettingsFill size={25} />
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-[#181818] text-white border-none ">
                                    <NavigationMenuLink className="cursor-pointer">Выйти</NavigationMenuLink>
                                    <NavigationMenuLink className="cursor-pointer">Сообщить о проблеме</NavigationMenuLink>
                                    <NavigationMenuLink className="cursor-pointer">Настройки</NavigationMenuLink>
                                    <NavigationMenuLink className="cursor-pointer">Статистика</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </aside>
        </>
    );
}