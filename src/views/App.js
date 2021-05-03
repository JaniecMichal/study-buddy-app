import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle } from 'assets/GlobalStyles/GlobalStyles.js';
import { theme } from 'assets/theme/theme.js';
import { ThemeProvider } from 'styled-components';
import { MainWrapper } from './styled';
import AddUser from 'views/AddUser';
import { usersData } from 'data/usersData';
import { toAddUserView, toDashboard } from 'assets/helpers/routes';
import Dashboard from './Dashboard';
import MainTemplate from 'components/templates/MainTemplate';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
  isLoading: false,
});

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
  const [isLoading, setLoadingState] = useState(false);

  const handleAddUser = (formValues) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
      isLoading,
    };
    setUsers([newUser, ...users]);
  };

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <MainTemplate>
            <UsersContext.Provider
              value={{ users, handleAddUser, deleteUser, isLoading }}
            >
              <MainWrapper>
                <Switch>
                  <Route path={toAddUserView()}>
                    <AddUser />
                  </Route>
                  <Route path={toDashboard()}>
                    <Dashboard />
                  </Route>
                  <Route>
                    <Redirect to={toDashboard()} />
                  </Route>
                </Switch>
              </MainWrapper>
            </UsersContext.Provider>
          </MainTemplate>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
