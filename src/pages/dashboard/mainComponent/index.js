import React from "react";
import {Row, Col} from "antd";
import {connect} from "react-redux";
import TotalCasesChart from "./totalCasesChart";
import ActiveCases from "./activeCases";
import styles from "./style.module.scss";

class MainComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {totals} = this.props;
		return (
			<Row
				type="flex"
				justify="space-between"
				className={styles.main_dashboard_component}
			>
				<Col xs={24} sm={24} md={12} lg={6}>
					<TotalCasesChart totals={totals} />
				</Col>
				<Col xs={24} sm={24} md={12} lg={6}>
					<ActiveCases totals={totals} />
				</Col>
				<Col xs={24} sm={24} md={12} lg={6}>
					<TotalCasesChart totals={totals} />
				</Col>
				<Col xs={24} sm={24} md={12} lg={6}>
					<TotalCasesChart totals={totals} />
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = state => {
	return state;
};

export default connect(mapStateToProps)(MainComponent);
