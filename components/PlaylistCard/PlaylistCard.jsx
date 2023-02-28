import Image from 'next/image'
import Link from 'next/link'
import propTypes from 'prop-types'
import React from 'react'

import { FiMusic } from 'react-icons/fi'
import { ButtonPlay } from '../ButtonPlay/ButtonPlay'

export const PlaylistCard = ({ playlist, screenStatus }) => {
  const isImage = playlist.images.length > 0
  const indexMobile = playlist.images.length - 1
  const mobileImageLink = playlist.images[indexMobile]?.url
  const deskImageLink = playlist.images[0]?.url

  return (
    <li>
      <Link
        href={'#'}
        className='group w-full h-[60px] flex items-center text-base font-bold gap-4 rounded-xl relative md:w-[180px] md:h-64 md:flex-col md:p-4 md:bg-spoify-cardsBackground md:hover:bg-spoify-gray md:relative md:overflow-hidden'
      >
        {isImage && (
          <div className='md:w-full relative overflow-hidden'>
            <Image src={screenStatus ? mobileImageLink : deskImageLink}
              width={screenStatus ? 60 : 600}
              height={screenStatus ? 60 : 600}
              priority={true}
              alt={playlist.name}
              className='aspect-square md:w-full '
            />
            <ButtonPlay />
          </div>
        )}
        {!isImage && (
          <div
            className='w-[60px] rounded-md aspect-square flex items-center justify-center bg-spoify-hoverGray md:w-full md:relative md:overflow-hidden'
          >
            <FiMusic
              className='text-2xl md:text-6xl'
            />
            <ButtonPlay />

          </div>
        )}

        <span className=' w-auto md:w-full h-auto truncate-2 '>{playlist.name}</span>
      </Link>
    </li>
  )
}

PlaylistCard.propTypes = {
  playlist: propTypes.object,
  screenStatus: propTypes.bool
}
