import React from "react";
import { Card } from "reactstrap";
import styled, { ThemeProvider } from "styled-components";
import { useColors } from "../../Slice/colorSlice";

const BackgroundColor = () => {
  const {color1, color2, deg, radial, radialPosition}= useColors();
  const theme = {
    bg: "blue",
  };

  const CardColors = styled(Card)`
    background-color: ${(props) => (color1 ? color1 : props.theme.bg)};
    background-image: ${radial
      ? `radial-gradient(ellipse at ${radialPosition},${color1}, ${color2})`
      : `linear-gradient(${deg}deg, ${color1} 0%, ${color2} 74%)`};
    flex: 1;
  `;


  return (
    <ThemeProvider theme={theme}>
      <CardColors />
    </ThemeProvider>
  );
};

export default BackgroundColor;
