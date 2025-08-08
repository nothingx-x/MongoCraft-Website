import axios from "axios";
export async function javaServerStatusGet(
	ip: string,
	port: number
): Promise<boolean> {
	// console.log(`getting server status with ip: ${ip} and port: ${port}`);
	const BASE_URL = "https://api.mcstatus.io/v2";
	try {
		const result = await axios.get(
			`${BASE_URL}/status/java/${ip}:${port}`,
			{ timeout: 4000 }
		);
		return result.data.online;
	} catch (e) {
		return false;
	}
}
