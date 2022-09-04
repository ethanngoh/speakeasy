import { CocktailRaw } from "../model/cocktail";
import * as waterRecipe from "./nonAlcoholic/water.json";
import * as oolongTeaRecipe from "./nonAlcoholic/oolongTea.json";

export const water = waterRecipe as CocktailRaw;
export const oolongTea = oolongTeaRecipe as CocktailRaw;
