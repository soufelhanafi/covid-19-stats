import axios from "axios";

const baseUrl = "https://api.thevirustracker.com/free-api";

export function getMainDashboardData() {
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

export function getDashboardCountry({payload}) {
	const {code} = payload;
	return axios({
		url: baseUrl,
		params: {countryTotal: code}
	})
		.then(response => {
			return response.data.countrydata;
		})
		.catch(() => {
			return false;
		});
}

export function getTotalCountries() {
	return axios({
		url: baseUrl,
		params: {countryTotals: "ALL"}
	})
		.then(response => {
			return response.data.countryitems;
		})
		.catch(() => {
			return false;
		});
}

export function getTimeLineCountries({payload}) {
	const {code} = payload;
	return axios({
		url: baseUrl,
		params: {countryTimeline: code}
	})
		.then(response => {
			return response.data.timelineitems;
		})
		.catch(() => {
			return false;
		});
}
