import React from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './styled';
import UserListItem from 'components/molecules/UserListItem';
import { Title } from 'components/atoms/Title';
import { UserShape } from 'assets/helpers/types';

const UsersList = ({ users, isLoading, deleteUser }) => {
  return (
    <>
      <Title>{isLoading ? 'Loading...' : 'Students List:'}</Title>
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

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  isLoading: PropTypes.bool,
  deleteUser: PropTypes.func,
};

export default UsersList;
