import React, { Component } from 'react'
import Chart from 'chart.js'


class DoughnutChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }


    componentDidMount() {
        this.myChart = new Chart(this.chartRef.current, {
            type: 'doughnut',
            data: {
                labels: ['Manual testing', 'Automation testing'],
                datasets: [{
                    data: [20, 80],
                    backgroundColor: [
                        'rgba(255, 255, 255, 0.5)',
                        'rgba(210, 166, 99, 0.5)',
                   

                    ],
                    // borderColor: ["rgba(255, 255, 255, 0.7)", "rgba(210, 166, 99, 0.7)"],
                    borderColor: ['rgba(43,43,43,2)', 'rgba(43,43,43,1)'],
                    borderWidth: 10,
                }]
            },
            options: {
                legend: {
                    display: true,
                    labels: {
                        fontColor: '#fff'
                    },
                    position: 'right'
                },
                responsive: true,
                elements: {
                    arc: {
                        borderWidth: 3,
                    },
                },
                cutoutPercentage:60,
                animation:{animateScale:true}
            },
           
        });
    }



    render() {
        return <canvas ref={this.chartRef} />;
    }
}

export default DoughnutChart