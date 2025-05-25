
import { LoginPopup } from '@/components/landingpage/LoginSignUpPopup'
import { Button } from '../ui/button'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./resizable-navbar";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <>
            <div className="relative w-full ">
                <Navbar className='focus:outline-none'>
                    {/* Desktop Navigation */}
                    <NavBody>
                        <NavbarLogo />
                        <div className="flex items-center gap-4">
                            <NavbarButton className='text-xl' variant="secondary">For Business</NavbarButton>
                            <LoginPopup />
                        </div>
                    </NavBody>

                    {/* Mobile Navigation */}
                    <MobileNav>
                        <MobileNavHeader>
                            <NavbarLogo />
                            <MobileNavToggle
                                isOpen={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            />
                        </MobileNavHeader>

                        <MobileNavMenu
                            isOpen={isMobileMenuOpen}
                            onClose={() => setIsMobileMenuOpen(false)}
                        >
                            <div className="flex w-full flex-col gap-4">
                                <LoginPopup />
                                <NavbarButton
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    variant="primary"
                                    className="w-full"
                                >
                                    For Business
                                </NavbarButton>
                            </div>
                        </MobileNavMenu>
                    </MobileNav>
                </Navbar>

                {/* Navbar */}
            </div>
        </>
    )
}
