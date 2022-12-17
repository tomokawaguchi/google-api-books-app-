import styles from "./GridListToggle.module.scss";
import { BsFillGridFill, BsListUl } from "react-icons/bs";

const GridListToggle = ({ isGrid, iconClick }) => {
	const gridClasses = isGrid ? [styles.GridListToggle_Icon, styles.GridListToggle_Icon_isActive] : [styles.GridListToggle_Icon];
	const listClasses = !isGrid ? [styles.GridListToggle_Icon, styles.GridListToggle_Icon_isActive] : [styles.GridListToggle_Icon];

	return (
		<div className={styles.GridListToggle}>
			<div className={gridClasses.join(" ")} onClick={() => iconClick("grid")}>
				<BsFillGridFill />
			</div>
			<div className={listClasses.join(" ")} onClick={() => iconClick("list")}>
				<BsListUl />
			</div>
		</div>
	);
};

export default GridListToggle;
