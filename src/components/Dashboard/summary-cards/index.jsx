import OrdersSummary from './order-summary';
import ProductsSummary from "./products-summary"

const SummaryCards = () => {
    return (
        <div className="grid grid-cols-2 gap-2 md:gap-8">
            <OrdersSummary />
            <ProductsSummary />
        </div>
    );
};

export default SummaryCards;
