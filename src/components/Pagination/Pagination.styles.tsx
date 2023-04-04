import styled from 'styled-components';

export const PaginationContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  gap: 10px;
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

type PaginationItemProps = {
  selected: boolean;
};

export const PaginationItem = styled.li<PaginationItemProps>`
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  cursor: pointer;
`;
