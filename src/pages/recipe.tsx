import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { FancyBorder } from "../components/fancyBorder";
import Div100vh from "react-div-100vh";
import { BODY, HEADING, SUBBODY, Separator } from "../components/text";

import * as alcoholicDrinks from "../data/cocktails";
import * as nonAlcoholicDrinks from "../data/nonAlcoholic";
import { CocktailRaw } from "../model/cocktail";

const VerticallyCentered = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 200px);
  align-items: center;
`;

const RecipeForDrink = ({ drink }: { drink: CocktailRaw }) => {
  return (
    <Div100vh>
      <FancyBorder>
        <VerticallyCentered>
          <HEADING>{drink.name}</HEADING>
          <BODY>{drink.description}</BODY>
          <Separator />
          <SUBBODY>
            <div style={{ fontSize: "1rem" }}>
              <div style={{ marginBottom: ".75rem" }}>
                Serve in {drink.servingGlassType}.
              </div>
              {drink.ingredients.map((ingredient) => (
                <div>
                  {ingredient.name} ({ingredient.value} {ingredient.unit})
                </div>
              ))}
              <div style={{ marginTop: ".75rem" }}>{drink.notes}</div>
            </div>
          </SUBBODY>
        </VerticallyCentered>
      </FancyBorder>
    </Div100vh>
  );
};

export const Recipe = () => {
  let params = useParams();
  const { cocktailId } = params;

  const aOptions = Object.values(alcoholicDrinks).filter(
    (d) => d.id === cocktailId
  );

  const naOptions = Object.values(nonAlcoholicDrinks).filter(
    (d) => d.id === cocktailId
  );

  const allOptions = aOptions.concat(naOptions);
  if (allOptions.length !== 1) {
    return <>ID CONFLICT</>;
  }

  const appropriateDrink: CocktailRaw = allOptions[0];

  return <RecipeForDrink drink={appropriateDrink} />;
};
