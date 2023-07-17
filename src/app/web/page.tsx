import Image from 'next/image'
import Nav from '../Nav'
import Footer from '../Footer'
import Project from './Project'

export default function Web() {
  return (
  <>
    <Nav />
    <main className="">
      <span>Take a look at the other pages for now and feel free to reach out using any of the links at the bottom!</span>
      <h1></h1>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <Project 
          title='Collins Trumpet'
          image='https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687457354/Portfolio/Screenshot_2023-06-22_140801_ryrk6k.png'
          site='https://collinstrumpet.com/'
          github='https://github.com/Nealium104/robbie-collins'
        />
        <Project
          title='Gig-Econ'
          image='https://res.cloudinary.com/dwbwyzsyp/image/upload/v1689557116/Portfolio/Screenshot_2023-07-16_212458_oonzxt.png'
          site='https://gig-econ.vercel.app/'
          github='https://github.com/Nealium104/counter'
        />
        <Project 
          title='Skunch'
          image='https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687457527/Portfolio/Screenshot_2023-06-22_141147_jf5h17.png'
          site='https://www.skun.ch/'
          github='https://github.com/Nealium104/skunch-next'
        />
    

      </div>
    </main>
    <Footer />
  </>
  )
}

// In the summer of 2022, I decided I would finally take coding seriously. I put in countless hours understanding the fundamentals of HTML, CSS, and JavaScript.
// On February 8th, 2023, I decided that I would code every single day. Whether part of projects, code wars, or leet code, I have coded every single day since then.