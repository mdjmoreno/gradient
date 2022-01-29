import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "reactstrap";
import styled, { ThemeProvider } from "styled-components";

const BackgroundColor = () => {
  const color1 = useSelector((state) => state.colors.color1);
  const color2 = useSelector((state) => state.colors.color2);
  const deg = useSelector((state)=> state.colors.deg);
  const theme = {
    bg: "blue",
  };

  const CardColors = styled(Card)`
    background-color: ${(props) => (color1 ? color1 : props.theme.bg)};
    background-image: linear-gradient(${deg}deg, ${color1} 0%, ${color2} 74%);
    flex: 1;
  `;

  return (
    <ThemeProvider theme={theme}>
      <CardColors />
    </ThemeProvider>
  );
};

export default BackgroundColor;
