export const shuffle = (array: string[]) => {
	// Loop from the end down to the second element
	for (let i = array.length - 1; i > 0; i--) {
		// Get a random index between 0 and i (inclusive)
		const j = Math.floor(Math.random() * (i + 1));
		// Swap the current element with the random element
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};
