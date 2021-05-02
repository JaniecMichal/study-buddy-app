import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label';
import { Input } from 'components/atoms/Input';
import { Wrapper } from './styled';

const FormField = ({
  required,
  onChange,
  value,
  label,
  name,
  id,
  type = 'string',
  ...props
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </Wrapper>
  );
};

FormField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
