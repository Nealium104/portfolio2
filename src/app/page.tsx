'use client'

import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init()
  })

  return (
  <>
    <Nav />
    <main className="text-3xl">
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-evenly md:items-center md:h-screen my-8 md:my-0'>
        <div className="relative w-120 h-120 md:px-8 rounded-full bg-gradient-to-r from-bright-yellow to-ocean-blue shadow-xl">
          <Image
          className='rounded-full'
          alt="Neal with the seattle skyline in the background"
          src='https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687392562/Portfolio/Seattle_w71vas.jpg'
          objectFit='contain'
          fill
          />
        </div>
        <div className='md:w-1/3 bg-off-white text-black rounded-xl mx-4 my-4 md:my-0 p-4 font-thin font-montserrat shadow-xl text-center'>
          <h1>My name is <span className='block text-5xl font-playfair hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-bright-yellow hover:to-ocean-blue'>Neal Grindstaff</span></h1>
          <span className='block py-4'>I&apos;m a web developer, photographer, and musician.</span>
          <span className='block py-4'>Let me help you and your team.</span>
          <Link className='block p-2 text-center duration-150 hover:scale-110 hover:text-white bg-gradient-to-r from-bright-yellow to-ocean-blue w-fit shadow-xl mx-auto' href='/'>How?</Link>
        </div>
      </div>
      <section className='flex flex-col md:flex-row justify-evenly mb-10'>
        <div data-aos="flip-right" data-aos-delay="200" className="text-xl md:w-1/4 p-4 border border-off-white/25 rounded-xl bg-black/25 shadow-2xl mx-4 my-4">
          <h2 className="py-2 w-fit text-3xl text-transparent bg-clip-text bg-gradient-to-r from-bright-yellow to-ocean-blue">Web Development</h2>
          <p className='text-sm font-source mb-2'>Building full-stack applications that meet your business needs</p>
          <ul className='text-md  grid grid-cols-3 grid-rows-3 font-source'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Agile</li>
            <li>Git</li>
            <li>NextJS</li>
            <li>UI/UX</li>
          </ul>
          <div className="mx-auto font-thin text-black p-2 my-4 w-24 text-center duration-150 bg-gradient-to-r from-bright-yellow to-ocean-blue hover:text-white hover:scale-110">
            <Link href="/web">Build</Link>
          </div>
        </div>
        <div data-aos="flip-right" data-aos-delay="400" className="text-xl md:w-1/4 p-4 border border-off-white/25 rounded-xl bg-black/25 shadow-2xl mx-4 my-4">
          <h2 className="py-2 w-fit text-3xl text-transparent bg-clip-text bg-gradient-to-r from-bright-yellow to-ocean-blue">Photography</h2>
          <p className='font-source text-sm mb-2'>Capturing moments from your events and businesses</p>
          <ul className='text-md grid grid-cols-3 grid-rows-3 font-source'>
            <li>Events</li>
            <li>Weddings</li>
            <li>Businesses</li>
            <li>Corperate</li>
            <li>Estate</li>
            <li>Portrait</li>
            <li>Family</li>
            <li>Landscape</li>
            <li>Video</li>
          </ul>
          <div className="mx-auto font-thin text-black p-2 my-4 w-24 text-center duration-150 bg-gradient-to-r from-bright-yellow to-ocean-blue hover:text-white hover:scale-110">
            <Link href="/web">Capture</Link>
          </div>
        </div>
        <div data-aos="flip-right" data-aos-delay="600" className="text-xl md:w-1/4 p-4 border border-off-white/25 rounded-xl bg-black/25 shadow-2xl mx-4 my-4">
          <h2 className="py-2 w-fit text-3xl text-transparent bg-clip-text bg-gradient-to-r from-bright-yellow to-ocean-blue">Music</h2>
          <p className='font-source text-sm mb-2'>Playing and composing the music you need for your program</p>
          <ul className='text-md grid grid-cols-3 grid-rows-3 font-source'>
            <li>Classical</li>
            <li>Jazz</li>
            <li>Solo</li>
            <li>Trumpet</li>
            <li>Alto Horn</li>
            <li>Quintet</li>
            <li>Teaching</li>
            <li>Rock</li>
            <li>Lead</li>
          </ul>
          <div className="mx-auto font-thin text-black p-2 my-4 w-24 text-center duration-150 bg-gradient-to-r from-bright-yellow to-ocean-blue hover:text-white hover:scale-110">
            <Link href="/web">Play</Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
  )
}
