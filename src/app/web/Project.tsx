import Image from "next/image"

interface ProjectProps {
    title: string,
    image: string,
    site: string,
    github: string
}

const Project: React.FC<ProjectProps> = ({title, image, site, github}) => {

    return (
        <div className="flex flex-col items-center py-8 transition duration-150 hover:scale-110 font-montserrat bg-black/25 rounded-xl m-2">
            <h1 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-bright-yellow to-ocean-blue">{title}</h1>
            <div className="w-96 h-96 relative">
                <Image
                    src={image}
                    className='bg-white' 
                    alt="placeholder"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="flex w-full justify-evenly mt-4">
                <a className='text-black px-4 py-2 bg-gradient-to-r from-bright-yellow to-ocean-blue w-fit shadow-xl hover:text-white' href={site}>Site</a>
                <a className='text-black px-4 py-2 bg-gradient-to-r from-bright-yellow to-ocean-blue w-fit shadow-xl hover:text-white' href={github}>GitHub</a>
            </div>
        </div>
    )
}

export default Project