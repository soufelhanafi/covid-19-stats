import React from "react";
import {Row, Col} from "antd";
import styles from "./style.module.scss";

const TopComponent = ({totals}) => {
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
						Confirmed cases :{" "}
						{Number(totals.total_cases).toLocaleString("en-EN")}
					</Col>
					<Col xs={24} sm={24} md={12} lg={6} className={styles.recovered}>
						Recovered : {Number(totals.total_recovered).toLocaleString("en-EN")}
					</Col>
					<Col xs={24} sm={24} md={12} lg={6} className={styles.deaths}>
						Deaths : {Number(totals.total_deaths).toLocaleString("en-EN")}
					</Col>
					<Col xs={24} sm={24} md={12} lg={6} className={styles.critical}>
						Critical :{" "}
						{Number(totals.total_serious_cases).toLocaleString("en-EN")}
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default TopComponent;
