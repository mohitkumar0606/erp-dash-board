import useAppContext from "../../context/use-app-context";
import base_data from "../../data.json";
import { cn } from "../../lib/utils";
import Counter from "../ui/counter";

const InventoryCard = ({ data }) => {
    return <div className="my-2 rounded-md bg-gray-100 p-2">
        <h3 className="flex items-center text-sm justify-between">
            <span className="font-semibold text-gray-600">
                {data.category}
            </span>
            <i className={cn("font-semibold text-xs", !data.quantity && "text-red-500")}>
                <Counter targetNumber={data.quantity} />
            </i>
        </h3>
        <p className="text-xs text-gray-400">
            $<Counter targetNumber={Number(data.totalWorth).toFixed(2)} />
        </p>
    </div>
}

const LowInventory = () => {
    const { data } = useAppContext();
    const inventory = [];

    base_data.categories.forEach(category => {
        const inventoryCount = data.products.filter(product => product.category === category);
        const quantity = inventoryCount.reduce((prevsum, product) => prevsum + Number(product.stock_quantity), 0);
        if (quantity <= 100) inventory.push({
            category,
            quantity,
            totalWorth: inventoryCount.reduce((prevsum, product) => prevsum + Number(product.price), 0)
        })
    });

    return (
        <div className="bg-white rounded-lg md:my-4 p-3 md:w-3/12">
            <span className="text-gray-400 text-sm">Low inventory categories</span>
            {inventory.map((item) => <InventoryCard key={Math.random()} data={item} />)}
        </div>
    );
};

export default LowInventory;
