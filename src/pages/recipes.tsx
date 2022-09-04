import styled from "styled-components";
import { CocktailRaw } from "../model/cocktail";
import * as drinks from "../data/cocktails";

const DrinkContainer = styled.div`
  margin-bottom: 1em;
  border: 1px solid black;
  padding: 1em;
`;
const DrinkTitle = styled.div`
  font-weight: bold;
`;

const DrinkInstructions = ({ drink }: { drink: CocktailRaw }) => (
  <DrinkContainer>
    <DrinkTitle>{drink.name}</DrinkTitle>
    <div>{drink.description}</div>
    <div>
      <div>Ingredients:</div>
      <ul>
        {drink.ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {"  "} - {ingredient.name} ({ingredient.value} {ingredient.unit})
          </li>
        ))}
      </ul>
    </div>
    <div>
      {drink.notes} ({drink.servingGlassType})
    </div>
  </DrinkContainer>
);

const RecipesContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 600px;
  margin: 0 auto;
`;

export const Recipes = () => (
  <RecipesContainer>
    {Object.values(drinks).map((d) => (
      <DrinkInstructions drink={d} />
    ))}
  </RecipesContainer>
);
