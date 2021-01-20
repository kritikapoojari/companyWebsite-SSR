import ReHeader from "../Header/reHeader";
import Head from "next/head";

const ReContent = (props) => {
	return (
		<>
			<Head>
				<title>Raw Engineering</title>
			</Head>
			<div>
				<ReHeader />
				{props.children}
			</div>
		</>
	);
};
export default ReContent;
