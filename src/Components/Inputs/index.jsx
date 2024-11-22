import React from 'react';
import { InputStyle, Label } from './style';

const Input = ({ id, label, type, placeholder, value, onChange }) => {
  return (
    <Label>
      {label}
      <InputStyle
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Label>
  );
};

export default Input;
