import React from "react";
import {Doughnut} from "react-chartjs-2";
import styles from "./style.module.scss";

const colors = ["#bd2d2d", "#58c558"];

const options = {
	cutoutPercentage: 65,

	elements: {
		arc: {
			borderWidth: 0,
			weight: 0
		}
	},
	aspectRatio: 1,
	segmentShowStroke: false,
	responsive: true,
	title: {
		display: false
	},
	legend: {
		display: false
	},
	tooltips: {
		enabled: true,
		mode: "single",
		displayColors: false,
		caretPadding: 0,
		caretSize: 5,
		borderWidth: 1,
		height: 30,
		bodyFontSize: 13,
		cornerRadius: 2,
		xPadding: 8,
		labelColor: "rgb(0,0,0)",
		borderColor: "rgb(255,255,255)",
		callbacks: {
			label: function(tooltipItems, data) {
				debugger;

				const data1 = data.datasets[0].data,
					index = tooltipItems.index;
				const labels = data.labels;
				const percent = (
					(100 * data1[index]) /
					data1.reduce((a, b) => a + b)
				).toFixed(2);
				return `${labels[index]} : ${Number(data1[index]).toLocaleString(
					"en-EN"
				)} (${percent}%)`;
			}
		}
	}
};

class CasesStates extends React.Component {
	constructor(props) {
		super(props);
	}

	constructChartData = () => {
		const {totals} = this.props;

		let active =
			totals.total_cases - totals.total_deaths - totals.total_recovered;
		let closed = totals.total_deaths + totals.total_recovered;
		// return {labels, data, backgroundColor};
		return {
			labels: ["Active cases", "Closed cases"],
			datasets: [
				{
					data: [active, closed],
					backgroundColor: colors,
					hoverBackgroundColor: colors
				}
			]
		};
	};

	render() {
		const data = this.constructChartData();
		return (
			<div className={styles.total_cases_chart}>
				<h2>Cases state</h2>
				<Doughnut data={data} options={options} />
			</div>
		);
	}
}

export default CasesStates;
