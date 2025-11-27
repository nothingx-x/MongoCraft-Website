import Head from "next/head";
import logo from "@public/mongocraft.svg";
import Link from "next/link";
import Image from "next/image";
export default function NotFound() {
	return (
		<div className="markdown flex flex-col gap-8 text-center h-dvh justify-center items-center">
			{/* prettier-ignore */}
			<Head>
				<title>پیدا نشد</title>
				<meta property="og:title" content="مونگو کرفت" />
				<meta property="twitter:title" content="مونگو کرفت" />
				<meta property="description" content="Error 404, this content does not exist" />
				<meta property="og:description" content="Error 404, this content does not exist" />
				<meta property="twitter:description" content="Error 404, this content does not exist" />
			</Head>
			<Link href={"/"} className="items-center hidden text-primary-100 md:inline-flex shrink-0 font-bold font-header">
						<Image
							className="inline-block w-15 h-15 rounded"
							src={logo}
							alt=""/>
			</Link>
			<header className="text-4xl">خطای 404</header>
			<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
				صفحه درخواستی پیدا نشد
			</p>
		</div>
	);
}
