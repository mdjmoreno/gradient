import React, { useState } from "react";
import styled from "styled-components";
import { Button, CardBody, Row, Col } from "reactstrap";
import { useColors } from "../../Slice/colorSlice";

const OutputFormat = () => {
  const url = window.location.href;
  const { color1, color2, deg, radial, radialPosition, rgbaColor1, rgbaColor2 } = useColors();
  const [formatOutput, setFormatOutput] = useState("hex");

  const printerRadial = `
  background: ${color1}
  background-image: radial-gradient(ellipse at ${radialPosition},${color1}, ${color2})
  `;

  const printerRadialRgba = `
  background: ${rgbaColor1}
  background-image: radial-gradient(ellipse at ${radialPosition},${rgbaColor1}, ${rgbaColor2})
  `;

  const printerLineal = `
  background: ${color1}
  background-image: linear-gradient(${deg}deg, ${color1} 0%, ${color2} 74%)
  `;

  const printerLinealRgba = `
  background: ${rgbaColor1}
  background-image: linear-gradient(${deg}deg, ${rgbaColor1} 0%, ${rgbaColor2} 74%)
  `;

  const validationGetCss = () => {
    if (radial && formatOutput == "hex") {
      return printerRadial;
    } else if (radial && formatOutput == "rgba") {
      return printerRadialRgba;
    }

    if (!radial && formatOutput == "hex") {
      return printerLineal;
    } else if (!radial && formatOutput == "rgba") {
      return printerLinealRgba;
    }
  };

  return (
    <>
      <CardBody>Output Format</CardBody>
      <ButtonContainer>
        <ButtonHex
          outline
          color="secondary"
          onClick={() => setFormatOutput("hex")}
        >
          Hex
        </ButtonHex>{" "}
        <ButtonHex
          outline
          color="secondary"
          onClick={() => setFormatOutput("rgba")}
        >
          Rgba
        </ButtonHex>{" "}
      </ButtonContainer>
      <ButonExport>
        <ButtonGetCSS
          outline
          color="secondary"
          onClick={() => navigator.clipboard.writeText(validationGetCss())}
        >
          Get CSS
        </ButtonGetCSS>{" "}
        <ButtonGetCSS
          outline
          color="secondary"
          onClick={() => navigator.clipboard.writeText(url)}
        >
          Get share link
        </ButtonGetCSS>{" "}
      </ButonExport>
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 35px;
`;

const ButtonHex = styled(Button)`
  margin-right: 10px;
  width: 95px;
`;

const ButonExport = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonGetCSS = styled(Button)`
  &:nth-child(2) {
    margin-top: 8px;
  }
`;

export default OutputFormat;
