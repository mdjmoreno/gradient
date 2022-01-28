import React from "react";
import styled from "styled-components";
import { Button, CardBody, Row, Col } from "reactstrap";

const Directions = () => {
  return (
    <ContainerDirections>
      <SubTitle>Direction</SubTitle>
      <CardBody>
        <Row>
          <Col xs={4}>
            <Button size="lg" outline color="secondary" type="button">
              1
            </Button>
          </Col>
          <Col xs={4}>
            <Button  size="lg"outline color="secondary" type="button">
              2
            </Button>
          </Col>
          <Col xs={4}>
            <Button size="lg" outline color="secondary" type="button">
              3
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Button size="lg" outline color="secondary" type="button">
              1
            </Button>
          </Col>
          <Col xs={4}>
            <Button size="lg" outline color="secondary" type="button">
              2
            </Button>
          </Col>
          <Col xs={4}>
            <Button size="lg" outline color="secondary" type="button">
              3
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Button  size="lg" outline color="secondary" type="button">
              1
            </Button>
          </Col>
          <Col xs={4}>
            <Button  size="lg" outline color="secondary" type="button">
              2
            </Button>
          </Col>
          <Col xs={4}>
            <Button size="lg"  outline color="secondary" type="button">
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
