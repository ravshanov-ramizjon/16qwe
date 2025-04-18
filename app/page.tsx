import Post from "@/components/castom/Post";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function Home() {
	return (
		<div>
			<form action="" className="flex justify-between items-center gap-2 px-2 py-4">
				<FaRegUser color="white" size={25} />
				{/* <img src="/navigation/profile.svg" alt="" /> */}
				<Input type="text" className="border-none" placeholder="Что нового?" />
				<Button className="p-1 border border-[#383939]">Опубликовать</Button>
				<hr />
			</form>
			<div className="flex flex-col items-start">
				<Post />
			</div>
		</div>
	);
}
