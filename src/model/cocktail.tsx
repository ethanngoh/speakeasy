export interface Ingredient {
  name: string;
  unit: string;
  value: number;
}

export interface Cocktail {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  servingGlassType: string;
  notes: string;
}
