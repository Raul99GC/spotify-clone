import Link from 'next/link'
import React from 'react'

import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

export const Footer = () => {
  const linkStyles = 'text-spoify-lighGray hover:underline hover:text-spoify-white'
  return (
    <>
      <div className='hidden w-full px-8 pb-10 md:block md:w-[calc(100%-256px)] md:ml-64 xl:w-[calc(100%-384px)] xl:ml-[384px]'>
        <div className="flex justify-between flex-wrap ">
          <ul className="w-full flex flex-col gap-2 mb-8 lg:w-56">
            <li><p className='font-bold'>Empresa</p></li>
            <li><Link className={linkStyles} href={'#'}>Acerca de</Link></li>
            <li><Link className={linkStyles} href={'#'}>Empleo</Link></li>
            <li><Link className={linkStyles} href={'#'}>For the Record</Link></li>
          </ul>
          <ul className="w-full flex flex-col gap-2 mb-8 lg:w-56">
            <li><p className='font-bold'>Comunidades</p></li>
            <li><Link className={linkStyles} href={'#'}>Para Artistas</Link></li>
            <li><Link className={linkStyles} href={'#'}>Desarolladores</Link></li>
            <li><Link className={linkStyles} href={'#'}>Publicidad</Link></li>
            <li><Link className={linkStyles} href={'#'}>Inversores</Link></li>
            <li><Link className={linkStyles} href={'#'}>Provedores</Link></li>
          </ul>
          <ul className='w-full flex flex-col gap-2 mb-8 lg:w-56'>
            <li><p className='font-bold'>Enlaces Utiles</p></li>
            <li><Link className={linkStyles} href={'#'}>Asistencia</Link></li>
            <li><Link className={linkStyles} href={'#'}>App gratis para movil</Link></li>
          </ul>
          <div className="w-full flex flex-col gap-2 mb-8 lg:w-56  lg:flex-row lg:justify-end lg:gap-3">
            <div className="w-10 h-10 bg-spoify-gray flex items-center justify-center rounded-full hover:bg-spoify-hoverGray group">

              <AiOutlineInstagram
                size={20}
                className=' bg-spoify-gray group-hover:bg-spoify-hoverGray'
              />
            </div>
            <div className="w-10 h-10 bg-spoify-gray flex items-center justify-center rounded-full hover:bg-spoify-hoverGray group">
              <AiOutlineTwitter
                size={20}
                className=' bg-spoify-gray group-hover:bg-spoify-hoverGray'
              />
            </div>
            <div className="w-10 h-10 bg-spoify-gray flex items-center justify-center rounded-full hover:bg-spoify-hoverGray group">
              <BsFacebook
                size={20}
                className=' bg-spoify-gray group-hover:bg-spoify-hoverGray'
              />
            </div>
          </div>
        </div>
        <hr className='container mx-auto border-t border-neutral-600' />

        <div className="w-full flex ">
          <div className="w-[60%] flex flex-wrap gap-4">
            <Link href={'#'}>
              <span className='text-sm text-spoify-lighGray hover:text-spoify-white'>Legal</span>
            </Link>
            <Link href={'#'}>
              <span className='text-sm text-spoify-lighGray hover:text-spoify-white'>Centro de Privacidad</span>
            </Link>
            <Link href={'#'}>
              <span className='text-sm text-spoify-lighGray hover:text-spoify-white'>Politica de Privacidad</span>
            </Link>
            <Link href={'#'}>
              <span className='text-sm text-spoify-lighGray hover:text-spoify-white'>Cookies</span>
            </Link>
            <Link href={'#'}>
              <span className='text-sm text-spoify-lighGray hover:text-spoify-white'>Informacion sobre anuncios</span>
            </Link>

          </div>
          <div className="w-[40%] flex justify-end">
            <span>© 2023 RaulCG AB</span>
          </div>
        </div>
      </div>
    </>
  )
}
