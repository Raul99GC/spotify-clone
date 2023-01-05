import React from 'react'
import Proptypes from 'prop-types'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <div className="bg-spoify-darkestGray min-h-screen text-gray-300">
        <main className='snap-none'>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: Proptypes.any,
  pageProps: Proptypes.any
}
