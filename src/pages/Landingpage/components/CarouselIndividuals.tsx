
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
export default function CarouselIndividuals() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => setIsFavorite(!isFavorite);

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
        <div className="w-full h-full justify-start items-start">
            <div className="text-3xl font-bold my-8">Popular individuals</div>
            <div className=" flex justify-between items-center w-full h-full">
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
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 w-full">
                                <div className="p-1">
                                    <Card className="p-0">
                                        <CardContent className="grid relative aspect-square items-center justify-center p-6">
                                            <span className="absolute text-3xl font-semibold">{index + 1}</span>
                                            <img src="/img/DummyImage.png" className="absolute"></img>
                                            <div className="rounded-full text-teal-900 bg-teal-100 absolute bottom-2 left-2 p-2 text-sm text-bold">Recommended</div>
                                            <div className="absolute bg-white rounded-full top-2 left-2 flex justify-center items-center space-x-2 px-2">
                                                <Star fill="orange" color="orange" size="1em" />
                                                <div className="">4.8</div>
                                            </div>
                                            <button
                                                onClick={toggleFavorite}
                                                className="group rounded-full hover:scale-110 transition-transform duration-200 absolute top-2 right-2 "
                                            >
                                                <Heart
                                                    color="white"
                                                    className={`w-6 h-6 transition-colors duration-300 ${isFavorite ? 'fill-red-500 text-red-500' : 'fill-gray-400 text-gray-400'} group-hover:text-red-500 group-hover:fill-red-100`}
                                                />
                                            </button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {current > 1 ? <CarouselPrevious /> : ""}
                    {current < count ? <CarouselNext /> : ""}
                </Carousel>
            </div>
        </div>
    )
}
