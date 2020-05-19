import React from "react";
import {Route, Switch, BrowserRouter, Redirect} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import CountryState from "./pages/countryState";

const routes = [
	{
		path: "/dashboard",
		component: Dashboard,
		exact: true
	},
	{
		path: "/country/:code",
		component: CountryState,
		exact: true
	}
];

class Router extends React.Component {
	render() {
		const {history} = this.props;
		return (
			<BrowserRouter history={history}>
				<Switch>
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
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Router;
