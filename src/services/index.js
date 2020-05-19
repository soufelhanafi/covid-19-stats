import axios from "axios";

const baseUrl = "https://api.thevirustracker.com/free-api";

export function getMainDashboardData() {
	return [
		{
			total_cases: 4904559,
			total_recovered: 1916024,
			total_unresolved: 1944214,
			total_deaths: 320326,
			total_new_cases_today: 16435,
			total_new_deaths_today: 361,
			total_active_cases: 2418746,
			total_serious_cases: 44776,
			total_affected_countries: 213,
			source: {
				url: "https://thevirustracker.com/"
			}
		}
	];

	// return axios({
	// 	url: baseUrl,
	// 	params: {global: "stats"}
	// })
	// 	.then(response => {
	// 		return response.data.results;
	// 	})
	// 	.catch(() => {
	// 		return false;
	// 	});
}

export function getTotalCountries() {
	return false;
	// return axios({
	// 	url: baseUrl,
	// 	params: {countryTotals: "ALL"}
	// })
	// 	.then(response => {
	// 		return response.data.countryitems;
	// 	})
	// 	.catch(() => {
	// 		return false;
	// 	});
}
