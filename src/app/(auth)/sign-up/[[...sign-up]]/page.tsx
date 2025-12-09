import React from 'react'
import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center m-10'>
        <SignUp />
    </div>
  )
}

export default SignUpPage