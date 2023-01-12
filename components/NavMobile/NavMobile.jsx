import Link from 'next/link'
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { AiOutlineClose } from 'react-icons/ai'
import { CSSTransition } from 'react-transition-group'

const NavMobile = ({ handleButton, statusButton }) => {
  const Stylehover = 'hover:text-spoify-lighGray'
  const nodeRef = useRef(null)

  return (
    <>
      <CSSTransition
        in={statusButton}
        timeout={300}
        classNames={'menu-animation'}
        unmountOnExit
        nodeRef={nodeRef}
      >

        <div ref={nodeRef} className={'flex w-screen h-screen fixed top-0 left-0 z-10 bg-spoify-black overflow-hidden menu-bg-enter titles'}>
          <button className='w-7 aspect-square bg-spoify-black absolute right-4 top-6' onClick={handleButton}>
            <AiOutlineClose
              className='text-spoify-white w-full h-full'
            />
          </button>
          <nav className="p-10">
            <ul className='w-full mt-10 text-spoify-white text-2xl font-bold'>
              <li className='h-14 flex items-center'>
                <Link href={'#'} className={`${Stylehover}`}> <span>Ver cuenta</span></Link>
              </li>
              <li className='h-14 flex items-center'>
                <Link href={'#'} className={`${Stylehover}`}> <span>Perfil</span></Link>
              </li>
              <li className='h-14 flex items-center'>
                <Link href={'#'} className={`${Stylehover}`}> <span>Cerrar sesion</span></Link>
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
    </>
  )
}

NavMobile.propTypes = {
  handleButton: PropTypes.func,
  statusButton: PropTypes.bool
}

export default NavMobile
