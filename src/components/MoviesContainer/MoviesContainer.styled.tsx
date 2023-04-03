import styled from 'styled-components';

export const MoviesContainerStyled = styled.div`
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

  ${MoviesContainerStyled}:hover & {
    width: 0px;
    object-fit: cover;
  }
`;

export const TitleAuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: #17181a;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  padding: 10px;
  height: 205px;
  width: 280px;
  background-color: #17181a;
  overflow-y: auto;
`;
