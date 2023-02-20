import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

export const ButtonPlay = () => {
  return (
    <button className='hidden absolute opacity-0 w-12 h-12 bg-spoify-green rounded-full md:flex items-center justify-center hover:scale-110 hover:text-spoify-lightGreen transition-all bottom-[5%] right-[5%] group-hover:opacity-100 duration-300 translate-y-2 group-hover:translate-y-0 ease-out'>
      <BsFillPlayFill
        className='text-3xl text-spoify-black'
      />
    </button>
  )
}
