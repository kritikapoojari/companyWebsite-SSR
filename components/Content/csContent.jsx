import CsHeader from "../Header/csHeader";
import Head from "next/head";

const CsContent = (props) => {
	return (
		<>
			<Head>
				<title>Contentstack</title>
			</Head>
			<div>
				<CsHeader />
				{props.children}
			</div>
		</>
	);
};

export default CsContent;
