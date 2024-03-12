import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { toast } from '../ui/use-toast';
import useAppContext from '../../context/use-app-context';
import { v4 } from 'uuid';

const ManageProductModal = ({ children, edit = false, data = null }) => {
    const [open, setOpen] = useState(false);
    const { setData } = useAppContext();

    const [formData, setFormData] = useState(edit ? data : {
        name: "",
        category: "",
        price: "",
        stock_quantity: ""
    })

    const onClose = () => {
        setFormData({
            name: "",
            category: "",
            price: "",
            stock_quantity: ""
        });
        setOpen(false)
    }

    const manageProduct = (e) => {
        e.preventDefault();
        for (let key of Object.keys(formData)) {
            if (!String(formData[key]).length) {
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
        if (Number(formData.stock_quantity) < 0) {
            toast({
                variant: "destructive",
                title: "Quantity should be greater than 0"
            })
            return;
        }
        setData((prev) => ({
            ...prev,
            products: edit ?
                prev?.products?.map((item) => (item.id === formData.id ? formData : item))
                : [
                    ...prev.products,
                    { ...formData, id: v4(), date: new Date().toISOString().split('T')[0] }
                ]
        }))
        toast({
            title: edit ? "Product edited" : "Product added"
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
        <Dialog open={open} onOpenChange={() => setOpen(prev => !prev)}>
            <DialogTrigger>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{edit ? <span>Edit
                        <br />
                        <br />
                        <code className='text-sm bg-gray-400 px-3 text-white rounded py-1 mt-3'>
                            product-id : {formData?.id}
                        </code></span> : "Add New Product"}</DialogTitle>
                    <DialogDescription className="flex flex-col gap-5 py-6">
                        <Input onChange={handleChange} value={formData["name"]} name="name" placeholder="Product Name" required />
                        <Input onChange={handleChange} value={formData["category"]} name="category" placeholder="Category" required />
                        <Input onChange={handleChange} value={formData["price"]} name="price" placeholder="Price ($)" type="number" min="0" required />
                        <Input onChange={handleChange} value={formData["stock_quantity"]} name="stock_quantity" placeholder="Quantity" type="number" min="0" required />
                    </DialogDescription>
                    <DialogFooter>
                        <Button onClick={manageProduct} className="h-8 px-4" type="submit">Add</Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ManageProductModal;
