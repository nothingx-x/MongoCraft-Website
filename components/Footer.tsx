import Image from "next/image";

import logo from "@public/mongocraft.svg";
import A from "@components/A";

export default function Footer({
	content,
	websiteName
}: {
	content: {
		header: string;
		links: {
			text: string;
			href: string;
		}[];
	}[];
	websiteName: string;
}) {
	return (
		<nav className="border-t border-secondary-700 w-full select-none py-12 mt-16 text-sm bg-secondary-500 border-secondary-700/100 backdrop-blur-md">
			<div className="content-width flex justify-between gap-16">
				<div className="flex flex-col gap-4">
					<A
						href={"/"}
						className="items-center inline-flex overflow-hidden font-bold font-header">
						<Image
							className="inline-block w-7 h-7 ml-4 rounded"
							src={logo}
							alt=""
						/>
						<header className="hidden md:block text-primary-200">
							{websiteName}
						</header>
					</A>
				</div>
				<div className="flex gap-10 flex-wrap">
					{content.map((entry) => (
						<div
							key={entry.header}
							className="flex flex-col whitespace-pre min-w-[6rem] gap-y-2">
							<header className="type-sub-header text-xs text-secondary-50">
								{entry.header}
							</header>
							{entry.links.map((link) => (
								<A
									key={link.text}
									className="type-nav-link"
									href={link.href}>
									{link.text}
								</A>
							))}
						</div>
					))}
				</div>
			</div>
		</nav>
	);
}
