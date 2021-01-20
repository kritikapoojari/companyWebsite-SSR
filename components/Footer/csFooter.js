import styles from "../../styles/contentstack/Footer.module.scss";

function Footer() {
	return (
		<>
			<br />
			<hr />
			<div className={styles["footer-container"]}>
				<div className={styles["cs-logo"]}>
					<div>
						<img
							src="https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt954cedac0397edba/5f1a2be1d0350a5e2a2fde71/contentstack-footer-logo.png"
							className={styles["logo"]}
						/>
					</div>
					<br />
					<div className={styles["footer-icons"]}>
						<ul className={styles["links"]}>
							<li className={styles["icon-logo"]}>
								<img src="https://img.icons8.com/android/24/000000/twitter.png" />
							</li>
							<li className={styles["icon-logo"]}>
								<img src="https://img.icons8.com/metro/26/000000/linkedin.png" />
							</li>
							<li className={styles["icon-logo"]}>
								<img src="https://img.icons8.com/metro/24/000000/facebook-new.png" />
							</li>
							<li className={styles["icon-logo"]}>
								<img src="https://img.icons8.com/material-rounded/24/000000/youtube-play.png" />
							</li>
							<li className={styles["icon-logo"]}>
								<img src="https://img.icons8.com/material-rounded/26/000000/github.png" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
