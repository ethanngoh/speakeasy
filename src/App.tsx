import "./App.css";
import styled from "styled-components";
import { useBackgroundColor } from "./hooks/useBackgroundColor";
import { Cocktail } from "./model/cocktail";

import * as drinks from "./data/cocktails";

const GOLD = "#EABC2A";
const BLUE = "#0B0D18";

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  min-height: calc(100vh - 90px);
  max-width: 400px;
  width: calc(100vw-90px);
  box-sizing: content-box;

  color: white;
  text-align: center;

  margin: 20px;
  padding: 20px;
  border: 4px solid ${GOLD};
  outline-offset: 5px;
  outline: 4px solid ${GOLD};
`;

const H2 = styled.div`
  font-family: "Limelight", cursive;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.4rem;
`;

const BODY = styled.div`
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  font-family: "Comfortaa", cursive;
`;

const SUBBODY = styled.div`
  line-height: 1rem;
  font-size: 0.8rem;
  font-family: "Comfortaa", cursive;
`;

const LOGO = styled.img`
  content: url("/img/logo.svg");
  height: 250px;
  margin-bottom: 1rem;
`;

const DrinkContainer = styled.div`
  margin-bottom: 2.5rem;
`;

const Drink = ({ drink }: { drink: Cocktail }) => (
  <DrinkContainer>
    <H2>{drink.name}</H2>
    <BODY>{drink.description}</BODY>
    <SUBBODY>{drink.ingredients.map((i) => i.name).join(", ")}</SUBBODY>
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
    <ContentContainer>
      <Content>
        <LOGO></LOGO>
        <DrinksList>
          {Object.values(drinks).map((drink) => (
            <Drink key={drink.id} drink={drink}></Drink>
          ))}
        </DrinksList>
      </Content>
    </ContentContainer>
  );
};

export default App;
