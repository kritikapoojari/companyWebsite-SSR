import { Component } from "react";
import axios from "axios";
import styles from "../styles/surfboard/Content.module.scss";
import Footer from "../components/Footer/sbFooter";
const url =
	"https://raw.githubusercontent.com/kritikapoojari/companyData/master/surfboard.json";

class Surfboard extends Component {
	render() {
		return (
			<div>
				<div className={styles["sb-container"]}>
					<div className={styles["main-div"]}>
						<h1 className={styles["port"]}>Our Portfolio Companies</h1>
						<div className={styles["container"]}>
							<div>
								<img
									src={this.props.surfboard[0].mainContent.image}
									className={styles["iamge"]}
								></img>
							</div>

							<div>
								{this.props.surfboard[0].moreContent.map(
									(company, i) => {
										return (
											<div key={i}>
												<h2 className={styles["heading"]}>
													{company.title}
												</h2>
												<p className={styles["content"]}>
													{company.content}
												</p>
											</div>
										);
									}
								)}
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export const getStaticProps = async () => {
	let { data } = await axios.get(url);
	return {
		props: {
			surfboard: [...data],
		},
	};
};

Surfboard.layout = "sb";

export default Surfboard;
