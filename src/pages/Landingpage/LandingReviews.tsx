import CarouselReviews from "./components/CarouselReviews";
import { motion } from "motion/react";

export default function LandingReviews() {
	return (
		<div className="w-dvw h-full flex justify-center items-start flex-col  space-y-24 md:p-20 lg:p-40 p-10 lg:py-10">
			<motion.h2
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
				className="text-6xl font-bold w-2/3  text-balance">Trust professionals to take care of yourself</motion.h2>
			<CarouselReviews />

		</div>
	)
}
