import React from "react";
import {Row, Col} from "antd";
import styles from "./style.module.scss";

class ActiveCases extends React.Component {
	render() {
		const {totals} = this.props;

		const activeCases = totals.total_active_cases;
		const middleCase = activeCases - totals.total_serious_cases;
		return (
			<div className={styles.active_cases_container}>
				<Row type="flex" justify="center">
					<Col span={24}>
						<h2>Active cases</h2>
					</Col>
					<Col span={24}>
						<p>{`${Number(activeCases).toLocaleString(
							"en-EN"
						)} currently active patients`}</p>
					</Col>
					<Col span={24}>
						<p className={styles.middle}>
							Middle cases:{" "}
							{`${new Number(middleCase).toLocaleString("en-EN")} (${(
								(100 * middleCase) /
								activeCases
							).toFixed(2)}%)`}
						</p>
					</Col>
					<Col span={24}>
						<p className={styles.critical}>
							Critical cases:{" "}
							{`${Number(totals.total_serious_cases).toLocaleString(
								"en-EN"
							)} (${((100 * totals.total_serious_cases) / activeCases).toFixed(
								2
							)}%)`}
						</p>
					</Col>
				</Row>
			</div>
		);
	}
}

export default ActiveCases;
