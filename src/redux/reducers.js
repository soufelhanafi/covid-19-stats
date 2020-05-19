import actions from "./actions";

const initialState = {
	loading: true,
	totals: []
};

export default function mainReducer(state = initialState, action) {
	switch (action.type) {
		case actions.SET_STATE:
			return {...state, ...action.payload};
		default:
			return state;
	}
}
