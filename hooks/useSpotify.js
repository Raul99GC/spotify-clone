import axios from 'axios'

const useSpotify = () => {
  const EXPIRATION_TIME = 3600 * 1000
  const setTimestamp = () => localStorage.setItem('spotify_token_timestamp', Date.now())
  const setLocalAccessToken = token => {
    localStorage.setItem('spotify_access_token', token)
    setTimestamp()
  }

  const setRefreshToken = token => localStorage.setItem('spotify_refresh_token', token)

  const getLocalAccessToken = () => localStorage.getItem('spotify_access_token')
  const getTokenTimestamp = () => localStorage.getItem('spotify_token_timestamp')
  const getLocalRefreshToken = () => localStorage.getItem('spotify_refresh_token')

  const logout = () => {
  // * Limpiar todas los items de localStorage
    window.localStorage.removeItem('spotify_token_timestamp')
    window.localStorage.removeItem('spotify_access_token')
    window.localStorage.removeItem('spotify_refresh_token')

    // * ir a homepage
    window.location.replace('http://localhost:3000/login')
  }

  const hasTokenExpired = () => {
    const currentDate = Date.now()
    // return getTokenTimestamp + EXPIRATION_TIME >= currentDate
    return currentDate - EXPIRATION_TIME > getTokenTimestamp
  }

  const refreshAccessToken = async () => {
    try {
      if (!getLocalRefreshToken || getLocalRefreshToken === 'undefined') {
        console.log('no refresh token available')
        logout()
      }
      const { data } = await axios.get(`http://localhost:8000/refresh_token?refresh_token=${getLocalRefreshToken}`)
      const { access_token: accesToken } = data
      setLocalAccessToken(accesToken)
      console.log('hay un reload')
      location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  const getAccessToken = (url) => {
    const urlParams = new URLSearchParams(url)
    const hasError = urlParams.get('error')
    const accesToken = urlParams.get('access_token')

    if (hasError) {
      console.error(hasError)
      console.log('11111111111111111111111111111111111111111111111111')
      refreshAccessToken()
    }

    // ? si hay un token de acceso valido en el URL querry paramas, el usuario esta accediendo por primera vez
    if ((!getLocalAccessToken() || getLocalAccessToken() === 'undefined' || !getLocalRefreshToken() || getLocalRefreshToken() === 'undefined') && accesToken) {
      setLocalAccessToken(accesToken)
      const refreshToken = urlParams.get('refresh_token')
      setRefreshToken(refreshToken)
    }

    if ((!getTokenTimestamp() || getTokenTimestamp() === 'undefined') && hasTokenExpired) {
      console.warn('Access token has expired, refreshing...')
      refreshAccessToken()
    }

    return getLocalAccessToken()
  }

  return {
    getAccessToken,
    logout,
    refreshAccessToken
  }
}

export default useSpotify
