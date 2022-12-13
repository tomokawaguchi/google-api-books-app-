import styles from "./Searching.module.scss";
import BookCard from "../BookCard/BookCard";
import ResultStyleToggle from "../../containers/ResultStyleToggle/ResultStyleToggle";

const Searching = ({ data, isGrid, isLoadingMore }) => {
	const layoutStyle = isGrid ? "grid" : "list";

	return !isLoadingMore ? (
		// For the new search or initial load
		<div className={styles.Searching}>
			<p>Searching for books...</p>
		</div>
	) : (
		// For the load more --> blurred bg
		<section className={styles.BooksGroup}>
			<div className={styles.BooksGroup_Inner}>
				<div className={styles.BooksGroup_BooksWrapper}>
					{data.map((book, index) => {
						const { title, categories, description, imageLinks } = book.volumeInfo;

						return (
							<BookCard
								layout={layoutStyle}
								title={title ? title : ""}
								thumbnail={imageLinks ? imageLinks.thumbnail : ""}
								description={description ? description : ""}
								categories={categories}
								data={data}
								key={index}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Searching;
