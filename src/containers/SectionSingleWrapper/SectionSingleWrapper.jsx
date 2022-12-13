import styles from "./SectionSingleWrapper.module.scss";

const SectionSingleWrapper = (props) => {
	return (
		<div className={styles.SectionSingleWrapper}>
			<div>{props.children}</div>
		</div>
	);
};

export default SectionSingleWrapper;
