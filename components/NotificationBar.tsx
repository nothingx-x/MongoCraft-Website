import { useRouter } from "next/router";
import { useState, useEffect } from "react";
type NotificationBarParams = { notifications: string[] };
function NotificationBar({ notifications }: NotificationBarParams) {
	const router = useRouter();
	if (router.route != "/") return null;

	const [hasScrolled, setHasScrolled] = useState(false);
	const [randomNotification, setRandomNotification] = useState("");
	const [i, setI] = useState(0);

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

	useEffect(() => {
		setRandomNotification(notifications[i]);
		const interval = setInterval(() => {
			setRandomNotification(notifications.at(i) || "");
			setI((prevI) => {
				const nextI = (prevI + 1) % notifications.length;
				setRandomNotification(notifications[nextI]);
				return nextI;
			});
		}, 5000);
		return () => clearInterval(interval);
	}, [notifications]);

	return (
		<nav
			className={`z-50 sticky top-[7%] border-b border-red-400/0 select-none bg-red-500  backdrop-blur-md py-2 transition-all duration-300 ${
				hasScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}>
			<div className="flex justify-center items-center content-width text-white text-base">
				<p className="transition-all duration-300">
					{randomNotification}
				</p>
			</div>
		</nav>
	);
}

export default NotificationBar;
