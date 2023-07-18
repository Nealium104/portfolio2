import Image from 'next/image'
import Nav from '../Nav'
import Footer from '../Footer'
import Project from './Project'


export default function Web() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express.js",
    "Next.js",
    "MongoDB",
    "NoSQL",
    "RESTful APIs",
    "GitHub",
    "Webpack",
    "UI/UX",
    "Figma",
    "Tailwind",
    "WordPress",
    "Headless CMS",
    "Databases",
    "Linux",
    "CLI",
    "Scrum",
    "Project Management",
    "Organization",
    "Leadership",
    "Teaching",
    "CI/CD",
    "SEO",
    "Agile Methodologies"
  ];

  return (
  <>
    <Nav />
    <main className="">
      <h1 className='text-6xl'>I&apos;m a <span className='text-transparent bg-clip-text bg-gradient-to-r from-bright-yellow to-ocean-blue'>Web Developer</span></h1>
      
      <h2>I bring skills like these to the table:</h2>
      <ul className='grid grid-flow-row-dense grid-rows-3 grid-cols-10 text-center overflow-x-scroll text-3xl'>
        {skills.map((word, index) => <li className='w-fit' key={index}>{word}</li>)}
      </ul>
      <h2 className='text-4xl font-bold font-montserrat mx-6'>Projects</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <Project 
          key='collins-trumpet'
          title='Collins Trumpet'
          image='https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687457354/Portfolio/Screenshot_2023-06-22_140801_ryrk6k.png'
          site='https://collinstrumpet.com/'
          github='https://github.com/Nealium104/robbie-collins'
        />
        <Project
          key='gig-econ'
          title='Gig-Econ'
          image='https://res.cloudinary.com/dwbwyzsyp/image/upload/v1689557116/Portfolio/Screenshot_2023-07-16_212458_oonzxt.png'
          site='https://gig-econ.vercel.app/'
          github='https://github.com/Nealium104/counter'
        />
        <Project 
          key='skunch'
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