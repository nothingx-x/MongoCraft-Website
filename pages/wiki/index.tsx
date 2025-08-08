import { InferGetStaticPropsType } from "next";
import Head from "next/head";

import A from "@components/A";
import { wikiPageDataGetAll } from "@lib/lib";
import WikiMenu from "@components/WikiMenu";
import Index from "@wiki/index.mdx";
import { DocumentIcon, SparklesIcon } from "@heroicons/react/24/outline";

export async function getStaticProps() {
	const data = await wikiPageDataGetAll();

	return { props: { data } };
}

export default function Wiki({
	data
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="flex gap-8">
			{/* prettier-ignore */}
			<Head>
				<title>آموزشات</title>
				<meta property="og:title" content="Wiki" />
				<meta property="twitter:title" content="Wiki" />
				<meta name="description" content="Directory of wiki pages" />
				<meta name="og:description" content="Directory of wiki pages" />
				<meta name="twitter:description" content="Directory of wiki pages" />
			</Head>

			<div className="hidden md:flex">
				<WikiMenu pages={data} baseUrl="/wiki" />
			</div>
			<div className="flex flex-col gap-8 max-w-[100ch] mx-auto">
				<article className="markdown">
					<section className="markdown">
						<header className="text-4xl">آموزشات</header>
						<p className="text-lg text-zinc-300">تمامی آموزشات</p>
					</section>
					<hr />
					<Index />
					<hr />
				</article>
				<div className="grid rid-cols-1 md:grid-cols-2 gap-8 w-full">
					{data
						.filter(
							(page) =>
								page.meta?.publish != false &&
								page.meta?.highlight == true
						)
						.map((page) => (
							<A
								href={`/wiki/${page.slug}`}
								className="md:col-span-2 p-4 pb-6 block bg-gradient-to-bl from-primary-500/30 to-zinc-800/30 hover:bg-primary-500/20 text-left rounded-md duration-200 transform focus:border-primary-400 border border-primary-500 w-full">
								<div className="flex gap-2">
									<SparklesIcon className="w-6 h-6 inline-block mt-2 text-primary-500"></SparklesIcon>
									<header className="text-lg type-header my-1.5 text-primary-500">
										{page.meta?.title || page.slug}
									</header>
								</div>
								<p className="mb-1.4 max-w-lg text-primary-500">
									{page.meta?.short || ""}
								</p>
							</A>
						))}
					{data
						.filter(
							(page) =>
								page.meta?.publish != false &&
								page.meta?.highlight != true
						)
						.map((page) => (
							<A
								href={`/wiki/${page.slug}`}
								className="p-4 pb-6 hover:bg-secondary-200 text-left rounded-md duration-200 transform focus:border-primary-400 bg-zinc-100 border border-zinc-700 w-full">
								<div className="flex gap-2">
									<DocumentIcon className="w-6 h-6 inline-block mt-2"></DocumentIcon>
									<header className="text-lg type-header my-1.5">
										{page.meta?.title || page.slug}
									</header>
								</div>
								<p className="mb-1.4 max-w-sm">
									{page.meta?.short || ""}
								</p>
							</A>
						))}
				</div>
			</div>
		</div>
	);
}
