import React from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper';
import { Title } from 'components/atoms/Title';
import FormField from 'components/molecules/FormField';
import { FormButton } from 'components/atoms/FormButton';

const Form = () => {
  return (
    <ViewWrapper as="form">
      <Title>Add new student:</Title>
      <FormField label="Full name:" id="name" name="name" />
      <FormField label="Average:" id="average" name="average" />
      <FormField label="Attendace" id="attendace" name="attendace" />
      <FormButton>Submit student</FormButton>
    </ViewWrapper>
  );
};

export default Form;
