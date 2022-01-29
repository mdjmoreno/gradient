import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const initialState = {
  color1: null,
  color2: null,
  deg: 90
};


export const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    setColors: (state, action) => {
      if (typeof action.payload == "string") {
        state.color1 = action.payload;
      } else {
        state.color1 = action.payload[0];
        state.color2 = action.payload[1];
      }
    },
    setDeg: (state, action)=>{
      state.deg = action.payload
    }
  },
});

export const { setColors, setDeg } = colorSlice.actions;

export default colorSlice.reducer;
