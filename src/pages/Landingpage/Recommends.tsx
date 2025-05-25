import CarouselBussiness from "./components/CarouselBusiness"
import CarouselIndividuals from "./components/CarouselIndividuals"




export default function Recommends() {
  return (
    <div className="w-dvw h-full lg:px-40 flex justify-start items-start flex-col lg:space md:p-20 lg:p-40 p-10 lg:py-10">
      <h2 className="text-5xl font-bold">Luminova recommends</h2>
      <CarouselBussiness />
      <CarouselIndividuals />
    </div>
  )
}
