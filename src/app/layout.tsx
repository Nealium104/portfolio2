import './globals.css'
import { Montserrat, Source_Code_Pro, Playfair_Display } from 'next/font/google'

const montserrrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400'],
})

const source = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--source'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--playfair'
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
    <html lang="en">
      <body className={`bg-navy`}>{children}</body>
    </html>
  )
}
