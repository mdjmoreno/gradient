import { configureStore } from '@reduxjs/toolkit'
import colorReducer from '../Slice/colorSlice'

export default configureStore({
  reducer: {
    colors: colorReducer,
  },
})