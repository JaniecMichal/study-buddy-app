import React, { useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper';
import UsersList from 'components/organisms/UsersList';
import { UsersContext } from './App';

const Dashboard = () => {
  const { users, isLoading, deleteUser } = useContext(UsersContext);
  return (
    <ViewWrapper>
      <UsersList users={users} deleteUser={deleteUser} isLoading={isLoading} />
    </ViewWrapper>
  );
};

export default Dashboard;
