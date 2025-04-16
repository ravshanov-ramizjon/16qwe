import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<form action="">
				<img src="" alt="" />
				<input type="text" />
				<button>post</button>
				<hr />
			</form>
			<div className="flex flex-col items-start">
				<Post />
			</div>
		</div>
	);
}
