import React from 'react'
import { SignIn } from '@clerk/nextjs'   
import { dark } from '@clerk/themes'

const Signin = () => {
  return (
    <SignIn appearance={{
      theme: dark,
    }}/>
  )
}

export default Signin