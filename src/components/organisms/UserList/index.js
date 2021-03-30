import React from 'react';
import { StyledList, Wrapper } from './styled';
import UserListItem from 'components/molecules/UserListItem';
import { usersData } from 'data/usersData.js';

const UserList = () => {
  return (
    <Wrapper>
      <StyledList>
        {usersData.map((userData) => (
          <UserListItem userData={userData} key={userData.name} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UserList;
