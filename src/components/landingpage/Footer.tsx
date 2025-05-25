import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { motion } from "motion/react";

const containerVariants = {
    hidden: {},
    show: {},
};

const childVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


export default function Footer() {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className='w-dvw h-24 flex justify-between items-center md:p-20 lg:p-40 p-10 md:flex-row flex-col lg:space-y-0 space-y-2 lg:py-10'>
            <motion.h2 variants={childVariants} className='text-2xl font-bold'>
                LUMINOVA
            </motion.h2>
            <motion.h3 variants={childVariants}>© Luminova 2022. All rights reserved.</motion.h3>
            <div className="flex justify-center items-center lg:size-40 size-10  lg:space-x-8 space-x-2">
                <motion.div variants={childVariants} className="border-2 rounded-full border-slate-400 p-2">
                    <FaFacebookF />
                </motion.div>
                <motion.div variants={childVariants} className="border-2 rounded-full border-slate-400 p-2">
                    <FaInstagram />
                </motion.div>
                <motion.div variants={childVariants} className="border-2 rounded-full border-slate-400 p-2">
                    <FaTwitter />
                </motion.div>
            </div>
        </motion.div>
    )
}
