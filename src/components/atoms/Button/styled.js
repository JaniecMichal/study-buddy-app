import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.heather};
  border-radius: 50%;
  border: none;
  padding: 5px;

  svg {
    stroke: ${({ theme }) => theme.colors.white};
  }
`;
