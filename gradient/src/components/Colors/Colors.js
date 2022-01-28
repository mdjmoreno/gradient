import React from "react";
import styled from "styled-components";
import { Button, CardBody, Row, Col } from "reactstrap";

const Colors = () => {
  return (
    <>
      <CardBody>Colors</CardBody>
      <ButtonContainer>
          <Button color="secondary" size="lg">{' '}
            A
          </Button>
          <Button color="secondary" size="lg">{' '}
            B
          </Button>
          <Button  outline color="secondary">Random</Button>{' '}
        </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-around;
`;

export default Colors;
