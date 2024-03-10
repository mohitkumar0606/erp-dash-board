import { BookA, Gauge, Menu, PackageIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { useNavigate } from "react-router-dom"
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet"

const navicons = {
  "dashboard": <Gauge className="inline mb-1 mr-2" />,
  "products": <PackageIcon className="inline mb-1 mr-2" />,
  "orders": <BookA className="inline mb-1 mr-2" />
}

// eslint-disable-next-line react/prop-types
function Sidebar({ currPage }) {
  const navigate = useNavigate();

  const Navbar = ({ className }) => <div className={cn(className, "h-full md:block md:w-[20%] bg-black text-white")}>
    <div className="md:p-2">
      <h1 className="text-xl font-bold text-left md:ml-3 w-full">
        ENTNT Corp
      </h1>
    </div>
    <div className="w-full md:p-5">
      {
        ["dashboard", "products", "orders"].map((item, index) => (
          <div key={index} onClick={() => navigate(`/${item}`)} className={cn("w-full my-3 text-left px-2 md:px-5 py-1 md:py-3 transition rounded-full capitalize text-lg hover:underline cursor-pointer", currPage === item ? "text-black bg-white" : "text-gray-500")}>
            {navicons[item]}
            <span>
              {item}
            </span>
          </div>
        ))
      }
    </div>
  </div>
  return <>
    <Sheet>
      <SheetContent side="left" className="bg-black">
        <Navbar />
      </SheetContent>
      <SheetTrigger>
        <Button className="w-fit h-fit p-1 md:hidden absolute top-5 left-3" size="icon" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
    </Sheet>
    <Navbar className="hidden" />
  </>

}

export default Sidebar