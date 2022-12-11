import styles from "./ResultStyleToggle.module.scss";
import SearchResult from "../../components/SearchResult/SearchResult";
import GridListToggle from "../../components/GridListToggle/GridListToggle";

const ResultStyleToggle = ({ isGrid, iconClick, numOfResults }) => {
	return (
		<section className={styles.ResultStyleToggle}>
			<div className={styles.ResultStyleToggle_Wrapper}>
				<SearchResult numOfResults={numOfResults} />
				<GridListToggle isGrid={isGrid} iconClick={iconClick} />
			</div>
		</section>
	);
};

export default ResultStyleToggle;
