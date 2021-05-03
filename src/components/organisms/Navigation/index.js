import React from 'react';
import { toAddUserView, toDashboard } from 'assets/helpers/routes';
import { NavigationWrapper, Logo, StyledLink } from './styled';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Logo>
        <h1>
          Study <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to={toDashboard}>Dashboard</StyledLink>
      <StyledLink to={toAddUserView}>Add user</StyledLink>
      <StyledLink to="/">Settings</StyledLink>
      <StyledLink to="/">Logout</StyledLink>
    </NavigationWrapper>
  );
};

export default Navigation;
