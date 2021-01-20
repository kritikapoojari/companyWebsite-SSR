import Link from "next/link";
import styles from "../../styles/rawengineering/Header.module.scss";
import logo from "../../public/re-logo.png";

const ReHeader = (props) => {
	return (
		<div className={styles["re-nav"]}>
			<div>
				<img src={logo} className={styles["logo"]}></img>
			</div>
			<nav>
				<ul className={styles["nav-container"]}>
					<li>
						<Link href="/">
							<a className={styles["nav-link"]}>HOME</a>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default ReHeader;
