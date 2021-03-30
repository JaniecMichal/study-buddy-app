import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 14px;
`;

export const StyledName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 700;
  margin: 0;
`;

export const StyledAttendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  margin: 0;
  margin-top: 1px;
`;
