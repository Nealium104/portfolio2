import Link from "next/link"
import Image from "next/image"

export default function Nav () {
    return (
        <nav className="bg-off-white h-24">
            <div className="h-16 bg-red-400">
                <a href='/' className="">
                    <Image
                        className=""
                        src="/images/logo.png"
                        alt="logo"
                        fill
                        objectFit="cover"
                    />
                </a>
            </div>
            <div>
                <Link href="/">Web</Link>
                <Link href="/">Photography</Link>
                <Link href="/">Music</Link>
                <Link href="/">Contact</Link>
            </div>
        </nav>
    )
}