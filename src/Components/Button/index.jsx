import React from 'react';
import { ButtonStyled } from './style';

const Button = ({ text = 'enviar', type = 'submit', width }) => {
  return <ButtonStyled type={type}>{text}</ButtonStyled>;
};

export default Button;
