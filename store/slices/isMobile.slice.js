import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: false
}

export const isMobileSlice = createSlice({
  name: 'isMobile',
  initialState,
  reducers: {
    changeResolutionState: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { changeResolutionState } = isMobileSlice.actions

export default isMobileSlice.reducer
