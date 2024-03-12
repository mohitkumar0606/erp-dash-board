import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon, BookA, ChevronRightCircle, Gauge, Menu, PackageIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { useNavigate } from "react-router-dom"
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet"
import { useState } from "react";

const navicons = {
  "dashboard": <Gauge className="inline" size={20} />,
  "products": <PackageIcon className="inline" size={20} />,
  "orders": <BookA className="inline" size={20} />
}

// eslint-disable-next-line react/prop-types
function Sidebar({ currPage }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const Navbar = ({ className }) => {
    return <div className={cn(className, "h-full md:flex flex-col justify-between bg-black text-white",
      open ? " md:w-[18%]" : " md:w-[6%]")}>
      <div>
        {open && <div className="md:p-2">
          <h1 className="text-xl font-bold text-left md:ml-3 w-full">
            ENTNT Corp
          </h1>
        </div>}
        <div className="md:p-2 md:hidden">
          <h1 className="text-xl font-bold text-left md:ml-3 w-full">
            ENTNT Corp
          </h1>
        </div>
        <div className="w-full md:p-5">
          {
            ["dashboard", "products", "orders"].map((item, index) => (
              <div key={index} onClick={() => navigate(`/${item}`)}
                className={cn("w-full my-3 text-left px-2 py-1 transition flex items-center gap-2 capitalize text-sm hover:underline cursor-pointer",
                  open ?
                    (currPage === item ? "text-black bg-white rounded-full" : "text-gray-500") :
                    (currPage === item ? "text-white bg-gray-500 rounded-md" : "text-gray-500"),
                  open ? "md:px-3 md:py-1" : "md:px-2 md:py-1")}>
                {navicons[item]}
                {open && <span>
                  {item}
                </span>}
                <span className="md:hidden">
                  {item}
                </span>
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-11/12 mb-4 hidden md:block">
        <div className="ml-auto w-fit cursor-pointer text-gray-400" onClick={() => { setOpen(state => !state) }}>
          {open ? <ArrowLeftFromLineIcon size={15} /> : <ArrowRightFromLineIcon size={15} />}
        </div>
      </div>
    </div>
  }
  return <>
    <Sheet>
      <SheetContent side="left" className="bg-black">
        <Navbar />
      </SheetContent>
      <SheetTrigger>
        <Button className="w-fit h-fit p-1 md:hidden absolute top-5 left-3 z-10" size="icon" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
    </Sheet>
    <Navbar className="hidden" />
  </>

}

export default Sidebar