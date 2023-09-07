import './frontend.css'
import Header from "./header";
import Footer from "./footer";
import { Work_Sans } from 'next/font/google'

const worksans = Work_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Public({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        {/* <body className={worksans.className + " bg-white text-gray-600 work-sans leading-normal text-base tracking-norma"}> */}
          <Header /> 
          {children}
          <Footer />
        {/* </body> */}
      </>
    )
  }