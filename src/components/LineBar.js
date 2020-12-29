import React, { useEffect, useState, useContext } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { Globalbar, ThemeButton } from "../context/GlobalState";

export const LineBar = ({ Globe, count }) => {
    const Light = useContext(ThemeButton);
    const [Data, setData] = useState([1, 2, 3]);
    const [Deads, setDeads] = useState([1, 2, 3]);
    const [Rec, setRec] = useState([1, 2, 3]);
    const Glob = useContext(Globalbar);

    var ind = [1, 2, 3];
    var texts = '';
    if (Glob[0] === 'Global') {
        ind = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 328, 340];
        texts = 'World';
    }
    else {
        ind = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 328, 340];
        texts = count && count.country;
    }
    var value = [];
    var value1 = [];
    var value2 = [];
    var values = [];
    var kay = [];
    for (var x of ind) {
        var key1 = Object.keys(Deads)[x];
        value1.push(Deads[key1]);
        var key2 = Object.keys(Rec)[x];
        value2.push(Rec[key2]);
        var key = Object.keys(Data)[x];
        value.push(Data[key] - Deads[key1] - Rec[key2]);
        kay.push(key);
        values.push(Data[key]);
    }
    useEffect(() => {
        async function fetchData() {

            Globe && Globe.cases && setData(await Globe.cases);
            Globe && Globe.deaths && setDeads(await Globe.deaths);
            Globe && Globe.recovered && setRec(await Globe.recovered);
        } fetchData();
    }, [Globe, count])

    Chart.pluginService.register({
        beforeDraw: function (chart, easing) {
            if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
                var ctx = chart.chart.ctx;
                var chartArea = chart.chartArea;

                ctx.save();
                ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
                ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
                ctx.restore();
            }
        }
    });

    return (
        <Line
            data={{
                labels: kay,
                datasets: [
                    {
                        label: 'Total Cases',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'purple',
                        borderColor: 'purple',
                        borderWidth: 2,
                        data: values
                    },
                    {
                        label: 'Active',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'blue',
                        borderColor: 'blue',
                        borderWidth: 2,
                        data: value
                    },
                    {
                        label: 'Dead',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'red',
                        borderColor: 'red',
                        borderWidth: 2,
                        data: value1
                    },
                    {
                        label: 'Recovered',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'green',
                        borderColor: 'green',
                        borderWidth: 2,
                        data: value2
                    }]
            }}
            options={{
                title: {
                    display: true,
                    text: 'Covid-19 Record for ' + texts,
                    fontColor: Light[0] ? 'rgba(0, 0, 0, 0.54)' : 'white',
                    fontSize: 20
                },
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        fontColor: Light[0] ? 'rgba(0, 0, 0, 0.54)' : 'white'
                    }
                },
                scales: {
                    xAxes: [
                        {
                            scaleLabel: { fontColor: Light[0] ? 'rgba(0, 0, 0, 0.54)' : 'white' },
                            ticks: { fontColor: Light[0] ? 'rgba(0, 0, 0, 0.54)' : 'white' }
                        }
                    ],
                    yAxes: [
                        {
                            scaleLabel: { fontColor: Light[0] ? 'rgba(0, 0, 0, 0.54)' : 'white' },
                            ticks: { fontColor: Light[0] ? 'rgba(0, 0, 0, 0.54)' : 'white' }
                        }
                    ]
                },
                chartArea: {
                    backgroundColor: 'white'
                }
            }}

        />
    )
}
