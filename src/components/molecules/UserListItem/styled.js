import styled from 'styled-components';

export const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.raven};
  padding-top: 33px;
  padding-bottom: 24px;
`;
