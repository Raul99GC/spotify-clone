import React from 'react'
import Proptypes from 'prop-types'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

MyApp.propTypes = {
  Component: Proptypes.any,
  pageProps: Proptypes.any
}
