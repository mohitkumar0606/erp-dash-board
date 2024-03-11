import { RotateCcw } from "lucide-react";
import useAppContext from "../../context/use-app-context";
import SummaryCards from "../Orders/summary-cards";

// eslint-disable-next-line react/prop-types
const App = () => {
    const { setCurrPage } = useAppContext();
    setCurrPage("dashboard");
    return (
        <div className="w-full h-screen p-5 overflow-scroll bg-gray-100">
            <h3 className="text-2xl font-semibold md:text-left mb-3 flex justify-center md:justify-start items-center gap-3">
                <span>
                    Dashboard
                </span>
                <RotateCcw size={15} className="text-gray-400" />
            </h3>
            <SummaryCards />
        </div>
    );
};

export default App;
