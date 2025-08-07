import RankCard from "@components/RankCard";
import React from "react";

function page() {
	return (
		<div className="min-h-screen grid grid-cols-2 gap-4 justify-center items-center">
			<RankCard
				icon="/../public/shop/ranks/mongova_rank.png"
				name="mongova"
				description=""
				features={[]}
				price={4000}
			/>
			{/* <RankCard />
			<RankCard />
			<RankCard /> */}
		</div>
	);
}

export default page;
