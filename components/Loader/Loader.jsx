import React from 'react'
import { BiLoaderAlt } from 'react-icons/bi'

const Loader = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <BiLoaderAlt
        className='text-spoify-green animate-spin'
        size={40}

      />
    </div>
  )
}

export default Loader
