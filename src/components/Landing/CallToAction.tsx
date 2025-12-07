'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Roboto } from 'next/font/google'
import { motion } from 'motion/react'
import Link from 'next/link'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

const CallToAction = () => {
  return (
    <>
        <motion.div 
          initial={{opacity: 0, y:20}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 1, delay: 0.1}}
          viewport={{once: true}}
          >
            <div className='flex flex-col md:gap-14 gap-16 items-center justify-center bg-gradient-to-br min-h-[423px] rounded-3xl from-[#439A86] to-[#2E4482] m-16'>
                <h1 className='font-bold tracking-wider px-5 text-center text-4xl md:text-6xl max-w-2/4'>Start Tracking Smarter Today</h1>
                <p className='font-[roboto] text-center px-5 max-w-1/2 md:text-3xl'>Take control of your finances with a clean, simple dashboard built for clarity.</p>
                <Link href='/sign-up'>
                    <Button className='rounded-full md:text-2xl text-xl p-6 md:p-7 transition-all duration-300 hover:bg-white hover:text-black'>GET STARTED</Button>
                </Link>
            </div>
        </motion.div>
    </>
  )
}

export default CallToAction