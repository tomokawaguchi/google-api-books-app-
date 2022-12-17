import styles from "./OrderSwitch.module.scss";

const OrderSwitch = ({ isRelevant, handleOrderSwitch }) => {
	const relevantClasses = isRelevant ? [styles.OrderSwitch_Item, styles.OrderSwitch_Item_isActive] : [styles.OrderSwitch_Item];
	const newestClasses = !isRelevant ? [styles.OrderSwitch_Item, styles.OrderSwitch_Item_isActive] : [styles.OrderSwitch_Item];

	return (
		<div className={styles.OrderSwitch}>
			<div className={styles.OrderSwitch_List}>
				<div className={relevantClasses.join(" ")} onClick={() => handleOrderSwitch("relevance")}>
					<button className={styles.OrderSwitch_Button}>Relevance</button>
				</div>
				<div className={newestClasses.join(" ")} onClick={() => handleOrderSwitch("newest")}>
					<button className={styles.OrderSwitch_Button}>Newest</button>
				</div>
			</div>
		</div>
	);
};

export default OrderSwitch;
