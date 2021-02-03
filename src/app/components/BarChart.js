// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";


// const BarChart = ({ show, close }) => {
//     const [chartData, setChartData] = useState({});

//     const chart = async () => {
//         let pTests = [];
//         let fTests = [];
//         await fetch(`https://dev.azure.com/malinowyjan12/test/_apis/test/Runs/`,
//             {
//                 method: 'GET',
//                 headers: { 'Authorization': 'Basic ' + btoa('login:zc5hwzow3a6cxnbfzud4fpxfru5xyqhfrx5tstqi5mxpm5tcnm5q') }
//             }

//         )
//             //Response
//             .then(res => {
//                 if (res.ok) {
//                     return res
//                 }
//                 throw Error(res.status)
//             })
//             .then(res => res.json())
//             .then(res => {
//                 console.log(res)
//                 console.log('TUUUTEJ'+res.count )
//                 for (const dataObj of res.value) {
//                     pTests.push(parseInt(dataObj.passedTests));
//                     fTests.push(parseInt(dataObj.unanalyzedTests));
//                 }

//                 setChartData({
                    
//                     labels: Array.from({ length: res.count }, (_, i) => i + 1),
//                     datasets: [
//                         {
//                             label: 'Passed',
//                             backgroundColor: '#74B058',
//                             data: pTests,
//                         },
//                         {
//                             label: 'Failed',
//                             backgroundColor: '#B35250',
//                             data: fTests
//                         }
//                     ]
//                 });
//                 return
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     };


//     const getDetailedResults = async (id) => {

//         let data = []

//         try {
//             data = await chart()

//         } catch (e) {

//             console.log(e)
//         }
//         console.log('TO JEST DATA' + data)
//         // fetch(`https://dev.azure.com/malinowyjan12/test/_apis/test/Runs/31`,
//         //     {
//         //         method: 'GET',
//         //         headers: { 'Authorization': 'Basic ' + btoa('login:zc5hwzow3a6cxnbfzud4fpxfru5xyqhfrx5tstqi5mxpm5tcnm5q') }
//         //     })

//         //     .then(res => {
//         //         // if (res.ok) {
//         //         //     return res
//         //         // }
//         //         // throw Error(res.status)
//         //         console.log(res)
//         //     })
//         //     // .then(res => res.json())
//         //     // .then(res => {
//         //     //     console.log(res)
//         //     // })
//     }
//     useEffect(() => {
//         chart();
//     }, []);



//     return (
//         <div className="chart">
//             <h1>Nigchtwatch js data chart</h1>

//             <Bar
//                 getElementAtEvent={elem => {

//                     if (elem[0] === undefined) {

//                     } else {
//                         console.log(elem[0]._index)
//                         console.log(elem[0]._model.datasetLabel)
//                         // TODO:
//                         // getDetailedResults(elem[0]._index + 1)

//                     }
//                 }
//                 }
//                 data={chartData}
//                 options={{

//                     responsive: true,
//                     title: { text: "Test Title", display: true, fontSize: 25 },
//                     legend: {
//                         display: true,
//                         position: 'bottom'
//                     },
//                     scales: {
//                         yAxes: [
//                             {
//                                 ticks: {
//                                     max: 10,
//                                     min: 0,
//                                     stepSize: 1,
//                                 },
//                                 stacked: true,

//                                 // ticks: {
//                                 //     autoSkip: true,
//                                 //     maxTicksLimit: 10,
//                                 //     beginAtZero: true
//                                 // },
//                                 gridLines: {
//                                     display: false
//                                 }
//                             }
//                         ],
//                         xAxes: [
//                             {
//                                 stacked: true,
//                                 gridLines: {
//                                     display: false
//                                 }
//                             }
//                         ]
//                     }
//                 }}
//             />
//         </div>
//     );
// };

// export default BarChart;