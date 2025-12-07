import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import { Button } from "@/components/ui/button"

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

const Hero = () => {
  return (
      <>
        <div className='md:flex md:gap-10 md:flex-row md:items-center md:justify-around mt-16 flex flex-col-reverse'>
          <div className='ml-6 md:w-1/2 flex-col items-center justify-center'>
            <h1 className='text-6xl mb-8 font-semibold md:text-left text-center'>Take Control Of Your Money, Effortlessly</h1>
            <p className='font-[roboto] text-xl mb-8 md:text-left text-center'>Your money shouldn't be confusing. Organize your finances, set budgets, and watch your savings grow with clear, interactive visuals.</p>
            <Link href='/sign-up' className='flex justify-center md:justify-start'>
              <Button variant='outline' className='w-52 h-[61px] text-2xl font-semibold tracking-widest transition-all duration-300 rounded-full bg-[#439A86] border-0'>SIGN UP</Button>
            </Link>
          </div>
           <div className='md:mr-5 ml-20'>
              <Image src={'/Hero.svg'} width={500} height={500} alt='Hero Image'/>
            </div>
        </div>
      </>
  )
}

export default Hero