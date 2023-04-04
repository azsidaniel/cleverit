import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const NoDataMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
`;

export const NoDataMessageText = styled.span`
  font-size: 20px;
  color: ${colors.disabled};
`;
