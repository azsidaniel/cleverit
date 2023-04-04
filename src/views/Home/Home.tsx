import { type FC, useEffect, useState, ReactElement } from 'react';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { MoviesContainer } from '../../components/MoviesContainer/MoviesContainer';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { Subtitle } from '../../components/Subtitle/Subtitle';
import { Title } from '../../components/Title/Title';
import { useDebounce } from '../../hooks/useDebounce';
import { HomeStyled } from './Home.styled';

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

  const renderPagination = () => {
    if (!filteredMovies) {
      return;
    }

    const toBeRendered: ReactElement[] = [];

    const conditionToRenderPageNumbers = (i: number, page: number) => {
      if (
        (page <= 3 && i <= 5) ||
        (page >= Math.ceil(filteredMovies.length / itensPerPage) - 1 &&
          i >= Math.ceil(filteredMovies.length / itensPerPage) - 4)
      ) {
        return true;
      }

      if (i >= page - 2 && i <= page + 2) {
        return true;
      }

      return false;
    };

    filteredMovies.forEach((_movie, index) => {
      const newIndex = index + 1;

      if (
        newIndex <= Math.ceil(filteredMovies.length / itensPerPage) &&
        conditionToRenderPageNumbers(newIndex, page)
      ) {
        toBeRendered.push(
          <li
            style={{
              fontWeight: page === newIndex ? 'bold' : 'normal',
              cursor: 'pointer',
            }}
            onClick={() => setPage(newIndex)}
          >
            {newIndex}
          </li>,
        );
      }
    });

    return toBeRendered;
  };

  return (
    <HomeStyled>
      <Title title="CleverIT Movies" />
      <Subtitle subtitle="Discover the perfect movie to enjoy with yout popcorn &#127871;" />
      <SearchInput setSearchInput={setSearchInput} />
      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '25px',
          position: 'relative',
        }}
      >
        {!filteredMovies ? null : (
          <MoviesContainer
            filteredMovies={filteredMovies.slice(
              (page - 1) * itensPerPage,
              page * itensPerPage,
            )}
          />
        )}
      </div>

      <ul
        style={{
          listStyleType: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 0,
          gap: '10px',
          position: 'absolute',
          bottom: '15px',
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <MdKeyboardDoubleArrowLeft
          onClick={() => {
            if (page === 1) {
              return;
            }
            setPage(1);
          }}
          color={page === 1 ? '#696969' : 'white'}
        />
        <MdKeyboardArrowLeft
          onClick={() => {
            if (page === 1) {
              return;
            }
            setPage(prevPage => prevPage - 1);
          }}
          color={page === 1 ? '#696969' : 'white'}
        />
        {renderPagination()}
        <MdKeyboardArrowRight
          onClick={() => {
            if (
              filteredMovies &&
              page === Math.ceil(filteredMovies.length / itensPerPage)
            ) {
              return null;
            }
            setPage(prevPage => prevPage + 1);
          }}
          color={
            filteredMovies &&
            page === Math.ceil(filteredMovies.length / itensPerPage)
              ? '#696969'
              : 'white'
          }
        />
        <MdKeyboardDoubleArrowRight
          onClick={() => {
            if (
              filteredMovies &&
              page === Math.ceil(filteredMovies.length / itensPerPage)
            ) {
              return null;
            }
            setPage(Math.ceil(filteredMovies!.length / itensPerPage));
          }}
          color={
            filteredMovies &&
            page === Math.ceil(filteredMovies.length / itensPerPage)
              ? '#696969'
              : 'white'
          }
        />
      </ul>
    </HomeStyled>
  );
};
