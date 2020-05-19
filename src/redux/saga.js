import {all, call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {message} from "antd";
import * as apis from "../services";

import actions from "./actions";

export function* GET_MAIN_DASHBOARD_DATA() {
	const response = yield call(apis.getMainDashboardData);
	console.log(response[0]);
	if (response) {
		const totals = response[0];
		const totalCases =
			totals.confirmed + totals.recovered + totals.deaths + totals.critical;
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

export default function* userSaga() {
	yield all([
		takeLatest(actions.GET_MAIN_DASHBOARD_DATA, GET_MAIN_DASHBOARD_DATA)
	]);
}
