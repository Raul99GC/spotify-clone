import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../public/spotify-logo-img.png'

const Login = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-14'>
      <Image
        src={logoImage}
        alt='spotify logo'
        className='w-[90%] lg:w-1/4'
        priority={true}
      />
      <Link
        href={'http://localhost:8000/login'}
        className='group flex justify-center w-2/4 bg-spoify-green py-4 px-10 hover:bg-spoify-lightGreen rounded-full lg:w-1/4'
      >
        <span className='text-spoify-white group-hover:underline group-hover:underline-offset-1'>Login</span>
      </Link>
    </div>
  )
}

export default Login
