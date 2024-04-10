"use client";

import {SetStateAction, useState} from "react";
import {Button} from "./ui/button";

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

	const [answer, _setAnswer] = useState(item?.correct_answer);
	const [choice, setChoice] = useState("");

	const checkAnswer = async (key: string) => {
		if (key === answer) {
			setScore((prev) => prev + 1);
		}
		setDisable(true);
		setChoice(key);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIndex(index + 1);
		setDisable(false);
	};

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
				<Button
					onClick={() => checkAnswer(item?.correct_answer)}
					disabled={disable}
					className={`min-w-1/2 h-20 text-[15px] flex items-center justify-center border  rounded-lg  py-4 px-2 font-medium ${
						disable
							? choice === answer
								? "bg-emerald-500/70 border-emerald-500 hover:bg-emerald-500/40 hover:text-emerald-600"
								: "bg-emerald-500/70 border-emerald-500 hover:bg-emerald-500/40 hover:text-emerald-600"
							: "border-slate-500 border-opacity-30 bg-white text-slate-700 hover:bg-white"
					}`}
					dangerouslySetInnerHTML={{__html: item?.correct_answer}}
				/>
				{item?.incorrect_answers?.map((question, index) => (
					<Button
						onClick={() => checkAnswer(question)}
						key={index}
						disabled={disable}
						className={`min-w-1/2 h-20 text-[15px] flex items-center justify-center border border-slate-500 rounded-lg border-opacity-30 py-4 px-2 font-medium bg-white text-slate-700 hover:bg-white ${
							disable
								? choice === question
									? "bg-destructive/20 text-destructive border-destructive hover:bg-destructive/40 hover:text-destructive"
									: ""
								: "border-slate-500 border-opacity-30 bg-white text-slate-700 hover:bg-white"
						}`}
						dangerouslySetInnerHTML={{__html: question}}
					/>
				))}
			</div>
		</div>
	);
};
