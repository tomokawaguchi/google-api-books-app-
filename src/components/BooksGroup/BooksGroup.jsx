import BookCard from "../BookCard/BookCard";
import styles from "./BooksGroup.module.scss";
import ResultStyleToggle from "../../containers/ResultStyleToggle/ResultStyleToggle";

const BooksGroup = ({ data, isGrid, openModal }) => {
	const layoutStyle = isGrid ? "grid" : "list";

	return (
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
								openModal={openModal}
								id={book.id}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default BooksGroup;
