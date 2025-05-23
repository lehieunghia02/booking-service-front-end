
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import SearchSalon from "./components/SearchSalon";
export default function Herosection() {
    return (
        <>
            <div className="w-dvw h-dvh flex justify-center items-center flex-col ">
                <div className="h-1/2 w-1/2 flex justify-center items-start flex-col p-32 pr-16 space-y-16 ">
                    <h1 className="font-bold text-7xl">
                        Find the best beauty services in your city
                    </h1>
                    <h3 className="text-base flex justify-center items-center"> ~ More than <div className="text-green-500"> &nbsp;255&nbsp; </div> salons and <div className="text-green-500"> &nbsp;4,432&nbsp;</div> individuals </h3>
                </div>
                <div className="bg-white p-2 rounded-xl w-2/3 h-24 ">
                    <form className="w-full h-full flex justify-center items-center">
                        <div className="w-full h-full flex justify-between items-center space-x-2">
                            <div className="relative h-full w-2/3">
                                <Search className="absolute left-4 top-1/2 -translate-1/2 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Search for a salon, individual or service" className="pl-8 w-full h-full" />
                            </div>
                            <div className="h-full w-1/4">
                                <SearchSalon />
                            </div>
                            <Button className="h-full w-1/6 bg-teal-800" type="submit">Search</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
