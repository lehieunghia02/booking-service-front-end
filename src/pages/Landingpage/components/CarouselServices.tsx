
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { motion } from "motion/react";

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



export default function CarouselServices() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

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
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 w-full">
                                <motion.div variants={childVariants} className="p-1">
                                    <Card className="p-0">
                                        <CardContent className="grid relative aspect-square items-center justify-center p-6">
                                            <span className="absolute text-3xl font-semibold">{index + 1}</span>
                                            <img src="/img/DummyImage.png" className="absolute"></img>
                                        </CardContent>
                                    </Card>
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
