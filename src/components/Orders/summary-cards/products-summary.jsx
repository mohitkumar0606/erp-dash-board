import { ArrowUpRight, LayersIcon, Network, Package } from 'lucide-react';
import useAppContext from '../../../context/use-app-context';
import base_data from "../../../data.json"
import Counter from "../../ui/counter"
import { useNavigate } from 'react-router-dom';

const ProductsSummary = () => {
    const { data } = useAppContext();
    const navigate = useNavigate();
    return (
        <div className="w-full md:grid grid-cols-2 gap-4">
            <div
                className='bg-white rounded-lg shadow-md relative hover:shadow-blue-200 cursor-pointer transition p-4 my-2 md:my-0'
                onClick={() => navigate("/products")}>
                <div className='text-2xl items-center flex gap-2'>
                    <Package className='inline bg-blue-100 p-1 text-blue-500 rounded-md' size={30} />
                    <span>
                        <Counter targetNumber={data?.products?.length} />
                    </span>
                    <ArrowUpRight className='absolute top-2 right-2 text-blue-600' size={15} />
                </div>
                <span className='text-gray-400'>
                    Total products
                </span>
            </div>
            <div className='bg-white rounded-lg shadow-md transition-transform p-4'>
                <div className='text-2xl items-center flex gap-2'>
                    <Network className='inline bg-pink-100 p-1 text-pink-500 rounded-md' size={30} />
                    <span>
                        <Counter targetNumber={base_data.categories.length} />
                    </span>
                </div>
                <span className='text-gray-400'>
                    Number of categories
                </span>
            </div>
            <div className='bg-white rounded-lg col-span-2 flex flex-col items-center justify-centerrounded-lg shadow-md transition-transform p-4  my-2 md:my-0'>
                <div className='text-2xl items-center flex gap-2'>
                    <LayersIcon className='inline bg-yellow-100 p-1 text-yellow-500 rounded-md' size={30} />
                    <span>
                        <Counter targetNumber={data?.products?.reduce((prevsum, product) => prevsum + (Number(product?.stock_quantity ?? 0)), 0).toLocaleString()} />
                    </span>
                </div>
                <span className='text-gray-400'>
                    Total quantity
                </span>
            </div>
        </div>
    );
};

export default ProductsSummary;
