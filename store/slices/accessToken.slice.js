import { createSlice } from '@reduxjs/toolkit'

export const accessTokenSlice = createSlice({
  name: 'accessToken',
  initialState: '',
  reducers: {
    setToken: (state, action) => {
      return action.payload
    }
  }
})

export const { setToken } = accessTokenSlice.actions

export default accessTokenSlice.reducer
