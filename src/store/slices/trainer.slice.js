import { createSlice } from "@reduxjs/toolkit";

export const trainerSlices = createSlice({
  name: 'trainer',
  initialState: '',
  reducers: {
    setTrainer: (state, action) => action.payload
  }
})

export const { setTrainer } = trainerSlices.actions;

export default trainerSlices.reducer;
