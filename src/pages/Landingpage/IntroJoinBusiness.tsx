import { Button } from "@/components/ui/button";
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

export default function IntroJoinBusiness() {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.1 }}
			className='w-dvw h-full  flex justify-center items-center lg:space-x-24 space-x-8 md:p-20 lg:p-40 p-10 md:flex-row flex-col space-y-8 lg:py-10 py-0'>
			<motion.img variants={childVariants} src="/img/adv_cosmetics.jpg" className="lg:size-150 size-75  object-cover rounded-2xl"></motion.img>
			<motion.div variants={childVariants} className="w-full h-full space-y-8">
				<motion.h3 variants={childVariants} className="xl:text-3xl text-xl text-teal-700">For individuals and salons</motion.h3>
				<motion.h2 variants={childVariants} className="xl:text-6xl text-4xl font-bold">Own a personal business or a side-hustle?</motion.h2>
				<motion.p variants={childVariants} className="text-base">Experience all the advantages of a modern beauty platform. Organize your daily work and find new clients. And you can also manage your business in one program and receive and clear reports on your work. </motion.p>
				<Button className="bg-teal-950 h-12" onClick={() => {
					window.location.href = '/login';
				}}>Join now</Button>
			</motion.div>
		</motion.div>
	)
}
