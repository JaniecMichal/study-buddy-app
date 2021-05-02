import React, { useEffect, useState } from 'react';
import { GlobalStyle } from 'assets/GlobalStyles/GlobalStyles.js';
import { theme } from 'assets/theme/theme.js';
import { ThemeProvider } from 'styled-components';
import UserList from 'components/organisms/UserList';
import { MainWrapper } from './styled';
import Form from 'components/organisms/Form';
import { usersData } from 'data/usersData';

export const mockAPI = (success) => {
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

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setUsers(data);
        setLoadingState(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <MainWrapper>
          <Form />
          <UserList
            users={users}
            isLoading={isLoading}
            deleteUser={deleteUser}
          />
        </MainWrapper>
      </>
    </ThemeProvider>
  );
}

export default App;
