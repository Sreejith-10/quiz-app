import {SetStateAction} from "react";

interface TileProps {
	items: {
		id: number;
		name: string;
	};
	onclick: React.Dispatch<SetStateAction<number>>;
}

export const Tile = ({items, onclick}: TileProps) => {
	return (
		<div
			className="size-[300px] rounded-xl flex items-center justify-center flex-col gap-10 bg-lime-100 cursor-pointer"
			onClick={() => onclick(items.id)}>
			<h3 className="font-semibold text-lg">
				{items.name.replace("Entertainment: ", "").replace("Science: ", "")}
			</h3>
		</div>
	);
};
