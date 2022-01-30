import React, { useEffect, useRef, useState } from "react";
import { useColors } from "../../Slice/colorSlice";
import styled, { ThemeProvider } from "styled-components";
import { Button, CardBody, Row, Col, Card } from "reactstrap";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import hexToRgba from "hex-to-rgba";

const Colors = () => {
  const { setColors, color1, color2, setRgbaColor1, setRgbaColor2 } =
    useColors();
  const [pickerColor, setPickerColor] = useColor("hex", "#121212");
  const [openPickerA, setOpenPickerA] = useState(false);
  const [openPickerB, setOpenPickerB] = useState(false);
  const clickRef = useRef(null);

  const theme = {
    bg: "blue",
  };

  const randomColors = () => {
    const colors = [...Array(2)].map(() => {
      return `#` + Math.floor(Math.random() * 16777215).toString(16);
    });
    setColors(colors);
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
    setColors(pickerColor.hex);
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

  useEffect(() => {
    if (color1 != null) {
      setRgbaColor1(hexToRgba(color1));
    }
    if (color2 != null) {
      setRgbaColor2(hexToRgba(color2));
    }
  }, [color1, color2]);
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
