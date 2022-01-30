import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { useSelector, useDispatch } from "react-redux";

const initialState = {
  color1: null,
  color2: null,
  deg: 90,
  radial: false,
  radialPosition: "center",
  rgbaColor1: null,
  rgbaColor2: null,
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
    setDeg: (state, action) => {
      state.deg = action.payload;
    },
    setRadial: (state, action) => {
      state.radial = action.payload;
    },
    setRadialPosition: (state, action) => {
      state.radialPosition = action.payload;
    },
    setRgbaColor1: (state, action) => {
      state.rgbaColor1 = action.payload;
    },
    setRgbaColor2: (state, action) => {
      state.rgbaColor2 = action.payload;
    },
  },
});

export default colorSlice.reducer;

export const useColors = () => {
  const dispatch = useDispatch();
  const { radial, color1, color2, deg, radialPosition, rgbaColor1, rgbaColor2 } = useSelector(
    (state) => state.colors
  );

  const setColors = (payload) => {
    dispatch(colorSlice.actions.setColors(payload));
  };

  const setDeg = (payload) => {
    dispatch(colorSlice.actions.setDeg(payload));
  };

  const setRadial = (payload) => {
    dispatch(colorSlice.actions.setRadial(payload));
  };

  const setRadialPosition = (payload) => {
    dispatch(colorSlice.actions.setRadialPosition(payload));
  };

  const setRgbaColor1 = (payload) => {
    dispatch(colorSlice.actions.setRgbaColor1(payload));
  };

  const setRgbaColor2 = (payload) => {
    dispatch(colorSlice.actions.setRgbaColor2(payload));
  };
  return {
    radial,
    color1,
    color2,
    radialPosition,
    deg,
    rgbaColor1,
    rgbaColor2,
    setColors,
    setDeg,
    setRadial,
    setRgbaColor2,
    setRgbaColor1,
    setRadialPosition,
  };
};
