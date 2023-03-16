import cookie from 'cookie'

export default (req, res) => {
  const cookies = [
    cookie.serialize('spotify_access_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      expires: new Date(0),
      sameSite: 'strict',
      path: '/'
    }),
    cookie.serialize('spotify_refresh_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      expires: new Date(0),
      sameSite: 'strict',
      path: '/'
    })
  ]

  res.setHeader('Set-Cookie', cookies)

  res.statusCode = 200
  res.json({ success: true })
}
