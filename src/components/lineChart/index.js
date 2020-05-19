import React from "react";
import {Line} from "react-chartjs-2";

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
		const {countryTimeline} = this.props;
		const labels = [],
			data = [];
		for (let [key, value] of Object.entries(countryTimeline)) {
			labels.push(key);
			data.push(value.new_daily_deaths);
		}
		// return {labels, data, backgroundColor};
		return {
			labels,
			datasets: [
				{
					data: data,
					backgroundColor: "rgba(75,192,192,0.4)",
					borderColor: "rgba(75,192,192,1)"
				}
			]
		};
	};

	render() {
		const data = this.constructChartData();
		console.log(data);
		const {title} = this.props;
		return (
			<div>
				<h2>{title}</h2>
				<Line data={data} options={options} />
			</div>
		);
	}
}

export default LineChartCountry;
