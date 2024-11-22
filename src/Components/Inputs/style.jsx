import styled from 'styled-components';

export const Label = styled.label`
  font-weight: 600;
  color: #4b5563;
  font-size: 1rem;
  display: block;

  & + label {
    margin-top: 20px;
  }
`;

export const InputStyle = styled.input`
  width: 100%;
  padding: 0.5rem 0.8rem;
  font-size: 1.2rem;

  margin-top: 0.4rem;
  border-radius: 5px;
  border: 2px solid #9ca3af;
  color: #4b5563;

  &:focus {
    border: 2px solid #4338ca;
    box-shadow: 0 0 0.2px 2px #818cf8;
  }
`;
