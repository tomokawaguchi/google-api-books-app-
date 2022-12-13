import styles from "./SectionColsWrapper.module.scss";

const SectionColsWrapper = (props) => {
	return (
		<div className={styles.SectionColsWrapper}>
			<div>{props.children}</div>
		</div>
	);
};

export default SectionColsWrapper;
