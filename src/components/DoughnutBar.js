import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Globalbar } from "../context/GlobalState";

export const DoughnutBar = ({ count, Light }) => {
    const Glob = useContext(Globalbar);
    var texts = '';
    const data = [count.active, count.recovered, count.deaths];
    if (Glob[0] === 'Global') {
        texts = 'World';
    }
    else {
        texts = count.country;
    }
    const state = {
        labels: ['Active', 'Recovered', 'Dead'],
        datasets: [
            {
                label: 'Covid Tracker',
                backgroundColor: [
                    'rgb(24, 137, 202)',
                    'rgb(20, 206, 20)',
                    'rgb(231, 20, 20)',
                ],
                hoverBackgroundColor: [
                    'rgb(0, 162, 255)',
                    'rgb(0, 253, 0)',
                    'red',
                ],
                fontColor: Light[0] ? 'rgba(0, 0, 0, 0.54)' : 'white',
                data: data
            }
        ]
    }

    return (

        <Doughnut
            data={state}
            options={{
                title: {
                    display: true,
                    text: 'Covid-19 Tracker for ' + texts,
                    fontSize: 20,
                    fontColor: Light[0] ? 'rgba(0, 0, 0, 0.54)' : 'white'
                },
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        fontColor: Light[0] ? 'rgba(0, 0, 0, 0.54)' : 'white'
                    }
                }
            }}
        />
    )
}