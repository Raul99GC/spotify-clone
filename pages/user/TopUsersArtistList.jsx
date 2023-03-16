import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { getUserstopArtist } from '../../spotify/spotifyLinks'
import { ArtistCard } from '../../components/ArtistCard/ArtistCard'

export const TopUsersArtistList = ({ accesToken }) => {
  const [artistList, setArtistList] = useState([])

  const getData = async () => {
    try {
      const response = await getUserstopArtist(accesToken, 9)
      setArtistList(response.data.items)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='w-full p-8'>
      <div className="flex justify-between mb-4">
        <div className="">
          <h2 className='font-bold text-2xl'>Artistas más escuchados este mes</h2>
          <p className='text-spoify-lighGray text-sm'>Solo visibles para ti</p>
        </div>
        <Link
          href={'#'}
          className='text-spoify-lighGray font-bold'
        >
          Mostrar todos
        </Link>
      </div>
      <ul className='w-full h-64 flex flex-wrap gap-4 overflow-y-hidden'>
        {
          artistList.map(artist => (
            <ArtistCard
              key={artist.id}
              artist={artist}
            />
          ))
        }
      </ul>
    </div>
  )
}

TopUsersArtistList.propTypes = {
  accesToken: PropTypes.string
}
