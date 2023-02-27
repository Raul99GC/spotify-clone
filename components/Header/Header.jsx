import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '../../store/slices/accessToken.slice'
import { setProfile } from '../../store/slices/profile.slice'
import { useRouter } from 'next/router'

import { getCurrentUser } from '../../spotify/spotifyLinks'

import NavMobile from '../NavMobile/NavMobile'
import NavDesktop from '../NavDesktop/NavDesktop'
import ButtonNavMov from './ButtonNavMov'
import { refreshToken } from '../../spotify/spotifyTokens'
import { ButtonNavDesk } from './ButtonNavDesk'

const Header = () => {
  const router = useRouter()
  const isMain = router.asPath
  const dispatch = useDispatch()
  const [statusButton, setStatusButton] = useState(false)
  const { dataToken } = useSelector(state => state.accessToken)
  const { timeStamp, token } = dataToken

  const handleButton = () => {
    setStatusButton(!statusButton)
  }

  const getToken = async () => {
    try {
      const response = await axios('http://localhost:3000/api/getToken')
      const data = response.data
      return data
    } catch (err) {
      console.log(err)
      return 'error'
    }
  }

  const setProf = () => {
    if ((Date.now() - (3600 * 1000) > timeStamp) || timeStamp === undefined) {
      console.log('aqui')
      refreshToken()
        .then(res => {
          console.log(res)
        })
      // router.reload()
    }
    getCurrentUser(token)
      .then(res => {
        dispatch(setProfile(res.data))
      })
  }

  useEffect(() => {
    getToken()
      .then((res) => {
        dispatch(setToken(res))
      })
  }, [])

  useEffect(() => {
    if (token && token !== undefined) {
      setProf()
    }
  }, [token])

  return (
    <header className='fixed w-full h-14 top-0 left-0 flex justify-center xl:ml-96 xl:w-[calc(100%-384px)] xl:h-16 xl:fixed'>

      <div className="h-full w-full px-3 flex justify-end items-center">
        {isMain === '/' && <ButtonNavMov handleButton={handleButton} statusButton={statusButton} />}
        <ButtonNavDesk handleButton={handleButton} statusButton={statusButton} />
      </div>

      <NavMobile handleButton={handleButton} statusButton={statusButton} />
      {statusButton && <NavDesktop handleButton={handleButton} />}
    </header>
  )
}

export default Header
