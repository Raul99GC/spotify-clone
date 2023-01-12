import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import spotifyImage from '../../public/spotify-logo-img.png'

import { AiFillHome, AiFillHeart } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { BiLibrary, BiPlus } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className='bg-spoify-black fixed top-0 left-0 w-96 h-full flex-col justify-between hidden xl:flex'>
      <div className="pt-6">
        <Link href={'#'} className="hidden px-6 mb-4 xl:flex">
          <Image
            src={spotifyImage}
            alt='spotify Image'
            width={130}
            height={40}
            className='mb-2'
            priority= {true}
          />
        </Link>
        <nav className="">
          <ul className='text-sm'>
            <li className='group flex items-center px-2 min-h-[40px] hover:bg-spoify-gray transition-colors'>
              <Link href={'#'} className='flex items-center gap-8 font-bold px-4 text-spoify-lighGray group-hover:text-spoify-white'>
                <AiFillHome className='text-2xl' /> <span className='capitalize'>inicio</span>
              </Link>
            </li>
            <li className='group flex items-center px-2 min-h-[40px] hover:bg-spoify-gray transition-colors'>
              <Link href={'#'} className='flex items-center gap-8 font-bold px-4 text-spoify-lighGray group-hover:text-spoify-white'>
                <BsSearch className='text-2xl' /> <span className='capitalize'>Buscar</span>
              </Link>
            </li>
            <li className='group flex items-center px-2 min-h-[40px] hover:bg-spoify-gray transition-colors'>
              <Link href={'#'} className='flex items-center gap-8 font-bold px-4 text-spoify-lighGray group-hover:text-spoify-white'>
                <BiLibrary className='text-2xl' /> <span className='capitalize'>tu biblioteca</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-6 text-sm capitalize">

          <div className="group w-full min-w-[40px] hover:bg-spoify-gray transition-colors duration-300" >
            <div className="px-6 py-2.5 flex gap-8">
              <div className="bg-spoify-lighGray w-6 h-6 flex items-center justify-center rounded-sm group-hover:bg-spoify-white">
                <BiPlus
                  className='w-auto text-spoify-black'
                />
              </div>
              <span className='font-bold text-spoify-lighGray group-hover:text-spoify-white'>Crear Biblioteca</span>
            </div>
          </div>

          <div className="group w-full min-w-[40px] hover:bg-spoify-gray transition-colors duration-300" >
            <div className="px-6 py-2.5 flex gap-8">
              <div className="bg-gradient-to-tl from-[#3010A3] to-[#8BA099] w-6 h-6 flex items-center justify-center rounded-sm group-hover:bg-spoify-white">
                <AiFillHeart
                  className='w-4 text-spoify-lighGray group-hover:text-spoify-white'
                />
              </div>
              <span className='font-bold text-spoify-lighGray group-hover:text-spoify-white'>canciones que te gustan</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <nav className="flex flex-col my-8 px-6">
          <ul>
            <li>
              <Link href={'#'} className='text-xs hover:underline capitalize'>
                cookies
              </Link>
            </li>
            <li>
              <Link href={'#'} className='text-xs hover:underline capitalize'>
                provacidad
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
