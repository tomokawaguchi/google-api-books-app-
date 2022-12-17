import styles from "./BookCard.module.scss";

const BookGrid = ({ layout, title, thumbnail, description, categories, openModal, id }) => {
	const classes = layout === "grid" ? [styles.GridStyle] : [styles.ListStyle];

	return (
		<article className={`${styles.BookItem} ${classes.join(" ")}`} onClick={() => openModal(id)}>
			<div className={styles.BookItem_Inner}>
				<div className={styles.BookItem_Thumbnail} style={{ backgroundImage: `url(${thumbnail})` }}></div>
				<div className={styles.BookItem_TextsWrapper}>
					<ul className={styles.CatList}>
						{categories
							? categories.map((cat, index) => (
									<li className={styles.CatList_Item} key={index}>
										{cat}
									</li>
							  ))
							: ""}
					</ul>
					<h2 className={styles.BookItem_Title}>{title}</h2>
					<p className={styles.BookItem_Para}>{description ? description.substring(0, 200) + "..." : ""}</p>
				</div>
			</div>
		</article>
	);
};

export default BookGrid;
