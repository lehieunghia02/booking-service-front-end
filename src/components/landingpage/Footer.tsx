import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='w-dvw h-24 flex justify-between items-center p-40'>
            <h2 className='text-2xl font-bold'>
                LUMINOVA
            </h2>
            <h3>© Luminova 2022. All rights reserved.</h3>
            <div className="flex justify-center items-center size-40  space-x-8">
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
