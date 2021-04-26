import React, { useEffect, useState } from 'react';
import { StyledList, Wrapper } from './styled';
import UserListItem from 'components/molecules/UserListItem';
import { usersData } from 'data/usersData.js';
import { Title } from 'components/atoms/Title';

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

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default UserList;
