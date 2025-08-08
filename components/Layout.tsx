/* eslint-disable camelcase */
import Menu from "@components/Menu";
import Footer from "@components/Footer";
import localFont from "next/font/local";
import NotificationBar from "./NotificationBar";
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
			<Menu
				header="مونگو کرفت"
				links={[
					{ href: "/", text: "خانه" },
					{ href: "/wiki", text: "آموزشات", loose: true },
					{ href: "/wiki/faq", text: "سوالات", loose: true },
					{ href: "/shop", text: "فروشگاه", highlight: true }
				]}
			/>

			<NotificationBar
				notifications={[
					"به پایان فصل ششم رسیدیم",
					"منابع بازیکنان به زودی ریست خواهد شد"
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
								href: "https://discord.gg/Gf5tDk5EhR"
							},
							{
								text: "یوتیوب",
								href: "https://youtube.com/@prosperitymc"
							},
							{
								text: "تلگرام",
								href: "https://t.me/mongocraft"
							},
							{
								text: "ایمیل",
								href: "https://mongocraftir@gmail.com"
							}
						]
					}
				]}
			/>
		</div>
	);
}
