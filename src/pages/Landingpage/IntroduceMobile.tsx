import { Button } from '@/components/ui/button'
import { FaApple, FaGooglePlay } from "react-icons/fa";
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



export default function IntroduceMobile() {
    return (
        <div className='w-dvw h-full flex justify-center items-center md:p-20 lg:p-40 p-10 lg:py-10'>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="w-full h-full flex justify-center items-start bg-teal-900 rounded-2xl lg:flex-row flex-col">
                <div className="flex justify-center lg:items-start items-center w-full h-full flex-col space-y-8 p-24">
                    <motion.h3 variants={childVariants} className='lg:text-3xl text-teal-600 font-bold text-lg'>LUMINOVA</motion.h3>
                    <motion.h2 variants={childVariants} className='lg:text-7xl font-bold text-white text-3xl'>Anywhere, anytime</motion.h2>
                    <motion.p variants={childVariants} className='text-white lg:text-base text-sm'>Download our application and book our services anywhere and anytime. Available on Sweden. Coming soon worldwide.</motion.p>
                    <motion.div variants={childVariants} className="flex lg:justify-start lg:items-start justify-center items-center w-full h-full lg:space-x-4 lg:flex-row flex-col space-y-4">
                        <Button >
                            <FaApple />
                            Download App Store
                        </Button>
                        <Button>
                            <FaGooglePlay />
                            Download Google Play
                        </Button>
                    </motion.div>
                </div>
                <div className="w-full h-full flex justify-center items-center object-cover lg:p-20 p-4">
                    <motion.img
                        initial={{ opacity: 0, y: 300 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }}
                        src="/img/Phonewithapp.png" className='w-full h-full xl:w-1/2 xl:h-1/2 object-cover ' />
                </div>
            </motion.div>
        </div>
    )
}
