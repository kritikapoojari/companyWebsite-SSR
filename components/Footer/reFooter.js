import styles from "../../styles/rawengineering/Footer.module.scss";
function Footer() {
	return (
		<div className={styles["re-footer"]}>
			<div className={styles["content"]}>
				<h1>Ready to get started on your next project?</h1>
				<button className={styles["button"]}>Get in touch</button>
			</div>
			<div className={styles["container"]}>
				<div>
					<div className={styles["container-div"]}>
						<p>Privacy</p>
						<p>Backend Terms of use</p>
					</div>
					<br />
					<div className={styles["copy"]}>
						<p>
							Copyright © 2021 Raw Engineering LLC. All Rights Reserved.
						</p>
						<img
							src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt67d1684f23bec105/5e31575101e4f445b22f4bde/soc_logo.png?width=100"
							className={styles["footer-image"]}
						></img>
					</div>
				</div>

				<div className={styles["footer-links"]}>
					<ul className={styles["social"]}>
						<li>
							<img src="https://img.icons8.com/fluent-systems-regular/32/000000/twitter.png" />
						</li>
						<li>
							<img src="https://img.icons8.com/windows/24/000000/linkedin.png" />
						</li>
						<li>
							<img src="https://img.icons8.com/windows/32/000000/facebook-new.png" />
						</li>
						<li>
							<img src="https://img.icons8.com/fluent-systems-regular/24/000000/instagram-new.png" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
