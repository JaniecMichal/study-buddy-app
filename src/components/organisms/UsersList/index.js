import React from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './styled';
import UserListItem from 'components/molecules/UserListItem';
import { Title } from 'components/atoms/Title';
import { UserShape } from 'assets/helpers/types';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Title>Students List:</Title>
      <StyledList>
        {users.map((user) => (
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

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
