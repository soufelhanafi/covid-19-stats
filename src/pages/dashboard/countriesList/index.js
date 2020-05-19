import React from "react";
import {Row, Col, Table} from "antd";
import {connect} from "react-redux";
import actions from "../../../redux/actions";
import styles from "./style.module.scss";

class ActiveCases extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch({
			type: actions.GET_TOTALS_COUNTRIES
		});
	}

	columns = [
		{
			title: "Country",
			dataIndex: "title",
			width: 150
		},
		{
			title: "Total new cases",
			dataIndex: "total_new_cases_today",
			width: 150,
			render: text => Number(text).toLocaleString("en-EN"),
			sorter: (a, b) => a.total_new_cases_today - b.total_new_cases_today
		},
		{
			title: "Total new deaths",
			dataIndex: "total_new_deaths_today",
			render: text => Number(text).toLocaleString("en-EN"),
			sorter: (a, b) => a.total_new_deaths_today - b.total_new_deaths_today,
			className: styles.deaths_columns
		},
		{
			title: "Total cases",
			dataIndex: "total_cases",
			width: 150,
			render: text => Number(text).toLocaleString("en-EN"),
			sorter: (a, b) => a.total_cases - b.total_cases
		},
		{
			title: "Total deaths",
			dataIndex: "total_deaths",
			width: 150,
			render: text => Number(text).toLocaleString("en-EN"),
			sorter: (a, b) => a.total_deaths - b.total_deaths,
			className: "deaths_columns"
		},
		{
			title: "Total recovered",
			dataIndex: "total_recovered",
			render: text => Number(text).toLocaleString("en-EN")
		},
		{
			title: "Active cases",
			dataIndex: "total_active_cases",
			render: text => Number(text).toLocaleString("en-EN"),
			sorter: (a, b) => a.total_active_cases - b.total_active_cases
		},
		{
			title: "Critical cases",
			dataIndex: "total_serious_cases",
			render: text => Number(text).toLocaleString("en-EN"),
			sorter: (a, b) => a.total_serious_cases - b.total_serious_cases
		}
	];

	render() {
		const {countryTotals, loadingTable} = this.props;

		return (
			<div className={styles.country_totals}>
				<Row type="flex" justify="center">
					<Col lg={18}>
						<Table
							loading={loadingTable}
							columns={this.columns}
							dataSource={countryTotals}
							pagination={{pageSize: 250}}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state;
};

export default connect(mapStateToProps)(ActiveCases);
