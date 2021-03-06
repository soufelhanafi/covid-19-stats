import React from "react";
import {Spin, Col, Row} from "antd";
import {connect} from "react-redux";
import TopComponent from "../../components/topComponent";
import MainComponent from "../../components/mainComponent";
import CountriesList from "./countriesList";
import actions from "../../redux/actions";
class Dashboard extends React.Component {
	componentDidMount() {
		this.props.dispatch({
			type: actions.GET_MAIN_DASHBOARD_DATA
		});
	}

	render() {
		const {loading, totals} = this.props;
		return (
			<Spin spinning={loading} tip="Loading...">
				<Row type="flex" justify="space-between">
					<Col span={24}>
						<TopComponent totals={totals} />
					</Col>
					<Col span={24}>
						<MainComponent totals={totals} />
					</Col>
					<Col span={24}>
						<CountriesList />
					</Col>
				</Row>
			</Spin>
		);
	}
}

const mapStateToProps = state => {
	return state;
};

export default connect(mapStateToProps)(Dashboard);
