import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link";
import Language from "./Language";
import {HiMenuAlt3, HiX} from "react-icons/hi"


export default function Navbar({ lang }) {
    const [navbar, setNavbar] = useState(false)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [scroll, setScroll] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
        window.onscroll = function () {
            const header = document.getElementById("header")
            const fixedNav = header.offsetTop + 200

            if (window.pageYOffset > fixedNav) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }

    }, [])

    if(!mounted) return null

    return (
        <div className="w-full">
            <header className={`w-full z-30 ${scroll ? navbar ? "transition-transform fixed -top-20 translate-y-20 ease-in-out duration-500" : "navbar-fixed transition-transform fixed -top-20 translate-y-20 ease-in-out duration-500" : "absolute"}`} id="header">
                <div className="flex items-center justify-between border-b border-gray-300 border-opacity-25 px-5">
                    {
                        scroll ? 
                        <Image src={"/images/zzf.png"} width={70} height={20}/>
                        :
                        <Image src={"/images/zzf-white.png"} width={70} height={20}/>
                    }

                    <div className="md:flex items-center gap-10 hidden">
                        {/* <Link href={"/"} legacyBehavior>
                            <a className={`${router.asPath == "/" ? `${scroll ? "text-black":"text-white"} border-b-2 border-blue-500`:`${scroll ? "text-gray-500 dark:text-gray-300 hover:text-black":"text-gray-300 hover:text-white"}`} transition-all duration-300 ease-in-out px-3 uppercase text-sm font-bold h-full py-8`}>
                                HOME
                            </a>
                        </Link>
                        <Link href={"/about"} legacyBehavior>
                            <a className={`${router.asPath == "/about" ? `${scroll ? "text-black":"text-white"} border-b-2 border-blue-500`:`${scroll ? "text-gray-500 dark:text-gray-300 hover:text-black":"text-gray-300 hover:text-white"}`} transition-colors duration-300 ease-in-out px-3 uppercase text-sm font-bold h-full py-8`}>
                                About
                            </a>
                        </Link>
                        <Link href={"/about"} legacyBehavior>
                            <a className={`${router.asPath == "/about" ? `${scroll ? "text-black":"text-white"} border-b-2 border-blue-500`:`${scroll ? "text-gray-500 dark:text-gray-300 hover:text-black":"text-gray-300 hover:text-white"}`} transition-colors duration-300 ease-in-out px-3 uppercase text-sm font-bold h-full py-8`}>
                                Skills
                            </a>
                        </Link>
                        <Link href={"/about"} legacyBehavior>
                            <a className={`${router.asPath == "/about" ? `${scroll ? "text-black":"text-white"} border-b-2 border-blue-500`:`${scroll ? "text-gray-500 dark:text-gray-300 hover:text-black":"text-gray-300 hover:text-white"}`} transition-colors duration-300 ease-in-out px-3 uppercase text-sm font-bold h-full py-8`}>
                                Projects
                            </a>
                        </Link>
                        <Link href={"/about"} legacyBehavior>
                            <a className={`${router.asPath == "/about" ? `${scroll ? "text-black":"text-white"} border-b-2 border-blue-500`:`${scroll ? "text-gray-500 dark:text-gray-300 hover:text-black":"text-gray-300 hover:text-white"}`} transition-colors duration-300 ease-in-out px-3 uppercase text-sm font-bold h-full py-8`}>
                                contact
                            </a>
                        </Link> */}
                        <a href="#home" className={`${scroll ? "text-gray-500 dark:text-gray-300 hover:text-black":"text-gray-300 hover:text-white"} cursor-pointer transition-colors duration-300 ease-in-out px-3 uppercase text-sm font-bold h-full py-8`}>
                            Home
                        </a>
                        <a href="#aboutme" className={`${scroll ? "text-gray-500 dark:text-gray-300 hover:text-black":"text-gray-300 hover:text-white"} cursor-pointer transition-colors duration-300 ease-in-out px-3 uppercase text-sm font-bold h-full py-8`}>
                            About
                        </a>
                        <a href="#skills" className={`${scroll ? "text-gray-500 dark:text-gray-300 hover:text-black":"text-gray-300 hover:text-white"} cursor-pointer transition-colors duration-300 ease-in-out px-3 uppercase text-sm font-bold h-full py-8`}>
                            Skills
                        </a>
                        <a href="#projects" className={`${scroll ? "text-gray-500 dark:text-gray-300 hover:text-black":"text-gray-300 hover:text-white"} cursor-pointer transition-colors duration-300 ease-in-out px-3 uppercase text-sm font-bold h-full py-8`}>
                            Projects
                        </a>
                        <a href="#contact" className={`${scroll ? "text-gray-500 dark:text-gray-300 hover:text-black":"text-gray-300 hover:text-white"} cursor-pointer transition-colors duration-300 ease-in-out px-3 uppercase text-sm font-bold h-full py-8`}>
                            contact
                        </a>
                    </div>
                    
                    <div className="md:flex items-center gap-10 hidden">
                        <div className="">
                            <label class="switch">
                                <input type="checkbox" onClick={() => setTheme(theme == "light" ? "dark":"light")}/>
                                <span class="slider"></span>
                            </label>
                        </div>
                        <Language />
                    </div>
                    

                    {/* Mobile */}
                    <button className="py-8 md:hidden" onClick={() => setNavbar(!navbar)}>
                        <HiMenuAlt3 className="text-3xl"/>
                    </button>

                    <div className={`${navbar ? "visible":"invisible"} fixed bg-black bg-opacity-50 w-full top-0 left-0 h-screen p-5`}>
                        <div className="bg-white w-full z-20 p-5 rounded-lg">
                            <div className="flex items-center justify-between">
                                <h1 className="font-bold text-gray-400 uppercase tracking-wider">Menu</h1>
                                <button className="font-bold" onClick={() => setNavbar(false)}><HiX /></button>
                            </div>

                            <div className="space-y-2 mt-5 font-bold">
                                <a href="#home" className="text-center hover:bg-blue-100 py-2 w-full block uppercase transition-all duration-300 text-gray-500 dark:text-gray-300">Home</a>
                                <a href="#aboutme" className="text-center hover:bg-blue-100 py-2 w-full block uppercase transition-all duration-300 text-gray-500 dark:text-gray-300">About</a>
                                <a href="#skills" className="text-center hover:bg-blue-100 py-2 w-full block uppercase transition-all duration-300 text-gray-500 dark:text-gray-300">Skills</a>
                                <a href="#projects" className="text-center hover:bg-blue-100 py-2 w-full block uppercase transition-all duration-300 text-gray-500 dark:text-gray-300">Projects</a>
                                <a href="#contact" className="text-center hover:bg-blue-100 py-2 w-full block uppercase transition-all duration-300 text-gray-500 dark:text-gray-300">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
