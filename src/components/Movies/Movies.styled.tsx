import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const MoviesStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 300px;
`;

export const MovieImage = styled.img`
  transition: width 0.5s;
  height: 225px;
  width: 300px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;

  ${MoviesStyled}:hover & {
    width: 0px;
    object-fit: cover;
  }
`;

export const MoviesBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: ${colors.backdrop};
`;

export const DirectorYearContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  padding: 10px;
  height: 205px;
  width: 280px;
  background-color: ${colors.backdrop};
  overflow-y: auto;
`;

export const DescriptionText = styled.span`
  display: flex;
  height: 100%;
`;
