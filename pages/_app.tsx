/* eslint-disable camelcase */
import { AppProps } from "next/app";
import Head from "next/head";

import "@styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Layout from "@components/Layout";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
	const meta = {
		"title": "Prosperity MC",
		"description":
			"Prosperity is a Minecraft community focused on high-level technical and building gameplay",
		"image": "/_next/image?url=%2Fmeta%2Fdefault.png&w=1200&q=100",
		"theme-color": "#fec11b"
	};
	return (
		<Layout>
			{/* prettier-ignore */}
			<Head>
				<title>{meta.title}</title>
				<meta property="og:title" content={meta.title} />
				<meta property="twitter:title" content={meta.title} />
				<meta property="description" content={meta.description} />
				<meta property="og:description" content={meta.description} />
				<meta property="twitter:description" content={meta.description} />
				<meta property="og:image" content={meta.image} />
				<meta
					property="twitter:image"
					content={meta.image}
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="560" />
				<meta name="theme-color" content={meta["theme-color"]} />
			</Head>
			<Analytics />
			<SpeedInsights />

			<Component {...pageProps} />
		</Layout>
	);
}
