import { Cocktail } from "../model/cocktail";
import * as waterRecipe from "./nonAlcoholic/water.json";
import * as oolongTeaRecipe from "./nonAlcoholic/oolongTea.json";

export const water = waterRecipe as Cocktail;
export const oolongTea = oolongTeaRecipe as Cocktail;
