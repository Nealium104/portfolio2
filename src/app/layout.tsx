import './globals.css'
import { Montserrat, Source_Code_Pro, Playfair_Display } from 'next/font/google'
import classNames from 'classnames'
import Nav from './Nav'
import Footer from './Footer'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-variable'
})

const source = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-source'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-playfair'
})

export const metadata = {
  title: "Neal's portfolio",
  description: "Neal Grindstaff's professional portfolio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={classNames(source.variable, montserrat.variable, playfair.variable)}>
      <body className={`bg-navy text-off-white`}>{children}</body>
    </html>
  )
}
