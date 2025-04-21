import { IoMdAdd } from "react-icons/io";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export function AddSheet() {
    return (
        <Sheet>
            <SheetTrigger>
                <IoMdAdd size={20} className="bg-[#171717] w-20 h-15 m-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105" />
            </SheetTrigger>
            <SheetContent className=" h-50 bg-[#181818]" >
                <SheetHeader>
                    <SheetTitle className="text-white">Новая ветка</SheetTitle>
                    <SheetDescription className="text-white">
                    
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}