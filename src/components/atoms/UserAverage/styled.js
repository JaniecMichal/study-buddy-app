import styled, { css } from 'styled-components';

export const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  margin-right: 33px;
  padding: 10px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.puce};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ mediumRate }) =>
    mediumRate &&
    css`
      background-color: ${({ theme }) => theme.colors.zombie};
    `}

  ${({ goodRate }) =>
    goodRate &&
    css`
      background-color: ${({ theme }) => theme.colors.deYork};
    `}

    ${({ perfectRate }) =>
    perfectRate &&
    css`
      background-color: ${({ theme }) => theme.colors.vidaLoca};
    `}
`;
