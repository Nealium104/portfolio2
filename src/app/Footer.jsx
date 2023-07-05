import Link from 'next/link'
import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

export default function Footer () {
    return (
        <footer className='border-t-2'>
            <span className='text-center block'>© Copyright 2023</span>
            <div className='flex w-full md:w-1/3 justify-evenly mx-auto my-4 text-center'>
                <Link className='duration-150 hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-bright-yellow hover:to-ocean-blue' href="/">Home</Link>
                <Link className='duration-150 hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-bright-yellow hover:to-ocean-blue' href="/web">Web</Link>
                <Link className='duration-150 hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-bright-yellow hover:to-ocean-blue' href="/photography">Photography</Link>
                <Link className='duration-150 hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-bright-yellow hover:to-ocean-blue' href="/music">Music</Link>
                <Link className='duration-150 hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-bright-yellow hover:to-ocean-blue' href="/contact">Contact</Link>
            </div>
            <div className='flex w-1/2 md:w-1/6 justify-between mx-auto my-8'>
                <a className="duration-150 hover:scale-125" href="/https://github.com/Nealium104"><FaGithub /></a>
                <a className="duration-150 hover:scale-125" href="https://www.facebook.com/neal.grindstaff"><FaFacebook /></a>
                <a className="duration-150 hover:scale-125" href="https://www.instagram.com/nealium1221/"><FaInstagram /></a>
                <a className="duration-150 hover:scale-125" href="https://twitter.com/GrindstaffNeal"><FaTwitter /></a>
            </div>
        </footer>
    )
}