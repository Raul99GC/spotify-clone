import React from 'react'
import PropTypes from 'prop-types'
import { getUserplaylist, getUserProfile } from '../../spotify/spotifyLinks'
import { InfoProf } from './InfoProf'
import { PlaylistCard } from '../../components/PlaylistCard/PlaylistCard'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { TopUsersArtistList } from './TopUsersArtistList'
import { TopUsersTracksList } from './TopUsersTracksList'
import { Footer } from '../../components/Footer/Footer'
import { ProfileCard } from '../../components/ProfileCrad/ProfileCard'

const User = ({ id, userProfile, userPlaylist, token }) => {
  const publicList = userPlaylist.items.filter(playlist => playlist.owner.display_name === userProfile.display_name)
  const { status } = useSelector(state => state.isMobile)

  return (
    <>
      <main className='w-full md:w-[calc(100%-256px)] md:ml-64 xl:w-[calc(100%-384px)] xl:ml-[384px]'>
        <InfoProf userProfile={userProfile} userPlaylist={userPlaylist} id={id} />
        {
          !status &&
          <>
            <TopUsersArtistList
              accesToken={token}
            />
            <TopUsersTracksList token={token} />
          </>
        }

        <div className="w-full px-8 mb-10 mt-10">
          <div className="w-full mb-4 flex justify-between font-bold">
            <p className=''>Listas publicas</p>
            <Link className='hidden md:flex' href={'#'}>Mostrar Todos</Link>
          </div>
          <ul className='flex flex-col gap-4 overflow-y-hidden md:h-64 md:flex-row flex-wrap'>
            {
              publicList.map(playlist => (
                <PlaylistCard
                  key={playlist.id}
                  playlist={playlist}
                  screenStatus={status}
                />
              ))
            }
          </ul>
        </div>

        <ul className="w-full px-8 flex flex-col my-10">
          {
            !status && <ProfileCard />
          }
        </ul>
      </main>
      <Footer />
    </>
  )
}

User.propTypes = {
  id: PropTypes.string,
  userProfile: PropTypes.object,
  userPlaylist: PropTypes.object,
  token: PropTypes.string
}

export async function getServerSideProps (context) {
  const id = context.params.id
  const token = context.req.cookies.spotify_access_token || null
  let userProfile = {}
  let userPlaylist = {}
  try {
    const response = await getUserProfile(token, id)
    userProfile = response.data
  } catch (error) {
    console.log(error)
  }

  try {
    const response = await getUserplaylist(token, id)
    userPlaylist = response.data
  } catch (error) {
    console.log(error)
  }

  return {
    props: {
      id,
      userProfile,
      userPlaylist,
      token
    }
  }
}

export default User
