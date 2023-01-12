import { createSlice } from '@reduxjs/toolkit'
// import useSpotify from '../../hooks/useSpotify'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: 'Raul Cordoba',
  reducers: {
    setProfile: (state, action) => {
      return action.payload
    }
  }
})

export const { setProfile } = profileSlice.actions

export default profileSlice.reducer
