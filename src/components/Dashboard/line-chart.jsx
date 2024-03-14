import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import useAppContext from "../../context/use-app-context";

const LineChart = () => {
    const { data } = useAppContext();
    const [weeklyData, setWeelyData] = useState({
        xaxis: [],
        yaxis: [],
        slot: [0, 6] // [start, end]
    });

    useEffect(() => {
        const currentDate = new Date()
        const xaxis = [], yaxis = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date(currentDate);
            date.setDate(date.getDate() - i);
            xaxis.push(date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }));
            const noOfOrders = data.orders.filter(order => order.date === date.toISOString().split('T')[0]).length
            yaxis.push(noOfOrders)
        }
        setWeelyData(prev => ({
            ...prev,
            xaxis
        }))
        setWeelyData(prev => ({
            ...prev,
            yaxis
        }))
    }, [data.orders]);


    return (
        <div className="bg-white md:my-4 rounded-lg p-4 w-full md:w-6/12">
            <div className="w-full">
                <span className="font-semibold text-xs text-gray-400">Last 7 Days daily orders</span>
            </div>
            <ReactApexChart
                options={{
                    chart: {
                        type: 'line',
                    },
                    xaxis: {
                        categories: weeklyData.xaxis,
                        title: {
                            text: "Dates"
                        }
                    },
                    yaxis: {
                        title: {
                            text: "Number of orders"
                        }
                    },
                }}
                series={[{ name: 'Data', data: weeklyData.yaxis, strokeWidth: 1, }]}
                type="line"
            />
        </div>
    );
};

export default LineChart;
