import { use } from "react";
import CarouselServices from "./components/CarouselServices";
import { useLocationFromIP } from "@/hooks/useLocationFromIP";



export default function PopularServices() {
	const location = useLocationFromIP();
	return (
		<div className="w-dvw h-full flex justify-start items-start flex-col space-y-8 md:p-20 lg:p-40 p-10 ">
			<div className="flex justify-center items-center flex-row">
				<h2 className="lg:text-5xl text-3xl font-bold">Popular services in
				</h2>
				<h2 className="text-teal-800 lg:text-5xl text-3xl font-bold lg:mx-4	mx-2">
					{location?.city || "your city"}
				</h2>
			</div>
			<CarouselServices />
		</div>
	)
}
