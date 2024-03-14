import { useState } from "react";
import OrderCard from "../ui/order-card";

const OrderLabel = ({ order }) => {
    const [open, setOpen] = useState(false);

    return <>
        <OrderCard order={open} handleChange={() => setOpen(null)} />
        <div className="hover:bg-gray-100 rounded-md p-1 my-1 cursor-pointer" key={Math.random()} onClick={() => setOpen(order)}>
            <p className="">
                {order.name}
                <span className="text-xs ml-1 text-gray-400">
                    @{order.date}
                </span>
            </p>
            <p className="text-sm text-gray-400">
                ${order.price}
            </p>
        </div>
    </>
}

export default OrderLabel;