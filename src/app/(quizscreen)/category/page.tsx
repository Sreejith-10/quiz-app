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
		staleTime: 30000,
	});

	return (
		<div className="w-full flex items-center justify-center flex-col gap-10">
			<div>
				<p className="font-semibold text-xl">
					Choose one from the categories below & see how many questions you can
					answer correctly
				</p>
			</div>
			<div className="flex flex-wrap gap-5">
				{data?.map((item) => (
					<Tile
						items={item}
						id={category}
						key={item.id}
						onclick={setCategory}
					/>
				))}
			</div>
			<div>
				<Link
					className="bg-blue-500 py-3 px-4 rounded-lg font-semibold text-white"
					href={`/quiz/${category}`}>
					Start Quiz
				</Link>
			</div>
		</div>
	);
};

export default CategoryPage;
