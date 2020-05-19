import React from "react";
import {Spin, Col, Row} from "antd";
import {connect} from "react-redux";
import TopComponent from "../../components/topComponent";
import MainComponent from "../../components/mainComponent";
import actions from "../../redux/actions";

class Dashboard extends React.Component {
	state = {
		spinning: true,
		data: []
	};

	componentDidMount() {
		const code = this.props.match.params.code;
		this.props.dispatch({
			type: actions.GET_DASHBOARD_COUNTRY,
			payload: {code}
		});
		this.props.dispatch({
			type: actions.GET_TIME_LINE_COUNTRY,
			payload: {code}
		});
	}

	render() {
		const {loading, countryTotal} = this.props;
		return (
			<Spin spinning={loading} tip="Loading...">
				<Row type="flex" justify="space-between">
					<Col span={24}>
						<TopComponent totals={countryTotal} />
					</Col>
					<Col span={24}>
						<MainComponent totals={countryTotal} />
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
