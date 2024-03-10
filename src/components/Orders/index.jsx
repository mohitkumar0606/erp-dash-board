import { Plus, Search, Trash2, X, Edit, View } from "lucide-react";
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { toast } from "../ui/use-toast"
import status_icons_map from "../ui/status-icons-map"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { SimpleDropdown } from "../ui/dropdown-menu"
import OrderCard from "../ui/order-card"
import { useEffect, useState } from "react";
import useAppContext from "../../context/use-app-context";
import { filterByAnyValue } from "../../lib/utils";
import ManageOrderModal from "./manage"

const App = () => {
    const { setCurrPage, data, setData } = useAppContext();
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [orderOpen, setOrderOpen] = useState(null);

    const [table, setTable] = useState(data.products);
    useEffect(() => {
        setTable(filterByAnyValue(data.orders, search));
    }, [data, search])
    setCurrPage("orders");

    const handleSelect = (id, status) => {
        setData(prev => ({
            ...prev,
            orders: prev.orders.map((order) => order.id === id ? {
                ...order,
                status
            } : order)
        }))
        toast({
            title: "Status Updated to '" + status + "'"
        })
    }

    const handleDelete = (id) => {
        setData(prev => ({
            ...prev,
            orders: prev.orders.filter((item) => item.id !== id)
        }))
        toast({
            title: "Order Deleted"
        })
    }

    return (
        <div className="w-screen md:w-[80%] h-screen p-5 overflow-scroll">
            <OrderCard order={orderOpen} handleChange={() => { setOrderOpen(null) }} />
            <div className="w-full mb-5 flex flex-col md:flex-row items-center gap-4 justify-between">
                <span className="text-lg font-bold">
                    Orders
                </span>
                <div className="w-full md:w-3/12 flex gap-1 justify-end items-center">
                    {
                        !open ?
                            <Button className="w-fit h-fit p-1" variant="outlined" size="icon" onClick={() => setOpen(true)}>
                                <Search className="h-4 w-4" />
                            </Button>
                            :
                            <>
                                <Button className="w-fit h-fit p-1" variant="outlined" size="icon" onClick={() => setOpen(false)}>
                                    <X className="h-4 w-4" />
                                </Button>
                                <Input placeholder="Search" onChange={(e) => {
                                    setSearch(e.target.value);
                                }} value={search} />
                            </>
                    }
                    <ManageOrderModal>
                        <Button className="w-fit h-fit p-1" size="icon">
                            <Plus className="h-4 w-4" />
                        </Button>
                    </ManageOrderModal>
                </div>
            </div>
            <div className="border shadow rounded-lg overflow-x-scroll">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {
                                ["#", "Customer", "Category", "Status", "Action"].map((item, index) => (
                                    <TableHead key={index}>{item}</TableHead>
                                ))
                            }
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {table?.length !== 0 ?
                            table.map((order) => (
                                <TableRow key={Math.random()} className="cursor-pointer" onClick={() => { setOrderOpen(order) }}>
                                    <TableCell>
                                        {order.id.slice(0, 3)}..
                                    </TableCell>
                                    <TableCell>
                                        {order.name}
                                    </TableCell>
                                    <TableCell >
                                        {order.category}
                                    </TableCell>
                                    <TableCell className="flex gap-2 text-gray-500 items-center justify-start">
                                        {status_icons_map[order.status]}
                                        <span className="capitalize">
                                            {order.status}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex">
                                            <View size={15} className="inline cursor-pointer mr-2 text-green-500" />
                                            <SimpleDropdown
                                                defaultValue={order.status}
                                                options={["rejected", "fulfilled", "placed"]}
                                                title="Change Status"
                                                onSelect={(status) => {
                                                    handleSelect(order.id, status)
                                                }}
                                            >
                                                <Edit size={15} className="inline cursor-pointer mr-2 text-blue-400" />
                                            </SimpleDropdown>
                                            <Trash2 size={15} className="cursor-pointer inline text-red-400" onClick={(e) => {
                                                e.stopPropagation();
                                                handleDelete(order.id);
                                            }} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                            : <TableRow>
                                <TableCell className="">
                                    No orders found !
                                </TableCell>
                            </TableRow>}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default App;
