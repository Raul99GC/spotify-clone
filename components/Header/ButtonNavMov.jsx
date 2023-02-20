import React from 'react'
import PropTypes from 'prop-types'

import { AiOutlineSetting } from 'react-icons/ai'

const ButtonNavMov = ({ handleButton, statusButton }) => {
  return (
    <>

      <button onClick={handleButton} className=' flex justify-end items-center p-3'>
        <AiOutlineSetting
          className='text-2xl font-bold transla xl:hidden'
        />
      </button>

    </>
  )
}

ButtonNavMov.propTypes = {
  handleButton: PropTypes.func,
  statusButton: PropTypes.bool
}

export default ButtonNavMov
