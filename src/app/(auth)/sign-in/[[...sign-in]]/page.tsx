import React from 'react'
import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center m-10'>
        <SignIn />
    </div>
  )
}

export default SignInPage