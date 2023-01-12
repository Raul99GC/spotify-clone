import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { profile, accessToken } from './slices'

export default configureStore({
  reducer: {
    profile,
    accessToken
  },
  middleware: [thunk]
})
