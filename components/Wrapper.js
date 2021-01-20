import CsContent from "../components/Content/csContent";
import ReContent from "../components/Content/reContent";
import SbContent from "../components/Content/sbContent";

const wrapper = {
	cs: CsContent,
	re: ReContent,
	sb: SbContent,
};

const Wrapper = (props) => {
	const Layout = wrapper[props.children.type.layout];
	if (Layout != null) {
		return <Layout {...props}>{props.children}</Layout>;
	}
	return <SbContent {...props}>{props.children}</SbContent>;
};

export default Wrapper;
