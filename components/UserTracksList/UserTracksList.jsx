import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'
import { BsFillSuitHeartFill, BsThreeDots } from 'react-icons/bs'
import { miliToSeconds } from '../../utils/miliToMinutes'

export const UserTracksList = ({ trackInf }) => {
  console.log(trackInf)

  const trackName = trackInf.name
  const trackImage = trackInf?.album.images[2].url
  const trackAlbum = trackInf.album.name
  const trackArtist = trackInf.artists[0].name
  const timeTrack = miliToSeconds(trackInf.duration_ms)

  return (
    <ul className='w-full'>
      <li className='group px-4 w-full h-14 rounded-md hover:bg-spoify-gray'>
        <div className='grid grid-cols-[16px_minmax(120px,4fr)_minmax(120px,_1fr)] lg:grid-cols-[16px_minmax(120px,4fr)_2fr_minmax(120px,_1fr)] gap-x-4' >
          <span className='flex items-center'>1</span>
          <div className="flex">
            <Image
              src={trackImage}
              width={'40'}
              height={'40'}
              alt={'a'}
              className='mr-4 w-auto h-auto'
            />
            <div className="h-full w-full overflow-hidden">
              <p className='font-bold w-full h-[50%] truncate'>{trackName}</p>
              <Link href={'#'} className='text-spoify-lighGray hover:underline hover:text-spoify-white'>{trackArtist}</Link>
            </div>
          </div>
          <Link href={'#'} className="hidden lg:flex items-center hover:underline hover:text-spoify-white">{trackAlbum}</Link>
          <div className="w-full flex justify-between items-center">
            <button>
              <BsFillSuitHeartFill
                size={16}
                className={'text-spoify-green'}
              />
            </button>
            <p>{timeTrack}</p>
            <button>
              <BsThreeDots
                size={16}
                className={'opacity-0 group-hover:opacity-100'}
              />
            </button>
          </div>
        </div>
      </li>
    </ul>
  )
}

UserTracksList.propTypes = {
  trackInf: PropTypes.object.isRequired
}
