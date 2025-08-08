import Image from "next/image";
import { ArrowRightIcon, BookOpenIcon } from "@heroicons/react/20/solid";
import React, { useCallback } from "react";
import Head from "next/head";

import MainImage from "public/index/main.png";
import H from "@components/H";
import Slideshow from "@components/Slideshow";
import A from "@components/A";
import InfoGrid from "@components/InfoGrid";
import { Testimonial } from "@components/Testimonial";
import { usePopup } from "@components/Popup";

export default function Home() {
	const testimonials: { user: string; iconUrl: string; text: JSX.Element }[] =
		[
			{
				user: "آقای مبهم",
				text: (
					<>
						من مونگو کرفتو به صورت خیلی اتفاقی پیدا کردم.
						<br />
						از موقعی که جوین شدم توش زندگیم بسیار عوض شده
					</>
				),
				iconUrl: "/index/users/mr-mobham.webp"
			},
			{
				user: "آقای باحال",
				text: <>مونگو کرفت بریزید باحاله</>,
				iconUrl: "/index/users/mr-bahal.webp"
			},
			{
				user: "جواد خیابانی",
				text: (
					<>
						مونگو کرفت سروری برای ساختن و بقاست
						<br />. مونگو کرفت سروری برای یادگیری و دانش است مونگو
						کرفت بسی رنج برد در این سال 30، بدین زنده کرد مونگوی
						فارسی
					</>
				),
				iconUrl: "/index/users/mr-javad.webp"
			}
		];
	const { triggerPopup } = usePopup();

	const openPopup = useCallback(
		() => triggerPopup("xxxxxxxxxxxxxx"),
		[triggerPopup]
	);

	return (
		<>
			{/* prettier-ignore */}
			<Head>
				<title>مونگو کرفت</title>
				<meta property="og:title" content="مونگو کرفت" />
				<meta property="twitter:title" content="مونگو کرفت" />
				<meta property="description" content="Prosperity is a Minecraft community focused on high-level technical and building gameplay, go beyond, build different" />
				<meta property="og:description" content="Prosperity is a Minecraft community focused on high-level technical and building gameplay, go beyond, build different" />
				<meta property="twitter:description" content="Prosperity is a Minecraft community focused on high-level technical and building gameplay, go beyond, build different" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="560" />
			</Head>

			<div className="absolute top-0 left-0 w-full h-[60rem] -z-50 opacity-40">
				<Image
					priority={true}
					quality={90}
					className="blur-sm md:blur-none duration-200 object-cover object-bottom"
					alt=""
					src={MainImage}
					fill
				/>
			</div>

			<main id="main" className="markdown">
				<section className="flex flex-col gap-10 text-center markdown my-52">
					<header className="text-6xl type-header">
						به مونگو کرفت خوش اومدی
					</header>
					<p className="text-lg text-zinc-900 font-medium max-w-2xl mx-auto">
						به مونگو کرفت خیلی خوش اومدین.
						<br />
						مونگو کرفت یه سرور ماینکرفت هست که شما می تونید با بقیه
						به صورت آنلاین ماینکرفت پلی بدید
					</p>
					<div className="-space-x-12">
						<button
							className="bg-primary-500 hover:bg-primary-400 duration-150 text-primary-100 px-14 py-2 type-header rounded justify-items-end"
							onClick={openPopup}>
							عضویت در سرور
							<ArrowRightIcon className="w-5 h-5 inline-block align-middle" />
						</button>

						<A
							href="/wiki/new-player-guide"
							className="hidden md:inline custom-link type-header pr-4">
							آموزشات{" "}
							<BookOpenIcon className="w-5 h-5 inline-block align-middle" />
						</A>
					</div>
				</section>

				<section className="flex flex-col gap-10 text-center markdown my-40">
					<hr id="builders" />
					<header className="text-4xl type-header">
						مونگو کرفت، سروری برای سروایول
					</header>
					<p className="max-w-4xl mx-auto"></p>
					<InfoGrid
						sections={[
							<>
								به مونگو کرفت یکی از
								<H> سرورهای آنلاین سروایول</H> خیلی خوش اومدی.
								توی این سرور میتونی با دوستات پلی بدی ماجراهای
								مختلفی داشته باشی و یا حتی بیکن ندرایتی بسازی!
							</>,
							<>
								مونگو کرفت بیشتر روی سروایول تمرکز داره. البته
								که شاپ و یه سری چیزای دیگه هم داره.
								<H>
									{" "}
									داستان هر سیزن بخش مهمی از سرور به حساب
									میاد.
								</H>
							</>,
							<>
								<H>مونگو کرفت ماینکرفت نیست</H>. با پلاگین هایی
								که به سرور اضافه شده و قابلیت های جدید اصلا فکر
								نمیکنید که یه سرور ماینکرفته
							</>,
							<>
								مونگو کرفت برای داشتن لحظاتی خوب ماینکرفتیه.
								<H>
									نمیخواد نگران دزدی و خراب شدن خونتون باشید
								</H>
							</>
						]}
					/>
					<Slideshow
						quality={80}
						images={[
							{
								src: "/projects/mhov-random-rotor-gharmonica-base_0.png",
								width: 1920,
								height: 1080,
								alt: "Base by Mhov, Random Cryptid, Rotor, and gharmonica"
							},
							{
								src: "/projects/nether-hub_0.png",
								width: 1920,
								height: 1080,
								alt: "Community nether hub"
							},
							{
								src: "/projects/benbenney-iron-farm.png",
								width: 1920,
								height: 1080,
								alt: "Benbenney's iron farm"
							}
						]}
					/>

					{/* <HighlightLinkBanner
						content="Explore more builds, farms, bases, and projects"
						linkContent="Project Gallery"
						href="/projects"
					/> */}
				</section>

				<hr id="community" />

				<section className="flex flex-col gap-10 text-center markdown my-20">
					<header className="text-4xl type-header">
						توسط کامیونیتی، برای کامیونیتی
					</header>
					<p className="max-w-4xl mx-auto">
						مونگو کرفت به کامیونیتیش خیلی اهمیت میده. ببینید پلیرای
						ما درموردمون چی گفتن
					</p>
					<div className="columns-1 md:columns-2 lg:columns-3 gap-8 overflow-hidden">
						{testimonials.map((comment, i) => (
							<Testimonial testimonial={comment} key={i} />
						))}
					</div>
				</section>

				<hr id="join" />

				<section className="flex flex-col gap-10 text-center markdown my-36">
					<header className="text-5xl">اینجا مونگوکرفته</header>
					<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
						با استفاده از دکمه زیر آیپی و پورت سرور رو بگیر
					</p>
					<div>
						<button
							className="bg-primary-500 hover:bg-primary-400 duration-150 text-zinc-900 px-14 py-2 type-header rounded justify-items-end"
							onClick={openPopup}>
							عضویت به سرور
							<ArrowRightIcon className="w-5 h-5 inline-block align-middle" />
						</button>

						<div className="mt-6 text-sm text-zinc-400 max-w-[50ch] mx-auto">
							اگه تازه واردی هم آموزشای مارو{"  "}
							<A
								className="underline hover:no-underline"
								href="/wiki">
								اینجا{"  "}
							</A>
							بخون
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
