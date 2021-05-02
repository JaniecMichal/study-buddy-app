import React, { useEffect, useState } from 'react';
import { StyledList } from './styled';
import UserListItem from 'components/molecules/UserListItem';
import { usersData } from 'data/usersData.js';
import { Title } from 'components/atoms/Title';
import { ViewWrapper } from 'components/atoms/ViewWrapper';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  function average(a, b) {
    return a + b / 2;
  }

  console.log(average(2, 1));

  return (
    <ViewWrapper>
      <Title>{isLoading ? 'Loading...' : 'Users List:'}</Title>
      <StyledList>
        {users.map((user) => (
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
