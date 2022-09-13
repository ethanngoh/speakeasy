import styled from "@emotion/styled";
import { CocktailRaw } from "../model/cocktail";

import * as alcoholicDrinks from "../data/cocktails";
import * as nonAlcoholicDrinks from "../data/nonAlcoholic";
import { SearchFilter, SelectOption } from "../components/searchFilter";
import { FancyBorder } from "../components/fancyBorder";
import { HEADING, BODY, SUBBODY, Separator } from "../components/text";
import { useMemo, useState } from "react";
import { MultiValue } from "react-select";
import Select from "react-select/dist/declarations/src/Select";
import { debug } from "console";

const DrinkCategory = styled.div`
  font-family: "Libre Baskerville";
  font-weight: 700;
  font-size: 1.5rem;
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
      <HEADING>{drink.name}</HEADING>
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

  const [filters, setFilters] = useState<MultiValue<SelectOption>>([]);

  const filterDrinksList = (
    unfilteredDrinks: CocktailRaw[],
    isAlcoholic: boolean,
    filters: MultiValue<SelectOption>
  ): CocktailRaw[] => {
    const ans = unfilteredDrinks.filter((drink) => {
      return filters.every((filter) => {
        // This is the heart and soul of the filtering logic.
        // We determine here if a drink passes the filter.
        if (filter.value === "non-alcoholic") {
          return !isAlcoholic;
        }

        if (filter.value === "alcoholic") {
          return isAlcoholic;
        }

        if (drink.ingredients.map((i) => i.name).includes(filter.label)) {
          return true;
        }

        if (drink.name === filter.label) {
          return true;
        }

        return false;
      });
    });

    return ans;
  };

  const filteredADrinks = useMemo(
    () => filterDrinksList(aDrinks, true, filters),
    [filters, aDrinks]
  );

  const filteredNADrinks = useMemo(
    () => filterDrinksList(naDrinks, false, filters),
    [filters, naDrinks]
  );

  return (
    <FancyBorder>
      <LOGO></LOGO>
      <DrinksList>
        <>
          <SearchFilter
            alcoholicDrinks={aDrinks}
            nonAlcoholicDrinks={naDrinks}
            setFilter={(f) => {
              setFilters(f);
            }}
          />
          <DrinkCategory>Alcoholic</DrinkCategory>
          <Separator />
          {filteredADrinks.map((drink) => (
            <Drink key={drink.id} drink={drink}></Drink>
          ))}
          <DrinkCategory>Non-Alcoholic</DrinkCategory>
          <Separator />
          {filteredNADrinks.map((drink) => (
            <Drink key={drink.id} drink={drink}></Drink>
          ))}
        </>
      </DrinksList>
    </FancyBorder>
  );
};
