import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='w-dvw h-24 flex justify-between items-center md:p-20 lg:p-40 p-10 md:flex-row flex-col lg:space-y-0 space-y-2 lg:py-10'>
            <h2 className='text-2xl font-bold'>
                LUMINOVA
            </h2>
            <h3>© Luminova 2022. All rights reserved.</h3>
            <div className="flex justify-center items-center lg:size-40 size-10  lg:space-x-8 space-x-2">
                <div className="border-2 rounded-full border-slate-400 p-2">
                    <FaFacebookF />
                </div>
                <div className="border-2 rounded-full border-slate-400 p-2">
                    <FaInstagram />
                </div>
                <div className="border-2 rounded-full border-slate-400 p-2">
                    <FaTwitter />
                </div>
            </div>
        </div>
    )
}
