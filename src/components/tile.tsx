import Image from "next/image";

export const Tile = ({
	items,
}: {
	items: {value: string; icon: string; color: string};
}) => {
	return (
		<div className="size-[300px] rounded-xl flex items-center justify-center flex-col gap-10" style={{background: items.color}}>
			<Image src={items.icon} alt="not found" />
			<h3 className="font-semibold text-lg">{items.value}</h3>
		</div>
	);
};
