import { FC } from 'react';
import { Movie } from '../../views/Home/Home';
import {
  DescriptionContainer,
  MovieImage,
  MoviesContainerStyled,
  TitleAuthorContainer,
} from './MoviesContainer.styled';

type MoviesContainerProps = {
  filteredMovies: {
    coverImage: string;
    description: string;
    director: string;
    id: string;
    title: string;
    year: number;
  }[];
};

export const MoviesContainer: FC<MoviesContainerProps> = ({
  filteredMovies,
}) => {
  const renderMovies = () => {
    return filteredMovies.map(movie => {
      return (
        <MoviesContainerStyled key={movie.id}>
          <MovieImage src={movie.coverImage} />
          <DescriptionContainer>
            <span style={{ height: '100%', display: 'flex' }}>
              {movie.description}
            </span>
          </DescriptionContainer>
          <TitleAuthorContainer>
            <span>
              {movie.title} ({movie.year})
            </span>
            <span>{movie.director}</span>
          </TitleAuthorContainer>
        </MoviesContainerStyled>
      );
    });
  };
  return <>{renderMovies()}</>;
};