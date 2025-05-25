import CarouselServices from "./components/CarouselServices";


export default function PopularServices() {
  return (
    <div className="w-dvw h-full flex justify-start items-start flex-col space-y-8 md:p-20 lg:p-40 p-10 ">
        <h2 className="lg:text-5xl text-3xl font-bold">Popular services in</h2>
        <CarouselServices/>
    </div>
  )
}
