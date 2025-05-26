import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Heart, Star } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "motion/react";
import { getBusinessPopular } from "@/services/authApi"

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1, // hiệu ứng delay giữa các phần tử con
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};



export default function CarouselBussiness() {

    const [popularBusiness, setPopularBusiness] = useState<any[]>([])

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const fetchPopularBusiness = async () => {
            try {
                const { status, message, data } = await getBusinessPopular(sessionStorage.getItem('accessToken'));
                setPopularBusiness(data);
            }
            catch (error) {
                console.error('Lỗi khi fetch categories:', error);
            }
        }
        fetchPopularBusiness();

        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    function handleFavoriteClick() {

        setIsFavorite(!isFavorite);
    }
    return (
        <div className="w-full h-full justify-start items-start">
            <div className="text-3xl font-bold my-4">Popular salons</div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className=" flex justify-between items-center w-full h-full">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full h-full "
                    setApi={setApi}
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                >
                    <CarouselContent className="w-full">
                        {popularBusiness.map((item, index) => (
                            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 lg:w-full ">
                                <motion.div variants={childVariants} className="p-1">
                                    <Card className="p-0">
                                        <CardContent className="grid relative aspect-square items-center justify-center object-cover overflow-hidden px-0">
                                            <img src={item.images} className=" aspect-square object-cover w-full h-full rounded-2xl"></img>
                                            <div className="rounded-full text-teal-900 bg-teal-100 absolute bottom-2 left-2 p-2 text-sm text-bold">Recommended</div>
                                            <div className="absolute bg-white rounded-full top-2 left-2 flex justify-center items-center space-x-2 px-2">
                                                <Star fill="orange" color="orange" size="1em" />
                                                <div className="">{item.avg_rating}</div>
                                            </div>
                                            <button
                                                onClick={() => handleFavoriteClick()}
                                                className="group rounded-full hover:scale-110 transition-transform duration-200 absolute top-2 right-2 "
                                            >
                                                <Heart
                                                    color="white"
                                                    className={`w-6 h-6 transition-colors duration-300 ${isFavorite ? 'fill-red-500 text-red-500' : 'fill-gray-400 text-gray-400'} group-hover:text-red-500 group-hover:fill-red-100`}
                                                />
                                            </button>
                                        </CardContent>
                                    </Card>
                                    <div className="">
                                        <h3 className="font-bold text-lg">{item.name}</h3>
                                        <div className="flex">
                                            <p>{item.categories.name}</p>
                                            <p className="mx-2">●</p>
                                            <p>{item.address}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {current > 1 ? <CarouselPrevious /> : ""}
                    {current < count ? <CarouselNext /> : ""}
                </Carousel>
            </motion.div>
        </div>
    )
}
