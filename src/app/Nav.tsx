'use client'

import Link from "next/link"
import Image from "next/image"
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'


export default function Nav () {
    const [menuToggle, setMenuToggle] = useState(false)
    
    const toggle = () => {
        setMenuToggle(!menuToggle)
    }

    return (
        <nav className="bg-off-white h-24 font-montserrat">
            {/* Left Side */}
            <div className="flex flex-col">
                <div className="flex md:justify-between">
                    <FaBars
                        className="md:hidden text-4xl text-black my-auto mx-4"
                        onClick={toggle}
                    />
                    <div className="relative h-24 w-24 md:mx-8">
                        <a href='/' className="">
                            <Image
                                className=""
                                src="/images/logo.png"
                                alt="logo"
                                objectFit="contain"
                                fill
                            />
                        </a>
                    </div>
                    <div className='hidden md:flex justify-between items-center bg-off-white/50 text-3xl text-black z-10'>
                            <Link className='px-4 duration-150 hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-bright-yellow hover:to-ocean-blue' href="/web">Web</Link>
                            <Link className='px-4 duration-150 hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-bright-yellow hover:to-ocean-blue' href="/photography">Photography</Link>
                            <Link className='px-4 duration-150 hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-bright-yellow hover:to-ocean-blue' href="/music">Music</Link>
                            <Link className='px-4 duration-150 hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-bright-yellow hover:to-ocean-blue' href="/contact">Contact</Link>
                    </div>
                </div>
            {/* desktop */}
            {/* mobile */}
                <div className={`${menuToggle ? '' : 'hidden'} block flex flex-col w-full items-center bg-off-white/50 text-3xl text-black z-10`}>
                    <Link className='my-4' href="/">Home</Link>
                    <Link className='my-4' href="/web">Web</Link>
                    <Link className='my-4' href="/photography">Photography</Link>
                    <Link className='my-4' href="/music">Music</Link>
                    <Link className='my-4' href="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}