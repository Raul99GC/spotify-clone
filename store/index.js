import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { profile, accessToken, isMobile } from './slices'

export default configureStore({
  reducer: {
    profile,
    accessToken,
    isMobile
  },
  middleware: [thunk]
})
