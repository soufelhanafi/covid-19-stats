import React from "react";
import {Route, Switch, BrowserRouter, Redirect} from "react-router-dom";
import Dashboard from "./pages/dashboard";

const routes = [
	{
		path: "/dashboard",
		component: Dashboard,
		exact: true
	}
];

class Router extends React.Component {
	render() {
		const {history} = this.props;
		return (
			<BrowserRouter history={history}>
				{routes.map(route => {
					return (
						<Route
							key={route.path}
							component={route.component}
							path={route.path}
							exact
						/>
					);
				})}
				<Route render={() => <Redirect to="/dashboard" />} />
			</BrowserRouter>
		);
	}
}

export default Router;
