import Image from "next/image";
import { ArrowRightIcon, BookOpenIcon } from "@heroicons/react/20/solid";
import React from "react";
import Head from "next/head";

import MainImage from "public/index/main.png";
import H from "@components/H";
import Slideshow from "@components/Slideshow";
import A from "@components/A";
import SchematicCard from "@components/SchematicCard";
import InfoGrid from "@components/InfoGrid";
import HighlightLinkBanner from "@components/HighlightLinkBanner";
import { Testimonial } from "@components/Testimonial";

export default function Home() {
	const testimonials: { user: string; iconUrl: string; text: JSX.Element }[] =
		[
			{
				user: "Interplanetary",
				text: (
					<>
						I joined Prosperity sometime in 2021. It was a super
						welcoming server with nice, helpful people. It was the
						first TMC server I joined, and frankly, it set my
						expectations pretty high :)
					</>
				),
				iconUrl: "/index/users/interplanetary.webp"
			},
			{
				user: "Andt",
				text: (
					<>
						I've been playing on Prosperity for about a year now,
						and although the server had already been up for quite a
						while longer, the amazing members of the server helped
						me get started faster than I expected. They're great
						technical players and equally great builders, but most
						of all, they are the best community I have ever seen in
						a Minecraft-Server, and I can only recommend it.
					</>
				),
				iconUrl: "/index/users/andt.webp"
			},
			{
				user: "Takeout",
				text: (
					<>
						I've played here for a bit now, it's a great place to
						call home. Some very knowledgeable technical players as
						well as talented builders make for a motivating
						environment. I highly encourage if you're looking to
						build redstone or not to check it out.
					</>
				),
				iconUrl: "/index/users/takeout.webp"
			}
		];

	return (
		<>
			{/* prettier-ignore */}
			<Head>
				<title>This is Prosperity</title>
				<meta property="og:title" content="This is Prosperity" />
				<meta property="twitter:title" content="This is Prosperity" />
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
						<A href="https://discord.gg/hfTxZ4XxYj" noIcon={true}>
							<button className="bg-primary-500 hover:bg-primary-400 duration-150 text-primary-100 px-14 py-2 type-header rounded justify-items-end">
								عضویت در سرور
								<ArrowRightIcon className="w-5 h-5 inline-block align-middle" />
							</button>
						</A>
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
						A Playground For Architects
					</header>
					<p className="max-w-4xl mx-auto">
						For those who wish to build, this is a great place to
						be. With no shortage of community projects to contribute
						to, and a technical community giving you access to
						endless resources, you can expand the scope of your
						builds further than ever before.
					</p>
					<InfoGrid
						sections={[
							<>
								<H>A wider palette than ever.</H> With an
								extensive selection of decorative mods, a
								greater level of atmosphere, and more renewable
								resources than ever, you can build bigger and
								with more detail than you ever thought possible.
							</>,
							<>
								<H>
									Work better together in survival and
									creative.
								</H>{" "}
								Take advantage of a powerful creative server,
								real-time schematic syncing, and a cooperative
								community willing to help with large scale
								builds.
							</>,
							<>
								<H>We do what Mojang won't.</H> Build with more
								detail thanks to vertical slabs, framed blocks,
								and many more highly-requested features that
								builders have desired for years.
							</>,
							<>
								<H>Building community.</H> With a strong
								community focus you don't need to worry about
								griefing, trolls, or claims disrupting or
								ruining your hard work. Building is the
								lifeblood of our server and your work is
								appreciated.
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

					<HighlightLinkBanner
						content="Explore more builds, farms, bases, and projects"
						linkContent="Project Gallery"
						href="/projects"
					/>
				</section>

				<hr id="community" />

				<section className="flex flex-col gap-10 text-center markdown my-20">
					<header className="text-4xl type-header">
						By The Community, For The Community
					</header>
					<p className="max-w-4xl mx-auto">
						Prosperity is it's community. We take community feedback
						and suggestions to and strive to create the best
						experience possible. See what our members think.
					</p>
					<div className="columns-1 md:columns-2 lg:columns-3 gap-8 overflow-hidden">
						{testimonials.map((comment, i) => (
							<Testimonial testimonial={comment} key={i} />
						))}
					</div>
					<HighlightLinkBanner
						content="Read more about how we keep the server safe and civil"
						linkContent="Public Admin Documentation"
						href="/wiki/admin-guide"
					/>
				</section>

				<hr id="join" />

				<section className="flex flex-col gap-10 text-center markdown my-36">
					<header className="text-5xl">This is Prosperity</header>
					<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
						Ready to join our community? Join our Discord and apply
						to be whitelisted now.
					</p>
					<div>
						<A href="https://discord.gg/hfTxZ4XxYj" noIcon={true}>
							<button className="bg-primary-500 hover:bg-primary-400 duration-150 text-zinc-900 px-14 py-2 type-header rounded justify-items-end">
								Join The Server
								<ArrowRightIcon className="w-5 h-5 inline-block align-middle" />
							</button>
						</A>
						<div className="mt-6 text-sm text-zinc-400 max-w-[50ch] mx-auto">
							If you are a member of the server find joining
							information{" "}
							<A
								className="underline hover:no-underline"
								href="/wiki/join-info">
								here
							</A>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
