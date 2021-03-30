import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  padding: 40px 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledList = styled.ul`
  padding: 0;
  list-style-type: none;
`;
