import "./App.css";
import styled from "styled-components";
import { useBackgroundColor } from "./hooks/useBackgroundColor";

const GOLD = "#FFD700";
const BLUE = "#0B0D18";

const Content = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  box-sizing: content-box;

  color: white;
  text-align: center;

  margin: 20px;
  padding: 20px;
  border: 4px solid ${GOLD};
  outline-offset: 5px;
  outline: 4px solid ${GOLD};
`;

const H1 = styled.div`
  font-family: "Limelight", cursive;
  font-size: 3rem;
`;

const H2 = styled.div`
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 1.25rem;
`;

const BODY = styled.div`
  font-size: 0.75rem;
  font-family: "Libre Baskerville", serif;
`;

const LOGO = styled.img`
  content: url("/img/logo.svg");
  width: 100%;
`;

const App = () => {
  useBackgroundColor(BLUE);
  return (
    <Content>
      <LOGO></LOGO>
      <H1>Menu</H1>
      <H2>Drink Category</H2>
      <BODY>Lorem ipsum</BODY>
    </Content>
  );
};

export default App;
