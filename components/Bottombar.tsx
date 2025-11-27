import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import logo from "@public/mongocraft.svg";
import A from "@components/A";
import { usePopup } from "./Popup";
import ServerIpPopup from "./ServerIpPopup";

type Link = {
	href: string;
	text: string;
	loose?: boolean;
	highlight?: boolean;
};

type BottombarProps = {
	header: string;
	links: Link[];
};

export default function Bottombar({ header, links }: BottombarProps) {
	const [hasScrolled, setHasScrolled] = useState(false);
	const { triggerPopup } = usePopup();

	const openPopup = useCallback(
		() => triggerPopup(<ServerIpPopup ip="191.96.231.2" port={30495} />),
		[triggerPopup]
	);

	useEffect(() => {
		const handleScroll = () => {
			setHasScrolled(window.scrollY >= 1);
		};

		window.addEventListener("scroll", handleScroll);

		// Call once immediately to initialize the state, useful if page reloads scrolled
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// console.log("re-rendered menu");
	const menuItems = [
{ id: 1, icon: '🏠', label: 'خانه', active: true },
{ id: 2, icon: '🔍', label: 'جستجو', active: false },
{ id: 4, icon: '💬', label: 'پشتیبانی', active: false },
{ id: 5, icon: '👤', label: 'پروفایل', active: false },
];
	return (

    <div className={`sticky bottom-0 right-0 duration-300 py-2 px-4 md:hidden ${
				hasScrolled
					? "bg-secondary-500 border-secondary-400/100 backdrop-blur-md py-4 border-b"
					: "py-2 px-4 opacity-0 pointer-events-none"
			}`}>
      <div className="flex justify-between items-center">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
              item.active
                ? 'text-zinc-900 bg-primary-50'
                : 'text-primary-100 hover:text-zinc-900 hover:bg-gray-50'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
	);
}
