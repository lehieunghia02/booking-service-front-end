
import { LoginPopup } from '@/components/landingpage/LoginSignUpPopup'
import { Button } from '../ui/button'


export default function Header() {
    return (
        <>
            <div className='w-dvw h-24 flex justify-between items-center px-24 fixed top-0 z-50'>
                <h2 className='text-3xl font-bold'>LUMINOVA</h2>
                <div className="flex justify-center items-center space-x-4 w-fit h-full ">
                    <Button variant={'ghost'} className='hover:bg-transparent hover:text-black dark:hover:bg-none text-lg p-6 rounded-2xl'>For business</Button>
                    <LoginPopup/>
                </div>
            </div>
        </>
    )
}
