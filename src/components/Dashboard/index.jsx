import useAppContext from "../../context/use-app-context";
import SummaryCards from "../Orders/SummaryCards";

// eslint-disable-next-line react/prop-types
const App = () => {
    const { setCurrPage } = useAppContext();
    setCurrPage("dashboard");
    return (
        <div className="w-screen md:w-[80%] h-screen p-5 overflow-scroll">
            <h3 className="text-2xl font-semibold md:text-left text-center">
                Dashboard
            </h3>
            <SummaryCards />
        </div>
    );
};

export default App;
