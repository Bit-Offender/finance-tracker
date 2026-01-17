import React from 'react'
import { SignUp } from '@clerk/nextjs' 
import { dark } from '@clerk/themes'  

const Signup = () => {
  return (
      <SignUp appearance={{
        theme: dark,
      }}/>
  )
}

export default Signup