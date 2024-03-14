import ReactApexChart from 'react-apexcharts';
import useAppContext from '../../context/use-app-context';

const PieChart = () => {
    const { data } = useAppContext();

    // Sample data for the pie chart
    const chartData = [
        { name: 'Rejected', data: data.orders.filter(order => order.status === "rejected").length },
        { name: 'Fulfilled', data: data.orders.filter(order => order.status === "fulfilled").length },
        { name: 'Placed', data: data.orders.filter(order => order.status === "placed").length },
    ];

    // Options for the pie chart
    const chartOptions = {
        chart: {
            type: 'donut',
        },
        labels: chartData.map(item => item.name),
        title: {
            text: "Total orders distribution",
            align: "center",
            offsetY: 120,
            style:{
                fontSize: "10px"
            }
        },
        legend: {
            show: false
        }
    };
    return (
        <div className='flex my-4 bg-white rounded-lg justify-center items-center md:w-6/12'>
            <ReactApexChart
                options={chartOptions}
                series={chartData.map(item => item.data)}
                type="donut"
            />
        </div>
    );
};

export default PieChart;
