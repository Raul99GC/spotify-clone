import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataToken: {}
}

export const accessTokenSlice = createSlice({
  name: 'accessToken',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.dataToken = action.payload
    }
  }
})

export const { setToken } = accessTokenSlice.actions

export default accessTokenSlice.reducer
