import { RotateCcw } from "lucide-react";
import useAppContext from "../../context/use-app-context";
import SummaryCards from "./summary-cards";
import LowInventory from "./low-inventory"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { modifyMockdataToCurr } from "../../lib/utils";
import PieChart from "./pie-chart";
import LineChart from "./line-chart"
import UpcommingDeliveries from "./upcomming-deliveries";

// eslint-disable-next-line react/prop-types
const App = () => {
    const { setCurrPage, setData } = useAppContext();
    setCurrPage("dashboard");
    const resetData = () => {
        setData(modifyMockdataToCurr())
    }
    return (
        <div className="w-full h-screen p-5 overflow-scroll bg-gray-100">
            <h3 className="text-2xl font-semibold md:text-left mb-3 flex justify-center md:justify-start items-center gap-3">
                <span>
                    Dashboard
                </span>
                <Dialog>
                    <DialogTrigger>
                        <RotateCcw size={15} className="text-gray-400" />
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you sure to reset the data to initial mock data ?</DialogTitle>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button size="sm" variant="outline" onClick={resetData}>
                                    Confirm
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </h3>
            <SummaryCards />
            <div className="w-full flex justify-between flex-col md:flex-row gap-4">
                <LowInventory />
                <UpcommingDeliveries />
                <PieChart />
            </div>
            <LineChart />
        </div>
    );
};

export default App;
