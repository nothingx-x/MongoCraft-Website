/* eslint-disable camelcase */
import { AppProps } from "next/app";
import Head from "next/head";

import "@styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Layout from "@components/Layout";
import { Analytics } from "@vercel/analytics/react";
import Popup, { PopupProvider } from "@components/Popup";

export default function App({ Component, pageProps }: AppProps) {
	const meta = {
		"title": "مونگو کرفت",
		"description":
			"سلاممم.. به مونگو کرفت خیلی خوش اومدین. مونگو کرفت یه سرور ماینکرفت هست که شما می تونید با بقیه به صورت آنلاین ماینکرفت پلی بدید",
		"image": "/_next/image?url=icon.png",
		"theme-color": "#16a34a"
	};
	return (
		<PopupProvider>
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
				<Popup />
			</Layout>
		</PopupProvider>
	);
}
