export const fetchCategory = async () => {
	const response = await fetch("https://opentdb.com/api_category.php");
	const data = await response.json();
	return data.trivia_categories;
};

export const fetchQuestions = async (id: string) => {
	const response = await fetch(
		`https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`
	);
	const data = await response.json();
	
	return data.results;
};
