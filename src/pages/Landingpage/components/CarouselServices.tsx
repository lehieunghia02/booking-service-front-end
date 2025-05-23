
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
export default function CarouselServices() {
    return (
        <div className="w-full h-full justify-start items-start">   
            <div className=" flex justify-between items-center w-full h-full">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full h-full "
                >
                    <CarouselContent className="w-full">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 w-full">
                                <div className="p-1">
                                    <Card className="p-0">
                                        <CardContent className="grid relative aspect-square items-center justify-center p-6">
                                            <span className="absolute text-3xl font-semibold">{index + 1}</span>
                                            <img src="/img/DummyImage.png" className="absolute"></img>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}
