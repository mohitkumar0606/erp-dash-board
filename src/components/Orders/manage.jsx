import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { toast } from '../ui/use-toast';
import SelectInput from "../ui/select"
import useAppContext from '../../context/use-app-context';
import { v4 } from 'uuid';
import data_mock from "../../data.json"

const ManageOrderModal = ({ children }) => {
    const [open, setOpen] = useState(false);
    const { setData } = useAppContext();

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
    })

    const onClose = () => {
        setFormData({
            name: "",
            category: "",
            price: "",
        });
        setOpen(false)
    }

    const addOrder = (e) => {
        e.preventDefault();
        for (let key of Object.keys(formData)) {
            if (!formData[key].length) {
                toast({
                    variant: "destructive",
                    title: "Fill '" + key + "'!"
                })
                return;
            }
        }
        if (Number(formData.price) < 0) {
            toast({
                variant: "destructive",
                title: "Price should be greater than 0"
            })
            return;
        }
        setData((prev) => ({
            ...prev,
            orders: [
                ...prev.orders,
                {
                    ...formData, id: v4(), status: "placed",
                    date: new Date().toISOString().split('T')[0],
                    deliver_date: (new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]
                }
            ]
        }))
        toast({
            title: "Order placed successfully"
        })
        onClose();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <Dialog open={open} onOpenChange={() => {
            setOpen(prev => !prev)
            setFormData({
                name: "",
                category: "",
                price: "",
            });
        }}>
            <DialogTrigger>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add order</DialogTitle>
                    <DialogDescription className="flex flex-col gap-5 py-6">
                        <Input onChange={handleChange} value={formData["name"]} name="name" placeholder="Customer Name" required />
                        <SelectInput options={data_mock.categories} value={formData.category} onValueChange={category => {
                            setFormData(prev => ({
                                ...prev,
                                category
                            }))
                        }} />
                        <Input onChange={handleChange} value={formData["price"]} name="price" placeholder="Price ($)" type="number" min="0" required />
                    </DialogDescription>
                    <DialogFooter>
                        <Button onClick={addOrder} className="h-8 px-4" type="submit">Add</Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ManageOrderModal;
