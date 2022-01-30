import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useColors } from "../../Slice/colorSlice";
import { Button, CardBody, Row, Col } from "reactstrap";
import {ArrowUpLeft, ArrowUp, ArrowUpRight, ArrowRight, ArrowDownRight, ArrowDown, ArrowDownLeft, ArrowLeft, ArrowRepeat } from '@styled-icons/bootstrap'


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
            <ArrowUpLeft width={15}/>
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
              <ArrowUp width={15}/>
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
              <ArrowUpRight width={15}/>
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
              <ArrowLeft width={15}/>
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
                <ArrowRepeat width={15}/>
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
              <ArrowRight width={15}/>
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
              <ArrowDownLeft width={15}/>
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
              <ArrowDown width={15}/>
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
              <ArrowDownRight width={15}/>
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
