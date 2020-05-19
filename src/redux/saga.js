import {all, call, put, takeLatest} from "redux-saga/effects";
import {message} from "antd";
import * as apis from "../services";

import actions from "./actions";

export function* GET_MAIN_DASHBOARD_DATA() {
	const response = yield call(apis.getMainDashboardData);
	if (response) {
		const totals = response[0];
		yield put({
			type: actions.SET_STATE,
			payload: {loading: false, totals}
		});
	} else {
		yield put({
			type: actions.SET_STATE,
			payload: {loading: false, totals: {}}
		});
		message.error("an error occured, please refresh your page");
	}
}

export function* GET_DASHBOARD_COUNTRY({payload}) {
	yield put({
		type: actions.SET_STATE,
		payload: {loading: true}
	});
	const response = yield call(apis.getDashboardCountry, {payload});
	if (response) {
		const countryTotal = response[0];
		yield put({
			type: actions.SET_STATE,
			payload: {loading: false, countryTotal}
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

		yield put({
			type: actions.SET_STATE,
			payload: {loadingTable: false, countryTotals}
		});
	} else {
		yield put({
			type: actions.SET_STATE,
			payload: {loadingTable: false, totals: {}}
		});
		message.error("an error occured, please refresh your page");
	}
}

export function* GET_TIME_LINE_COUNTRY({payload}) {
	yield put({
		type: actions.SET_STATE,
		payload: {loadingLine: true}
	});
	const response = yield call(apis.getTimeLineCountries, {payload});
	if (response) {
		yield put({
			type: actions.SET_STATE,
			payload: {loadingLine: false, countryTimeline: response}
		});
	} else {
		yield put({
			type: actions.SET_STATE,
			payload: {loadingLine: false, totals: {}}
		});
		message.error("an error occured, please refresh your page");
	}
}

export default function* userSaga() {
	yield all([
		takeLatest(actions.GET_MAIN_DASHBOARD_DATA, GET_MAIN_DASHBOARD_DATA),
		takeLatest(actions.GET_TOTALS_COUNTRIES, GET_TOTALS_COUNTRIES),
		takeLatest(actions.GET_TIME_LINE_COUNTRY, GET_TIME_LINE_COUNTRY),
		takeLatest(actions.GET_DASHBOARD_COUNTRY, GET_DASHBOARD_COUNTRY)
	]);
}
