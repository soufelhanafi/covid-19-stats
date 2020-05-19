import React from "react";
import {Row, Col} from "antd";
import styles from "./style.module.scss";

const TopComponent = ({totals, totalCases}) => {
	return (
		<Row
			className={styles.topComponent_container}
			type="flex"
			justify="center"
			align="top"
		>
			<Col xs={24} sm={24} md={24} lg={16}>
				<Row
					className={styles.topComponent}
					type="flex"
					justify="space-between"
				>
					<Col className={styles.confirmed} xs={24} sm={24} md={12} lg={6}>
						Confirmed cases : {totals.total_cases}
					</Col>
					<Col xs={24} sm={24} md={12} lg={6} className={styles.recovered}>
						Recovered : {totals.total_recovered}
					</Col>
					<Col xs={24} sm={24} md={12} lg={6} className={styles.deaths}>
						Deaths : {totals.total_deaths}
					</Col>
					<Col xs={24} sm={24} md={12} lg={6} className={styles.critical}>
						Critical : {totals.total_serious_cases}
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default TopComponent;
