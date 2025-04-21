import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { IoMdAdd } from "react-icons/io"

export default function Modal() {

    return (
        <div>
            <Dialog>
                <DialogTrigger>
                <IoMdAdd className="bg-[#171717] hover:text-white p-1 w-15 h-10 rounded-lg text-[#8d7b7b]" />
                </DialogTrigger>
                <DialogContent className="bg-[#181818]">
                    <DialogHeader className="text-white">
                        <DialogTitle className="text-white">Новая ветка</DialogTitle>
                        <DialogDescription>
                    
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>

    )
}
