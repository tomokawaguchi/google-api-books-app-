import bannerImg from "./banner.svg";
import styles from "./Banner.module.scss";

const Banner = () => {
	return (
		<section className={styles.BannerSec}>
			<div className={styles.BannerSec_Inner}>
				<div className={`${styles.Col} ${styles.Col_Left}`}>
					<div className={styles.BannerSec_TextGroup}>
						<h2 className={styles.BannerSec_TextGroup_Subheading}>Google Books API</h2>
						<h1 className={styles.BannerSec_TextGroup_Heading}>FIND YOUR FAVOURITE</h1>
						<p className={styles.BannerSec_TextGroup_Para}>Start typing blow to find your favourite books or something new!</p>
					</div>
				</div>
				<div className={`${styles.Col} ${styles.Col_Right}`}>
					<div className={styles.FeaturedImage} style={{ backgroundImage: `url(${bannerImg})` }}></div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
