import Link from 'next/link'
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { AiOutlineClose } from 'react-icons/ai'
import { ImArrowUpRight2 } from 'react-icons/im'
import { CSSTransition } from 'react-transition-group'
import { logout } from '../../spotify/spotifyTokens'
import { useSelector } from 'react-redux'

const NavMobile = ({ handleButton, statusButton }) => {
  const { profile } = useSelector(state => state.profile)
  const Stylehover = 'hover:text-spoify-lighGray'
  const nodeRef = useRef(null)

  return (
    <div className='md:hidden'>
      <CSSTransition
        in={statusButton}
        timeout={300}
        classNames={'menu-animation'}
        unmountOnExit
        nodeRef={nodeRef}
      >

        <div ref={nodeRef} className={'flex w-screen h-screen fixed top-0 left-0 z-10 bg-spoify-black overflow-hidden menu-bg-enter titles'}>
          <button className='w-7 aspect-square bg-spoify-black absolute right-8 top-6' onClick={handleButton}>
            <AiOutlineClose
              className='text-spoify-white w-full h-full'
            />
          </button>
          <nav className="p-10">
            <ul
              className='w-full mt-10 text-spoify-white text-2xl font-bold'
              onClick={handleButton}
            >
              <li className='h-14 flex items-center'>
                <Link href={'#'} className={`${Stylehover} flex gap-4`}>
                  <span>Ver cuenta</span>
                  <ImArrowUpRight2 className='font-bold w-6' />
                </Link>
              </li>
              <li className='h-14 flex items-center'>
                <Link href={`/user/${profile.id}`} className={`${Stylehover}`}> <span>Perfil</span></Link>
              </li>
              <li className='h-14 flex items-center' onClick={logout}>
                <Link href={'/login'} className={`${Stylehover}`}> <span>Cerrar sesion</span></Link>
              </li>
              <li className='h-16 w-4 flex items-center'>
                <span className='border border-solid border-white my-8 w-full'></span>
              </li>
              <div className="text-lg">
                <li className='h-12 flex items-center'>
                  <Link href={'#'}> <span className={`${Stylehover}`}>Ayuda</span></Link>
                </li>
                <li className='h-12 flex items-center'>
                  <Link href={'#'}> <span className={`${Stylehover}`}>Descargar</span></Link>
                </li>
                <li className='h-12 flex items-center'>
                  <Link href={'#'}> <span className={`${Stylehover}`}>Privacidad</span></Link>
                </li>
                <li className='h-12 flex items-center'>
                  <Link href={'#'}> <span className={`${Stylehover}`}>Condiciones</span></Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </CSSTransition>
    </div>
  )
}

NavMobile.propTypes = {
  handleButton: PropTypes.func,
  statusButton: PropTypes.bool
}

export default NavMobile
