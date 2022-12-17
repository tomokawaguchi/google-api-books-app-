import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./Modal.module.scss";

const Modal = ({ currentBook, modalState, closeModal }) => {
	// Adding modal active class to body to disable the scrolling in the background of the modal
	const body = document.querySelector("body");
	modalState ? body.classList.add("activeModal") : body.classList.remove("activeModal");

	return modalState ? (
		<div className={styles.Modal} onClick={closeModal}>
			<div className={styles.Modal_Inner} onClick={(event) => event.stopPropagation()}>
				<div className={styles.Modal_ContentWrapper}>
					<div className={styles.Modal_Thumbnail} style={{ backgroundImage: `url(${currentBook.volumeInfo.imageLinks.thumbnail})` }}></div>
					<div className={styles.Modal_TextWrapper}>
						<ul className={styles.Modal_CatList}>
							{currentBook.volumeInfo.categories?.map((cat, index) => (
								<li className={styles.Modal_CatList_Item} key={index}>
									{cat}
								</li>
							))}
						</ul>
						<h2 className={styles.Modal_Title}>{currentBook.volumeInfo.title}</h2>
						<span className={styles.Modal_AuthorList_Title}>Author: </span>
						<ul className={styles.Modal_AuthorList}>
							{currentBook.volumeInfo.authors?.map((author, index) => (
								<li className={styles.Modal_AuthorList_Item} key={index}>
									{author}
								</li>
							))}
						</ul>
						<p className={styles.Modal_Publisher}>
							<span className={styles.Modal_Publisher_Title}>Publisher:</span>
							{currentBook.volumeInfo.publisher ?? ""}
						</p>
						<p className={styles.Modal_PublishedDate}>
							<span className={styles.Modal_PublishedDate_Title}>Published Date: </span>
							{currentBook.volumeInfo.publishedDate ?? ""}
						</p>
						<p className={styles.Modal_Language}>
							<span className={styles.Modal_Language_Title}>Language: </span>
							{currentBook.volumeInfo.language && currentBook.volumeInfo.language === "en" ? "English" : ""}
						</p>
						<p className={styles.Modal_PageCount}>
							<span className={styles.Modal_PageCount}>Page count: </span>
							{currentBook.volumeInfo.pageCount ?? ""}
						</p>
						<span className={styles.Modal_About}>About this book:</span>
						<p className={styles.Modal_About_Desc}>{currentBook.volumeInfo.description}</p>
					</div>
				</div>
				<AiOutlineCloseCircle className={styles.Modal_CloseBtn} onClick={closeModal} />
			</div>
		</div>
	) : (
		<></>
	);
};

export default Modal;
