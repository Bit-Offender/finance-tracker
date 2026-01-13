import React from 'react'
import { SignUp } from '@clerk/nextjs'   

const Signup = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#101628] to-[#161F38]">
        <SignUp/>
    </div>
  )
}

export default Signup