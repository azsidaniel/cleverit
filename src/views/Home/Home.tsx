import { FC, useEffect, useState } from 'react';
import { MoviesContainer } from '../../components/MoviesContainer/MoviesContainer';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { Subtitle } from '../../components/Subtitle/Subtitle';
import { Title } from '../../components/Title/Title';
import { HomeStyled } from './Home.styled';

export type Movie = {
  coverImage: string;
  description: string;
  director: string;
  id: string;
  title: string;
  year: number;
};

export const Home: FC<null> = () => {
  const [moviesRaw, setMoviesRaw] = useState<undefined | Movie[]>();
  const [filteredMovies, setFilteredMovies] = useState<undefined | Movie[]>();
  const [searchInput, setSearchInput] = useState<string | undefined>();

  const fetchMovies = () => {
    fetch('http://localhost:8080/movies')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setMoviesRaw(data);
        setFilteredMovies(data);
      });
  };

  useEffect(() => {
    fetchMovies();

    return () => {
      setMoviesRaw(undefined);
    };
  }, []);

  return (
    <HomeStyled>
      <Title title="CleverIT Movies" />
      <Subtitle subtitle="Discover the perfect movie to enjoy with yout popcorn &#127871;" />
      <SearchInput />
      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '25px',
          justifyContent: 'center',
        }}
      >
        {!filteredMovies ? null : (
          <MoviesContainer filteredMovies={filteredMovies} />
        )}
      </div>
    </HomeStyled>
  );
};
