// -- utils
import metaTag, { MetaTagDefault } from "@utils/metaTag";
import { SchemaDefault } from "@utils/schema";

// -- style
import "@styles/app.scss";

// -- metadata
const metadata = metaTag.data();

// -- viewport
const viewport = metaTag.viewport();

const RootLayout = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* -- THE META TAG -- */}
				<MetaTagDefault />
			</head>

			<body className="hold-transition">
				{children}

				{/* -- SCHEMA DEFAULT -- */}
				<SchemaDefault />
			</body>
		</html>
	);
};

export { metadata, viewport };
export default RootLayout;
