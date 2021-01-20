import "../styles/globals.css";
import App from "next/app";
import Wrapper from "../components/Wrapper";
import { render } from "react-dom";

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: {
				...(Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {}),
			},
		};
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<Wrapper {...pageProps}>
				<Component {...pageProps} />
			</Wrapper>
		);
	}
}
export default MyApp;
