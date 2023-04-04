import { colors } from '../../theme/colors';
import {
  NoDataMessageContainer,
  NoDataMessageText,
} from './NoDataMessage.styled';

export const NoDataMessage = () => {
  return (
    <NoDataMessageContainer>
      <NoDataMessageText>
        Oh, no data found! Try another filter
      </NoDataMessageText>
    </NoDataMessageContainer>
  );
};
