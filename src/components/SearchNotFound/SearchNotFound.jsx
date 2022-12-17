import styles from "./SearchNotFound.module.scss";

const SearchNotFound = ({ searchedKeyword }) => {
	const term = searchedKeyword;
	return (
		<section className={styles.SearchNotFound}>
			{/* For when there is no result found */}
			<div>
				<p className={styles.SearchNotFound_Message}>
					It appears that there is no book found relating to <span className={styles.SearchNotFound_Message_Orange}>"{term}"</span>
				</p>
			</div>
		</section>
	);
};

export default SearchNotFound;
