import React from "react";
import {Row, Col} from "antd";
import styles from "./style.module.scss";

class ClosedCases extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {totals} = this.props;

		const closedCases = totals.total_deaths + totals.total_recovered;
		return (
			<div className={styles.active_cases_container}>
				<Row type="flex" justify="center">
					<Col span={24}>
						<h2>Active cases</h2>
					</Col>
					<Col>
						<p>{`${Number(closedCases).toLocaleString(
							"en-EN"
						)} currently active patients`}</p>
					</Col>
					<Col>
						<p className={styles.recovered}>
							Recovered:{" "}
							{`${Number(totals.total_recovered).toLocaleString("en-EN")} (${(
								(100 * totals.total_recovered) /
								closedCases
							).toFixed(2)}%)`}
						</p>
					</Col>
					<Col>
						<p className={styles.deaths}>
							Deaths:{" "}
							{`${Number(totals.total_deaths).toLocaleString("en-EN")} (${(
								(100 * totals.total_deaths) /
								closedCases
							).toFixed(2)}%)`}
						</p>
					</Col>
				</Row>
			</div>
		);
	}
}

export default ClosedCases;