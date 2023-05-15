import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link";
import Language from "./Language";
import {HiMenuAlt3, HiX} from "react-icons/hi"
import { FaMoon, FaSun } from "react-icons/fa";


export default function Navbar({ lang }) {
    const [navbar, setNavbar] = useState(false)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [scroll, setScroll] = useState(false)
    const router = useRouter()
    const defaultLocale = router.locale
    const [language, setLanguage] = useState(defaultLocale)

    const settingsLanguage = (value) => {
        if (value == "id") {
            router.push("/", "/", { locale: "id" })
            setLanguage("id")
        } else if (value == "en") {
            router.push("/", "/", { locale: "en" })
            setLanguage("en")
        }
    }

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
                    <button className="py-2 md:hidden" onClick={() => setNavbar(!navbar)}>
                        <HiMenuAlt3 className="text-3xl"/>
                    </button>

                    <div className={`${navbar ? "visible md:invisible":"invisible"} fixed bg-black bg-opacity-50 w-full top-0 left-0 h-screen`}>
                        <div className={`${navbar ? "opacity-100 translate-x-0":"opacity-0 -translate-x-full"} transition-all duration-300 bg-white dark:bg-gray-900 w-3/4 z-20 rounded-lg h-screen`}>
                            <div className="flex items-center justify-between p-5">
                                <h1 className="font-bold text-gray-400 uppercase tracking-wider">Menu</h1>
                                <button className="font-bold" onClick={() => setNavbar(false)}><HiX /></button>
                            </div>

                            <div className="space-y-2 mt-3 font-bold h-full">
                                <a href="#home" className="dark:hover:bg-gray-700 hover:bg-blue-100 px-5 py-2 w-full block uppercase text-gray-500 dark:text-gray-300">Home</a>
                                <a href="#aboutme" className="dark:hover:bg-gray-700 hover:bg-blue-100 px-5 py-2 w-full block uppercase text-gray-500 dark:text-gray-300">About</a>
                                <a href="#skills" className="dark:hover:bg-gray-700 hover:bg-blue-100 px-5 py-2 w-full block uppercase text-gray-500 dark:text-gray-300">Skills</a>
                                <a href="#projects" className="dark:hover:bg-gray-700 hover:bg-blue-100 px-5 py-2 w-full block uppercase text-gray-500 dark:text-gray-300">Projects</a>
                                <a href="#contact" className="dark:hover:bg-gray-700 hover:bg-blue-100 px-5 py-2 w-full block uppercase text-gray-500 dark:text-gray-300 mb-5">Contact</a>
                                <div className="py-5 border-b dark:border-gray-500">

                                </div>
                                <button onClick={() => setTheme(theme == "dark" ? "light":"dark")} className="flex items-center justify-between dark:hover:bg-gray-700 hover:bg-blue-100 px-5 py-2 w-full uppercase text-gray-500 dark:text-gray-300">
                                    {
                                        theme == "dark" ?
                                        <>
                                            Dark Mode
                                            <FaMoon />
                                        </>
                                        :
                                        <>
                                            Light Mode
                                            <FaSun />
                                        </>
                                    }
                                </button>
                                <button onClick={() => settingsLanguage(language == "id" ? "en":"id")} className="flex items-center justify-between dark:hover:bg-gray-700 hover:bg-blue-100 px-5 py-2 w-full uppercase text-gray-500 dark:text-gray-300">
                                    {
                                        language == "id" ?
                                        <>
                                            Indonesia
                                        </>
                                        :
                                        <>
                                            Inggris
                                        </>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
