import { Component } from "react";
import axios from "axios";
import Footer from "../../components/Footer/csFooter";
import styles from "../../styles/contentstack/Content.module.scss";
const url =
	"https://raw.githubusercontent.com/kritikapoojari/companyData/master/contentstack.json";

class Contentstack extends Component {
	render() {
		let cs = this.props.cs[0];
		return (
			<div>
				<div className={styles["container"]}>
					<div className={styles["content"]}>
						<h1>Why choose Contentstack</h1>
					</div>
					<div className={styles["sub-content"]}>
						{cs.mainContent.map((item, i) => {
							return (
								<div key={i} className={styles["sub"]}>
									<h1>{item.title}</h1>
									<p>{item.content}</p>
								</div>
							);
						})}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
Contentstack.layout = "cs";

export const getStaticProps = async () => {
	let { data } = await axios.get(url);
	return {
		props: {
			cs: [...data],
		},
	};
};

export default Contentstack;
