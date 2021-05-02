import styled from 'styled-components';

export const Label = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
