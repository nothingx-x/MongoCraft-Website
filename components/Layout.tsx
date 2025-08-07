/* eslint-disable camelcase */
import { Inter } from "next/font/google";
import { Archivo } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

import Menu from "@components/Menu";
import Footer from "@components/Footer";

const fontInter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	preload: true
});
const fontArchivo = Archivo({
	subsets: ["latin"],
	variable: "--font-Archivo",
	weight: ["400", "700"],
	style: ["normal", "italic"],
	preload: true
});
const fontJetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	weight: ["400"],
	style: ["normal"]
});

export default function Layout(props: { children?: React.ReactNode }) {
	return (
		<div
			className={`${fontInter.variable} ${fontArchivo.variable} ${fontJetBrainsMono.variable}`}>
			<Menu />
			<div className="pt-16 px-20 content-width min-h-[90vh]">
				{props.children}
			</div>
			<Footer
				websiteName="Prosperity MC"
				content={[
					{
						header: "Social",
						links: [
							{
								text: "Discord",
								href: "https://discord.gg/Gf5tDk5EhR"
							},
							{
								text: "YouTube",
								href: "https://youtube.com/@prosperitymc"
							},
							{
								text: "Telegram",
								href: "https://t.me/mongocraft"
							}
						]
					},
					{
						header: "Resources",
						links: [
							{
								text: "Site Source",
								href: "https://github.com/ProsperityMC/Prosperity-Website"
							},
							{
								text: "Live Map",
								href: "https://map.prosperitymc.net"
							}
						]
					}
				]}
			/>
		</div>
	);
}
