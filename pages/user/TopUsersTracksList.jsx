import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { UserTracksList } from '../../components/UserTracksList/UserTracksList'
import { getUserstopTracks } from '../../spotify/spotifyLinks'

export const TopUsersTracksList = ({ token }) => {
  const [tracksList, setTracksList] = useState([])

  const getTracksList = async () => {
    try {
      const response = await getUserstopTracks(token, 4)
      // console.log(response.data?.items)
      setTracksList(response.data?.items)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTracksList()
  }, [])

  return (
    <section className='w-full px-8 flex flex-col mt-10'>
      <div className="w-full flex justify-between mb-4">
        <div className="flex flex-col">
          <Link
            href={'#'}
            className={'font-bold text-2xl hover:underline'}
          >
            Canciones más escuchadas este mes
          </Link>
          <span className='text-spoify-lighGray text-sm font-bold'>Solo visible para ti</span>
        </div>
        <Link
          href={'#'}
          className={'text-spoify-lighGray font-bold'}
        >
          Mostrar todos
        </Link>
      </div>
      {
        tracksList.map(track => (

          <UserTracksList
            key={track.id}
            trackInf={track}
            token={token}
          />
        ))
      }
    </section>
  )
}

TopUsersTracksList.propTypes = {
  token: PropTypes.string
}
