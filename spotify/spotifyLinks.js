import axios from 'axios'

const URL = 'https://api.spotify.com/v1'
const headers = accestoken => {
  return {
    Authorization: `Bearer ${accestoken}`,
    'Content-Type': 'application/json'
  }
}

/*
  * Get Current User's Profile
  ? Get detailed profile information about the current user (including the current user's username).
  ** https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile
*/
export const getCurrentUser = (accestoken) => axios.get(`${URL}/me`, { headers: headers(accestoken) })

/*
  * Get User's Profile
  ? Get public profile information about a Spotify user.
  ** https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-profile
*/
export const getUserProfile = (accestoken, userId) => axios.get(`${URL}/users/${userId}`, { headers: headers(accestoken) })

/*
  * Get User's Playlists
  ? Get a list of the playlists owned or followed by a Spotify user.
  ** https://developer.spotify.com/documentation/web-api/reference/#/operations/get-list-users-playlists
*/
export const getCurrentUserplaylist = (accestoken, userId) => axios.get(`${URL}/me`, { headers: headers(accestoken) })

/*
  * Get User's Playlists
  ? Get a list of the playlists owned or followed by a Spotify user.
  ** https://developer.spotify.com/documentation/web-api/reference/#/operations/get-list-users-playlists
*/
export const getUserplaylist = (accestoken, userId) => axios.get(`${URL}/users/${userId}/playlists?limit=50`, { headers: headers(accestoken) })

/*
  * Get User's Playlists
  ? Get a list of the playlists owned or followed by a Spotify user.
  ** https://developer.spotify.com/documentation/web-api/reference/#/operations/get-list-users-playlists
*/
export const getFollowersArtirst = (accestoken, userId) => axios.get(`${URL}/users/${userId}/playlists?limit=50`, { headers: headers(accestoken) })

/*
  * Get User's artist Top Items
  ? Get the current user's top artists based on calculated affinity.
  ** https://developer.spotify.com/documentation/web-api/reference/#/operations/get-list-users-playlists
*/
export const getUserstopArtist = (accestoken, limit = 50) => axios.get(`${URL}/me/top/artists/?limit=${limit}&time_range=short_term`, { headers: headers(accestoken) })

/*
  * Get User's artist Top Items
  ? Get the current user's top tracks based on calculated affinity.
  ** https://developer.spotify.com/documentation/web-api/reference/#/operations/get-list-users-playlists
*/
export const getUserstopTracks = (accestoken, limit = 50) => axios.get(`${URL}/me/top/tracks/?limit=${limit}`, { headers: headers(accestoken) })

/*
  * Get User's artist Top Items
  ? Get the current user's top tracks based on calculated affinity.
  ** https://developer.spotify.com/documentation/web-api/reference/#/operations/get-list-users-playlists
*/
export const getTrack = (accestoken, id) => axios.get(`${URL}/tracks/0HqZX76SFLDz2aW8aiqi7G`, { headers: headers(accestoken) })
