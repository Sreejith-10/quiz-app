import Link from "next/link";

export default function Home() {
	return (
		<main className="w-full h-dvh flex items-center justify-center">
			<div className="flex items-center flex-col">
				<h2>Welcome to quiz world</h2>
				<span>A Quiz platform to test your knowledge</span>
				<Link href={"/quiz"}>Get Started</Link>
			</div>
		</main>
	);
}
