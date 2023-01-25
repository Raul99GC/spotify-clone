import { NextResponse } from 'next/server'

export async function middleware (req, res) {
  const response = NextResponse
  const nextCookies = NextResponse.next()
  const url = req.url
  const localRefreshToken = req.cookies.get('spotify_refresh_token')

  // nextCookies.headers.set('Set-Cookie', cookies)

  if (localRefreshToken && url === 'http://localhost:3000/login') {
    return response.redirect(new URL('/', req.url))
  }

  if ((!localRefreshToken || localRefreshToken === undefined) && url !== 'http://localhost:3000/login') {
    return response.redirect(new URL('/login', req.url))
  }

  return nextCookies
}

// Supports both a single string value or an array of matchers
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
