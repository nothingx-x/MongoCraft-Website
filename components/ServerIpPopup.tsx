import { javaServerStatusGet } from "@lib/serverStatus";
import React, { useEffect, useState } from "react";

type ServerIpPopupProps = {
	ip: string;
	port: number;
};
function ServerIpPopup({ ip, port }: ServerIpPopupProps) {
	const [isOn, setIsOn] = useState("loading");

	useEffect(() => {
		const serverStatus = async () => {
			const status = await javaServerStatusGet(ip, port);
			setIsOn(status ? "on" : "off");
		};
		serverStatus();
	}, []);

	const getServerStatus = () => {
		if (isOn == "loading") {
			return "بارگذاری..";
		} else if (isOn == "on") {
			return "روشنه";
		} else {
			return "خاموشه";
		}
	};
	return (
		<div className="flex flex-col gap-4 rounded-md px-4 py-2">
			<span>آیپی</span>
			<input
				type="text"
				name="ip"
				id="ip"
				className="px-4 py-2 rounded-md text-center"
				disabled
				value={ip}
			/>
			<span>پورت</span>
			<input
				type="text"
				name="port"
				id="port"
				className="px-4 py-2 rounded-md text-center"
				disabled
				value={port}
			/>
			<span>وضعیت سرور: {getServerStatus()}</span>
		</div>
	);
}

export default ServerIpPopup;
