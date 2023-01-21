import { NextResponse } from 'next/server'
import cookie from 'cookie'

import { getQueryFromURL } from './utils/urlQueries'

export async function middleware (req, res) {
  const response = NextResponse
  const nextCookies = NextResponse.next()

  const url = req.url
  const { access_token: accesToken, refresh_token: refreshToken } = getQueryFromURL(url)

  const accesTokenKey = 'spotify_access_token'
  const refreshTokenKey = 'spotify_refresh_token'
  // const timeStampKey = 'spotify_token_timestamp'

  const localRefreshToken = req.cookies.get(refreshTokenKey)
  const localAccessToken = req.cookies.get(accesTokenKey)
  // const localTimeStamp = req.cookies.get(timeStampKey)

  if ((localRefreshToken === undefined || localAccessToken === undefined) && accesToken && refreshToken) {
    const cookies = [
      cookie.serialize(accesTokenKey, accesToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60 * 60,
        sameSite: 'strict',
        path: '/'
      }),
      cookie.serialize(refreshTokenKey, refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        path: '/'
      })
    ]
    nextCookies.headers.set('Set-Cookie', cookies)
    // response.redirect('/')
    return nextCookies
  }

  if (!localRefreshToken || localRefreshToken === undefined) {
    return response.redirect(new URL('/login', req.url))
  }

  return nextCookies
}

// Supports both a single string value or an array of matchers
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login).*)'
  ]
}
