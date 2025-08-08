import RankCard from "@components/RankCard";
import React from "react";

function page() {
	const ranks: {
		icon: string;
		name: string;
		description: string;
		features: string[];
		price: number;
		highlight?: boolean;
	}[] = [
		{
			name: "مونگوا",
			icon: "/shop/ranks/mongova_rank.png",
			description: "یک عدد رنک مونگوا برای یک ماه",
			features: [
				"امکان داشتن خونه تا 10 عدد",
				"200% سود با فروش به فروشگاه",
				"5000 کوین به صورت یکباره",
				"شمشیر رعد وبرقی"
			],
			price: 50000,
			highlight: true
		},
		{
			name: "ابیسور",
			icon: "/shop/ranks/abyssor_rank.png",
			description: "یک عدد رنک ابیسور  برای یک ماه",
			features: [
				"امکان داشتن خونه تا 7 عدد",
				"200% سود با فروش به فروشگاه",
				"4000 کوین به صورت یکباره"
			],
			price: 45000
		},
		{
			name: "کوانتیا",
			icon: "/shop/ranks/quantia_rank.png",
			description: "یک عدد رنک کوانتیا برای یک ماه",
			features: [
				"امکان داشتن خونه تا 6 عدد",
				"150% سود با فروش به فروشگاه",
				"3000 کوین به صورت یکباره"
			],
			price: 35000
		},

		{
			name: "سولاریوم",
			icon: "/shop/ranks/sularium_rank.png",
			description: "یک عدد رنک سولاریوم برای یک ماه",
			features: ["امکان داشتن خونه تا 5 عدد", "2000 کوین به صورت یکباره"],
			price: 10000
		}
	];
	return (
		<div className="min-h-screen grid grid-cols-2 gap-4 justify-center items-center justify-items-center">
			{ranks.map((rank) => (
				<RankCard
					key={rank.name}
					icon={rank.icon}
					name={rank.name}
					description={rank.description}
					features={rank.features}
					price={rank.price}
					highlight={rank.highlight}
				/>
			))}
		</div>
	);
}

export default page;
