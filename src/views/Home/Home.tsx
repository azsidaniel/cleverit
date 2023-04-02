import { useState } from "react";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { Title } from "../../components/Title/Title";
import { HomeStyled } from "./Home.styled";

export const Home = () => {
  const [searchInput, setSearchInput] = useState<string | undefined>();

  return (
    <HomeStyled>
      <Title title="CleverIT Movies" />
      <Subtitle subtitle="Discover the perfect movie to enjoy with yout popcorn &#127871;" />
      <SearchInput />
    </HomeStyled>
  );
};
