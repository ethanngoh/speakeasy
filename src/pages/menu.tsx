import styled from "styled-components";
import { CocktailRaw } from "../model/cocktail";

import * as alcoholicDrinks from "../data/cocktails";
import * as nonAlcoholicDrinks from "../data/nonAlcoholic";
import { GRAY_RANGE } from "../colors";
import { SearchFilter } from "../components/searchFilter";
import { FancyBorder } from "../components/fancyBorder";

const DrinkCategory = styled.div`
  font-family: "Libre Baskerville";
  font-weight: 700;
  font-size: 1.5rem;
`;

const Separator = styled.hr`
  margin: 1rem 0 1.25rem 0;
  width: 33%;
  border: 0;
  border-top: 1px solid white;
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
  color: ${GRAY_RANGE[100]};
`;

const SUBBODY = styled.div`
  line-height: 1rem;
  font-size: 0.8rem;
  font-family: "Comfortaa", cursive;
  color: ${GRAY_RANGE[200]};
`;

const LOGO = styled.img`
  content: url("/img/logo.svg");
  height: 250px;
  margin-bottom: 1rem;
`;

const DrinkContainer = styled.div`
  margin-bottom: 2.5rem;
`;

const UnstyledLink = styled.a`
  &,
  &:visited,
  &:hover,
  &:active {
    font-style: inherit;
    color: inherit;
    background-color: transparent;
    font-size: inherit;
    text-decoration: none;
    font-variant: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-family: inherit;
  }
`;

const Drink = ({ drink }: { drink: CocktailRaw }) => (
  <DrinkContainer>
    <UnstyledLink href={`/#/recipes/${drink.id}`}>
      <H2>{drink.name}</H2>
    </UnstyledLink>
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

export const Menu = () => {
  const aDrinks = Object.values(alcoholicDrinks);
  const naDrinks = Object.values(nonAlcoholicDrinks);
  return (
    <FancyBorder>
      <LOGO></LOGO>
      <DrinksList>
        <SearchFilter
          alcoholicDrinks={aDrinks}
          nonAlcoholicDrinks={naDrinks}
          setFilter={() => {}}
        />
        <DrinkCategory>Alcoholic</DrinkCategory>
        <Separator />
        {aDrinks.map((drink) => (
          <Drink key={drink.id} drink={drink}></Drink>
        ))}
        <DrinkCategory>Non-Alcoholic</DrinkCategory>
        <Separator />
        {naDrinks.map((drink) => (
          <Drink key={drink.id} drink={drink}></Drink>
        ))}
      </DrinksList>
    </FancyBorder>
  );
};
