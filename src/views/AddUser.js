import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper';
import { Title } from 'components/atoms/Title';
import FormField from 'components/molecules/FormField';
import { FormButton } from 'components/atoms/FormButton';
import { UsersContext } from './App';

const initialFormValues = {
  name: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues(initialFormValues);
  };

  return (
    <ViewWrapper as="form" onSubmit={handleOnSubmit}>
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

export default AddUser;
