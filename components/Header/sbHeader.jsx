import Link from "next/link";
import styles from "../../styles/surfboard/Header.module.scss";

const SbHeader = (props) => {
	return (
		<div className={styles["header"]}>
			<div className={styles["container"]}>
				<div className={styles["nav-container"]}>
					<div className={styles["nav-content"]}>
						<img
							src="https://images.contentstack.io/v3/assets/blt137524604e62b5cb/blte814c52ab7983cb7/5ed94783ff1cb239b9500ed0/logo@3x.svg"
							alt="Surfoard logo"
							className={styles["logo-image"]}
						></img>
					</div>
					<nav>
						<ul className={styles["nav-links"]}>
							<li>
								<Link href="/">
									<a className={styles["navbar"]}>HOME</a>
								</Link>
							</li>
							<li>
								<Link href="/rawengineering">
									<a className={styles["navbar"]}>RAW ENGINEERING</a>
								</Link>
							</li>
							<li>
								<Link href="/contentstack">
									<a className={styles["navbar"]}>CONTENTSTACK</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className={styles["main-content"]}>
					<h1 className={styles["content-heading"]}>
						The Entrepreneur’s Surfboard
					</h1>
					<p className={styles["content-sub"]}>
						Entrepreneurship isn’t just about the end game. It’s about the
						journey. There are ups and downs. Your resilience stands tall
						against the roughest seas. Sometimes you prevail. Sometimes
						you wipe out. We are here to help remarkable entrepreneurs to
						“just keep paddling” and provide the courage they need to ride
						the highest of waves.
					</p>
				</div>
			</div>
		</div>
	);
};

export default SbHeader;
