import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useColors } from "../../Slice/colorSlice";
import { Button, CardBody, Row, Col } from "reactstrap";

const Directions = (props) => {
  const { radial, setDeg, setRadialPosition, radialPosition } = useColors();

  const ButtonRadial = styled(Button)`
    display: ${(props) => (props ? "block" : "none")};
  `;

  const theme = {
    bg: "blue",
  };

  return (
    <ContainerDirections>
      <SubTitle>Direction</SubTitle>
      <CardBody>
        <Row>
          <Col xs={4}>
            <Button
              size="lg"
              outline
              color="secondary"
              type="button"
              onClick={() =>
                radial ? setRadialPosition("top left") : setDeg(315)
              }
            >
              1
            </Button>
          </Col>
          <Col xs={4}>
            <Button
              size="lg"
              outline
              color="secondary"
              type="button"
              onClick={() => setDeg(0)}
            >
              2
            </Button>
          </Col>
          <Col xs={4}>
            <Button
              size="lg"
              outline
              color="secondary"
              type="button"
              onClick={() => (radial ? setRadialPosition("top") : setDeg(45))}
            >
              3
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Button
              size="lg"
              outline
              color="secondary"
              type="button"
              onClick={() =>
                radial ? setRadialPosition("top right") : setDeg(90)
              }
            >
              1
            </Button>
          </Col>
          <Col xs={4}>
            {radial && (
              <ButtonRadial
                size="lg"
                outline
                color="secondary"
                type="button"
                onClick={() => setRadialPosition("center")}
              >
                5
              </ButtonRadial>
            )}
          </Col>
          <Col xs={4}>
            <Button
              size="lg"
              outline
              color="secondary"
              type="button"
              onClick={() =>   radial ? setRadialPosition("botton right") :setDeg(135)}
            >
              3
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Button
              size="lg"
              outline
              color="secondary"
              type="button"
              onClick={() =>  radial ? setRadialPosition("botton") :setDeg(180)}
            >
              1
            </Button>
          </Col>
          <Col xs={4}>
            <Button
              size="lg"
              outline
              color="secondary"
              type="button"
              onClick={() =>  radial ? setRadialPosition("botton left") :setDeg(225)}
            >
              2
            </Button>
          </Col>
          <Col xs={4}>
            <Button
              size="lg"
              outline
              color="secondary"
              type="button"
              onClick={() =>  radial ? setRadialPosition("left") :setDeg(270)}
            >
              3
            </Button>
          </Col>
        </Row>
      </CardBody>
    </ContainerDirections>
  );
};

const SubTitle = styled.div`
  font-size: 15px;
  font-family: "Merriweather", serif;
`;

const ContainerDirections = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Directions;
