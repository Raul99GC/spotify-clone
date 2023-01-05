import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import spotifyImage from '../../public/spotify-logo-img.png'

import { AiOutlineSetting } from 'react-icons/ai'
import NavMobile from '../NavMobile/NavMobile'

const Header = () => {
  const [statusButton, setStatusButton] = useState(false)

  const handleButton = () => {
    setStatusButton(!statusButton)
    console.log(statusButton)
  }

  return (
    <div className='w-full h-14 bg-spoify-gray top-0 left-0 flex justify-center xl:ml-96 xl:w-[calc(100%-384px)] xl:h-16 xl:fixed'>
      <div className="h-full w-[90%] flex justify-between items-center">
        <Link
          href={'#'}
        >
          <Image
            src={spotifyImage}
            className='w-[105px] min-w-[105px] h-[34px]'
            priority={true}
            alt='spotify logo'
          />
        </Link>
        <button className=' flex justify-end items-center p-3'
        >
          <AiOutlineSetting
            className='text-2xl font-bold transla'
            onClick={handleButton}
          />
        </button>

      </div>
      <NavMobile handleButton={handleButton} statusButton={statusButton} />
    </div>
  )
}

export default Header
