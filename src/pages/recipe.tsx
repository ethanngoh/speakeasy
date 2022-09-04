import { useParams } from "react-router-dom";
import { FancyBorder } from "../components/fancyBorder";

import * as alcoholicDrinks from "../data/cocktails";
import * as nonAlcoholicDrinks from "../data/nonAlcoholic";
import { CocktailRaw } from "../model/cocktail";

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

  return <FancyBorder>{appropriateDrink.name}</FancyBorder>;
};
