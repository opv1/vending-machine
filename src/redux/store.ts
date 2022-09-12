import { configureStore } from '@reduxjs/toolkit'
import stateSlice from './stateSlice'

export const store = configureStore({
  reducer: {
    main: stateSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
