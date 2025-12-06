'use client'

import React from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { motion } from "motion/react"


const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

const Content = () => {
  return (
    <>
        <motion.div 
        initial={{opacity: 0, y:20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 1, delay: 0.1}}
          viewport={{once: true}}
        >  
          <h1 className='place-content-center text-6xl font-bold mt-36 text-center border-b-2 border-white/15 pb-7 mx-8'>We Provide</h1>
        </motion.div>
        <motion.div 
          initial={{opacity: 0, y:20}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 1, delay: 0.1}}
          viewport={{once: true}}
          >
            <div className='md:flex md:flex-row md:gap-10 md:items-center md:justify-around md:mt-32 mt-24 flex flex-col  justify-center items-center'>
              <div className='md:ml-10 flex items-center justify-center'>
                <Image src={'/ContentPhone.svg'} alt='Content Phone' width={300} height={300}/>
              </div>
              <div className='ml-10 md:w-1/2 mt-10 md:mt-0'>
                <h1 className='text-4xl md:text-6xl mb-8 font-semibold text-center md:text-left'>Smart AI Insights</h1>
                <p className={`${roboto.className} text-xl text-center md:text-left`}>Get personalized financial advice powered by intelligent analysis. Your AI assistant automatically categorizes expenses, detects unusual spending, and highlights trends you might miss — helping you make better decisions without any effort.</p>
              </div>
            </div>
        </motion.div>
        <motion.div 
          initial={{opacity: 0, y:20}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 1, delay: 0.1}}
          viewport={{once: true}}
          >
            <div className='md:flex md:flex-row md:gap-10 md:items-center md:justify-around md:mt-32 flex flex-col-reverse mt-16 justify-center items-center'>
              <div className='ml-10 md:w-2/4 mt-10 md:mt-0'>
                <h1 className='text-4xl md:text-6xl mb-8 font-semibold text-center md:text-left'>All Your Finances, Organized</h1>
                <p className={`${roboto.className} text-xl text-center md:text-left`}>See everything in one clean dashboard. Track expenses, budgets, savings, and goals with beautiful visualizations that make your financial life simple and stress-free. No spreadsheets, no clutter — just clarity</p>
              </div>
              <div className='md:ml-10 flex items-center justify-center'>
                <Image src={'/ContentOrganize.svg'} alt='Content Phone' width={350} height={350}/>
              </div>
            </div>
      </motion.div>
    </>
  )
}

export default Content