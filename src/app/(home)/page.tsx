// -- utils
import metaTag from "@utils/metaTag";

// -- components
import Home from "./modules";

// -- metadata
const generateMetadata = async () => {
	return metaTag.dynamic({
		link: "/",
	});
};

// ==================
// HomePage
// ==================

const HomePage = async () => {
	return <Home />;
};

export { generateMetadata };
export default HomePage;
