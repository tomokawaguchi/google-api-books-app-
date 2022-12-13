import styles from "./Button.module.scss";

const Button = ({ btnColor, btnText, clickToLoad }) => {
	// For the color variations
	const classes =
		btnColor === "yellow"
			? [`${styles.Button} ${styles.Button_Yellow}`]
			: btnColor === "green"
			? [`${styles.Button} ${styles.Button_Green}`]
			: btnColor === "orange"
			? [`${styles.Button} ${styles.Button_Orange}`]
			: [styles.Button];

	return (
		<button className={classes.join(" ")} onClick={clickToLoad}>
			{btnText}
		</button>
	);
};

export default Button;
