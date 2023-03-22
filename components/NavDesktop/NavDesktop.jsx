import Link from 'next/link'
import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { logout } from '../../spotify/spotifyTokens'
import { useSelector } from 'react-redux'

const NavDesktop = () => {
  const { profile } = useSelector(state => state.profile)
  const liStyles = 'h-10 flex items-center w-full hover:bg-spoify-hoverGray rounded-sm pl-3 pr-2'

  return (
    <nav className=' justify-center bg-spoify-gray h-auto w-48 rounded-sm absolute top-[115%] right-8 hidden md:flex'>
      <ul className='flex flex-col items-center w-[95%] text-sm'>
        <li className={`${liStyles} mt-1`}>
          <Link href={'#'} className={'w-full flex justify-between'}>
            <span>Ver cuenta</span>
            <BsBoxArrowUpRight size={'16px'} />
          </Link>
        </li>
        <li className={`${liStyles}`}>
          <Link href={`/user/${profile.id}`} className={''}> <span>Perfil</span></Link>
        </li>
        <li className={`${liStyles}`}>
          <Link href={'#'} className={''}> <span>Configuión</span></Link>
        </li>

        <div className="w-full border-t-2 border-white border-opacity-5">
          <li className={`${liStyles} mb-1`}>
            <Link href={'/login'} onClick={logout} > <span>Cerrar sesíon</span></Link>
          </li>

        </div>
      </ul>
    </nav>
  )
}

export default NavDesktop
