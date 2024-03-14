import useAppContext from "../../context/use-app-context";
import useCalendar from "./use-calendar";
import CalendarDays from "./calendar-days"
import "./index.css"

const Calendar = () => {
    const { weekdays, months, date } = useCalendar();
    const { setCurrPage } = useAppContext();
    setCurrPage("calendar");
    return (
        <div className="w-full h-screen p-5 overflow-scroll">
            <div className="w-full mb-2 flex flex-col md:flex-row items-center gap-4 justify-between">
                <span className="text-lg font-bold">
                    {months[date.getMonth()].fullName} {date.getFullYear()}
                </span>
            </div>
            <div className="calendar-body">
                <div className="grid grid-cols-7">
                    {
                        weekdays.map((weekday) => {
                            return <div key={Math.random()} className="py-3 text-center text-gray-400">
                                <span>{weekday}</span>
                            </div>
                        })
                    }
                </div>
                <CalendarDays currentDay={date} />
            </div>
        </div>
    );
};

export default Calendar;
