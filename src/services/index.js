import axios from "axios";

const baseUrl = "https://covid-19-data.p.rapidapi.com";

const constHeaders = {
	"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
	"x-rapidapi-key": "cd76955da9mshd1c812cf84c9989p191bb8jsn95532a6123a4",
	useQueryString: true
};

export function getMainDashboardData() {
	return [
		{
			confirmed: 4817564,
			recovered: 1871281,
			critical: 44817,
			deaths: 317528,
			lastChange: "2020-05-18T09:24:56+02:00",
			lastUpdate: "2020-05-18T09:30:03+02:00"
		}
	];
	// return axios({
	// 	url: baseUrl + "/totals",
	// 	headers: constHeaders
	// })
	// 	.then(response => {
	// 		return response;
	// 	})
	// 	.catch(() => {
	// 		return false;
	// 	});
}
