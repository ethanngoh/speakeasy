export interface Ingredient {
  name: string;
  unit: string;
  value: number;
}

export interface CocktailRaw {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  servingGlassType: string;
  notes: string;
}
