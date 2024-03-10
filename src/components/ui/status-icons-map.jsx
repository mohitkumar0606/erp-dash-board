import { Ban, CircleDotDashed, PackageCheck } from "lucide-react";

const status_icons_map = {
    "placed": <CircleDotDashed className="text-gray-400" size={15} />,
    "fulfilled": <PackageCheck className="text-green-400" size={15} />,
    "rejected": <Ban className="text-red-600" size={15} />
}

export default status_icons_map;