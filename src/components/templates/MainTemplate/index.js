import React from 'react';
import Navigation from 'components/organisms/Navigation';
import { TemplateWrapper } from './styled';

const MainTemplate = ({ children }) => {
  return (
    <TemplateWrapper>
      <Navigation />
      {children}
    </TemplateWrapper>
  );
};

export default MainTemplate;
