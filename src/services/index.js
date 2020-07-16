import axios from "axios";

const baseUrl = "https://api.thevirustracker.com/free-api";

export function getMainDashboardData() {
	return [
      {
         "total_cases": 13800016,
         "total_recovered": 8197400,
         "total_unresolved": 5161277,
         "total_deaths": 589114,
         "total_new_cases_today": 116211,
         "total_new_deaths_today": 2915,
         "total_active_cases": 166058,
         "total_serious_cases": 4579623,
         "total_affected_countries": 213,
         "source": {
            "url": "https://thevirustracker.com/"
         }
      }
   ]

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

export function getDashboardCountry({payload}) {
	return [{"info":
	{"ourid":167, "title":"USA", "code":"US", "source":"https://thevirustracker.com/usa-coronavirus-information-us"},
	"total_cases":2340, "total_recovered":41, "total_unresolved":0, "total_deaths":50, "total_new_cases_today":93,
	 "total_new_deaths_today":1, "total_active_cases":2249, "total_serius_cases":10}]

	// const {code} = payload;
	// return axios({
	// 	url: baseUrl,
	// 	params: {countryTotal: code}
	// })
	// 	.then(response => {
	// 		return response.data.countrydata;
	// 	})
	// 	.catch(() => {
	// 		return false;
	// 	});
}

export function getTotalCountries() {
	return [{"1":{"ourid":1, "title":"Afghanistan", "code":"AF", "source":"https://thevirustracker.com/afghanistan-coronavirus-information-af", "total_cases":94, "total_recovered":2, "total_unresolved":0, "total_deaths":4, "total_new_cases_today":0, "total_new_deaths_today":0, "total_active_cases":88, "total_serious_cases":0},"stat":"ok"}]

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

export function getTimeLineCountries() {
	return [{"1/23/2020":{"new_daily_cases":1,"new_daily_deaths":0,"total_cases":1,"total_recoveries":0,"total_deaths":0},"1/24/2020":{"new_daily_cases":1,"new_daily_deaths":0,"total_cases":2,"total_recoveries":0,"total_deaths":0},"1/25/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":2,"total_recoveries":0,"total_deaths":0},"1/26/2020":{"new_daily_cases":3,"new_daily_deaths":0,"total_cases":5,"total_recoveries":0,"total_deaths":0},"1/27/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":5,"total_recoveries":0,"total_deaths":0},"1/28/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":5,"total_recoveries":0,"total_deaths":0},"1/29/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":5,"total_recoveries":0,"total_deaths":0},"1/30/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":5,"total_recoveries":0,"total_deaths":0},"1/31/2020":{"new_daily_cases":2,"new_daily_deaths":0,"total_cases":7,"total_recoveries":0,"total_deaths":0},"2/1/2020":{"new_daily_cases":1,"new_daily_deaths":0,"total_cases":8,"total_recoveries":0,"total_deaths":0},"2/2/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":8,"total_recoveries":0,"total_deaths":0},"2/3/2020":{"new_daily_cases":3,"new_daily_deaths":0,"total_cases":11,"total_recoveries":0,"total_deaths":0},"2/4/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":11,"total_recoveries":0,"total_deaths":0},"2/5/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":11,"total_recoveries":0,"total_deaths":0},"2/6/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":11,"total_recoveries":0,"total_deaths":0},"2/7/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":11,"total_recoveries":0,"total_deaths":0},"2/8/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":11,"total_recoveries":0,"total_deaths":0},"2/9/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":11,"total_recoveries":3,"total_deaths":0},"2/10/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":11,"total_recoveries":3,"total_deaths":0},"2/11/2020":{"new_daily_cases":1,"new_daily_deaths":0,"total_cases":12,"total_recoveries":3,"total_deaths":0},"2/12/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":12,"total_recoveries":3,"total_deaths":0},"2/13/2020":{"new_daily_cases":1,"new_daily_deaths":0,"total_cases":13,"total_recoveries":3,"total_deaths":0},"2/14/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":13,"total_recoveries":3,"total_deaths":0},"2/15/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":13,"total_recoveries":3,"total_deaths":0},"2/16/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":13,"total_recoveries":3,"total_deaths":0},"2/17/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":13,"total_recoveries":3,"total_deaths":0},"2/18/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":13,"total_recoveries":3,"total_deaths":0},"2/19/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":13,"total_recoveries":3,"total_deaths":0},"2/20/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":13,"total_recoveries":3,"total_deaths":0},"2/21/2020":{"new_daily_cases":2,"new_daily_deaths":0,"total_cases":15,"total_recoveries":5,"total_deaths":0},"2/22/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":15,"total_recoveries":5,"total_deaths":0},"2/23/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":15,"total_recoveries":5,"total_deaths":0},"2/24/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":15,"total_recoveries":5,"total_deaths":0},"2/25/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":15,"total_recoveries":6,"total_deaths":0},"2/26/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":15,"total_recoveries":6,"total_deaths":0},"2/27/2020":{"new_daily_cases":1,"new_daily_deaths":0,"total_cases":16,"total_recoveries":6,"total_deaths":0},"2/28/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":16,"total_recoveries":7,"total_deaths":0},"2/29/2020":{"new_daily_cases":8,"new_daily_deaths":1,"total_cases":24,"total_recoveries":7,"total_deaths":1},"3/1/2020":{"new_daily_cases":6,"new_daily_deaths":0,"total_cases":30,"total_recoveries":7,"total_deaths":1},"3/2/2020":{"new_daily_cases":23,"new_daily_deaths":5,"total_cases":53,"total_recoveries":7,"total_deaths":6},"3/3/2020":{"new_daily_cases":20,"new_daily_deaths":1,"total_cases":73,"total_recoveries":7,"total_deaths":7},"3/4/2020":{"new_daily_cases":31,"new_daily_deaths":4,"total_cases":104,"total_recoveries":7,"total_deaths":11},"3/5/2020":{"new_daily_cases":68,"new_daily_deaths":1,"total_cases":172,"total_recoveries":7,"total_deaths":12},"3/6/2020":{"new_daily_cases":45,"new_daily_deaths":2,"total_cases":217,"total_recoveries":7,"total_deaths":14},"3/7/2020":{"new_daily_cases":140,"new_daily_deaths":3,"total_cases":357,"total_recoveries":7,"total_deaths":17},"3/8/2020":{"new_daily_cases":116,"new_daily_deaths":4,"total_cases":473,"total_recoveries":7,"total_deaths":21},"3/9/2020":{"new_daily_cases":65,"new_daily_deaths":1,"total_cases":538,"total_recoveries":7,"total_deaths":22},"3/10/2020":{"new_daily_cases":375,"new_daily_deaths":6,"total_cases":913,"total_recoveries":8,"total_deaths":28},"3/11/2020":{"new_daily_cases":322,"new_daily_deaths":8,"total_cases":1235,"total_recoveries":8,"total_deaths":36},"3/12/2020":{"new_daily_cases":382,"new_daily_deaths":4,"total_cases":1617,"total_recoveries":12,"total_deaths":40},"3/13/2020":{"new_daily_cases":516,"new_daily_deaths":7,"total_cases":2133,"total_recoveries":12,"total_deaths":47},"3/14/2020":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":2133,"total_recoveries":12,"total_deaths":47},"stat":"ok"}]

	// const {code} = payload;
	// return axios({
	// 	url: baseUrl,
	// 	params: {countryTimeline: code}
	// })
	// 	.then(response => {
	// 		return response.data.timelineitems;
	// 	})
	// 	.catch(() => {
	// 		return false;
	// 	});
}
