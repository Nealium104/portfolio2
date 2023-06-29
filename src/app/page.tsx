import Image from 'next/image'
import Nav from './Nav'

export default function Home() {
  return (
  <>
    <Nav />
    <main className="bg-red-300 text-4xl">
      <h1 className='font-montserrat'>Beginning</h1>
      <h2 className='font-source'>End</h2>
      <h3 className='font-playfair'>No really</h3>
    </main>
  </>
  )
}
