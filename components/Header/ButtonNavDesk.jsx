import Image from 'next/image'
import PropTypes from 'prop-types'
import React from 'react'
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx'
import { useSelector } from 'react-redux'

export const ButtonNavDesk = ({ handleButton, statusButton }) => {
  const { profile, isLoading } = useSelector(state => state.profile)
  return (
    <>
      {isLoading && null}
      {!isLoading &&
        <button onClick={handleButton} className=' justify-end items-center p-3 hidden xl:flex'>
          <div className="bg-spoify-black w-auto min-w-[90px] h-8 rounded-full p-[2px] gap-2 flex">
            <div className="w-7 h-full overflow-hidden rounded-full">
              <Image
                src={profile?.images[0].url}
                width={500}
                height={500}
                className={'w-full h-auto rounded-full'}
                alt={'image profile of '}
              />
            </div>
            <span className='text-xs font-bold m-auto'>{profile.display_name}</span>
            {!statusButton
              ? <RxTriangleUp
                className={'text-2xl h-full'}
              />
              : <RxTriangleDown
                className={'text-2xl h-full'}
              />}
          </div>
        </button>
      }

    </>
  )
}

ButtonNavDesk.propTypes = {
  handleButton: PropTypes.func,
  statusButton: PropTypes.bool
}
