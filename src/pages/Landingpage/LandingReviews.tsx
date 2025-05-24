import CarouselReviews from "./components/CarouselReviews";

export default function LandingReviews() {
	return (
		<div className="w-dvw h-full flex justify-center items-start flex-col  space-y-24 md:p-20 lg:p-40 p-10">
			<h2 className="text-6xl font-bold w-2/3  text-balance">Trust professionals to take care of yourself</h2>
			<CarouselReviews/>
			
		</div>
	)
}
