import Image from "next/image";
import React from "react";

type RankCardProps = {
	icon: string;
	name: string;
	features: string[];
	description: string;
	price: number;
};
export function RankCard(props: RankCardProps) {
	return (
		<div className="w-28 h-40 p-4 medium-phone:w-36 sm:w-72 md:w-80 rounded-md bg-zinc-200 drop-shadow-sm shadow-md shadow-zinc-700">
			<Image src={props.icon} alt={props.name} width={140} height={40} />
			<p>{props.name}</p>
			{props.features.map((feature, i) => (
				<p key={i}>{feature}</p>
			))}
			<p>{props.description}</p>
			<p>{props.price.toLocaleString()}</p>
		</div>
	);
}

export default RankCard;
