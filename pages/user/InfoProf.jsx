import React, { useEffect } from 'react'
import propTypes from 'prop-types'
import Image from 'next/image'
import { useSelector } from 'react-redux'

export const InfoProf = ({ userProfile, userPlaylist, id }) => {
  const { profile: currentProf } = useSelector(state => state.profile)
  const userName = userProfile.display_name
  const followers = userProfile.followers.total
  const { items } = userPlaylist
  const totalList = items?.filter(item => item.owner.display_name === userName).length || 12
  const infoStyles = 'hidden text-spoify-lighGray text-sm font-bold before:w-1 before:h-1 before:bg-spoify-white before:rounded-full before:mr-1 md:flex md:items-center'

  useEffect(() => {
    id === currentProf.id && console.log(currentProf.id)
  }, [])

  return (
    <section className='px-4 pb-4 pt-16 bg-gradient-to-b to-spoify-darkestGray overflow-hidden from-red-500 text-white w-full h-auto flex flex-col gap-3 '>
      <div className="w-full flex gap-3">
        <div className="w-[190px] min-w-[112px] aspect-square rounded-full overflow-hidden relative xl:w-[232px] xl:h-[232px] ">
          <Image
            src={userProfile.images[0].url}
            width={500}
            height={500}
            className={'w-full absolute top-1/2 -translate-y-1/2'}
            alt={'image profile of '}
            priority={true}
          />
        </div>
        <div className="text-spoify-white font-bold w-auto flex flex-col justify-center md:justify-end">
          <h2 className='hidden md:flex '>Perfil</h2>
          <p className=' text-3xl truncate-2 xl:text-8xl xl:pb-4 mb-3'>{userName}</p>
          <div className="flex gap-1">
            {totalList && <span className="hidden text-spoify-lighGray text-sm font-bold md:flex">{totalList} Listas pulicas</span>}
            {followers && <span className={infoStyles}>{followers} Seguidores</span>}
            <span className={infoStyles}>Sigues a {16} usuarios</span>
          </div>
        </div>
      </div>
      <div className="">
        <span className="text-spoify-lighGray text-sm font-bold md:hidden">{totalList} listas pulicas</span>
      </div>
    </section>
  )
}

InfoProf.propTypes = {
  userProfile: propTypes.object,
  userPlaylist: propTypes.object,
  id: propTypes.string
}
