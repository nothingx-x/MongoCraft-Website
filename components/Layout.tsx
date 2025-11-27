/* eslint-disable camelcase */
import Menu from "@components/Menu";
import Footer from "@components/Footer";
import localFont from "next/font/local";
import NotificationBar from "./NotificationBar";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Bottombar from "./Bottombar";
const fontPixifa = localFont({
	src: "../public/fonts/q_pixia.ttf",
	preload: true
});
const fontBloxat = localFont({
	src: "../public/fonts/Bloxat-PDoE.ttf",
	preload: true
});
export default function Layout(props: { children?: React.ReactNode }) {
	return (
		<div className={`${fontPixifa.className}`} style={{ direction: "rtl" }}>

			<Link href="/mongocraft-v2">
				<div className="backdrop-blur-sm w-full py-1.5 bg-red-500/75 hover:bg-red-500 duration-300">
					<div className="content-width text-gray-900 font-medium text-center">
						مونگو کرفت از تاریخ 4 آذر 1404 در حال بروزرسانی هست. بیشتر بخوانید
						<ArrowRightIcon className="w-5 h-5 inline-block align-middle" />
					</div>
				</div>
			</Link>
			<Menu
				header="مونگو کرفت"
				links={[
					{ href: "/", text: "خانه" },
					{ href: "/wiki", text: "آموزشات", loose: true },
					{ href: "/wiki/faq", text: "سوالات", loose: true },
					{ href: "/shop", text: "فروشگاه", highlight: true }
				]}
			/>

			
			<div className="pt-16 px-20 content-width min-h-[90vh]">
				{props.children}
			</div>
			<Footer
				websiteName="مونگو کرفت"
				content={[
					{
						header: "اجتماعی",
						links: [
							{
								text: "دیسکورد",
								href: "https://dsc.gg/mongo-craft"
							},
							{
								text: "یوتیوب",
								href: "https://www.youtube.com/@Mongo_Craft"
							},
							{
								text: "تلگرام",
								href: "https://t.me/mongocraft"
							},
							{
								text: "ایمیل",
								href: "mailto:mongocraftir@gmail.com"
							}
						]
					}
				]}
			/>
				<Bottombar header="منو" links={[]}/>
		</div>
	);
}
