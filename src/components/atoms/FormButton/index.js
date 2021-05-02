import styled from 'styled-components';

export const FormButton = styled.button`
  padding: 16px 20px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
`;
