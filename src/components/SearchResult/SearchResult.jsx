import styles from "./SearchResult.module.scss";

const SearchResult = ({ numOfResults }) => {
	return (
		<div className={styles.SearchResult}>
			<p className={styles.SearchResult_Message}>
				Search results : <span className={styles.SearchResult_Message_Orange}>{numOfResults}</span>
			</p>
		</div>
	);
};

export default SearchResult;
