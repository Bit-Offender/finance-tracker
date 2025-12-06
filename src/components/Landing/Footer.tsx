import React from 'react'
import { Roboto } from 'next/font/google'
import Link from 'next/link'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

const Footer = () => {
  return (
    <footer className='bg-black/65 pt-10'>
        <div className='grid grid-cols-3 gap-10 justify-around'>
            <div className='flex flex-col items-center'>
              <h1 className='font-semibold self-center mb-2 text-lg'>Explore</h1>
              <ul className='list-disc list-oustide'>
                <Link href='/'><li className='font-[roboto]'>Features</li></Link>
                <Link href='/'><li className='font-[roboto]'>Templates</li></Link>
                <Link href='/'><li className='font-[roboto]'>Blog</li></Link>
                <Link href='/'><li className='font-[roboto]'>API</li></Link>
              </ul>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='self-center mb-2 font-semibold text-lg'>Support</h1>
              <ul className='list-disc list-oustide'>
                <Link href='/'><li className='font-[roboto]'>Help Center</li></Link>
                <Link href='/'><li className='font-[roboto]'>Email Support</li></Link>
                <Link href='/'><li className='font-[roboto]'>Report Issue</li></Link>
              </ul>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='self-center mb-2 text-lg font-semibold'>Legal</h1>
              <ul className='list-disc list-oustide'>
                <Link href='/'><li className='font-[roboto]'>Privacy Policy</li></Link>
                <Link href='/'><li className='font-[roboto]'>Terms</li></Link>
                <Link href='/'><li className='font-[roboto]'>Data Handling</li></Link>
              </ul>
            </div>
        </div>
        <div className='flex justify-center mt-10 pb-2'>
          <h2 className='text-2xl font-medium tracking-wider'>&copy; 2025 FinTrack</h2>
        </div>
    </footer>
  )
}

export default Footer