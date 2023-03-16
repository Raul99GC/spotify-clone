import React from 'react'
import Proptypes from 'prop-types'
import { Provider } from 'react-redux'
import store from '../store'

import '../styles/globals.css'

import { useRouter } from 'next/router'
import { Header, Sidebar } from '../components'
import { IsMobile } from '../components/IsMobile/IsMobile'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router
  const isLoginPage = pathname === '/login'
  return (
    <Provider store={store}>
      <div className="bg-spoify-darkestGray min-h-screen text-gray-300 overflow-hidden">
      <IsMobile />
        {!isLoginPage && <Header />}
        {!isLoginPage && <Sidebar />}
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: Proptypes.any,
  pageProps: Proptypes.any
}
