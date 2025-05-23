import { WobbleCard } from "@/components/landingpage/wobble-card";
import { cn } from "@/lib/utils";


const listDataDemo = [
    {
        serviceValue: "manicure",
        serviceName: "Manicure",
        serviceDes: "Manicure Description",
        backgroundColor: "bg-sky-300"
    },
    {
        serviceValue: "hair",
        serviceName: "Hair",
        serviceDes: "Hair Description",
        backgroundColor: "bg-emerald-300"
    },
    {
        serviceValue: "face",
        serviceName: "Face",
        serviceDes: "Face Description",
        backgroundColor: "bg-fuchsia-300"
    },
    {
        serviceValue: "formen",
        serviceName: "For Men",
        serviceDes: "For Men Description",
        backgroundColor: "bg-rose-300"
    },
    {
        serviceValue: "eyelashes",
        serviceName: "Eyelashes",
        serviceDes: "Eyelashes Description",
        backgroundColor: "bg-violet-300"
    },
    {
        serviceValue: "body",
        serviceName: "Body",
        serviceDes: "Body Description",
        backgroundColor: "bg-lime-300"
    },
    {
        serviceValue: "hairremoval",
        serviceName: "Hair Removal",
        serviceDes: "Hair Removal Description",
        backgroundColor: "bg-orange-300"
    },
    {
        serviceValue: "piercingandtattoo",
        serviceName: "Piercing and Tattoo",
        serviceDes: "Piercing and Tattoo Description",
        backgroundColor: "bg-sky-300"
    },
    {
        serviceValue: "massageandspa",
        serviceName: "Massage and Spa",
        serviceDes: "Massage and Spa Description",
        backgroundColor: "bg-emerald-300"
    },
    {
        serviceValue: "nailcare",
        serviceName: "Nail Care",
        serviceDes: "Nail Care Description",
        backgroundColor: "bg-red-300"
    },
]
export default function Category() {
    return (
        <div className="w-dvw h-full">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto w-full m-40 p-20 pt-0">
                {listDataDemo.map(item => (
                    <div className="">
                        <WobbleCard containerClassName={cn(item.backgroundColor,"col-span-1 min-h-[200px] aspect-square flex justify-start items-start flex-col ")}>
                            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-950">
                                {item.serviceName}
                            </h2>
                        </WobbleCard>
                    </div>
                ))}
            </div>
        </div>
    );
}
