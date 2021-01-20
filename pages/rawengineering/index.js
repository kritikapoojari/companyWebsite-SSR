import { Component } from "react";
import axios from "axios";
import Footer from "../../components/Footer/reFooter";
import styles from "../../styles/rawengineering/Content.module.scss";
const url =
	"https://raw.githubusercontent.com/kritikapoojari/companyData/master/raweng.json";

class Rawengineering extends Component {
	render() {
		return (
			<>
				<div className={styles["re-container"]}>
					<div className={styles["container"]}>
						<h1 className={styles["container-heading"]}>
							{this.props.re[0].heading}
						</h1>
						<p className={styles["container-subheading"]}>
							{this.props.re[0].content}
						</p>
					</div>
				</div>
				<div>
					<h2 className={styles["title"]}>WHAT WE DO</h2>
					{this.props.re[0].mainContent.map((item, i) => {
						return (
							<div key={i} className={styles["content"]}>
								<div className={styles["contnt-sub"]}>
									<img src={item.image}></img>
								</div>
								<div className={styles["main-content"]}>
									<h1 className={styles["main-heading"]}>
										{item.title}
									</h1>
									<p>{item.content}</p>
								</div>
							</div>
						);
					})}
				</div>
				<Footer />
			</>
		);
	}
}
Rawengineering.layout = "re";

export const getStaticProps = async () => {
	let { data } = await axios.get(url);
	return {
		props: {
			re: [...data],
		},
	};
};

export default Rawengineering;
