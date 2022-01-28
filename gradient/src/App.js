import BackgroundColor from "./components/BackgroundColor/BackgroundColor";
import MenuSettings from "./components/MenuSettings/MenuSettings";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <MenuSettings></MenuSettings>
      <BackgroundColor></BackgroundColor>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background: red;
  justify-content: space-between;
`;

export default App;
