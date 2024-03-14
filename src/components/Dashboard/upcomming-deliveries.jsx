import { ArrowUpRight } from "lucide-react";
import useAppContext from "../../context/use-app-context";
import { isWithinNext10Days } from "../../lib/utils";
import OrderLabel from "../Calendar/order-label";
import { Link } from "react-router-dom";

const UpcommingDeliveries = () => {
    const { data } = useAppContext();
    return (
        <div className="bg-white rounded-lg md:my-4 p-3 md:w-3/12">
            <span className="text-gray-400 text-sm">Upcomming deliveries</span>
            <Link to={"/calendar"}>
                <ArrowUpRight className="inline ml-1 text-blue-500" size={20} />
            </Link>
            <div className="h-80 overflow-y-scroll">
                {data.orders.filter((order) => isWithinNext10Days(new Date(order.deliver_date))).map(order => (<OrderLabel key={order.id} order={order} />))}
            </div>
        </div>
    );
};

export default UpcommingDeliveries;
