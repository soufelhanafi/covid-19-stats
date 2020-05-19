import React from "react";
import {Spin, Col, Row} from "antd";
import {connect} from "react-redux";
import TopComponent from "./topComponent";
import MainComponent from "./mainComponent";
import actions from "../../redux/actions";
class Dashboard extends React.Component {
	state = {
		spinning: true,
		data: []
	};

	componentDidMount() {
		this.props.dispatch({
			type: actions.GET_MAIN_DASHBOARD_DATA
		});
	}

	render() {
		const {loading, totals, totalCases} = this.props;
		return (
			<Spin spinning={loading} tip="Loading...">
				<Row type="flex" justify="space-between">
					<Col span={24}>
						<TopComponent totals={totals} totalCases={totalCases} />
					</Col>
					<Col span={24}>
						<MainComponent />
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
