import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./dialog"

import status_icons_map from "./status-icons-map"

export default function OrderCard({ order, handleChange }) {
    return (
        <Dialog onOpenChange={handleChange} open={order}>
            <DialogContent className="sm:max-w-[425px]">
                <span className="font-semibold w-fit text-sm bg-blue-400 text-white mx-auto md:mx-0 px-2 rounded-full"> {order?.category}</span>
                <DialogHeader className="border-b-2 pb-3">
                    <DialogTitle>
                        Order Placed on {order?.date}
                    </DialogTitle>
                    <DialogDescription>
                        <div className="flex items-center justify-center md:justify-start gap-1">
                            <span className="font-semibold">Status {order?.status}</span>
                            {status_icons_map[order?.status]}
                        </div>
                        Order # {order?.id}
                    </DialogDescription>
                </DialogHeader>
                <DialogDescription>
                    <h3 className="font-semibold text-black text-center md:text-start">Summary</h3>
                    <h3 className="text-gray-400 text-center md:text-start">Placed by {order?.name}</h3>
                    <h3 className="font-bold text-center md:text-start">Total price ${order?.price}</h3>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}
