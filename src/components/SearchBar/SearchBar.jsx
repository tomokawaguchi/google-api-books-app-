import { HiArrowNarrowRight } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ searchClick, searchKeypress, searchReset, handleOnBlur, searchBtn, searchInput }) => {
	return (
		<div className={styles.SearchBar}>
			<form className={styles.SearchBar_Inner} onSubmit={(e) => e.preventDefault()}>
				<input
					ref={searchInput}
					placeholder="Search"
					type="text"
					className={styles.SearchBar_Input}
					onKeyPress={searchKeypress}
					onBlur={handleOnBlur}
					required
				/>
				<div className={styles.SearchBar_ButtonsWrapper}>
					<button type="button" className={styles.SearchBar_Reset} onClick={searchReset}>
						<AiOutlineCloseCircle />
					</button>
					<button type="button" ref={searchBtn} className={styles.SearchBar_Button} onClick={() => searchClick()}>
						<HiArrowNarrowRight />
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
