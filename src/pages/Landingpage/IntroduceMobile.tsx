import { Button } from '@/components/ui/button'
import { FaApple, FaGooglePlay } from "react-icons/fa";


export default function IntroduceMobile() {
    return (
        <div className='w-dvw h-full flex justify-center items-center p-40'>
            <div className="w-full h-full flex justify-center items-start bg-teal-900 rounded-2xl">
                <div className="flex justify-center items-start w-full h-full flex-col space-y-8 p-24">
                    <h3 className='text-3xl text-teal-600 font-bold'>LUMINOVA</h3>
                    <h2 className='text-7xl font-bold text-white'>Anywhere, anytime</h2>
                    <p className='text-white'>Download our application and book our services anywhere and anytime. Available on Sweden. Coming soon worldwide.</p>
                    <div className="flex justify-start items-start w-full h-full space-x-4">
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
