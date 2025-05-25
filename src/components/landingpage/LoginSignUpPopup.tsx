
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/hooks/useAuth"
import { signupApi } from "@/services/authApi"
import { LoaderCircle } from 'lucide-react';
import { useState } from "react"
import { Checkbox } from "../ui/checkbox"
import { NavbarButton } from "./resizable-navbar"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

import { useNavigate } from 'react-router-dom';


export function LoginPopup() {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const { login, logout } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoginPopup, setIsLoginPopup] = useState(true)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    // const [error, setError] = useState('');
    const sessionUsername = sessionStorage.getItem('username');
    const sessionImage = sessionStorage.getItem('image');


    async function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            setIsLoading(true)
            await login(email, password);
            setOpen(false);
            navigate('/dashboard');

        } catch {
            alert('Đăng nhập thất bại');
        }
        finally {
            setIsLoading(false)
        }
    }
    async function handleSignupSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();
        try {
            const { refreshToken } = await signupApi(email, password);
            sessionStorage.setItem('refreshToken', refreshToken);
            await login(email, password);
        } catch (err: any) {
            // setError(err.message || 'Signup failed');
        }

        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }


    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    {sessionUsername ?
                        <>
                            <div className="w-fit h-fit bg-white px-3 flex justify-center items-center rounded-full " onClick={() => logout()}>
                                <Avatar className="size-14 rounded-full grayscale bg-white p-1" >
                                    <AvatarImage src={sessionImage} alt={sessionUsername} />
                                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium text-lg">{sessionUsername}</span>
                                </div>
                            </div>
                        </>
                        : <NavbarButton variant="primary" type="submit" className="h-full lg:text-xl text-base">Login</NavbarButton>
                    }
                </DialogTrigger>
                <DialogContent className="lg:w-fit w-full h-fit lg:m-4 m-0 border-2 flex justify-center items-center">
                    <div className="flex flex-col w-full">
                        {isLoginPopup ?
                            <Card className="overflow-hidden p-0 border-0 shadow-none" hidden={!isLoginPopup}>
                                <CardContent className="grid p-0">
                                    <form onSubmit={handleLoginSubmit} className="p-1 md:p-2">
                                        <div className="flex flex-col gap-6">
                                            <div className="flex flex-col items-center text-center">
                                                <h1 className="lg:text-2xl text-lg font-bold">Welcome back</h1>
                                                <p className="text-muted-foreground text-balance lg:text-base text-sm">
                                                    Enter your email below to login to your account
                                                </p>
                                            </div>
                                            <div className="grid gap-3">
                                                <Label className="" htmlFor="email">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    placeholder="example@email.com"
                                                    type="tẽt"
                                                    autoCapitalize="none"
                                                    autoComplete="email"
                                                    autoCorrect="off"
                                                    disabled={isLoading}
                                                    value={email}
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="grid gap-3">
                                                <div className="flex items-center">
                                                    <Label htmlFor="password">Password</Label>
                                                    <a
                                                        href="#"
                                                        className="ml-auto text-sm underline-offset-2 hover:underline"
                                                    >
                                                        Forgot your password?
                                                    </a>
                                                </div>
                                                <Input id="password" placeholder="Password" type="password" required onChange={e => setPassword(e.target.value)} />
                                            </div>
                                            <Button type="submit" className="w-full" disabled={isLoading}>
                                                {isLoading && (
                                                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                                )}
                                                Login
                                            </Button>
                                            <div className="text-center text-sm">
                                                Don&apos;t have an account?{" "}
                                                <Button type="button" variant={"link"} className="p-0" onClick={() => { setIsLoginPopup(!isLoginPopup) }}>
                                                    Sign up
                                                </Button>
                                            </div>

                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                            :
                            <Card className="overflow-hidden p-0 border-0 shadow-none" hidden={isLoginPopup}>
                                <CardContent className="grid p-0">
                                    <form onSubmit={handleSignupSubmit} className="p-1 md:p-2">
                                        <div className="flex flex-col lg:gap-6 gap-3">
                                            <div className="flex flex-col items-center text-center">
                                                <h1 className="text-2xl font-bold">Create account</h1>
                                                <p className="text-muted-foreground text-balance">
                                                    Enter your information below to create your account
                                                </p>
                                            </div>
                                            <div className="grid lg:gap-3 gap-1">
                                                <div className="flex items-center">
                                                    <Label htmlFor="username">Username</Label>
                                                </div>
                                                <Input id="username" placeholder="Username" type="text" onChange={e => setPassword(e.target.value)} />
                                            </div>
                                            <div className="grid lg:gap-3 gap-1">
                                                <Label className="" htmlFor="email">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    placeholder="example@email.com"
                                                    type="tẽt"
                                                    autoCapitalize="none"
                                                    autoComplete="email"
                                                    autoCorrect="off"
                                                    disabled={isLoading}
                                                    value={email}
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="grid lg:gap-3 gap-1">
                                                <div className="flex items-center">
                                                    <Label htmlFor="password">Password</Label>
                                                </div>
                                                <Input id="password" placeholder="Password" type="password" required onChange={e => setPassword(e.target.value)} />
                                            </div>
                                            <div className="grid lg:gap-3 gap-1">
                                                <div className="flex items-center">
                                                    <Label htmlFor="password">Confirm Password</Label>
                                                </div>
                                                <Input id="password" placeholder="Password" type="password" required onChange={e => setPassword(e.target.value)} />
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="terms" />
                                                <label
                                                    htmlFor="terms"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Accept terms and conditions
                                                </label>
                                            </div>
                                            <Button type="submit" className="w-full" disabled={isLoading}>
                                                {isLoading && (
                                                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                                )}
                                                Sign up
                                            </Button>
                                            <div className="text-center text-sm">
                                                Already have an account?{" "}
                                                <Button type="button" variant={"link"} className="p-0" onClick={() => setIsLoginPopup(!isLoginPopup)}>
                                                    Sign in
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>}
                        <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                            By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                            and <a href="#">Privacy Policy</a>.
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
