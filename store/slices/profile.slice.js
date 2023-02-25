import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: true,
  profile: {},
  error: null
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload
      state.isLoading = false
      state.error = null
    },
    setIsProfileLoading: (state, action) => {
      return action.payload
    }

  }
})

export const { setProfile, profileIsLoading } = profileSlice.actions

export default profileSlice.reducer
