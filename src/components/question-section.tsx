"use client";

import {SetStateAction, useEffect, useState} from "react";
import {Button} from "./ui/button";
import {shuffle} from "@/lib/shuffle";

interface QuestionSectionProps {
	item: {
		category: string;
		correct_answer: string;
		difficulty: string;
		incorrect_answers: string[];
		question: string;
		type: string;
	};
	index: number;
	setIndex: React.Dispatch<SetStateAction<number>>;
	setScore: React.Dispatch<SetStateAction<number>>;
}

export const QuestionSection = ({
	item,
	index,
	setIndex,
	setScore,
}: QuestionSectionProps) => {
	const [disable, setDisable] = useState(false);

	const [choice, setChoice] = useState("");

	const [shuffled, setShuffled] = useState<string[]>();

	const checkAnswer = async (key: string) => {
		if (key === item?.correct_answer) {
			setScore((prev) => prev + 1);
		}
		setDisable(true);
		setChoice(key);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIndex(index + 1);
		setDisable(false);
	};

	useEffect(() => {
		const randomArray = shuffle([
			...item?.incorrect_answers,
			item?.correct_answer,
		]);

		setShuffled(randomArray);
	}, [item]);

	return (
		<div className="flex flex-col items-center justify-center gap-10">
			<div className="flex items-center justify-center flex-col gap-6">
				<h1
					className="font-bold text-xl"
					dangerouslySetInnerHTML={{
						__html:
							"Category : " + item?.category.replace("Entertainment:", ""),
					}}
				/>
				<h2 className="font-semibold text-xl text-blue-600">
					{index + 1} / 10
				</h2>
				<h3
					className="font-semibold text-lg"
					dangerouslySetInnerHTML={{
						__html: item?.question,
					}}
				/>
			</div>
			<div className="w-full grid grid-cols-2 gap-5">
				{shuffled?.map((question, index) => (
					<Button
						onClick={() => checkAnswer(question)}
						key={index}
						disabled={disable}
						className={`min-w-1/2 h-20 text-[15px] flex items-center justify-center border rounded-lg border-opacity-30 py-4 px-2 font-medium ${
							disable
								? item?.correct_answer === question
									? "bg-emerald-500 dark:text-slate-50"
									: choice !== item?.correct_answer && choice === question
									? "bg-destructive dark:text-slate-50"
									: "border-slate-500 bg-white text-slate-700 hover:bg-white"
								: "border-slate-500 bg-white text-slate-700 hover:bg-white"
						}`}
						dangerouslySetInnerHTML={{__html: question}}
					/>
				))}
			</div>
		</div>
	);
};
