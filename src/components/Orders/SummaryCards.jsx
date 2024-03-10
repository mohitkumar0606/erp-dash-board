import useAppContext from '../../context/use-app-context';

const SummaryCards = () => {
    const { data } = useAppContext();
    return (
        <div className="w-full flex md:flex-row flex-col my-4 gap-2">
            <div className='bg-gray-100 border-l-2 border-purple-500 transition-transform md:w-4/12 p-4'>
                <p className='text-2xl'>
                    {data?.orders?.length}
                </p>
                <span className='text-gray-400'>
                    Total orders
                </span>
            </div>
            <div className='bg-gray-100 border-l-2 border-purple-500 transition-transform md:w-4/12 p-4'>
                <p className='text-2xl'>
                    0
                </p>
                <span className='text-gray-400'>
                    New orders
                </span>
            </div>
            <div className='bg-gray-100 border-l-2 border-purple-500 transition-transform md:w-4/12 p-4'>
                <p className='text-2xl'>
                    {data?.orders?.filter(order => order.status === "rejected").length}
                </p>
                <span className='text-gray-400'>
                    Rejected orders
                </span>
            </div>
        </div>
    );
};

export default SummaryCards;
