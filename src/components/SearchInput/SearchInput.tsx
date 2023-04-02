import { FC } from "react";
import { SeachContainer, SearchInputStyled } from "./SearchInput.styed";
import { FaSearch } from "react-icons/fa";

type SearchInputProps = {};

export const SearchInput: FC<SearchInputProps> = () => {
  return (
    <SeachContainer>
      <SearchInputStyled type="search" />
      <FaSearch />
    </SeachContainer>
  );
};
