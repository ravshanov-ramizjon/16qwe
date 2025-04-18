import Image from "next/image";
import { FaComment, FaHeart, FaShare } from "react-icons/fa";

export default function Post() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex gap-4">
                <Image
                    src="/images/1.jpg"
                    alt="user"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <div className="flex flex-col text-white">
                    <h2 className="text-sm text-white font-semibold">username</h2>
                    <p className="text-sm text-white">post content</p>
                <Image
                    src="/images/1.jpg"
                    alt="content"
                    width={50}
                    height={50}
                    className="rounded-lg"
                />
                </div>
            </div>
            <div className="flex gap-4 text-white">
                <button className="cursor-pointer"><FaHeart/></button>
                <button className="cursor-pointer"><FaComment/></button>
                <button className="cursor-pointer"><FaShare/></button>
            </div>
        </div>
    );
}