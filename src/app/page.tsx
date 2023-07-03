import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'

export default function Home() {
  return (
  <>
    <Nav />
    <main className="text-3xl">
      <div className='md:flex md:justify-evenly md:items-center md:h-screen shadow-xl my-8 md:my-0'>
        <div className="relative w-full h-96 md:w-1/3 md:h-2/3 md:px-8 rounded-full bg-gradient-to-r from-bright-yellow to-ocean-blue">
          <Image
          className='rounded-full'
          alt="Neal with the seattle skyline in the background"
          src='https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687392562/Portfolio/Seattle_w71vas.jpg'
          objectFit='contain'
          fill
          />
        </div>
        <div className='md:w-1/3 h-fit bg-off-white text-black rounded-xl mx-4 my-4 p-4 font-thin font-montserrat shadow-xl text-center'>
          <h1>My name is <span className='block text-5xl font-playfair hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-bright-yellow hover:to-ocean-blue'>Neal Grindstaff</span></h1>
          <span className='block py-4'>I'm a web developer, photographer, and musician.</span>
          <span className='block py-4'>Let me help you and your team.</span>
          <Link className='block py-2 text-center duration-150 hover:scale-110 hover:text-white bg-gradient-to-r from-bright-yellow to-ocean-blue w-32 shadow-xl mx-auto' href='/'>How?</Link>
        </div>
      </div>
    </main>
  </>
  )
}
