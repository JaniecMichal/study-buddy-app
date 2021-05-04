import React, { useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper';
import UsersList from 'components/organisms/UsersList';
import { UsersContext } from 'providers/UsersProvider';

const Dashboard = () => {
  const { users, deleteUser } = useContext(UsersContext);
  return (
    <ViewWrapper>
      <UsersList users={users} deleteUser={deleteUser} />
    </ViewWrapper>
  );
};

export default Dashboard;
