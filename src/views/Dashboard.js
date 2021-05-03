import React from 'react';
import PropTypes from 'prop-types';
import { UserShape } from 'assets/helpers/types';
import { ViewWrapper } from 'components/atoms/ViewWrapper';
import UsersList from 'components/organisms/UsersList';

const Dashboard = ({ users, isLoading, deleteUser }) => {
  return (
    <ViewWrapper>
      <UsersList users={users} deleteUser={deleteUser} isLoading={isLoading} />
    </ViewWrapper>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  isLoading: PropTypes.bool,
  deleteUser: PropTypes.func,
};

export default Dashboard;
