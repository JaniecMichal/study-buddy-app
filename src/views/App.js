import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle } from 'assets/GlobalStyles/GlobalStyles.js';
import { theme } from 'assets/theme/theme.js';
import { ThemeProvider } from 'styled-components';
import { MainWrapper } from './styled';
import AddUser from 'views/AddUser';
import { toAddUserView, toDashboard } from 'assets/helpers/routes';
import Dashboard from './Dashboard';
import MainTemplate from 'components/templates/MainTemplate';
import UsersProvider from 'providers/UsersProvider';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <MainTemplate>
            <UsersProvider>
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
            </UsersProvider>
          </MainTemplate>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
