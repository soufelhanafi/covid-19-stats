import axios from "axios";

const baseUrl = "https://api.thevirustracker.com/free-api";

export function getMainDashboardData() {
	// return [
	// 	{
	// 		confirmed: 4817564,
	// 		recovered: 1871281,
	// 		critical: 44817,
	// 		deaths: 317528,
	// 		lastChange: "2020-05-18T09:24:56+02:00",
	// 		lastUpdate: "2020-05-18T09:30:03+02:00"
	// 	}
	// ];
	return axios({
		url: baseUrl,
		params: {global: "stats"}
	})
		.then(response => {
			return response.data.results;
		})
		.catch(() => {
			return false;
		});
}
