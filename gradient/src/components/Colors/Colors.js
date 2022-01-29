import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setColors } from "../../Slice/colorSlice";
import styled, { ThemeProvider } from "styled-components";
import { Button, CardBody, Row, Col, Card } from "reactstrap";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const Colors = () => {
  const color1 = useSelector((state) => state.colors.color1);
  const color2 = useSelector((state) => state.colors.color2);
  const [pickerColor, setPickerColor] = useColor("hex", "#121212");
  const [openPickerA, setOpenPickerA] = useState(false);
  const [openPickerB, setOpenPickerB] = useState(false);
  const clickRef = useRef(null);
  const dispatch = useDispatch();

  const theme = {
    bg: "blue",
  };

  const randomColors = () => {
    const colors = [...Array(2)].map(() => {
      return `#` + Math.floor(Math.random() * 16777215).toString(16);
    });
    dispatch(setColors(colors));
  };

  const CardColorA = styled.button`
    width: 80px;
    height: 32px;
    background: ${(props) => (color1 ? color1 : props.theme.bg)};
  `;

  const CardColorB = styled.button`
    width: 80px;
    height: 32px;
    background: ${(props) => (color2 ? color2 : props.theme.bg)};
  `;

  useEffect(() => {
    dispatch(setColors(pickerColor.hex));
  }, pickerColor.hex);

  useEffect(() => {
    let handler = (event) => {
      if (!clickRef.current.contains(event.target)) {
        if (openPickerA) {
          setOpenPickerA(false);
        }
        setOpenPickerB(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <CardBody>Colors</CardBody>

      <ButtonContainer ref={clickRef}>
        <ThemeProvider theme={theme}>
          <CardColorA onClick={() => setOpenPickerA(true)} size="lg">
            {" "}
            A
          </CardColorA>
          {openPickerA && (
            <ColorPicker
              width={456}
              height={228}
              color={pickerColor}
              onChange={setPickerColor}
              hideHSV
              dark
            />
          )}

          <CardColorB onClick={() => setOpenPickerB(true)} size="lg">
            {" "}
            B
          </CardColorB>
          {openPickerB && (
            <ColorPicker
              width={456}
              height={228}
              color={pickerColor}
              onChange={setPickerColor}
              hideHSV
              dark
            />
          )}
        </ThemeProvider>
        <ButtonRandom onClick={randomColors} outline color="secondary">
          Random
        </ButtonRandom>{" "}
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-around;
`;

const ButtonRandom = styled(Button)`
  width: 80px;
  height: 32px;
`;

export default Colors;
