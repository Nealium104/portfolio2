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
            {/* mobile */}
            <div className="flex flex-col">
                <div className="flex">
                    <FaBars
                        className="text-4xl text-black my-auto mx-4"
                        onClick={toggle}
                    />
                    <div className="relative h-24 w-24">
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
                </div>
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