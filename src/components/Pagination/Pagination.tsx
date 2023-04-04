import { FC, ReactElement } from 'react';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { colors } from '../../theme/colors';
import { Movie } from '../../views/Home/Home';
import { PaginationContainer, PaginationItem } from './Pagination.styles';

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  filteredMovies: Movie[];
  itensPerPage: number;
};

export const Pagination: FC<PaginationProps> = ({
  page,
  setPage,
  filteredMovies,
  itensPerPage,
}) => {
  const maxPages = Math.ceil(filteredMovies.length / itensPerPage);
  const isLastPage = page === maxPages;
  const isFirstPage = page === 1;

  const renderPaginationItem = () => {
    if (!filteredMovies) {
      return;
    }

    const toBeRendered: ReactElement[] = [];

    const conditionToRenderPageNumbers = (i: number, page: number) => {
      // if created to always keep the pagination with 5 options
      if (
        (page <= 3 && i <= 5) ||
        (page >= maxPages - 1 && i >= maxPages - 4)
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
        newIndex <= maxPages &&
        conditionToRenderPageNumbers(newIndex, page)
      ) {
        toBeRendered.push(
          <PaginationItem
            onClick={() => setPage(newIndex)}
            selected={page === newIndex}
          >
            {newIndex}
          </PaginationItem>,
        );
      }
    });

    return toBeRendered;
  };

  return (
    <PaginationContainer>
      <MdKeyboardDoubleArrowLeft
        onClick={() => {
          if (isFirstPage) return;
          setPage(1);
        }}
        style={{ cursor: isFirstPage ? 'not-allowed' : 'pointer' }}
        color={isFirstPage ? colors.disabled : colors.text}
      />
      <MdKeyboardArrowLeft
        onClick={() => {
          if (isFirstPage) return;
          setPage(prevPage => prevPage - 1);
        }}
        style={{ cursor: isFirstPage ? 'not-allowed' : 'pointer' }}
        color={isFirstPage ? colors.disabled : colors.text}
      />

      {renderPaginationItem()}

      <MdKeyboardArrowRight
        onClick={() => {
          if (isLastPage) return;
          setPage(prevPage => prevPage + 1);
        }}
        style={{ cursor: isLastPage ? 'not-allowed' : 'pointer' }}
        color={isLastPage ? colors.disabled : colors.text}
      />
      <MdKeyboardDoubleArrowRight
        onClick={() => {
          if (isLastPage) return;
          setPage(maxPages);
        }}
        style={{ cursor: isLastPage ? 'not-allowed' : 'pointer' }}
        color={isLastPage ? colors.disabled : colors.text}
      />
    </PaginationContainer>
  );
};
