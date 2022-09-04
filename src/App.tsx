import "./App.css";
import styled from "styled-components";
import { useBackgroundColor } from "./hooks/useBackgroundColor";
import { Cocktail } from "./model/cocktail";

import * as drinks from "./data/cocktails";

const GOLD = "#FFD700";
const BLUE = "#0B0D18";

const Content = styled.div`
  min-height: calc(100vh - 90px);
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
  font-size: 1.5rem;
`;

const H2 = styled.div`
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 1rem;
`;

const BODY = styled.div`
  font-size: 0.75rem;
  font-family: "Libre Baskerville", serif;
`;

const LOGO = styled.img`
  content: url("/img/logo.svg");
  width: 100%;
`;

const DrinkContainer = styled.div`
  width: 70vw;
  margin-bottom: 2em;
`;
const Drink = ({ drink }: { drink: Cocktail }) => (
  <DrinkContainer>
    <H2>{drink.name}</H2>
    <BODY>{drink.description}</BODY>
  </DrinkContainer>
);

const DrinksList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  useBackgroundColor(BLUE);
  return (
    <Content>
      <LOGO></LOGO>
      <DrinksList>
        {Object.values(drinks).map((drink) => (
          <Drink key={drink.id} drink={drink}></Drink>
        ))}
      </DrinksList>
    </Content>
  );
};

export default App;
