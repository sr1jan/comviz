import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);
export default function BarGraph({ data }: { data: any[] }) {
    const options = {
        responsive: true,
        legend: { display: false },
        title: {
            display: false,
        },

        maintainAspectRatio: false,
    };

    return (
        <Bar
            options={options}
            height="400px"
            width="200px"
            data={{
                labels: data.map((item) => Object.values(item)[0]),
                datasets: [
                    {
                        label: data.map((item) => Object.keys(item)[0])[1],
                        data: data.map((item) => Object.values(item)[1]),
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            }}
        />
    );
}
