import {all, call, put, takeLatest} from "redux-saga/effects";
import {message} from "antd";
import * as apis from "../services";

import actions from "./actions";

export function* GET_MAIN_DASHBOARD_DATA() {
	const response = yield call(apis.getMainDashboardData);
	if (response) {
		const totals = response[0];
		const totalCases =
			totals.total_cases +
			totals.total_recovered +
			totals.total_deaths +
			totals.total_serious_cases;
		yield put({
			type: actions.SET_STATE,
			payload: {loading: false, totals, totalCases}
		});
	} else {
		yield put({
			type: actions.SET_STATE,
			payload: {loading: false, totals: {}}
		});
		message.error("an error occured, please refresh your page");
	}
}

export function* GET_TOTALS_COUNTRIES() {
	yield put({
		type: actions.SET_STATE,
		payload: {loadingTable: true}
	});
	const response = yield call(apis.getTotalCountries);
	if (response) {
		let countryTotals = [];
		for (let [key, value] of Object.entries(response[0])) {
			countryTotals.push(value);
		}

		countryTotals.sort((a, b) => compare(a, b));
		yield put({
			type: actions.SET_STATE,
			payload: {loadingTable: false, countryTotals}
		});
	} else {
		yield put({
			type: actions.SET_STATE,
			payload: {loading: false, totals: {}}
		});
		message.error("an error occured, please refresh your page");
	}
}

function compare(a, b) {
	if (a.total_new_cases_today < b.total_new_cases_today) {
		return 1;
	} else if (a.total_new_cases_today > b.total_new_cases_today) {
		return -1;
	}
	return 0;
}

export default function* userSaga() {
	yield all([
		takeLatest(actions.GET_MAIN_DASHBOARD_DATA, GET_MAIN_DASHBOARD_DATA),
		takeLatest(actions.GET_TOTALS_COUNTRIES, GET_TOTALS_COUNTRIES)
	]);
}
