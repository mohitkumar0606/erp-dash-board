import { ArrowUpRight, Ban, DollarSign, Sigma, TrendingUp } from 'lucide-react';
import useAppContext from '../../../context/use-app-context';
import Counter from "../../ui/counter"
import { useNavigate } from 'react-router-dom';

const OrdersSummary = () => {
    const { data } = useAppContext();
    const navigate = useNavigate();

    return (
        <div className="w-full md:grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <div
                className='bg-white rounded-lg shadow-md relative p-4 my-2 md:my-0 cursor-pointer hover:shadow-orange-200 transition'
                onClick={() => navigate("/orders")}>
                <div className='text-2xl items-center flex gap-2'>
                    <Sigma className='inline bg-orange-100 p-1 text-orange-500 rounded-md' size={30} />
                    <span>
                        <Counter targetNumber={data?.orders?.length} />
                    </span>
                    <ArrowUpRight className='absolute top-2 right-2 text-orange-600' size={15} />
                </div>
                <span className='text-gray-400'>
                    Total orders
                </span>
            </div>
            <div className='bg-white rounded-lg shadow-md transition-transform p-4 my-2 md:my-0'>
                <div className='text-2xl items-center flex gap-2'>
                    <TrendingUp className='inline bg-purple-100 p-1 text-purple-500 rounded-md' size={30} />
                    <span>
                        <Counter targetNumber={data?.orders?.length} />
                    </span>
                </div>
                <span className='text-gray-400'>
                    New orders
                </span>
            </div>
            <div className='bg-white rounded-lg shadow-md transition-transform p-4 my-2 md:my-0'>
                <div className='text-2xl items-center flex gap-2'>
                    <Ban className='inline bg-red-100 p-1 text-red-500 rounded-md' size={30} />
                    <span>
                        <Counter targetNumber={data?.orders?.filter(order => order.status === "rejected").length} />
                    </span>
                </div>
                <span className='text-gray-400'>
                    Rejected orders
                </span>
            </div>
            <div className='bg-white rounded-lg shadow-md transition-transform p-4 my-2 md:my-0'>
                <div className='text-2xl items-center flex gap-2'>
                    <DollarSign className='inline bg-green-100 p-1 text-green-500 rounded-md' size={30} />
                    <span>
                        <Counter targetNumber={data?.orders?.reduce((prevsum, order) => prevsum + (Number(order?.price ?? 0)), 0)} />
                    </span>
                </div>
                <span className='text-gray-400'>
                    Total order value
                </span>
            </div>
        </div>
    );
};

export default OrdersSummary;
