import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { ButtonPlay } from '../ButtonPlay/ButtonPlay'

export const ArtistCard = ({ artist }) => {
  const imageLink = artist?.images[0].url || ''
  const widthImage = artist?.images[0].width
  const heightImage = artist?.images[0].height
  const name = artist?.name

  return (
    <li>
      <Link
        href={'#'}
        className='group w-full h-[60px] flex items-center gap-4 rounded-xl relative md:w-[180px] md:h-64 md:flex-col md:p-4 md:bg-spoify-cardsBackground md:hover:bg-spoify-gray md:relative md:overflow-hidden'
      >
        <div className='md:w-full relative overflow-hidden'>
          <Image
            src={imageLink}
            width={widthImage}
            height={heightImage}
            className={'rounded-full'}
            alt={name}
          />
          <ButtonPlay />
        </div>
        <div className="flex flex-col">
          <p className=' w-auto md:w-full h-auto text-base font-bold truncate-2 '>{name}</p>
          <span className='text-spoify-lighGray'>Artista</span>
        </div>
      </Link>
    </li>
  )
}

ArtistCard.propTypes = {
  artist: PropTypes.object
}
