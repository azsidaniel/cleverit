import { FC } from 'react';

import {
  DescriptionContainer,
  DescriptionText,
  DirectorYearContainer,
  MovieImage,
  MoviesBottomContainer,
  MoviesStyled,
} from './Movies.styled';

type MoviesProps = {
  filteredMovies: {
    coverImage: string;
    description: string;
    director: string;
    id: string;
    title: string;
    year: number;
  }[];
};

export const Movies: FC<MoviesProps> = ({ filteredMovies }) => {
  const renderMovies = () => {
    return filteredMovies.map(movie => {
      return (
        <MoviesStyled key={movie.id}>
          <MovieImage src={movie.coverImage} />
          <DescriptionContainer>
            <DescriptionText>{movie.description}</DescriptionText>
          </DescriptionContainer>
          <MoviesBottomContainer>
            <span>{movie.title}</span>
            <DirectorYearContainer>
              <span>{movie.director}</span>
              <span>{movie.year}</span>
            </DirectorYearContainer>
          </MoviesBottomContainer>
        </MoviesStyled>
      );
    });
  };
  return <>{renderMovies()}</>;
};
