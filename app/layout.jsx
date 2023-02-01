import './globals.css'
import Header from './header'
import Footer from './footer'
import Image from 'next/image'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className='flex flex-col min-h-screen bg-slate-100'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
