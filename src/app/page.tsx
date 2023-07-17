'use client'

import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Service {
  title: string;
  desc: string;
  skills: string[];
  link: string;
  linkText: string;
}

interface ServiceCardProps {
  data: Service;
  delay: string;
}

const Services = [
    {
        title: 'Web Development',
        desc: 'Building full-stack applications that meet your business needs',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'MongoDB', 'Agile', 'Git', 'NextJS'],
        link: '/web',
        linkText: 'Build',
    },
    {
        title: 'Photography',
        desc: 'Capturing moments from your events and businesses',
        skills: ['Events', 'Weddings', 'Businesses', 'Estate', 'Portrait', 'Family', 'Landscape', 'Video'],
        link: '/web',
        linkText: 'Capture',
    },
    {
        title: 'Music',
        desc: 'Playing and composing the music you need for your program',
        skills: ['Classical', 'Jazz', 'Solo', 'Trumpet', 'Alto Horn', 'Quintet', 'Teaching', 'Lead'],
        link: '/web',
        linkText: 'Play',
    }
]

const ServiceCard: React.FC<ServiceCardProps> = ({data, delay}) => {
    const { title, desc, skills, link, linkText } = data;
    return (
        <div data-aos="flip-right" data-aos-delay={delay} className="text-xl md:w-1/4 p-4 border border-off-white/25 rounded-xl bg-black/25 shadow-2xl mx-4 my-4">
          <h2 className="py-2 w-fit text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright-yellow to-ocean-blue">{title}</h2>
          <p className='text-sm font-source mb-2'>{desc}</p>
          <ul className='text-md grid gap-2 grid-cols-2 font-source'>
            {skills.map(skill => <li className='text-center'>{skill}</li>)}
          </ul>
          <div className="mx-auto font-thin text-black p-2 my-4 w-24 text-center duration-150 bg-gradient-to-r from-bright-yellow to-ocean-blue hover:text-white hover:scale-110">
            <Link href={link}>{linkText}</Link>
          </div>
        </div>
    );
}

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Nav />
      <main className="text-3xl">
        <div className='flex flex-col overflow-x-hidden md:flex-row justify-center items-center md:justify-evenly md:items-center h-screen md:my-0'>
          <div className="relative w-120 h-120 md:px-8 rounded-full bg-gradient-to-r from-bright-yellow to-ocean-blue shadow-xl">
            <Image
            className='rounded-full'
            alt="Neal with the Seattle skyline in the background"
            src='https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687392562/Portfolio/Seattle_w71vas.jpg'
            objectFit='contain'
            fill
            />
          </div>
          <div className='md:w-1/3 bg-off-white text-black rounded-xl mx-4 md:my-0 p-4 font-thin font-montserrat shadow-xl text-center'>
            <h1>My name is <span className='leading-tight tracking-tight block py-2 text-4xl font-playfair hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-bright-yellow hover:to-ocean-blue'>Neal Grindstaff</span></h1>
            <span className='block py-2'>I&apos;m a web developer, photographer, and musician.</span>
            <span className='block py-2'>Let me help you and your team.</span>
            <Link className='block my-2 p-2 text-center duration-150 hover:scale-110 hover:text-white bg-gradient-to-r from-bright-yellow to-ocean-blue w-fit shadow-xl mx-auto' href='/'>How?</Link>
          </div>
        </div>
        <section className='flex flex-col md:flex-row justify-evenly mb-10'>
          {Services.map((service, index) => (
              <ServiceCard data={service} delay={`${200*index}`} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}