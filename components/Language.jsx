import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { TbLanguage } from 'react-icons/tb';

export default function Language() {
    const dropRef = useRef(null)
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const defaultLocale = router.locale
    const [language, setLanguage] = useState(defaultLocale)

    const handleOutsideClick = (event) => {
        if (dropRef.current && !dropRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

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
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    
  return (
    <div ref={dropRef} className='relative'>
        <button onClick={() => setOpen(!open)} className='w-full flex items-center gap-2'>
            <TbLanguage className='text-gray-300 text-2xl'/>
            <h1 className='text-white font-bold uppercase text-xl'>{language}</h1>
            <FaChevronDown className={`transition-all duration-300 ${open ? "rotate-180":""} text-xs text-white`}/>
        </button>

        <div className={`${open ? "visible opacity-100 translate-y-0":"invisible opacity-0 translate-y-5"} transition-all duration-300 ease-in-out absolute mt-3 shadow-lg rounded-md bg-white right-0 w-60 py-3`}>
            <button onClick={() => settingsLanguage("id")} className={`${language == "id" ? "bg-zinc-300":"hover:bg-light"} font-bold px-5 py-2 transition-colors duration-300 w-full block text-start`}>Bahasa Indonesia</button>
            <button onClick={() => settingsLanguage("en")} className={`${language == "en" ? "bg-zinc-300":"hover:bg-light"} font-bold px-5 py-2 transition-colors duration-300 w-full block text-start`}>Bahasa Inggris</button>
        </div>
    </div>
  )
}
