import SbHeader from "../Header/sbHeader";
import Head from "next/head";

const SbContent = (props) => {
	return (
		<>
			<Head>
				<title>Surfboard</title>
			</Head>
			<div>
				<SbHeader />
				{props.children}
			</div>
		</>
	);
};

export default SbContent;
