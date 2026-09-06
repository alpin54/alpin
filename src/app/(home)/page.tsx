// -- utils
import metaTag from "@utils/metaTag";
import schema from "@utils/schema";

// -- components
import Home from "./modules";

// -- metadata
const generateMetadata = async () => {
	return metaTag.dynamic({
		link: "/",
	});
};

// -- schemadata
const schemadata = schema.dynamic();

// ==================
// HomePage
// ==================

const HomePage = async () => {
	return <Home />;
};

export { generateMetadata, schemadata };
export default HomePage;
