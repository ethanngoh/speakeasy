import Select, { ActionMeta, MultiValue } from "react-select";
import styled from "@emotion/styled";
import { CocktailRaw } from "../model/cocktail";
import { COLORS, GRAY_RANGE } from "../colors";

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
export type SelectOption = { value: string; label: string };
export type SetFilterType = (filters: MultiValue<SelectOption>) => void;

export const SearchFilter = ({
  alcoholicDrinks,
  nonAlcoholicDrinks,
  setFilter,
}: {
  alcoholicDrinks: CocktailRaw[];
  nonAlcoholicDrinks: CocktailRaw[];
  setFilter: SetFilterType;
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

  const customStyle = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: `1px solid ${GRAY_RANGE[300]}`,
      color: state.isSelected ? GRAY_RANGE[700] : GRAY_RANGE[100],
      backgroundColor: GRAY_RANGE[800],
      padding: "0.75rem",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: COLORS.BLUE,
      border: `1px solid ${GRAY_RANGE[0]}`,
    }),
    menuList: (provided: any, state: any) => ({
      ...provided,
      padding: 0,
      border: `1px solid ${GRAY_RANGE[300]}`,
    }),
  };

  return (
    <SearchFilterContainer>
      <Select
        isMulti
        name="filters"
        options={options}
        placeholder="Type drink keywords"
        onChange={(
          newValue: MultiValue<SelectOption>,
          actionMeta: ActionMeta<SelectOption>
        ) => {
          setFilter(newValue);
        }}
        styles={customStyle}
      />
    </SearchFilterContainer>
  );
};
