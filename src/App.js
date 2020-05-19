import React from "react";

import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import {createHashHistory} from "history";
import Router from "./router";
import createSagaMiddleware from "redux-saga";
import {logger} from "redux-logger";
import reducer from "./redux/reducers";
import sagas from "./redux/saga";
import "antd/dist/antd.css";

const sagaMiddleware = createSagaMiddleware();
const history = createHashHistory();

let middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

const store = createStore(reducer, compose(applyMiddleware(...middlewares)));
sagaMiddleware.run(sagas);
function App() {
	return (
		<Provider store={store}>
			<Router history={history} />
		</Provider>
	);
}

export default App;
