import React from 'react';
import { StyledList } from './styled';
import UserListItem from 'components/molecules/UserListItem';
import { Title } from 'components/atoms/Title';

const UsersList = ({ users, isLoading, deleteUser }) => {
  return (
    <>
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
    </>
  );
};

export default UsersList;
