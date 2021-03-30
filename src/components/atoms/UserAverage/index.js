import React from 'react';
import { StyledAverage } from './styled';

const UserAverage = ({ average }) => {
  return (
    <StyledAverage
      mediumRate={average <= 4 && average >= 3 ? true : false}
      goodRate={average <= 5 && average > 4 ? true : false}
      perfectRate={average <= 6 && average > 5 ? true : false}
    >
      <span>{average.toFixed(1)}</span>
    </StyledAverage>
  );
};

export default UserAverage;
