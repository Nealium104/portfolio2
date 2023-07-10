import Image from 'next/image'
import Nav from '../Nav'
import Project from './Project'

export default function Web() {
  return (
  <>
    <Nav />
    <main className="text-4xl">
      <h1 className='font-montserrat'>Hi there</h1>
      <h2 className='font-source'>We're currently under construction 👷‍♂️</h2>
      <span>Take a look at the other pages for now and feel free to reach out using any of the links at the bottom!</span>
      <Project />
    </main>
  </>
  )
}
