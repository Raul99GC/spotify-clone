import React from 'react'
import Proptypes from 'prop-types'
import { Provider } from 'react-redux'
import store from '../store'

import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <div className="bg-spoify-darkestGray min-h-screen text-gray-300 overflow-hidden">
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: Proptypes.any,
  pageProps: Proptypes.any
}
