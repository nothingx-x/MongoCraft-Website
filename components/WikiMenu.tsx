import { WikiData } from "@lib/lib";
import A from "./A";

export default function WikiMenu(props: {
	pages: WikiData[];
	baseUrl: string;
}) {
	return (
		<div className="whitespace-pre">
			<div className="flex sticky top-20 flex-col gap-2 pr-4 select-none">
				{props.pages
					.filter((page) => page.meta?.publish != false)
					.map((page) => (
						<A
							key={page.slug}
							href={`${props.baseUrl}/${page.slug}`}
							className="font-header font-medium"
							activeClassName="text-primary-400 border-l-2 px-4 border-primary-500 hover:border-yellow-400 duration-150">
							{page.meta?.title || page.slug}
						</A>
					))}
			</div>
		</div>
	);
}
