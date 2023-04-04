import { type FC, useEffect, useState } from 'react';
import { Movies } from '../../components/Movies/Movies';
import { NoDataMessage } from '../../components/NoDataMessage/NoDataMessage';

import { Pagination } from '../../components/Pagination/Pagination';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { Subtitle } from '../../components/Subtitle/Subtitle';
import { Title } from '../../components/Title/Title';
import { useDebounce } from '../../hooks/useDebounce';
import { HomeStyled, MoviesContainer } from './Home.styled';

export type Movie = {
  coverImage: string;
  description: string;
  director: string;
  id: string;
  title: string;
  year: number;
};

export const Home: FC<undefined> = () => {
  const itensPerPage = 8;
  const [page, setPage] = useState(1);
  const [moviesRaw, setMoviesRaw] = useState<undefined | Movie[]>();
  const [filteredMovies, setFilteredMovies] = useState<undefined | Movie[]>();
  const [searchInput, setSearchInput] = useState<string | undefined>();
  const debouncedSearchInput = useDebounce(searchInput, 350);

  const fetchMovies = () => {
    fetch('http://localhost:8080/movies')
      .then(async response => response.json())
      .then(data => {
        setMoviesRaw(data);
        setFilteredMovies(data);
      });
  };

  useEffect(() => {
    if (!moviesRaw) {
      return;
    }

    setPage(1);
    if (!debouncedSearchInput) {
      setFilteredMovies(moviesRaw);
      return;
    }

    setFilteredMovies(
      moviesRaw.filter(movie => {
        return (
          movie.director.includes(debouncedSearchInput) ||
          movie.title.includes(debouncedSearchInput)
        );
      }),
    );
  }, [debouncedSearchInput]);

  useEffect(() => {
    fetchMovies();

    return () => {
      setMoviesRaw(undefined);
    };
  }, []);

  if (!filteredMovies) {
    return null;
  }

  return (
    <HomeStyled>
      <Title title="CleverIT Movies" />
      <Subtitle subtitle="Discover the perfect movie to enjoy with yout popcorn &#127871;" />
      <SearchInput setSearchInput={setSearchInput} />
      <MoviesContainer>
        {!filteredMovies.length ? (
          <NoDataMessage />
        ) : (
          <Movies
            filteredMovies={filteredMovies.slice(
              (page - 1) * itensPerPage,
              page * itensPerPage,
            )}
          />
        )}
      </MoviesContainer>
      <Pagination
        page={page}
        setPage={setPage}
        filteredMovies={filteredMovies}
        itensPerPage={itensPerPage}
      />
    </HomeStyled>
  );
};
