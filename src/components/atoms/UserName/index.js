import React from 'react';
import { StyledAttendance, StyledName, Wrapper } from './styled';

const UserName = ({ name, attendance }) => {
  return (
    <Wrapper>
      <StyledName>{name}</StyledName>
      <StyledAttendance>attendace: {attendance}</StyledAttendance>
    </Wrapper>
  );
};

export default UserName;
