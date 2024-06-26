"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels,
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        datalabels: {
            color: '#F1DDC3',
            align: "top",
            font: {
                size: 12,
                weight: "600",
                family: "sans",
                align: "center"
            },
            formatter: function (value: number) {
                return value.toLocaleString("pt-BR");
            }
        }
    },
    scales: {
        y: {
            display: false,
            grid: { display: false },
        },
        x: {
            grid: { display: false },
            ticks: {
                color: '#262626bb',
                beginAtZero: true,
                font: {
                    size: 14,
                    weight: "550",
                    family: "sans"
                },
            }
        }
    },
    layout: {
        padding: {
            // top: 25
        }
    }
};

const deathsByDesease = {
    "DPOC¹": 37686,
    "Cardíacas": 33179,
    "Câncer de Pulmão": 24443,
    "Outros cânceres": 25683,
};

const labels = Object.keys(deathsByDesease);

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: Object.values(deathsByDesease),
            backgroundColor: 'var(--foreground)',
            borderRadius: 8,
        },
    ],
};
export default function DeathsCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Doenças e mortes</CardTitle>
                <CardDescription>
                    atribuídas ao tabaco no Brasil
                </CardDescription>
                <Bar
                    options={options as any}
                    data={data}
                />
                <CardDescription>
                    ¹DPOC: Doença Pulmonar Obstrutiva Crônica
                    <br />
                    Fonte: <a href="https://www.iecs.org.ar/wp-content/uploads/brasil_.pdf" target="_blank">IECS</a>
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
