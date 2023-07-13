import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: Number
}

const initialState = {
  value: 0
} as InitialState

export const count = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<Number>) => {
      state.value = action.payload
    }
  }
})

export const { setValue } = count.actions
export default count.reducer