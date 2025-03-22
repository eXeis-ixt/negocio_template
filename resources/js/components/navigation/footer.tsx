import Icons from "@/components/global/icons"
import { Link } from "@inertiajs/react"
import { Heart } from 'lucide-react'
import AppLogoIcon from "../app-logo-icon"

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-gray-400  pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">

            <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-red-600 w-72 h-72 rounded-full -z-10 blur-[100rem] opacity-30"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                    <div className="flex items-start">
                        {/* <Icons.logo className="w-7 h-7" /> */}
                        <AppLogoIcon />
                    </div>
                    <p className="text-muted mt-4 text-2xl text-start">
                        Negocio 2.0
                    </p>
                    <span className="mt-4 text-neutral-200 text-sm flex items-center">
                        <span>Made in <a href="https://facebook.com/adons.org" target="_blank"> Adons</a> with</span>
                        <Heart className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
                    </span>
                </div>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">

                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div className="">
                            <h3 className="text-base font-medium text-white">
                                Resources
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                            <li className="mt-2">
                                    <a href="https://facebook.com/communic.ibaju/" target="_blank" className="hover:text-foreground transition-all duration-300">
                                        Facebook
                                    </a>
                                </li>

                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                    &copy; {new Date().getFullYear()} Communic IBAJU. All rights reserved.
                </p>
            </div>

        </footer>
    )
}

export default Footer
