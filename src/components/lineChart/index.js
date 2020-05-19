import React from "react";
import {Doughnut} from "react-chartjs-2";
import styles from "./style.module.scss";

const colors = {
	recovered: "#58c558",
	deaths: "#bd2d2d",
	critical: "#ef7d08d9",
	"new cases": "#58c558",
	"new deaths": "#bd2d2d"
};

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
				const data1 = data.datasets[0].data,
					index = tooltipItems.index;
				const labels = data.labels;
				const percent = ((100 % data1[index]) / data1[0]).toFixed(2);
				return `Total ${labels[index]} : ${data1[index]} (${percent}%)`;
			}
		}
	}
};

class LineChartCountry extends React.Component {
	constructChartData = () => {
		const {totals} = this.props;
		const labels = [],
			data = [],
			backgroundColor = [];
		for (let [key, value] of Object.entries(totals)) {
			labels.push(key);
			data.push(value);
			backgroundColor.push(colors[key]);
		}
		// return {labels, data, backgroundColor};
		return {
			labels,
			datasets: [
				{data: data, backgroundColor, hoverBackgroundColor: backgroundColor}
			]
		};
	};

	render() {
		const data = this.constructChartData();
		const {title} = this.props;
		return (
			<div className={styles.total_cases_chart}>
				<h2>{title}</h2>
				<Doughnut data={data} options={options} />
			</div>
		);
	}
}

export default LineChartCountry;
