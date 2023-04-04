import { FC } from 'react';
import { SeachContainer, SearchInputStyled } from './SearchInput.styed';
import { FaSearch } from 'react-icons/fa';

type SearchInputProps = {
  setSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const SearchInput: FC<SearchInputProps> = ({ setSearchInput }) => {
  return (
    <SeachContainer>
      <SearchInputStyled
        type="search"
        onChange={e => setSearchInput(e.target.value)}
      />
      <FaSearch />
    </SeachContainer>
  );
};
