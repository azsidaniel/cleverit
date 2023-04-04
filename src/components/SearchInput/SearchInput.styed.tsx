import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const SearchInputStyled = styled.input`
  width: 100%;
  height: 30px;
  margin-right: 8px;
  color: ${colors.text};
  padding: 8px;
`;

export const SeachContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  align-self: center;
  width: 100%;
  max-width: 450px;
`;
