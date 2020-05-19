import React from "react";
import {Row, Col} from "antd";
import {connect} from "react-redux";
import TotalCasesChart from "./totalCasesChart";
import ActiveCases from "./activeCases";
import ClosedCases from "./closedCases";
import styles from "./style.module.scss";

class MainComponent extends React.Component {
	render() {
		const {totals} = this.props;
		return (
			<Row
				type="flex"
				justify="space-between"
				align="middle"
				className={styles.main_dashboard_component}
			>
				<Col xs={24} sm={24} md={12} lg={6}>
					<TotalCasesChart
						totals={{
							deaths: totals.total_deaths,
							recovered: totals.total_recovered,
							critical: totals.total_serious_cases
						}}
						title={"Total Cases"}
					/>
				</Col>
				<Col xs={24} sm={24} md={12} lg={6}>
					<TotalCasesChart
						totals={{
							"new cases": totals.total_new_cases_today,
							"new deaths": totals.total_new_deaths_today
						}}
						title={"Today Cases"}
					/>
				</Col>
				<Col xs={24} sm={24} md={12} lg={6}>
					<ActiveCases totals={totals} />
				</Col>
				<Col xs={24} sm={24} md={12} lg={6}>
					<ClosedCases totals={totals} />
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = state => {
	return state;
};

export default connect(mapStateToProps)(MainComponent);
