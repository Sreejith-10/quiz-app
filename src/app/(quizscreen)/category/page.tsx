"use client";

import {Tile} from "@/components/tile";
import {fetchCategory} from "@/lib/controllers";
import {useQuery} from "@tanstack/react-query";
import Link from "next/link";
import {useState} from "react";

const CategoryPage = () => {
	const [category, setCategory] = useState(0);

	const {data, isLoading} = useQuery<{id: number; name: string}[]>({
		queryKey: ["trivia_categories"],
		queryFn: fetchCategory,
	});

	return (
		<div className="w-full pt-10 flex items-center justify-center flex-col">
			<div>
				<p className="font-semibold text-xl">
					Choose one from the categories below & see how many questions you can
					answer correctly
				</p>
			</div>
			<div className="flex flex-wrap gap-5">
				{data?.map((item) => (
					<Tile items={item} key={item.id} onclick={setCategory} />
				))}
			</div>
			<div>
				<Link href={`/quiz/${category}`}>Start Quiz</Link>
			</div>
		</div>
	);
};

export default CategoryPage;
