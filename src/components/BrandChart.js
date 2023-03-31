import React, { useContext, useEffect, useRef } from 'react';
import { SocketContext } from '../context/SocketContext';
import { Chart } from 'chart.js/auto'

export const BrandChart = () => {

    const { socket } = useContext( SocketContext );
    let chartCanvas;

    useEffect(() => {
        socket.on('current-brands', (brands) => {
            crearGrafica( brands );
        });
    }, [ socket ])


    const crearGrafica = ( brands = []) => {
        if(chartCanvas) chartCanvas.destroy();


        const ctx = document.getElementById('myChart').getContext('2d');
        chartCanvas = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: brands.map( brand => brand.name ),
                datasets: [{
                    label: 'Votos',
                    data: brands.map( brand => brand.votes ),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                animation: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    return (
        <center>
            <canvas id="myChart" style={{maxWidth: "500px", maxHeight: "400px"}}></canvas>
        </center>
    )
}
