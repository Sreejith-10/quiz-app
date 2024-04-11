import {CircleCheck} from "lucide-react";
import {SetStateAction, useState} from "react";

interface TileProps {
	items: {
		id: number;
		name: string;
	};
	id: number;
	onclick: React.Dispatch<SetStateAction<number>>;
}

export const Tile = ({items, id, onclick}: TileProps) => {
	return (
		<div
			className={`size-[200px] rounded-xl flex text-center items-center justify-center flex-col gap-10 cursor-pointer relative ${
				id === items?.id
					? "bg-emerald-400 border-emerald-50 "
					: "bg-emerald-50 border border-emerald-500 dark:bg-emerald-500/30"
			}`}
			onClick={() => onclick(items.id)}>
			{id === items.id ? (
				<CircleCheck
					size={30}
					className={`absolute top-3 right-3 ${
						id === items?.id ? "text-emerald-50" : "text-emerald-500 "
					}`}
				/>
			) : null}
			<h3 className="font-semibold text-lg">
				{items.name.replace("Entertainment: ", "").replace("Science: ", "")}
			</h3>
		</div>
	);
};
