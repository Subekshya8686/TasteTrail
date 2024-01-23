// // BarChart.js
// import React, { useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
//
// type BarChartData = {
//     category: string;
//     avgRating: number;
// }[];
//
// interface BarChartProps {
//     data: BarChartData;
// }
//
// const BarChart: React.FC<BarChartProps> = ({ data }) => {
//     useEffect(() => {
//         // Clean up the Chart.js instance when the component unmounts
//         return () => {
//             const chartJs = document.getElementById('chart-js-0');
//             chartJs && chartJs.remove();
//         };
//     }, []);
//
//     const chartData = {
//         labels: data.map((category) => category.category),
//         datasets: [
//             {
//                 label: 'Average Rating',
//                 data: data.map((category) => category.avgRating),
//                 backgroundColor: 'rgba(75, 192, 192, 0.6)', // Customize the color
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 1,
//             },
//         ],
//     };
//
//     const options = {
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 max: 5, // Assuming ratings are on a scale of 0 to 5
//             },
//         },
//     };
//
//     return <Bar data={chartData} options={options} />;
// };
//
// export default BarChart;


// import React from 'react';
// import { Bar } from 'react-chartjs-2';
//
// interface BarChartProps {
//     data: number[];
//     labels: string[];
//     title: string;
// }
//
// const BarChart: React.FC<BarChartProps> = ({ data, labels, title }) => {
//     const chartData = {
//         labels: labels,
//         datasets: [
//             {
//                 label: title,
//                 data: data,
//                 backgroundColor: 'rgba(75,192,192,0.6)',
//                 borderColor: 'rgba(75,192,192,1)',
//                 borderWidth: 1,
//             },
//         ],
//     };
//
//     const chartOptions = {
//         scales: {
//             x: {
//                 beginAtZero: true,
//             },
//             y: {
//                 beginAtZero: true,
//             },
//         },
//     };
//
//     return <Bar data={chartData} options={chartOptions} />;
// };
//
// export default BarChart;