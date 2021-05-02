import React from 'react';
import { StyledList } from './styled';
import UserListItem from 'components/molecules/UserListItem';
import { Title } from 'components/atoms/Title';
import { ViewWrapper } from 'components/atoms/ViewWrapper';

const UserList = ({ users, isLoading, deleteUser }) => {
  return (
    <ViewWrapper>
      <Title>{isLoading ? 'Loading...' : 'Users List:'}</Title>
      <StyledList>
        {isLoading ||
          users.map((user) => (
            <UserListItem
              userData={user}
              key={user.name}
              deleteUser={deleteUser}
            />
          ))}
      </StyledList>
    </ViewWrapper>
  );
};

export default UserList;
