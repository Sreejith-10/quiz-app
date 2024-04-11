"use client";

import {QuestionSection} from "@/components/question-section";
import {fetchQuestions} from "@/lib/controllers";
import {useQuery} from "@tanstack/react-query";
import Link from "next/link";
import {useEffect, useState} from "react";

const QuizPage = ({params}: any) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const [score, setScore] = useState(0);

	const {data, isLoading} = useQuery<
		{
			category: string;
			correct_answer: string;
			difficulty: string;
			incorrect_answers: string[];
			question: string;
			type: string;
		}[]
	>({
		queryKey: ["results"],
		queryFn: () => fetchQuestions(params.id),
		staleTime: 30000,
	});

	return (
		<main className="pt-10">
			<div>
				{data ? (
					currentIndex < 10 ? (
						<QuestionSection
							item={data?.[currentIndex]}
							index={currentIndex}
							setIndex={setCurrentIndex}
							setScore={setScore}
						/>
					) : (
						<div className="flex items-center justify-center flex-col gap-10">
							<h1 className="font-bold text-xl text-center">
								Fianl score : {score} / 10
							</h1>
							<Link
								className="bg-blue-500 py-3 px-4 rounded-lg font-semibold text-white"
								href={"/category"}>
								Try again
							</Link>
						</div>
					)
				) : null}
			</div>
		</main>
	);
};

export default QuizPage;
