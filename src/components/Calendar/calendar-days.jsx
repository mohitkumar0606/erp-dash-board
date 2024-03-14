import useAppContext from "../../context/use-app-context";
import { cn } from "../../lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import OrderLabel from "./order-label"

const Day = ({ day }) => {
    const { data } = useAppContext();
    const noOfDeliveries = data.orders.filter((order) => (order.deliver_date === day.date.toISOString().split('T')[0]) && order.status === "placed");
    return (
        <div
            className={cn("text-gray-400 my-2 md:my-3 flex items-center justify-center", day.currentMonth ? "text-black" : "", day.selected ? "font-black text-red-500" : "")}>
            <div className="flex text-sm md:text-base cursor-pointer items-center justify-center w-7 md:w-10 h-7 md:h-10 bg-gray-200 rounded-full">
                <p className="relative">
                    {day.number}
                    {noOfDeliveries.length !== 0 &&
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <span className="absolute text-xs p-1 rounded-full -top-4 bg-orange-500 text-white">
                                    {noOfDeliveries.length}
                                </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="relative -top-4 h-40 overflow-y-scroll">
                                {noOfDeliveries.map((order) => (
                                    <OrderLabel key={Math.random()} order={order} />
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    }
                </p>
            </div>
        </div>
    )
}

const CalendarDays = ({ currentDay }) => {
    let firstDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1, 12);
    let weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];
    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
        } else {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }

        let calendarDay = {
            currentMonth: (firstDayOfMonth.getMonth() === currentDay.getMonth()),
            date: (new Date(firstDayOfMonth)),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            selected: (firstDayOfMonth.toDateString() === currentDay.toDateString()),
            year: firstDayOfMonth.getFullYear()
        }

        currentDays.push(calendarDay);
    }
    return (
        <div className="grid grid-cols-7">
            {currentDays.map((day) => <Day day={day} key={Math.random()} />)
            }
        </div>
    );
};

export default CalendarDays;
