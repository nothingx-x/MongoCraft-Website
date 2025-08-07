import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { HeartIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

import logo from "@public/mongocraft.svg";
import A from "@components/A";
import { usePopup } from "./Popup";

export default function Menu({
	props
}: {
	props: {
		header: string;
		links: {
			href: string;
			text: string;
			loose?: boolean;
			highlight?: boolean;
		}[];
	};
}) {
	const [hasScrolled, setHasScrolled] = useState(false);
	const { triggerPopup } = usePopup();

	// TODO: Fix a behavior where the signal isn't updated upon reloading a page
	// with a saved scroll position.
	if (typeof window != "undefined") {
		window.addEventListener("scroll", () => {
			setHasScrolled(window.scrollY >= 1 ? true : false);
		});
	}

	return (
		<nav
			className={`z-50 sticky top-0 border-b border-secondary-400/0 select-none duration-150 ${
				hasScrolled
					? "bg-secondary-500 border-secondary-400/100 backdrop-blur-md py-2.5 border-b"
					: "py-2.5"
			}`}>
			<div className={`flex justify-between items-center content-width`}>
				<span className="flex gap-8 items-center">
					<Link
						href={"/"}
						className="items-center hidden text-primary-100 md:inline-flex shrink-0 font-bold font-header">
						<Image
							className="inline-block w-7 h-7 rounded"
							src={logo}
							alt=""
						/>
						<header className="mr-4 hidden lg:block">
							{props.header}
						</header>
					</Link>
					{props.links.map((link) => (
						<A
							key={link.text}
							activeClassName={`${
								hasScrolled
									? "text-primary-50"
									: "text-primary-400"
							} ${
								link.highlight
									? "bg-orange-500 hover:bg-orange-400 duration-150 text-zinc-900 px-6 py-1 rounded ring-2 ring-orange-400 drop-shadow-sm shadow-orange-500 shadow-sm"
									: ""
							}`}
							activeLooseMatch={link.loose}
							className={`font-header font-medium ${
								hasScrolled
									? "text-primary-100"
									: "text-zinc-900"
							} ${
								link.highlight
									? "bg-orange-500 hover:bg-orange-400 duration-150 text-zinc-900 px-6 py-1 rounded ring-2 ring-orange-400 drop-shadow-sm shadow-orange-500 shadow-sm"
									: ""
							}`}
							href={link.href}>
							{link.text}
						</A>
					))}
				</span>
				<span className="hidden md:flex gap-8 flex-grow justify-end">
					<button
						onClick={() => {
							triggerPopup("xxxxxxxxxxxxxx");
						}}
						className="type-header bg-primary-500 hover:bg-primary-400 duration-150 text-primary-100 px-6 py-1 rounded justify-items-end">
						آدرس
						<ArrowRightIcon className="w-5 h-5 inline-block align-middle" />
					</button>
				</span>
			</div>
		</nav>
	);
}
