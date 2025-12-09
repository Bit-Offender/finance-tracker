'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const HomeNav = () => {

  return (
    <nav className='md:rounded-full md:sticky md:top-3 bg-slate-700/30 backdrop-blur-lg  md:flex md:items-center md:justify-between mt-3 mr-5 ml-5 border-2 border-white/10'>
        <div className='p-2'>
          <Link href='/' className='text-xl font-bold text-[#439A86] ml-3'>FinTrack</Link>
        </div>
        <div>
            <NavigationMenu className='text-white p-2 flex-col'>
              <NavigationMenuList className='flex justify-around'>
                <NavigationMenuItem className='px-5'>
                  <NavigationMenuLink asChild>
                      <Link href='/sign-up'>
                        <Button className='hover:bg-white hover:text-black transition-all duration-300 rounded-full group/button'>Get Started <ArrowRight  className='group-hover/button:translate-x-1 transition-all duration-300'/></Button>
                      </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className='px-5'>
                  <NavigationMenuLink asChild>
                    <Link href='/' className='flex flex-col group/home opacity-90 hover:opacity-100 transition-all duration-300'>Home
                      <span className='bg-[#439A86] w-0 h-0.5 group-focus/home:w-full group-hover/home:w-full transition-all duration-300'></span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className='px-5'>
                  <NavigationMenuLink asChild>
                    <Link href='/marketing/about' className='flex flex-col group/about opacity-90 hover:opacity-100 transition-all duration-300'>About
                      <span className='bg-[#439A86] w-0 h-0.5 group-focus/about:w-full group-hover/about:w-full transition-all duration-300'></span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className='px-5'>
                  <NavigationMenuLink asChild>
                    <Link href='/marketing/contact' className='flex flex-col group/contact opacity-90 hover:opacity-100 transition-all duration-300'>Contact Us
                      <span className='bg-[#439A86] w-0 h-0.5 group-focus/contact:w-full group-hover/contact:w-full transition-all duration-300'></span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className='px-5'>
                  <NavigationMenuLink asChild>
                    <Link href='/marketing/support' className='flex flex-col group/support opacity-90 hover:opacity-100 transition-all duration-300'>Support Us
                      <span className='bg-[#439A86] w-0 h-0.5 group-focus/support:w-full group-hover/support:w-full transition-all duration-300'></span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
        </div>
    </nav>
  )
}

export default HomeNav