import Image from "next/image";
import React, { useCallback, useState } from "react";
import { usePopup } from "./Popup";

type RankCardProps = {
	icon: string;
	name: string;
	features: string[];
	description: string;
	price: number;
	highlight?: boolean;
};

function RankCardPopup(props: RankCardProps) {
	const [state, setState] = useState("rank-info");
	const [checkRules, setCheckRules] = useState(false);

	const nextStep = () => {
		setState("rules-info");
	};

	return state == "rank-info" ? (
		<div className="flex flex-col gap-2 justify-center items-center">
			<Image
				src={props.icon}
				alt={props.name}
				width={140}
				height={40}
				className="absolute top-0 right-[50%] translate-y-[-50%] translate-x-[50%]"
			/>
			<span className="text-lg font-bold">{props.name}</span>
			<span className="mt-4">ویژگی ها:</span>
			{props.features.map((feature, i) => (
				<p key={i} className="mr-2 text-zinc-500">
					{feature}
				</p>
			))}
			<p className="mt-4">توضیحات: {props.description}</p>
			<p>{props.price.toLocaleString()} تومان</p>
			<button
				className="px-3.5 py-2 bg-primary-500 focus:bg-primary-600 hover:bg-primary-700 text-secondary-100 ring-2 ring-primary-400 rounded-md text-base transition-all duration-300"
				onClick={nextStep}>
				مرحله بعدی
			</button>
		</div>
	) : (
		<div className="flex flex-col gap-2 justify-center items-center"></div>
	);
}

export function RankCard(props: RankCardProps) {
	const { triggerPopup } = usePopup();
	const openPopup = useCallback(
		() => triggerPopup(<RankCardPopup {...props} />),
		[triggerPopup]
	);
	return (
		<div
			className={`w-28 min-h-40 p-4 medium-phone:w-36 sm:w-72 md:w-80 rounded-md border-2 border-primary-500 drop-shadow-sm shadow-md shadow-zinc-700 flex flex-col gap-2 relative justify-center items-center ${
				props.highlight ? "bg-primary-200" : "bg-zinc-200"
			}`}>
			<Image
				src={props.icon}
				alt={props.name}
				width={140}
				height={40}
				className="absolute top-0 right-[50%] translate-y-[-50%] translate-x-[50%]"
			/>
			<span className="text-lg font-bold">{props.name}</span>
			{props.features.map((feature, i) => (
				<p key={i} className="hidden sm:block">
					{feature}
				</p>
			))}
			<p>توضیحات: {props.description}</p>
			<p>{props.price.toLocaleString()} تومان</p>
			<button
				className="px-3.5 py-2 bg-primary-500 focus:bg-primary-600 hover:bg-primary-700 text-secondary-100 ring-2 ring-primary-400 rounded-md text-base transition-all duration-300"
				onClick={openPopup}>
				خرید
			</button>
		</div>
	);
}

export default RankCard;
