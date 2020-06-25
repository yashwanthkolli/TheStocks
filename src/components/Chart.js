import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart (props) {
    const data = {
        labels: ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'],
        datasets: [
            {
                label: 'Prices',
                data: props.data,
                borderColor: ['#3ecf82'],
                backgroundColor: ['bg-dark'],
                pointBackgroundColor: 'white'
            }
        ]
    }
    return <Line data={data} />
}

export default LineChart;