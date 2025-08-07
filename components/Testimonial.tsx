import Image from "next/image";
import React from "react";

function Testimonial({
	testimonial
}: {
	testimonial: { user: string; iconUrl: string; text: JSX.Element };
}) {
	return (
		<div className="break-inside-avoid-column border border-zinc-700 p-4 mb-4 rounded-md text-left">
			<div className="flex gap-4 mb-1.5 items-center">
				<Image
					alt=""
					src={testimonial?.iconUrl}
					width={256}
					height={256}
					className="w-8 h-8 bg-zinc-800 rounded-full border-none"
				/>
				<header className="text-lg">{testimonial.user}</header>
			</div>
			{testimonial.text}
		</div>
	);
}

export { Testimonial };
