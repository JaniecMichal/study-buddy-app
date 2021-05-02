import styled from 'styled-components';

export const ViewWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 25px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;
