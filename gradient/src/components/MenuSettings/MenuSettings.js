import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "reactstrap";
import Directions from "../Directions/Directions";
import Colors from "../Colors/Colors";
import OutputFormat from "../OutputFormat/OutputFormat";
import { useColors } from "../../Slice/colorSlice";

const MenuSettings = () => {
  const { setRadial } = useColors();
  return (
    <MenuLeft>
      <Title>CSS GRADIENT GENERATOR</Title>
      <WraperStyle>
        <SubTitle>Style</SubTitle>
        <ButtonContainer>
          <Button color="secondary" size="lg" onClick={() => setRadial(false)}>
            Linear
          </Button>
          <Button color="secondary" size="lg" onClick={() => setRadial(true)}>
            Radial
          </Button>
        </ButtonContainer>
      </WraperStyle>
      <WraperDirections>
        <Directions />
      </WraperDirections>
      <Colors />
      <OutputFormat />
    </MenuLeft>
  );
};

const MenuLeft = styled.div`
  background: white;
  width: 320px;
  padding: 30px;
`;
const Title = styled.div`
  font-size: 30px;
  font-family: arial;
  width: 80px;
  font-weight: bold;
`;
const WraperStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const SubTitle = styled.div`
  justify-content: center;
  font-size: 15px;
  font-family: "Merriweather", serif;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-around;
`;
const WraperDirections = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MenuSettings;
