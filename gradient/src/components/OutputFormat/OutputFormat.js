import React from "react";
import styled from "styled-components";
import { Button, CardBody, Row, Col } from "reactstrap";

const OutputFormat = () => {
  return (
    <>
      <CardBody>Output Format</CardBody>
      <ButtonContainer>
          <ButtonHex outline color="secondary">
            Hex
          </ButtonHex>{" "}
        <ButtonHex outline color="secondary">
          Rgba
        </ButtonHex>{" "}
      </ButtonContainer>
      <ButonExport>
        <ButtonGetCSS outline color="secondary">
          Rgba
        </ButtonGetCSS>{" "}
        <ButtonGetCSS outline color="secondary">
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
