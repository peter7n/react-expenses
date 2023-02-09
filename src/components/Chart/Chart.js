import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
	// return array of numbers instead of objects
	const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
	// calculate max of all values; Math.max expects comma-separated values, not an array
	const totalMaximum = Math.max(...dataPointValues);

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) =>
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			)}
		</div>
	);
};

export default Chart;