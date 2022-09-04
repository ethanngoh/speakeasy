import Select from "react-select";
import styled from "styled-components";
import { Cocktail } from "../model/cocktail";

const filterOptions = [
  { value: "non-alcoholic", label: "Non-Alcoholic" },
  { value: "alcoholic", label: "Alcoholic" },
  { value: "gin", label: "Gin" },
  { value: "whiskey", label: "Whiskey" },
  { value: "vodka", label: "Vodka" },
  { value: "tequila", label: "Tequila" },
  { value: "rum", label: "Rum" },
];

const SearchFilterContainer = styled.div`
  width: 75%;
  margin-bottom: 2rem;
  color: #000;
`;

export const SearchFilter = ({
  alcoholicDrinks,
  nonAlcoholicDrinks,
}: {
  alcoholicDrinks: Cocktail[];
  nonAlcoholicDrinks: Cocktail[];
}) => {
  const options = [
    ...filterOptions,
    ...alcoholicDrinks.map((d) => {
      return {
        value: d.name,
        label: d.name,
      };
    }),
    ...nonAlcoholicDrinks.map((d) => {
      return {
        value: d.name,
        label: d.name,
      };
    }),
  ];

  return (
    <SearchFilterContainer>
      <Select
        isMulti
        name="filters"
        options={options}
        className="drink-filter-select"
        classNamePrefix="select"
        placeholder="Type drink keywords"
      />
    </SearchFilterContainer>
  );
};
