import "./globals.css"
import {Outfit} from "next/font/google"
import Image from "next/image"

const outfit = Outfit({ subsets: ['latin'] })

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      
        <body className={`bg-zinc-900 h-screen p-[1rem] ${outfit.className}`}>
        
          <header className="absolute top-14 right-14">
            {/* <Image priority src={logoSeraphix} className="w-[3rem]" alt="Logo seraphix grades"/> */}
          </header>
          {children}
        </body>
      
    </html>
  )
} 
