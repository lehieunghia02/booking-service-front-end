import { Button } from '@/components/ui/button'
import { FaApple, FaGooglePlay } from "react-icons/fa";


export default function IntroduceMobile() {
    return (
        <div className='w-dvw h-full flex justify-center items-center md:p-20 lg:p-40 p-10 lg:py-10'>
            <div className="w-full h-full flex justify-center items-start bg-teal-900 rounded-2xl lg:flex-row flex-col">
                <div className="flex justify-center lg:items-start items-center w-full h-full flex-col space-y-8 p-24">
                    <h3 className='lg:text-3xl text-teal-600 font-bold text-lg'>LUMINOVA</h3>
                    <h2 className='lg:text-7xl font-bold text-white text-3xl'>Anywhere, anytime</h2>
                    <p className='text-white lg:text-base text-sm'>Download our application and book our services anywhere and anytime. Available on Sweden. Coming soon worldwide.</p>
                    <div className="flex lg:justify-start lg:items-start justify-center items-center w-full h-full lg:space-x-4 lg:flex-row flex-col space-y-4">
                        <Button >
                            <FaApple />
                            Download App Store
                        </Button>
                        <Button>
                            <FaGooglePlay />
                            Download Google Play
                        </Button>
                    </div>
                </div>
                <div className="w-full h-full  object-cover">
                    <img src="/img/Phone.png" className='w-full h-full object-cover ' />
                </div>
            </div>
        </div>
    )
}
