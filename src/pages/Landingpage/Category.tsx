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
        <div className="w-dvw h-full md:p-20 lg:p-40 p-10 flex justify-center items-center lg:py-10">
            <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-4 w-fit gap-5">
                {listDataDemo.map(item => (
                    <div className="">
                        <WobbleCard containerClassName={cn(item.backgroundColor,"col-span-1 lg:min-h-[100px] min-h-[100px] max-h-[250px] max-w-[250px] lg:max-w-full lg:max-h-full aspect-square flex justify-start items-start flex-col ")}>
                            <h2 className="max-w-1/2 text-left text-balance text-lg md:text-3xl lg:text-base xl:text-3xl font-semibold tracking-[-0.015em] text-slate-950 p-0 ">
                                {item.serviceName}
                            </h2>
                        </WobbleCard>
                    </div>
                ))}
            </div>
        </div>
    );
}
