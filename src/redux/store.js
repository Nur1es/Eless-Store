import { configureStore } from '@reduxjs/toolkit'
import elessReducer from './elessSlice'

export const store = configureStore({
  reducer: {
    eless: elessReducer,
  },
})