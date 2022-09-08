import { createSlice } from '@reduxjs/toolkit'
import { defaultState } from '../const'

export const stateSlice = createSlice({
  name: 'main',
  initialState: { ...defaultState },
  reducers: {
    setCurrentStep(state, { payload }) {
      state.currentStep = payload
    },
    setEnteredPrice(state, { payload }) {
      state.enteredPrice = payload
    },
    setEnteredProductId(state, { payload }) {
      state.enteredProductId = payload
    },
    setChoosedProduct(state, { payload }) {
      state.choosedProduct = payload
    },
    setFirstInfo(state, { payload }) {
      state.firstInfo = payload
    },
    setSecondInfo(state, { payload }) {
      state.secondInfo = payload
    },
    setResetState() {
      return defaultState
    },
  },
  extraReducers: (builder) => {},
})

export const {
  setCurrentStep,
  setEnteredPrice,
  setEnteredProductId,
  setChoosedProduct,
  setFirstInfo,
  setSecondInfo,
  setResetState,
} = stateSlice.actions

export default stateSlice.reducer
