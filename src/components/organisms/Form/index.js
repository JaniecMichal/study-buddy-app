import React from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper';
import { Title } from 'components/atoms/Title';
import FormField from 'components/molecules/FormField';
import { FormButton } from 'components/atoms/FormButton';

const Form = ({ formValues, handleInputChange, handleAddUser }) => {
  return (
    <ViewWrapper as="form" onSubmit={handleAddUser}>
      <Title>Add new student:</Title>
      <FormField
        label="Full name:"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        required
      />
      <FormField
        label="Attendance:"
        id="attendance"
        name="attendance"
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average:"
        id="average"
        name="average"
        value={formValues.average}
        onChange={handleInputChange}
        required
      />
      <FormButton>Submit student</FormButton>
    </ViewWrapper>
  );
};

export default Form;
