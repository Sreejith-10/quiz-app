import {Tile} from "@/components/tile";
import {Button} from "@/components/ui/button";

const CategoryPage = () => {
	const categories = [
		{
			value: "Sports",
			icon: "",
			color: "#d42a2a",
		},
	];

	return (
		<div className="w-full pt-10 flex items-center justify-center flex-col">
			<div>
				<p className="font-semibold text-xl">
					Choose one from the categories below & see how many questions you can
					answer correctly
				</p>
			</div>
			<div>
				{categories.map((item, index) => (
					<Tile items={item} key={index} />
				))}
			</div>
			<div>
				<Button>Start Quiz</Button>
			</div>
		</div>
	);
};

export default CategoryPage;
