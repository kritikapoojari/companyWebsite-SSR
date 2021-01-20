import styles from "../../styles/surfboard/Footer.module.scss";
function Footer() {
	return (
		<>
			<hr />
			<br />
			<div className={styles["sb-container"]}>
				<div className={styles["logo"]}>
					<img
						src="https://images.contentstack.io/v3/assets/blt137524604e62b5cb/blte814c52ab7983cb7/5ed94783ff1cb239b9500ed0/logo@3x.svg"
						alt="surfboard logo"
					></img>
				</div>
			</div>
			<div>
				<div className={styles["info"]}>
					<p className={styles["info-content"]}>
						info@surfboardadventures.com
					</p>
				</div>

				<div className={styles["footer-links"]}>
					<ul className={styles["footer-logo"]}>
						<li>
							<img src="https://img.icons8.com/plumpy/24/000000/facebook-new.png" />
						</li>
						<li>
							<img src="https://img.icons8.com/material-two-tone/24/000000/linkedin.png" />
						</li>
						<li>
							<img src="https://img.icons8.com/material-two-tone/24/000000/twitter.png" />
						</li>
						<li>
							<img src="https://img.icons8.com/material-two-tone/24/000000/youtube-play.png" />
						</li>
						<li>
							<img src="https://img.icons8.com/material-two-tone/24/000000/instagram-new.png" />
						</li>
					</ul>
				</div>
				<div className={styles["copy"]}>
					<p>Copyright © 2020 Surfboard Ventures. All Rights Reserved.</p>
				</div>
			</div>
		</>
	);
}

export default Footer;
