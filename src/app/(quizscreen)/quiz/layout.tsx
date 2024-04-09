import {Header} from "@/components/header";

export default function QuizLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<section>{children}</section>
			</main>
		</>
	);
}
