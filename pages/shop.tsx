import RankCard from "@components/RankCard";
import React from "react";

function page() {
	return (
		<div className="min-h-screen grid grid-cols-2 gap-4 justify-center items-center">
			<RankCard
				icon="/../public/shop/ranks/mongova_rank.png"
				name="مونگوا"
				description="یک عدد رنک مونگوا برای یک ماه"
				features={[
					"امکان داشتن خونه تا 10 عدد",
					"200% سود با فروش به فروشگاه",
					"5000 کوین به صورت یکباره",
					"شمشیر رعد وبرقی"
				]}
				price={4000}
			/>
			{/* <RankCard />
			<RankCard />
			<RankCard /> */}
		</div>
	);
}

export default page;
