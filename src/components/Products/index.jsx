import useAppContext from "../../context/use-app-context";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell
} from "../ui/table"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Search, X } from "lucide-react";

import ManageProductModal from "./manage";
import { toast } from "../ui/use-toast";
import { filterByAnyValue } from "../../lib/utils";

const App = () => {
    const { setCurrPage, data, setData } = useAppContext();
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    setCurrPage("products");

    const [table, setTable] = useState(data.products);

    useEffect(() => {
        setTable(filterByAnyValue(data.products, search));
    }, [data, search])


    const handleDelete = (id) => {
        setData(prev => ({
            ...prev,
            products: prev.products.filter((item) => item.id !== id)
        }))
        toast({
            title: "Product Deleted"
        })
    }

    return (
        <div className="w-screen md:w-[80%] h-screen p-5 overflow-scroll">
            <div className="w-full mb-5 flex flex-col md:flex-row items-center gap-4 justify-between">
                <span className="text-lg font-bold">
                    Products
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
                    <ManageProductModal>
                        <Button className="w-fit h-fit p-1" size="icon">
                            <Plus className="h-4 w-4" />
                        </Button>
                    </ManageProductModal>
                </div>
            </div>
            <div className="border shadow rounded-lg overflow-x-scroll">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {
                                ["#", "Name", "Category", "Price($)", "Quantity", "Actions"].map((item, index) => (
                                    <TableHead key={index}>{item}</TableHead>
                                ))
                            }
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {table?.length !== 0 ?
                            table.map((product) => (
                                <TableRow key={Math.random()}>
                                    <TableCell>
                                        {product.id}.
                                    </TableCell>
                                    <TableCell>
                                        {product.name}
                                    </TableCell>
                                    <TableCell >
                                        {product.category}
                                    </TableCell>
                                    <TableCell >
                                        {product.price}
                                    </TableCell>
                                    <TableCell>
                                        {product.stock_quantity}
                                    </TableCell>
                                    <TableCell className="flex gap-3">
                                        <ManageProductModal edit data={product}>
                                            <Pencil size={15} className="cursor-pointer text-blue-500" />
                                        </ManageProductModal>
                                        <Trash2 size={15} className="cursor-pointer text-red-400" onClick={() => handleDelete(product.id)} />
                                    </TableCell>
                                </TableRow>
                            ))
                            : <TableRow>
                                <TableCell className="">
                                    No Products
                                </TableCell>
                            </TableRow>}
                        <TableRow>
                            <TableCell className="font-bold">
                                {table.length} results
                            </TableCell>
                            <TableCell>
                            </TableCell>
                            <TableCell className="font-bold">
                                Total
                            </TableCell>
                            <TableCell className="font-bold">
                                {table.reduce((sum, product) => sum + Number(product.price), 0)}
                            </TableCell>
                            <TableCell className="font-bold">
                                {table.reduce((sum, product) => sum + Number(product.stock_quantity), 0)}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default App;