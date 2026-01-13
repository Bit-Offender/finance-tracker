import React from 'react'
import { SignIn } from '@clerk/nextjs'   

const Signin = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#101628] to-[#161F38]">
        <SignIn/>
    </div>
  )
}

export default Signin