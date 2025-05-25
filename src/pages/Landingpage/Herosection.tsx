
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import SearchSalon from "./components/SearchSalon";
export default function Herosection() {
    return (
        <>
            <div className="w-dvw h-full flex justify-center items-center flex-col md:p-20 lg:p-40 p-10 lg:space-y-16 space-y-12 lg:pb-10 ">
                <div className="absolute w-full h-full -z-1 top-0" style={{backgroundColor: "#e5e5f7", opacity: 0.2, backgroundImage: 'radial-gradient(circle at center center, #45f79c, #e5e5f7), repeating-radial-gradient(circle at center center, #45f79c, #45f79c, 36px, transparent 72px, transparent 36px)', backgroundBlendMode: 'multiply'}}></div>
                <div className="h-full w-full flex justify-center items-center">
                    <div className="h-full w-full flex justify-center items-start flex-col lg:space-y-16 space-y-12 m-20">
                        <h1 className="font-bold lg:text-7xl text-6xl ">
                            Find the best beauty services in your city
                        </h1>
                        <h3 className="text-base flex justify-center items-center"> ~ More than <div className="text-green-500"> &nbsp;255&nbsp; </div> salons and <div className="text-green-500"> &nbsp;4,432&nbsp;</div> individuals </h3>
                    </div>
                    <img src="/img/herosection.png" className="xl:flex hidden lg:w-2/5 h-full object-cover rounded-2xl" alt="Hero Section Image" />
                </div>
                <div className="bg-white p-4 rounded-xl md:h-20 w-full h-full">
                    <form className="w-full h-full flex justify-center items-center">
                        <div className="w-full h-full flex justify-center items-center md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-4">
                            <div className="w-full h-full flex justify-center items-center space-x-4">
                                <div className="relative h-full w-2/3">
                                    <Search className="absolute left-4 top-1/2 -translate-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Search for a salon, individual or service" className="pl-8 w-full h-full" />
                                </div>
                                <div className="lg:h-full lg:w-1/3 h-full ">
                                    <SearchSalon />
                                </div>
                            </div>
                            <Button className="md:h-full md:w-1/6 h-full w-full  bg-teal-800" type="submit">Search</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
