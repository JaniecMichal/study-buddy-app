import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label';
import { Input } from 'components/atoms/Input';
import { Wrapper } from './styled';

const FormField = ({ label, name, id, type = 'string', ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} name={name} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
