// API
const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes?q=";

export const fetchBooks = async (currentKeyword, order, firstIndex) => {
	try {
		// Set to fetch 12 books every request
		// The index of the first books at every page is managed with firstIndex state
		const response = await fetch(`${GOOGLE_BOOKS_API}${currentKeyword}&orderBy=${order}&printType=books&startIndex=${firstIndex}&&maxResults=12`);
		const jsonPromises = await response.json();

		return jsonPromises;
	} catch (e) {
		console.log(e);
	}
};
